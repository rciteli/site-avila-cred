// components/PrecatoriosHero.tsx
import Link from "next/link";

export default function PrecatoriosHero() {
  return (
    <section className="relative overflow-hidden bg-[#000030] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(235,189,70,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
            Venda de Precatórios
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Venda de precatórios com segurança e agilidade
          </h1>
          <p className="mt-4 text-white/85 md:text-[15.5px]">
            Análise gratuita, equipe jurídica e contábil especializada, retorno em até 1 dia útil.
            Transparência do primeiro contato ao pagamento.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:opacity-90"
            >
              Simular agora
            </a>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Fale com um especialista
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
