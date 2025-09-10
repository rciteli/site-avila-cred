"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Camada 1: barra azul (gradiente) */}
      <div
        className="relative w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,48,1) 0%, rgba(0,0,90,0.8) 100%)",
        }}
      >
        {/* Conteúdo sobre a barra azul */}
        <div className="relative z-10 mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4">
          {/* Esquerda: logo (link para Home) */}
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Ir para a página inicial"
              className="inline-flex items-center gap-2"
            >
              <Image src="/logoavila.png" alt="Logo" width={200} height={200} className="mt-24"/>
            </Link>
          </div>

          {/* Meio: links */}
          <ul className="hidden items-center gap-2 md:flex">
            <li>
              <NavLink href="/sobre" label="Sobre" />
            </li>
            <li>
              <NavLink href="/precatorios" label="Precatórios" />
            </li>
            <li>
              <NavLink href="/blog" label="Blog" />
            </li>
          </ul>

          {/* Direita: CTA */}
          <div className="flex items-center">
            <Link
              href="/contato"
              className="inline-flex items-center rounded-xl bg-[#EBBD46] px-4 py-2 text-sm font-semibold text-[#000030] shadow-sm transition hover:opacity-90 md:px-5 md:py-2.5"
            >
              Fale com um especialista
            </Link>
          </div>
        </div>

        {/* Camada 2: filete dourado translúcido (fica abaixo do conteúdo) */}
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#EBBD46]/90 md:h-2" />
      </div>
    </nav>
  );
}

/** Link com animação de sublinhado (linha aparece ao hover) */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
    >
      <span>{label}</span>
      {/* linha animada */}
      <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#EBBD46] transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
