// components/FaqPrecatorios.tsx
import { FAQ } from "@/lib/content/precatorios";
import { ChevronDown } from "lucide-react";

export default function FaqPrecatorios() {
  return (
    <section
      className="
        surface-blue py-14
      "
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">
          Perguntas frequentes
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {FAQ.map((f, i) => (
            <details
              key={i}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/60
                bg-[rgba(0,0,90,0.06)] backdrop-blur-md
                p-5
                shadow-[0_12px_32px_rgba(0,0,0,0.05)]
                transition
                hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,0,0.08)]
                open:ring-1 open:ring-[#d4af37]/45
              "
            >
              {/* filete dourado no topo */}
              <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-[#d4af37]/40 via-white/60 to-[#00005A]/30" />

              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-[15px] font-semibold text-[#0B0B0B]">{f.q}</h3>
                <span
                  className="
                    inline-flex h-8 w-8 items-center justify-center rounded-lg
                    border border-white/60 bg-white/60 text-[#00005A]
                    backdrop-blur-md transition
                    group-open:rotate-180
                  "
                  aria-hidden
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>

              <p className="mt-3 text-sm leading-relaxed text-[#333]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
