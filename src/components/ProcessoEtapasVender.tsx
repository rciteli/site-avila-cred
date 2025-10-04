// components/ProcessoEtapasVender.tsx
import { FileText, SearchCheck, Handshake, FileSignature, Stamp, Banknote } from "lucide-react";

const steps = [
  { title: "Envio de dados",       desc: "Dados básicos do precatório (nº, órgão/UF, valor aproximado).", icon: <FileText className="h-5 w-5" /> },
  { title: "Análise preliminar",   desc: "Elegibilidade, riscos e documentação essencial.",                 icon: <SearchCheck className="h-5 w-5" /> },
  { title: "Proposta",             desc: "Buscamos condições competitivas com parceiros e fundos.",        icon: <Handshake className="h-5 w-5" /> },
  { title: "Documentação",         desc: "Checklist simples e apoio para formalização.",                   icon: <FileSignature className="h-5 w-5" /> },
  { title: "Cessão/Assinaturas",   desc: "Formalização jurídica com transparência.",                       icon: <Stamp className="h-5 w-5" /> },
  { title: "Pagamento",            desc: "Liberação conforme prazos bancários, com acompanhamento.",       icon: <Banknote className="h-5 w-5" /> },
];

export default function ProcessoEtapasVender() {
  return (
    <section
      className="
        py-14
        [background:
          radial-gradient(60rem_32rem_at_10%_-10%,rgba(0,0,90,.04),transparent_60%),
          radial-gradient(60rem_32rem_at_90%_120%,rgba(235,189,70,.06),transparent_60%),
          #F9F9F9
        ]
      "
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">Como funciona</h2>
        <p className="mt-2 text-[#333]">Fluxo objetivo do primeiro contato ao pagamento.</p>

        <ol className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <li
              key={i}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/60
                bg-[rgba(0,0,90,0.06)] backdrop-blur-md
                p-5
                shadow-[0_12px_32px_rgba(0,0,0,0.04)]
                transition
                hover:-translate-y-0.5
                hover:shadow-[0_18px_46px_rgba(0,0,0,0.08)]
                hover:ring-1 hover:ring-[#d4af37]/50
                lg:after:absolute lg:after:top-1/2 lg:after:right-[-12px] lg:after:h-px lg:after:w-6
                lg:after:content-[''] lg:after:bg-gradient-to-r lg:after:from-[#d4af37]/40 lg:after:to-transparent
                lg:last:after:hidden
              "
            >
              {/* filete dourado sutil no topo */}
              <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-[#d4af37]/40 via-white/60 to-[#00005A]/30" />
              {/* glow dourado no hover */}
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EBBD46]/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#00005A]/10 text-[#00005A]">
                  {s.icon}
                </span>
                <span
                  aria-hidden
                  className="
                    inline-flex h-7 items-center justify-center rounded-full
                    border border-white/60 bg-white/50 px-2 text-[12px] font-semibold text-[#00005A]
                    backdrop-blur-md
                  "
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-[#00005A]">{s.title}</h3>
              <p className="mt-1 text-xs text-[#333]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
