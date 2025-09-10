// components/PrecatoriosTypeNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TYPE_SLUGS, TYPE_DETAILS, TipoSlug } from "@/lib/content/precatorios-tipos";
import { Landmark, Building2, Building } from "lucide-react";

const ICONS: Record<TipoSlug, React.ReactNode> = {
  federal: <Landmark className="h-4 w-4" />,
  estadual: <Building2 className="h-4 w-4" />,
  municipal: <Building className="h-4 w-4" />,
};

export default function PrecatoriosTypeNav() {
  const pathname = usePathname();
  // pathname esperado: /precatorios/[tipo]
  const active = (TYPE_SLUGS.find((s) => pathname?.endsWith(`/${s}`)) ??
    "federal") as TipoSlug;

  return (
    <div className="w-full">
      <div className="inline-flex rounded-2xl border border-white/15 bg-white/5 p-1">
        {TYPE_SLUGS.map((slug) => {
          const isActive = slug === active;
          return (
            <Link
              key={slug}
              href={`/precatorios/${slug}`}
              className={[
                "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition",
                isActive
                  ? "bg-[#EBBD46] text-[#000030]"
                  : "text-white/85 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              <span className={isActive ? "text-[#000030]" : "text-white/80"}>
                {ICONS[slug]}
              </span>
              <span className="hidden sm:inline">
                {TYPE_DETAILS[slug].titulo.replace("Precatórios ", "")}
              </span>
              <span className="sm:hidden capitalize">{slug}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
