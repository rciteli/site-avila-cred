// app/precatorios/page.tsx
import type { Metadata } from "next";

import PrecatoriosHero from "@/components/PrecatoriosHero";
import TiposPrecatorios from "@/components/TiposPrecatorios";
import ProcessoEtapasVender from "@/components/ProcessoEtapasVender";
import SimuladorPrecatorio from "@/components/SimuladorPrecatorio";
import ChecklistDocumentos from "@/components/ChecklistDocumentos";
import ComparativoVendaAguardar from "@/components/ComparativoVendaAguardar";
import PersonasCards from "@/components/PersonasCards";
import FaqPrecatorios from "@/components/FaqPrecatorios";
import CTASection from "@/components/CTASection";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

// `metadataBase` já está no layout: https://avilacred.com.br
export const metadata: Metadata = {
  title: "Precatórios — Venda e Antecipação",
  description:
    "Venda e antecipação de precatórios com segurança e agilidade. Análise gratuita, propostas competitivas e acompanhamento jurídico/contábil.",
  alternates: { canonical: "/precatorios" },
  keywords: [
    "precatórios",
    "venda de precatórios",
    "antecipação de precatórios",
    "cessão de crédito",
    "título judicial",
    "ÁvilaCred",
  ],
  openGraph: {
    type: "website",
    url: "https://avilacred.com.br/precatorios",
    siteName: "ÁvilaCred",
    title: "Precatórios — Venda e Antecipação | ÁvilaCred",
    description:
      "Transparência do primeiro contato ao pagamento. Receba ofertas de diversos fundos e acelere seu recebimento.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ÁvilaCred" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precatórios — Venda e Antecipação | ÁvilaCred",
    description:
      "Análise gratuita, propostas competitivas e suporte jurídico/contábil.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function PrecatoriosPage() {
  return (
    <main className="bg-white text-[#0B0B0B]">
      <Nav />
      <PrecatoriosHero />
      <TiposPrecatorios />
      <ProcessoEtapasVender />
      <SimuladorPrecatorio />
      <div className="h-[1px] w-full bg-[#EBBD46]" />
      <ChecklistDocumentos />
      <ComparativoVendaAguardar />
      <PersonasCards />
      <FaqPrecatorios />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
