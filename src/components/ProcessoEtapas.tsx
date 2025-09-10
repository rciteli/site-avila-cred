// components/ProcessoEtapas.tsx
import { FileText, SearchCheck, Handshake, FileSignature, Stamp, Banknote } from "lucide-react";
import type { ReactNode } from "react";

type Step = {
  title: string; // ex: "1) Envio de dados"
  desc: string;
  icon: ReactNode;
};

const steps: Step[] = [
  {
    title: "1) Envio de dados",
    desc: "Você compartilha as informações básicas do precatório (número do processo, órgão/UF e valor aproximado).",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "2) Análise preliminar",
    desc: "Time jurídico e contábil valida a elegibilidade e checa documentos essenciais.",
    icon: <SearchCheck className="h-5 w-5" />,
  },
  {
    title: "3) Proposta",
    desc: "Apresentamos as melhores condições coletadas com nossos parceiros e fundos.",
    icon: <Handshake className="h-5 w-5" />,
  },
  {
    title: "4) Documentação",
    desc: "Checklist simples e orientação para reunir e formalizar os documentos necessários.",
    icon: <FileSignature className="h-5 w-5" />,
  },
  {
    title: "5) Cessão/Assinaturas",
    desc: "Assinatura da cessão de crédito com segurança e transparência juridicamente assistida.",
    icon: <Stamp className="h-5 w-5" />,
  },
  {
    title: "6) Pagamento & Acompanhamento",
    desc: "Liberação conforme prazos bancários e acompanhamento até a conclusão.",
    icon: <Banknote className="h-5 w-5" />,
  },
];

export default function ProcessoEtapas() {
  return (
    <section className="relative bg-[#000030] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Etapas do Processo</h2>
          <p className="mt-2 max-w-2xl text-white/80">
            Um fluxo claro do primeiro contato ao pagamento, com orientação em cada fase.
          </p>
        </div>

        {/* Layout em grade — horizontal no desktop, empilhado no mobile */}
        <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => {
            const numMatch = s.title.match(/^(\d+)\)/);
            const num = numMatch?.[1] ?? String(i + 1);
            const label = s.title.replace(/^\d+\)\s*/, ""); // ← FIX AQUI
            return (
              <li
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                {/* Número / ícone */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#EBBD46]/20 text-[#EBBD46]">
                    {s.icon}
                  </span>
                  <span className="text-[13px] font-semibold text-[#EBBD46]">
                    {num})
                  </span>
                </div>

                {/* Título sem número */}
                <h3 className="text-sm font-semibold">{label}</h3>

                <p className="mt-1 text-xs leading-relaxed text-white/80">{s.desc}</p>

                {/* Linha conectora (só no desktop) */}
                {i < steps.length - 1 && (
                  <span className="pointer-events-none absolute right-[-12px] top-1/2 hidden h-[2px] w-6 -translate-y-1/2 bg-gradient-to-r from-white/30 to-transparent md:block" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
