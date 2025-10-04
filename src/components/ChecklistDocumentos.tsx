// src/components/ChecklistDocumentos.tsx
import { CHECKLIST } from "@/lib/content/precatorios";
import { Info } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function ChecklistDocumentos() {
  return (
    <section className="surface-blue py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[color:var(--brand-blue)] md:text-3xl">
          Documentos necessários
        </h2>
        <p className="mt-2 text-[#333]">Checklist para acelerar sua análise e proposta.</p>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {CHECKLIST.map(({ item, tip }) => (
            <li key={item} className="group relative">
              <GlassCard className="
                  relative flex items-start gap-3 p-5
                  transition hover:-translate-y-0.5 hover:ring-1 hover:ring-[color:var(--brand-gold)]/45
                ">
                {/* filete dourado sutil no topo */}
                <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-[color:var(--brand-gold)]/40 via-white/60 to-[color:var(--brand-blue)]/30" />

                {/* ícone com micro-glass e glow dourado no hover */}
                <span className="
                    mt-0.5 grid h-9 w-9 place-items-center rounded-lg
                    bg-white/60 text-[color:var(--brand-blue)]
                    ring-1 ring-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,.06)]
                    transition
                    group-hover:shadow-[0_8px_24px_rgba(212,175,55,.25)]
                  ">
                  <Info className="h-4.5 w-4.5" />
                </span>

                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-[color:var(--brand-blue)]">
                    {item}
                  </div>
                  <p className="mt-1 text-sm text-[#333]">
                    {tip}
                  </p>
                </div>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
