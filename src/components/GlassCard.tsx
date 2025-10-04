// src/components/GlassCard.tsx
import * as React from "react";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  /** Mostra um filete dourado sutil ao redor do card */
  goldBorder?: boolean;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function GlassCard({
  as = "div",
  className,
  children,
  goldBorder = true,
}: Props) {
  const Tag = as as any;
  return (
    <Tag
      className={cx(
        "glass-card",
        goldBorder && "glass-border-gold",
        // padding e layout padrão dos cards
        "p-6 rounded-2xl"
      , className)}
    >
      {children}
    </Tag>
  );
}
