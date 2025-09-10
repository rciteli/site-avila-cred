// components/FaqPrecatorios.tsx
import { FAQ } from "@/lib/content/precatorios";

export default function FaqPrecatorios() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">Perguntas frequentes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {FAQ.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-black/5 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] font-medium text-[#0B0B0B]">
                {f.q}
                <span className="shrink-0 rounded-full border border-black/10 px-2 py-0.5 text-xs text-[#333] group-open:rotate-90">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#333]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
