// components/PrecatoriosHero.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrecatoriosHero() {
  return (
    <section className="relative overflow-hidden bg-[#000030] text-white">
      {/* Camadas de luz (azul/dourado) + base */}
      <div
        className="
          absolute inset-0 -z-10
          [background:
            radial-gradient(90rem_60rem_at_-10%_0%,rgba(235,189,70,0.12),transparent_60%),
            radial-gradient(80rem_50rem_at_110%_120%,rgba(0,0,90,0.35),transparent_60%),
            linear-gradient(#000030,#000030)
          ]
        "
      />
      {/* Glow suave dourado */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#EBBD46]/20 blur-3xl" />
      {/* Glow suave azul */}
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-[#1a1a7a]/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-md">
            Venda de Precatórios
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Venda de precatórios com segurança e agilidade
            </span>
          </h1>

          <p className="mt-4 text-white/85 md:text-[15.5px]">
            Análise gratuita, equipe jurídica e contábil especializada, retorno em até 1 dia útil.
            Transparência do primeiro contato ao pagamento.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#simulador"
              className="
                inline-flex items-center gap-2 rounded-xl
                bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030]
                shadow-[0_12px_28px_rgba(235,189,70,.28)]
                transition will-change-transform
                hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(235,189,70,.38)]
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBBD46]
              "
            >
              Simular agora
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/#contato"
              className="
                inline-flex items-center gap-2 rounded-xl
                border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white
                backdrop-blur-md
                transition will-change-transform
                hover:-translate-y-0.5 hover:bg-white/10
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60
              "
            >
              Fale com um especialista
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
