"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // auto-hide (somente mobile)
  const [isDesktop, setIsDesktop] = useState(false);
  const lastY = useRef(0);

  // breakpoints (atualiza live em resize)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsDesktop("matches" in e ? e.matches : (e as MediaQueryList).matches);
    onChange(mql);
    mql.addEventListener("change", onChange as any);
    return () => mql.removeEventListener("change", onChange as any);
  }, []);

  // fecha com ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // trava o scroll do body quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setHidden(false);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // auto-hide ao rolar (apenas mobile)
  useEffect(() => {
    const THRESHOLD = 18;
    const onScroll = () => {
      if (isDesktop) {
        if (hidden) setHidden(false);
        lastY.current = window.scrollY || 0;
        return;
      }
      const y = window.scrollY || 0;
      if (y <= 8) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      if (y > lastY.current && y - lastY.current > THRESHOLD) {
        if (!open) setHidden(true);
      }
      if (y < lastY.current && lastY.current - y > THRESHOLD) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, isDesktop, hidden]);

  return (
    <header
      role="navigation"
      className={`
        site-nav z-50 w-full
        ${isDesktop ? "" : "sticky top-0 transition-transform duration-300"}
        ${!isDesktop ? (hidden ? "-translate-y-full" : "translate-y-0") : ""}
      `}
    >
      {/* Barra azul (gradiente) */}
      <div
        className="relative w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,48,1) 0%, rgba(0,0,90,0.8) 100%)",
        }}
      >
        {/* Conteúdo */}
        <div className="relative z-10 mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-20">
          {/* Logo + nome */}
          <div className="flex items-center">
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
          </div>

          {/* Links (desktop) */}
          <ul className="hidden items-center gap-2 md:flex">
            <li><NavLink href="/sobre" label="Sobre" /></li>
            <li><NavLink href="/precatorios" label="Precatórios" /></li>
            <li><NavLink href="/blog" label="Blog" /></li>
          </ul>

          {/* CTA (desktop) + Botão mobile */}
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

        {/* Filete dourado na base */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#EBBD46]/90 md:h-2" />
      </div>

      {/* Overlay + Drawer Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`
          fixed inset-y-0 right-0 z-50 w-full max-w-xs
          bg-[linear-gradient(180deg,rgba(0,0,48,1)_0%,rgba(0,0,90,0.9)_100%)]
          shadow-2xl transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" aria-label="Ir para a página inicial" className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image src="/logoavila.png" alt="ÁvilaCred" width={160} height={160} className="h-7 w-auto" sizes="160px" />
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

        <nav className="mt-1 px-2">
          <MobileLink href="/sobre" label="Sobre" onClick={() => setOpen(false)} />
          <MobileLink href="/precatorios" label="Precatórios" onClick={() => setOpen(false)} />
          <MobileLink href="/blog" label="Blog" onClick={() => setOpen(false)} />
        </nav>

        <div className="mt-3 px-4 pb-4">
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#EBBD46] px-4 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:opacity-95"
          >
            Fale com um especialista
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#EBBD46]/90" />
      </aside>
    </header>
  );
}

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

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
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
