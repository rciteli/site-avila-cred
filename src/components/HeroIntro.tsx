import type React from "react";
import Link from "next/link";

/**
 * Hero de "Antecipe seu precatório"
 * Camadas corrigidas:
 *  - Imagem: z-0
 *  - Overlay: z-10
 *  - Conteúdo (texto/CTA): z-20
 */
export default function HeroIntro({ bgUrl = "/hero-bg.jpg" }: { bgUrl?: string }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Antecipação de precatórios"
    >
      {/* Camada 1: imagem de fundo */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgUrl}')` }}
        aria-hidden
      />

      {/* Camada 2: overlay em degradê (acima da imagem, abaixo do texto) */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,48,0.75) 0%, rgba(0,0,90,0.60) 40%, rgba(0,0,90,0.35) 100%)",
        }}
        aria-hidden
      />

      {/* Camada 3: conteúdo */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
            Compra e venda de precatórios
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Antecipe seu precatório com <span className="text-[#EBBD46]">segurança</span> e{" "}
            <span className="text-[#EBBD46]">agilidade</span>.
          </h1>

          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Negociação transparente com equipe jurídica e contábil especializada. Receba
            as melhores ofertas e agilize seu pagamento com todo o suporte necessário.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:opacity-90"
            >
              Falar com nossos especialistas
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Sobre a ÁvilaCred
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/70">
            * Crédito sujeito à aprovação do fundo e ao funcionamento do sistema bancário.
          </p>
        </div>
      </div>
    </section>

  );
}
