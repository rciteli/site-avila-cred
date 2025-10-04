// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import TagManager from "@/components/TagManager";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  metadataBase: new URL("https://avilacred.com.br"),
  title: {
    default: "ÁvilaCred — Venda de precatórios com segurança e agilidade",
    template: "%s | ÁvilaCred",
  },
  description:
    "Antecipe seu precatório com segurança e agilidade. Análise gratuita, equipe jurídica e contábil especializada, transparência total.",
  applicationName: "ÁvilaCred",
  alternates: {
    canonical: "/", // canonical absoluto será https://avilacred.com.br/
  },
  keywords: [
    "precatórios",
    "venda de precatórios",
    "cessão de crédito",
    "antecipação de precatórios",
    "título judicial",
    "ÁvilaCred",
  ],
  openGraph: {
    type: "website",
    url: "https://avilacred.com.br",
    siteName: "ÁvilaCred",
    title: "ÁvilaCred — Venda de precatórios com segurança e agilidade",
    description:
      "Negociação transparente com equipe jurídica/contábil. Receba propostas competitivas e acelere seu pagamento.",
    images: [
      {
        url: "/og.jpg", // troque pelo seu banner OG
        width: 1200,
        height: 630,
        alt: "ÁvilaCred",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ÁvilaCred — Venda de precatórios com segurança e agilidade",
    description:
      "Análise gratuita, transparência e propostas competitivas para seu precatório.",
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
  // Se tiver o token do Google Search Console:
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        {/* Tagueamento */}
        <TagManager />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
