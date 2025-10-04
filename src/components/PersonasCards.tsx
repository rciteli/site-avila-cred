// src/components/PersonasCards.tsx
import { PERSONAS } from "@/lib/content/precatorios";
import GlassCard from "@/components/GlassCard";

export default function PersonasCards() {
  return (
    <section className="surface-blue py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[color:var(--brand-blue)] md:text-3xl">
          Casos que atendemos
        </h2>
        <p className="mt-2 text-[#333]">Soluções sob medida para diferentes perfis de clientes.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {PERSONAS.map((p) => (
            <GlassCard key={p.titulo}>
              <h3 className="text-[15px] font-semibold text-[color:var(--brand-blue)]">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm text-[#333]">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
