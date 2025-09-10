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

const BIG_ICONS: Record<TipoSlug, React.ReactNode> = {
  federal: <Landmark className="h-16 w-16 md:h-20 md:w-20" />,
  estadual: <Building2 className="h-16 w-16 md:h-20 md:w-20" />,
  municipal: <Building className="h-16 w-16 md:h-20 md:w-20" />,
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
  const { tipo } = await params; // ← aguardando params
  const key = tipo as TipoSlug;
  const data = TYPE_DETAILS[key];
  if (!data) return notFound();

  return (
    <main className="bg-white text-[#0B0B0B]">
      <Nav />
      {/* HERO ESPECÍFICO */}
      <section className="relative overflow-hidden bg-[#000030] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(235,189,70,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
          <Breadcrumb items={[{ label: "Precatórios", href: "/precatorios" }, { label: data.titulo }]} />

          <div className="mt-4 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
                {data.titulo}
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{data.titulo}</h1>
              <p className="mt-4 max-w-2xl text-white/85 md:text-[15.5px]">{data.heroResumo}</p>
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

            {/* Card "Tipo selecionado" + nav secundária (padronizado) */}
            <div className="flex flex-col items-start justify-center gap-6 md:items-end">
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 w-[300px] min-h-[96px] md:w-[360px]">
                <span className="text-[#EBBD46]">
                  <span className="inline-flex h-10 w-10 items-center justify-center">
                    {BIG_ICONS[key]}
                  </span>
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white/85">Tipo selecionado</div>
                  <div className="truncate text-lg font-bold">{data.titulo}</div>
                </div>
              </div>
              <PrecatoriosTypeNav />
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
                  <li key={d} className="mb-1">{d}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-2xl border border-black/5 bg-[#F9F9F9] p-6">
            <h3 className="text-lg font-semibold text-[#00005A]">Elegibilidade</h3>
            <ul className="mt-3 grid gap-2 text-sm text-[#333]">
              {data.elegibilidade.map((e) => (
                <li key={e} className="rounded-lg bg-white p-3">{e}</li>
              ))}
            </ul>

            {data.orgaos && (
              <>
                <h4 className="mt-6 text-[15px] font-semibold text-[#00005A]">Órgãos mais comuns</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {data.orgaos.map((o) => (
                    <span key={o} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-[#333]">
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
      <div id="simulador"><SimuladorPrecatorio /></div>
      <ChecklistDocumentos />
      <FaqPrecatorios />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
