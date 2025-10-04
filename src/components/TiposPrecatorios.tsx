// components/TiposPrecatorios.tsx
import Link from "next/link";
import { TIPOS } from "@/lib/content/precatorios";
import { ArrowRight } from "lucide-react";

export default function TiposPrecatorios() {
  return (
    <section
      className="
        bg-white py-14
        [background:
          radial-gradient(60rem_32rem_at_10%_-10%,rgba(0,0,90,.04),transparent_60%),
          radial-gradient(60rem_32rem_at_90%_120%,rgba(235,189,70,.06),transparent_60%),
          #fff
        ]
      "
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">
          Tipos de precatórios
        </h2>
        <p className="mt-2 text-[#333]">
          Atuamos em títulos federais, estaduais e municipais — cada um com particularidades de análise.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TIPOS.map((t) => (
            <Link
              key={t.slug}
              href={`/precatorios/${t.slug}`}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/60
                bg-[rgba(0,0,90,0.06)] backdrop-blur-md
                p-6
                shadow-[0_12px_32px_rgba(0,0,0,0.04)]
                transition
                hover:-translate-y-0.5
                hover:shadow-[0_18px_46px_rgba(0,0,0,0.08)]
                hover:ring-1 hover:ring-[#d4af37]/50
              "
            >
              {/* filete dourado muito sutil no topo */}
              <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-[#d4af37]/40 via-white/60 to-[#00005A]/30" />

              <h3 className="text-lg font-semibold text-[#00005A]">
                {t.titulo}
              </h3>
              <p className="mt-1 text-sm text-[#333]">{t.resumo}</p>

              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#00005A]">
                Ver detalhes
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>

              {/* glow dourado discretíssimo ao passar o mouse */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EBBD46]/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
