// components/Trajetoria.tsx
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

type Step = {
  year: string;
  title: string;
  text: string;
  icon?: ReactNode;
};

const STEPS: Step[] = [
  {
    year: "2019",
    title: "Originação e primeiros casos",
    text: "Atuação focada em originação de operações e mapeamento de demandas de credores.",
  },
  {
    year: "2021",
    title: "Parcerias estratégicas",
    text: "Integração com fundos e escritórios para acelerar análises e propostas.",
  },
  {
    year: "2023",
    title: "Expansão de oferta",
    text: "Cobertura nacional para títulos federais, estaduais e municipais.",
  },
  {
    year: "2025",
    title: "Esteira digital",
    text: "Fluxo com etapas claras, comunicação contínua e prazos mais ágeis.",
  },
];

export default function Trajetoria() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Título */}
        <div className="mb-8 flex items-center gap-2">
          <h2 className="text-2xl font-semibold md:text-3xl">Nossa trajetória</h2>
          <Sparkles className="h-5 w-5 text-[#EBBD46]" />
        </div>
        <p className="max-w-2xl text-white/75">
          Evoluímos com foco em transparência, segurança e eficiência em cada etapa.
        </p>

        {/* Linha central (desktop) */}
        <div className="relative mt-12">

          {/* Grid responsivo: vertical no mobile, horizontal alternado no desktop */}
          <ol className="grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.year} className="relative">
                {/* Conector circular (desktop) */}
                

                {/* Card */}
                <div
                  className={[
                    "relative rounded-2xl border border-white/10 bg-white/5 p-5 transition",
                    "hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(0,0,0,.25)]",
                    "md:mx-6",
                    // alterna posição acima/abaixo da linha no desktop
                    i % 2 === 0 ? "md:translate-y-[-28px]" : "md:translate-y-[28px]",
                  ].join(" ")}
                >
                  {/* Badge do ano */}
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#EBBD46]/40 bg-[#EBBD46]/10 px-3 py-1 text-xs font-semibold text-[#EBBD46]">
                    {s.year}
                  </div>

                  <h3 className="text-[15px] font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{s.text}</p>

                  {/* Borda luminosa sutil */}
                  <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}
