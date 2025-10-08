"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", placeholder = "", required = false }: FieldProps) {
  // ---- Máscaras / normalizações por campo ----
  const formatCPF = (val: string) => {
    const only = val.replace(/\D/g, "").slice(0, 11);
    const len = only.length;
    if (len <= 3) return only;
    if (len <= 6) return `${only.slice(0, 3)}.${only.slice(3)}`;
    if (len <= 9) return `${only.slice(0, 3)}.${only.slice(3, 6)}.${only.slice(6)}`;
    return `${only.slice(0, 3)}.${only.slice(3, 6)}.${only.slice(6, 9)}-${only.slice(9)}`;
  };

  const formatPhone = (val: string) => {
    const d = val.replace(/\D/g, "").slice(0, 11);
    const len = d.length;
    if (len === 0) return "";
    if (len <= 2) return `(${d}`;
    if (len <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (len <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;     // fixo (8 dígitos)
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;                  // móvel (9 dígitos)
  };

  const handleMaskedInput = (e: React.FormEvent<HTMLInputElement>) => {
    const t = e.currentTarget;
    const before = t.value;
    const start = t.selectionStart ?? before.length;

    if (name === "cpf") t.value = formatCPF(before);
    if (name === "telefone") t.value = formatPhone(before);
    if (name === "email") t.value = before.trim(); // evita espaços acidentais

    // ajuste simples do cursor (mantém experiência fluida na digitação)
    const diff = t.value.length - before.length;
    const pos = Math.max(0, start + (diff > 0 ? 1 : 0));
    try { t.setSelectionRange(pos, pos); } catch {}
  };

  const onBlurNormalize = (e: React.FocusEvent<HTMLInputElement>) => {
    if (name === "email") e.currentTarget.value = e.currentTarget.value.trim().toLowerCase();
  };

  const isCPF = name === "cpf";
  const isPhone = name === "telefone";
  const isEmail = name === "email";

  // propriedades condicionais por tipo de campo
  const inputProps = {
    ...(isCPF && {
      inputMode: "numeric" as const,
      autoComplete: "off",
      maxLength: 14,
      pattern: "^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$",
      title: "Digite no formato 000.000.000-00",
      onInput: handleMaskedInput,
    }),
    ...(isPhone && {
      inputMode: "tel" as const,
      autoComplete: "tel",
      maxLength: 15,
      pattern: "^\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}$",
      title: "Digite no formato (00) 00000-0000",
      onInput: handleMaskedInput,
    }),
    ...(isEmail && {
      type: "email" as const,
      inputMode: "email" as const,
      autoComplete: "email",
      onInput: handleMaskedInput,
      onBlur: onBlurNormalize,
    }),
  };

  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-[#0B0B0B]">
        {label}{required && <span className="text-red-600"> *</span>}
      </span>
      <input
        name={name}
        type={isEmail ? "email" : type}
        placeholder={placeholder}
        required={required}
        {...inputProps}
        className="h-11 rounded-xl border border-[#d4af37]/100 bg-white px-3 text-[13px] text-[#0B0B0B] outline-none transition focus:border-[#00005A]/60 focus:ring-2 focus:ring-[#00005A]/20"
      />
    </label>
  );
}

function Textarea({ label, name, placeholder = "", rows = 4 }: { label: string; name: string; placeholder?: string; rows?: number }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-[#0B0B0B]">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="rounded-xl border border-[#d4af37]/100 bg-white px-3 py-2 text-[13px] text-[#0B0B0B] outline-none transition focus:border-[#00005A]/60 focus:ring-2 focus:ring-[#00005A]/20"
      />
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  // Configure o número destino em .env:
  const DEST_PHONE = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE as string);

  function buildWhatsAppUrl(phone: string, text: string) {
    const digits = phone.replace(/\D/g, ""); // só dígitos
    return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Honeypot anti-spam
      const company = (fd.get("company") as string) || "";
      if (company.trim()) {
        setStatus("ok");
        form.reset();
        return;
      }

      const get = (k: string) => ((fd.get(k) as string) || "").trim();

      const nome = get("nome");
      const email = get("email");
      const telefone = get("telefone");
      const cpf = get("cpf");
      const orgao = get("orgao");
      const processo = get("processo");
      const valor = get("valor");
      const mensagem = get("mensagem");

      const textLines = [
        "📩 *Novo contato pelo site ÁvilaCred*",
        "",
        `• Nome: ${nome}`,
        `• E-mail: ${email}`,
        `• Telefone: ${telefone || "-"}`,
        `• CPF: ${cpf || "-"}`,
        `• UF / Órgão: ${orgao || "-"}`,
        `• Nº do processo: ${processo || "-"}`,
        `• Valor aproximado: ${valor || "-"}`,
        mensagem ? `• Mensagem: ${mensagem}` : "",
        "",
        "Origem: https://avilacred.vercel.app",
      ].filter(Boolean);

      const url = buildWhatsAppUrl(DEST_PHONE, textLines.join("\n"));

      const w = window.open(url, "_blank");
      if (!w || w.closed || typeof w.closed === "undefined") {
        window.location.href = url;
      }

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      {/* Honeypot anti-spam */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <Field label="Nome completo" name="nome" placeholder="Seu nome" required />
      <Field label="E-mail" name="email" type="email" placeholder="seu@email.com" required />
      <Field label="Telefone" name="telefone" placeholder="(00) 00000-0000" required />
      <Field label="CPF" name="cpf" placeholder="000.000.000-00" required />
      <Field label="UF / Órgão" name="orgao" placeholder="Selecione" required />
      <Field label="Número do processo" name="processo" placeholder="0000000-00.0000.0.00.0000" />
      <Field label="Valor aproximado" name="valor" placeholder="R$ 0,00" />

      <div className="md:col-span-2">
        <Textarea label="Mensagem" name="mensagem" placeholder="Conte brevemente sobre seu caso (opcional)" />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#053B22] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,.45)] disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="Abrir conversa no WhatsApp com seus dados"
          title="Enviar pelo WhatsApp"
        >
          {status === "sending" ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>

        {status === "ok" && (
          <p className="mt-3 text-center text-sm text-emerald-700">
            Abrimos uma conversa no WhatsApp com seus dados. Se não abriu, <strong>verifique pop-ups</strong> e tente novamente.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-center text-sm text-red-600">
            Ocorreu um erro ao preparar o envio. Tente novamente.
          </p>
        )}
      </div>
    </form>
  );
}
