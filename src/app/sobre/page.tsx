// app/sobre/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProcessoEtapas from "@/components/ProcessoEtapas";
import { ShieldCheck, Handshake, BadgeCheck, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import Trajetoria from "@/components/Trajetoria";

export const metadata: Metadata = {
  // `metadataBase` já está no layout apontando para https://avilacred.com.br
  // então o canonical relativo abaixo vira https://avilacred.com.br/sobre
  title: "Sobre a ÁvilaCred",
  description:
    "Conheça a ÁvilaCred: empresa especializada em antecipação e negociação de precatórios com transparência, segurança e agilidade.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    type: "website",
    url: "https://avilacred.com.br/sobre",
    siteName: "ÁvilaCred",
    title: "Sobre a ÁvilaCred",
    description:
      "Soluções financeiras em precatórios com equipe jurídica e contábil dedicada, processos claros e parceiros consolidados.",
    images: [
      {
        url: "/og.jpg", // sua imagem OG em /public
        width: 1200,
        height: 630,
        alt: "ÁvilaCred",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a ÁvilaCred",
    description:
      "Antecipação e negociação de precatórios com transparência, segurança e agilidade.",
    images: ["/og.jpg"],
  },
};

export default function SobrePage() {
  return (
    <div>
      <Nav />
      <main className="min-h-screen bg-[#000030] text-white">
        {/* HERO — título + texto + imagem da mulher */}
        <section className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
            {/* Texto */}
            <div>
              <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
                Quem somos
              </span>

              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Sobre a ÁvilaCred
              </h1>

              <p className="mt-5 max-w-2xl text-white/85 md:text-[15.5px]">
                A ÁvilaCred é uma empresa especializada em soluções financeiras para
                antecipação e negociação de precatórios, com foco em transparência,
                segurança e agilidade. Atuamos com equipe jurídica e contábil
                dedicada para conduzir cada etapa do processo com clareza e
                confiabilidade.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#trajetoria"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Nossa trajetória
                </Link>
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:opacity-90"
                >
                  Fale com um especialista <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Imagem da mulher */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src="/sobre-mulher.jpg"
                alt="Profissional representando atendimento ÁvilaCred"
                fill
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000030]/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* SELOS DE CONFIANÇA / DIFERENCIAIS */}
        <section className="border-y border-white/10 bg-white/5 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
            <Badge
              icon={<ShieldCheck className="h-5 w-5" />}
              title="+5 anos de atuação"
              desc="Experiência real em cessão de créditos."
            />
            <Badge
              icon={<Handshake className="h-5 w-5" />}
              title="Parcerias consolidadas"
              desc="Rede de fundos e instituições financeiras."
            />
            <Badge
              icon={<BadgeCheck className="h-5 w-5" />}
              title="Processo transparente"
              desc="Acompanhamento jurídico e contábil."
            />
          </div>
        </section>

        {/* ETAPAS DO PROCESSO */}
        <ProcessoEtapas />

        {/* TRAJETÓRIA */}
        <Trajetoria />

        {/* CTA FINAL */}
        <section className="pb-20 pt-2">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_0%_0%,rgba(235,189,70,0.14),transparent_60%)]" />
              <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.6fr]">
                <div>
                  <h3 className="text-2xl font-semibold md:text-3xl">
                    Pronto para antecipar seu precatório?
                  </h3>
                  <p className="mt-2 max-w-2xl text-white/80">
                    Receba uma análise gratuita e descubra as melhores condições para o seu caso.
                  </p>
                </div>
                <div className="flex justify-start md:justify-end">
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#EBBD46] px-6 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg"
                  >
                    Falar com um especialista <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------- Components locais ---------- */

function Badge({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EBBD46]/15 text-[#EBBD46]">
        {icon}
      </span>
      <div>
        <h4 className="text-[15px] font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-white/80">{desc}</p>
      </div>
    </div>
  );
}
