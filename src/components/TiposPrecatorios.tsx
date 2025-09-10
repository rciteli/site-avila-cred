// components/TiposPrecatorios.tsx
import Link from "next/link";
import { TIPOS } from "@/lib/content/precatorios";

export default function TiposPrecatorios() {
  return (
    <section className="bg-white py-14">
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
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#00005A]">{t.titulo}</h3>
              <p className="mt-1 text-sm text-[#333]">{t.resumo}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-[#00005A] group-hover:underline">
                Ver detalhes →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
