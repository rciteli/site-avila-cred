// src/components/BlogCard.tsx
import Link from "next/link";
import GlassCard from "@/components/GlassCard";

export default function BlogCard({
  slug,
  title,
  date,
  readingTime,
  tags,
  excerpt,
}: {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
}) {
  return (
    <GlassCard as="article" className="flex h-full flex-col">
      <header>
        <h3 className="text-lg font-semibold leading-snug text-[color:var(--brand-blue)]">
          {title}
        </h3>
        <div className="mt-1 text-xs text-[#444]">
          {date} • {readingTime}
        </div>
      </header>

      <p className="mt-3 text-sm leading-relaxed text-[#333]">{excerpt}</p>

      {tags?.length ? (
        <footer className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/50 bg-white/60 px-2.5 py-1 text-[11px] text-[color:var(--brand-blue)] backdrop-blur-md"
            >
              {t}
            </span>
          ))}
        </footer>
      ) : null}

      <div className="mt-auto pt-4">
        <Link
          href={`/blog/${slug}`}
          className="text-sm font-semibold text-[color:var(--brand-blue)] underline-offset-4 hover:underline"
        >
          Ler mais →
        </Link>
      </div>
    </GlassCard>
  );
}
