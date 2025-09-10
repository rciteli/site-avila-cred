// components/BlogCard.tsx
import Link from "next/link";

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
  const d = new Date(date);
  const dateFormatted = d.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <header className="mb-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#555]">
          <time dateTime={date} className="font-medium">{dateFormatted}</time>
          <span aria-hidden>•</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-[#00005A]">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
      </header>

      <p className="text-sm text-[#333]">{excerpt}</p>

      <footer className="mt-4 flex flex-wrap items-center gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-black/10 bg-[#F5F7FF] px-2.5 py-1 text-xs text-[#00005A]">
            {t}
          </span>
        ))}
      </footer>

      <div className="mt-auto pt-4">
        <Link
          href={`/blog/${slug}`}
          className="text-sm font-semibold text-[#00005A] underline-offset-4 hover:underline"
        >
          Ler mais →
        </Link>
      </div>
    </article>
  );
}
