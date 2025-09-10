// components/PersonasCards.tsx
import { PERSONAS } from "@/lib/content/precatorios";

export default function PersonasCards() {
  return (
    <section className="bg-[#F9F9F9] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">Casos que atendemos</h2>
        <p className="mt-2 text-[#333]">Soluções sob medida para diferentes perfis de clientes.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {PERSONAS.map((p) => (
            <div key={p.titulo} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-[15px] font-semibold text-[#00005A]">{p.titulo}</h3>
              <p className="mt-1 text-sm text-[#333]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
