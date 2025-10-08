"use client";

import React, { useState } from "react";

/**
 * Seção independente de Simulação Rápida
 * - Pode ser posicionada logo abaixo do Hero
 * - Envia os dados para WhatsApp (wa.me) usando NEXT_PUBLIC_WHATSAPP_PHONE
 */
export default function SimulacaoRapida() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  // Configure no .env.local: NEXT_PUBLIC_WHATSAPP_PHONE=5521987654321
  const DEST_PHONE = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE as string);

  function buildWhatsAppUrl(phone: string, text: string) {
    const digits = phone.replace(/\D/g, "");
    return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // honeypot anti-spam
      const company = (fd.get("company") as string) || "";
      if (company.trim()) {
        setStatus("ok");
        form.reset();
        return;
      }

      const get = (k: string) => ((fd.get(k) as string) || "").trim();

      const nome = get("nome");
      const tipo = get("tipo");
      const estadoMunicipio = get("estadoMunicipio");
      const processo = get("processo");
      const valor = get("valor");
      const cpf = get("cpf");
      const observacoes = get("observacoes");

      const textLines = [
        "🧮 *Solicitação de cotação – ÁvilaCred*",
        "",
        `• Nome: ${nome}`,
        `• Tipo (origem): ${tipo || "-"}`,
        `• Estado/Município: ${estadoMunicipio || "-"}`,
        `• Nº do processo: ${processo || "-"}`,
        `• Valor aproximado: ${valor || "-"}`,
        `• CPF: ${cpf || "-"}`,
        observacoes ? `• Observações: ${observacoes}` : "",
        "",
        `Origem: ${typeof window !== "undefined" ? window.location.href : "site"}`,
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
    <section className="relative w-full bg-[#F9F9F9] py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#d4af37]/100 bg-white p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-[#00005A] md:text-2xl">
              Solicite uma cotação sem compromisso:
            </h2>
            <span className="rounded-full border border-[#00005A]/20 bg-[#00005A]/5 px-3 py-1 text-xs font-medium text-[#00005A]">
              Retorno em até 1 dia útil
            </span>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
            {/* Honeypot anti-spam */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

            <Field name="nome" label="Nome completo" placeholder="Digite seu nome completo aqui" required />
            <Field name="tipo" label="Tipo (origem do precatório)" placeholder="Federal / Estadual / Municipal" />
            <Field name="estadoMunicipio" label="Estado / Município" placeholder="Escreva aqui o estado ou município" required/>
            <Field name="processo" label="Número do processo" placeholder="0000000-00.0000.0.00.0000" />
            <Field name="valor" label="Valor aproximado" placeholder="R$ 0,00" />
            <Field name="cpf" label="CPF" placeholder="123.456.789-00" required/>

            {/* Linha inteira para observações */}
            <div className="md:col-span-2">
              <Textarea
                name="observacoes"
                label="Observações"
                placeholder="Conte brevemente sobre o caso (opcional)"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 w-full rounded-xl bg-[#EBBD46] px-6 py-3 text-sm font-semibold text-[#000030] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                aria-label="Abrir conversa no WhatsApp com seus dados"
                title="Enviar pelo WhatsApp"
              >
                {status === "sending" ? "Abrindo WhatsApp..." : "Solicitar análise gratuita"}
              </button>
              {status === "ok" && (
                <p className="mt-2 text-center text-xs text-emerald-700">
                  Abrimos uma conversa no WhatsApp com seus dados. Se não abriu, verifique pop-ups e tente novamente.
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-center text-xs text-red-600">
                  Ocorreu um erro ao preparar o envio. Tente novamente.
                </p>
              )}
              <p className="mt-2 text-center text-xs text-[#555]">
                Ao enviar, você concorda com nossa análise preliminar e contato por WhatsApp/e-mail/telefone.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  // formata passo a passo: 000.000.000-00 (máx 11 dígitos)
  const formatCPF = (val: string) => {
    const only = val.replace(/\D/g, "").slice(0, 11);
    const len = only.length;
    if (len <= 3) return only;
    if (len <= 6) return `${only.slice(0, 3)}.${only.slice(3)}`;
    if (len <= 9) return `${only.slice(0, 3)}.${only.slice(3, 6)}.${only.slice(6)}`;
    return `${only.slice(0, 3)}.${only.slice(3, 6)}.${only.slice(6, 9)}-${only.slice(9)}`;
  };

  const handleCPFInput = (e: React.FormEvent<HTMLInputElement>) => {
    const t = e.currentTarget;
    const start = t.selectionStart ?? t.value.length;
    const before = t.value;
    t.value = formatCPF(t.value);

    // tentativa simples de manter o cursor em digitação normal (avanço à direita)
    const diff = t.value.length - before.length;
    const pos = Math.max(0, start + (diff > 0 ? 1 : 0));
    try {
      t.setSelectionRange(pos, pos);
    } catch {
      /* ignore */
    }
  };

  const isCPF = name === "cpf";

  return (
    <label className="grid gap-1 text-sm">
      <span className="text-[#0B0B0B]">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        // máscara apenas para CPF
        onInput={isCPF ? handleCPFInput : undefined}
        inputMode={isCPF ? "numeric" : undefined}
        autoComplete={isCPF ? "off" : undefined}
        maxLength={isCPF ? 14 : undefined} // 000.000.000-00
        pattern={isCPF ? "^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$" : undefined}
        title={isCPF ? "Digite no formato 000.000.000-00" : undefined}
        className="h-11 rounded-lg border border-[#d4af37]/100 bg-white px-3 text-[13px] outline-none transition focus:border-[#00005A]/50 focus:ring-2 focus:ring-[#00005A]/20"
      />
    </label>
  );
}

function Textarea({
  name,
  label,
  placeholder,
  rows = 4,
}: {
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-[#0B0B0B]">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border border-[#d4af37]/100 bg-white px-3 py-2 text-[13px] outline-none transition focus:border-[#00005A]/50 focus:ring-2 focus:ring-[#00005A]/20"
      />
    </label>
  );
}
