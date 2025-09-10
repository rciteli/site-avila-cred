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
    <section className="bg-[#F9F9F9] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">Como funciona</h2>
        <p className="mt-2 text-[#333]">Fluxo objetivo do primeiro contato ao pagamento.</p>

        <ol className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <li key={i} className="rounded-2xl border border-black/5 bg-white p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#00005A]/10 text-[#00005A]">
                  {s.icon}
                </span>
                <span className="text-[13px] font-semibold text-[#00005A]">{i + 1}</span>
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
