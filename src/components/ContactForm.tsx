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
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-[#0B0B0B]">{label}{required && <span className="text-red-600"> *</span>}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 rounded-xl border border-black/10 bg-white px-3 text-[13px] text-[#0B0B0B] outline-none transition focus:border-[#00005A]/60 focus:ring-2 focus:ring-[#00005A]/20"
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
        className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[13px] text-[#0B0B0B] outline-none transition focus:border-[#00005A]/60 focus:ring-2 focus:ring-[#00005A]/20"
      />
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries());

      // TODO: integrar com sua API (ex.: /api/contato)
      // const res = await fetch("/api/contato", { method: "POST", body: JSON.stringify(data) });
      // if (!res.ok) throw new Error("Falha ao enviar.");

      // Simulação local
      await new Promise((r) => setTimeout(r, 600));
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
      <Field label="Telefone" name="telefone" placeholder="(00) 00000-0000" />
      <Field label="UF / Órgão" name="orgao" placeholder="Selecione" />
      <Field label="Número do processo" name="processo" placeholder="0000000-00.0000.0.00.0000" />
      <Field label="Valor aproximado" name="valor" placeholder="R$ 0,00" />
      <div className="md:col-span-2">
        <Textarea label="Mensagem" name="mensagem" placeholder="Conte brevemente sobre seu caso (opcional)" />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EBBD46] px-6 py-3 text-sm font-semibold text-[#000030] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(235,189,70,.45)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>

        {status === "ok" && (
          <p className="mt-3 text-center text-sm text-emerald-700">
            Recebemos seus dados. Em breve entraremos em contato.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-center text-sm text-red-600">
            Ocorreu um erro ao enviar. Tente novamente.
          </p>
        )}
      </div>
    </form>
  );
}
