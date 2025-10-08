// src/components/GlassCard.tsx
"use client";

import * as React from "react";

type GlassCardProps<E extends React.ElementType = "div"> = {
  as?: E;
  className?: string;
  children: React.ReactNode;
  /** Mostra um filete dourado sutil ao redor do card */
  goldBorder?: boolean;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className" | "children">;

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function GlassCard<E extends React.ElementType = "div">({
  as,
  className,
  children,
  goldBorder = true,
  ...rest
}: GlassCardProps<E>) {
  const Tag = (as || "div") as React.ElementType;
  return (
    <Tag
      {...rest}
      className={cx(
        "glass-card",
        goldBorder && "glass-border-gold",
        "p-6 rounded-2xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
