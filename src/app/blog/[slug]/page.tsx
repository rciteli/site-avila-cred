// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, getPostBySlug } from "@/lib/content/blog";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// Next 15: params como Promise
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  const title = `${post.title} | Blog ÁvilaCred`;
  const description = post.excerpt ?? "Conteúdo sobre precatórios, RPV e cessão de crédito.";
  const ogImage = "/og.jpg"; // troque por um campo do post (ex.: post.image) se existir

  return {
    title,
    description,
    alternates: { canonical: path }, // vira absoluto via metadataBase do layout
    keywords: [
      "precatórios",
      "antecipação de precatórios",
      "cessão de crédito",
      "RPV",
      "ÁvilaCred",
      ...(post.tags ?? []),
    ],
    openGraph: {
      type: "article",
      url: path,
      siteName: "ÁvilaCred",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
}

// Page também como async para aguardar params
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    // opcionalmente, lançar notFound()
    return null;
  }

  const d = new Date(post.date);
  const dateFormatted = d.toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <main className="min-h-screen bg-[#000030] text-white">
      {/* Hero do post */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_15%_-10%,rgba(235,189,70,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div className="mt-2 max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <time dateTime={post.date}>{dateFormatted}</time>
              <span aria-hidden>•</span>
              <span>{post.readingTime}</span>
              <span aria-hidden>•</span>
              <div className="flex flex-wrap items-center gap-1">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corpo do post */}
      <section className="bg-white py-10 text-[#0B0B0B] md:py-14">
        <article className="mx-auto max-w-3xl px-4 prose prose-neutral md:prose-lg">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return <h2 key={i} className="text-[#00005A]">{block.text}</h2>;
            }
            if (block.type === "p") {
              return <p key={i}>{block.text}</p>;
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc pl-6">
                  {block.items.map((li, idx) => <li key={idx}>{li}</li>)}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={i} className="border-l-4 border-[#EBBD46] bg-[#FFF8E0]/40 px-4 py-2 italic text-[#333]">
                  {block.text}
                </blockquote>
              );
            }
            return null;
          })}
        </article>

        {/* CTA pós-artigo */}
        <div className="mx-auto mt-10 max-w-3xl px-4">
          <div className="rounded-2xl border border-black/5 bg-[#F9F9F9] p-6">
            <h3 className="text-lg font-semibold text-[#00005A]">Quer avaliar uma proposta para o seu precatório?</h3>
            <p className="mt-1 text-[#333]">
              Fale com um especialista e receba uma análise gratuita em até 1 dia útil.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Link href="/contato" className="inline-flex items-center rounded-xl bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg">
                Fale com um especialista
              </Link>
              <Link href="/precatorios" className="text-sm font-semibold text-[#00005A] underline-offset-4 hover:underline">
                Conheça como funciona →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
