import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import ScrollRevealProvider from "./ScrollRevealProvider";

export const metadata: Metadata = {
  title: "Ávila Cred",
  description: "Ávila Cred",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  );
}
