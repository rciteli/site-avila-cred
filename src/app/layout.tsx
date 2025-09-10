import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ávila Cred",
  description: "Ávila Cred",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
