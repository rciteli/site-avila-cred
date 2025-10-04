"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // auto-hide só no mobile
  const [isMobile, setIsMobile] = useState(false);
  const lastY = useRef(0);

  // detecta mobile (<= 767px) e atualiza em resize
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const apply = (mq: MediaQueryList | MediaQueryListEvent) =>
      setIsMobile("matches" in mq ? mq.matches : (mq as MediaQueryList).matches);
    apply(mql);
    mql.addEventListener("change", apply as any);
    return () => mql.removeEventListener("change", apply as any);
  }, []);

  // ESC fecha drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // auto-hide no mobile conforme direção do scroll
  useEffect(() => {
    if (!isMobile) {
      setHidden(false);
      lastY.current = window.scrollY || 0;
      return;
    }
    const THRESHOLD = 18;
    const onScroll = () => {
      const y = window.scrollY || 0;

      // topo: sempre visível
      if (y <= 8) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      // descendo (esconde) / subindo (mostra)
      if (y > lastY.current + THRESHOLD && !open) setHidden(true);
      if (y < lastY.current - THRESHOLD) setHidden(false);

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, open]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ${
        isMobile && !open && hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Barra fixa com gradiente */}
      <div
        className="relative w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,48,1) 0%, rgba(0,0,90,0.8) 100%)",
        }}
      >
        <div className="relative z-10 mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-20">
          {/* Logo + nome */}
          <Link href="/" aria-label="Ir para a página inicial" className="inline-flex items-center gap-2">
            <Image
              src="/logoavila.png"
              alt="ÁvilaCred"
              width={200}
              height={200}
              priority
              className="h-7 w-auto md:h-10"
              sizes="(min-width: 768px) 240px, 180px"
            />
            <span className="text-[#D4AF37] text-sm font-semibold md:text-base lg:text-lg">ÁvilaCred</span>
          </Link>

          {/* Links (desktop) */}
          <ul className="hidden items-center gap-2 md:flex">
            <li><NavLink href="/sobre" label="Sobre" /></li>
            <li><NavLink href="/precatorios" label="Precatórios" /></li>
            <li><NavLink href="/blog" label="Blog" /></li>
          </ul>

          {/* CTA (desktop) + Hamburguer (mobile) */}
          <div className="flex items-center">
            <Link
              href="/contato"
              className="hidden items-center rounded-xl bg-[#EBBD46] px-4 py-2 text-sm font-semibold text-[#000030] shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(235,189,70,.35)] md:inline-flex md:px-5 md:py-2.5"
            >
              Fale com um especialista
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/90 outline-none transition hover:bg-white/10 md:hidden"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Filete dourado */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#EBBD46]/90 md:h-2" />
      </div>

      {/* Drawer MOBILE (sem overlay e sem transparência) */}
      <aside
        className={`
          fixed inset-0 z-50 grid grid-rows-[auto_1fr_auto]
          bg-[linear-gradient(180deg,rgba(0,0,48,1)_0%,rgba(0,0,90,1)_100%)]
          text-white transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        {/* Topo do drawer */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            aria-label="Ir para a página inicial"
            className="inline-flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Image src="/logoavila.png" alt="ÁvilaCred" width={160} height={160} className="h-7 w-auto" />
            <span className="text-[#D4AF37] text-sm font-semibold">ÁvilaCred</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/90 outline-none transition hover:bg-white/10"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links mobile (conteúdo cheio) */}
        <nav className="overflow-y-auto px-2">
          <MobileLink href="/sobre" label="Sobre" onClick={() => setOpen(false)} />
          <MobileLink href="/precatorios" label="Precatórios" onClick={() => setOpen(false)} />
          <MobileLink href="/blog" label="Blog" onClick={() => setOpen(false)} />
        </nav>

        {/* CTA inferior */}
        <div className="px-4 pb-4">
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#EBBD46] px-4 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:opacity-95"
          >
            Fale com um especialista
          </Link>
        </div>

        {/* filete dourado no rodapé do drawer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-[#EBBD46]/90" />
      </aside>
    </nav>
  );
}

/** Link (desktop) com sublinhado animado */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
    >
      <span>{label}</span>
      <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#EBBD46] transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

/** Item do menu mobile */
function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-3 py-3 text-[15px] font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
    >
      {label}
    </Link>
  );
}
