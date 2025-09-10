// components/ChecklistDocumentos.tsx
import { CHECKLIST } from "@/lib/content/precatorios";
import { Info } from "lucide-react";

export default function ChecklistDocumentos() {
  return (
    <section className="bg-[#F9F9F9] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">Documentos necessários</h2>
        <p className="mt-2 text-[#333]">Checklist para acelerar sua análise e proposta.</p>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {CHECKLIST.map(({ item, tip }) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-5">
              <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-[#00005A]/10 text-[#00005A]">
                <Info className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[15px] font-semibold text-[#00005A]">{item}</div>
                <p className="mt-1 text-sm text-[#333]">{tip}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
