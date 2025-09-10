// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blog";
import BlogCard from "@/components/BlogCard";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog | ÁvilaCred",
  description: "Conteúdo educativo sobre precatórios, RPV, cessão de crédito e liquidez.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#000030] text-white">
      <Nav />
      {/* Hero simples */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(235,189,70,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
            Blog ÁvilaCred
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Aprenda sobre precatórios</h1>
          <p className="mt-3 max-w-2xl text-white/85 md:text-[15.5px]">
            Guias práticos e educacionais sobre RPV, cessão de crédito, documentação e mercado.
          </p>
        </div>
      </section>

      {/* Lista de posts */}
      <section className="bg-white py-14 text-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contato" className="inline-flex items-center rounded-2xl bg-[#EBBD46] px-6 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              Fale com um especialista
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
