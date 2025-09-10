// components/WhatsAppButton.tsx
"use client";

import { MessageCircle } from "lucide-react";

type Props = {
  /** Número no formato internacional, ex.: 55DDXXXXXXXXX */
  phone: string;
  /** Mensagem inicial opcional */
  message?: string;
  /** "primary" = botão grande; "floating" = botão fixo canto inferior-direito */
  variant?: "primary" | "floating";
  className?: string;
};

export default function WhatsAppButton({
  phone,
  message = "Olá! Vim pelo site da ÁvilaCred e gostaria de falar com um especialista.",
  variant = "primary",
  className = "",
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={[
          "fixed bottom-5 right-5 z-[60] inline-flex items-center justify-center",
          "h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl transition",
          "hover:translate-y-[-2px] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/30",
          className,
        ].join(" ")}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  // variant: primary
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold",
        "bg-[#25D366] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-white/30",
        className,
      ].join(" ")}
    >
      <MessageCircle className="h-4 w-4" />
      Falar no WhatsApp
    </a>
  );
}
