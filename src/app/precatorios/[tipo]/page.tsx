// app/precatorios/[tipo]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { TYPE_DETAILS, TYPE_SLUGS, TipoSlug } from "@/lib/content/precatorios-tipos";
import ProcessoEtapasVender from "@/components/ProcessoEtapasVender";
import SimuladorPrecatorio from "@/components/SimuladorPrecatorio";
import ChecklistDocumentos from "@/components/ChecklistDocumentos";
import FaqPrecatorios from "@/components/FaqPrecatorios";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import PrecatoriosTypeNav from "@/components/PrecatoriosTypeNav";
import { Landmark, Building2, Building } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import Nav from "@/components/Nav";
import * as React from "react";

// Ícones como COMPONENTES para controlar tamanho de forma consistente
const ICONS: Record<
  TipoSlug,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  federal: Landmark,
  estadual: Building2,
  municipal: Building,
};

export async function generateStaticParams() {
  return TYPE_SLUGS.map((slug) => ({ tipo: slug }));
}

// Next 15: params é Promise aqui também
export async function generateMetadata(
  { params }: { params: Promise<{ tipo: string }> }
): Promise<Metadata> {
  const { tipo } = await params;
  const key = tipo as TipoSlug;
  const data = TYPE_DETAILS[key];
  if (!data) return {};

  const title = `${data.titulo} – Venda e Antecipação | ÁvilaCred`;
  const description = `Antecipe ${data.titulo.toLowerCase()} com segurança e agilidade. ${data.heroResumo} Análise gratuita e retorno em até 1 dia útil.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website", url: `/precatorios/${key}` },
    alternates: { canonical: `/precatorios/${key}` },
  };
}

// ✅ Também async e com params como Promise
export default async function PrecatorioTipoPage(
  { params }: { params: Promise<{ tipo: string }> }
) {
  const { tipo } = await params; // aguarda params
  const key = tipo as TipoSlug;
  const data = TYPE_DETAILS[key];
  if (!data) return notFound();

  const Icon = ICONS[key];

  return (
    <main className="bg-white text-[#0B0B0B]">
      <Nav />

      {/* HERO ESPECÍFICO */}
      <section className="relative overflow-hidden bg-[#000030] text-white">
        {/* Radiais azul/dourado */}
        <div
          className="absolute inset-0 -z-10
            [background:
              radial-gradient(60rem_40rem_at_20%_-10%,rgba(235,189,70,0.12),transparent_60%),
              radial-gradient(90rem_60rem_at_110%_120%,rgba(0,0,90,0.28),transparent_60%),
              linear-gradient(#000030,#000030)
            ]"
        />
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <Breadcrumb items={[{ label: "Precatórios", href: "/precatorios" }, { label: data.titulo }]} />

          {/* Grid responsiva: empilha no mobile, lado a lado no md+ */}
          <div className="mt-4 grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr]">
            {/* Lado esquerdo: título e CTAs */}
            <div>
              <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-md">
                {data.titulo}
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  {data.titulo}
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-white/85 md:text-[15.5px]">
                {data.heroResumo}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#simulador"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030] shadow-[0_12px_28px_rgba(235,189,70,.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(235,189,70,.38)]"
                >
                  Simular agora
                </a>
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Fale com um especialista
                </Link>
              </div>
            </div>

            {/* Lado direito: card "Tipo selecionado" + nav de tipos */}
            <div className="flex w-full flex-col items-stretch gap-5 md:items-end">
              {/* Card responsivo, sem overflow do ícone */}
              <div
                className="
                  relative w-full overflow-hidden rounded-3xl
                  border border-white/60 bg-white/10 px-6 py-5
                  shadow-[0_10px_28px_rgba(0,0,0,.20)] backdrop-blur-md
                  md:w-[360px]
                "
              >
                {/* filete dourado */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 w-full bg-gradient-to-r from-[#d4af37]/45 via-white/70 to-[#00005A]/30" />
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/20 text-[#EBBD46]">
                    <Icon className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-white/80">
                      Tipo selecionado
                    </div>
                    <div className="truncate text-lg font-bold text-white">
                      {data.titulo}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navegação por tipos — scroll horizontal no mobile */}
              <div className="w-full md:w-[360px]">
                <div className="max-w-full overflow-x-auto md:overflow-visible">
                  <div className="min-w-[280px]">
                    <PrecatoriosTypeNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO EXPLICATIVA */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">
              Como ajudamos em {data.titulo.toLowerCase()}
            </h2>
            <p className="mt-3 text-[#333]">{data.descricao}</p>
            {data.dicas && data.dicas.length > 0 && (
              <ul className="mt-4 list-disc pl-5 text-sm text-[#333]">
                {data.dicas.map((d) => (
                  <li key={d} className="mb-1">
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className="
              rounded-2xl border border-black/5 bg-[#F9F9F9] p-6
              md:sticky md:top-6
            "
          >
            <h3 className="text-lg font-semibold text-[#00005A]">Elegibilidade</h3>
            <ul className="mt-3 grid gap-2 text-sm text-[#333]">
              {data.elegibilidade.map((e) => (
                <li key={e} className="rounded-lg bg-white p-3">
                  {e}
                </li>
              ))}
            </ul>

            {data.orgaos && (
              <>
                <h4 className="mt-6 text-[15px] font-semibold text-[#00005A]">
                  Órgãos mais comuns
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {data.orgaos.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-[#333]"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <ProcessoEtapasVender />
      <div id="simulador">
        <SimuladorPrecatorio />
      </div>
      <ChecklistDocumentos />
      <FaqPrecatorios />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
