// app/sitemap.ts
import type { MetadataRoute } from "next";
import { TYPE_SLUGS } from "@/lib/content/precatorios-tipos";
import { BLOG_POSTS } from "@/lib/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avilacred.com.br";
  const now = new Date();

  // rotas estáticas principais
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/sobre`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/precatorios`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/contato`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`,        lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    // { url: `${baseUrl}/faq`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // /precatorios/[tipo]
  const precatorios: MetadataRoute.Sitemap = TYPE_SLUGS.map((slug) => ({
    url: `${baseUrl}/precatorios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // /blog/[slug]
  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...precatorios, ...posts];
}
