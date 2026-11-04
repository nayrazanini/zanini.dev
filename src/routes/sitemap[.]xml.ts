import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTIGOS } from "@/data/artigos";
import { PROJETOS } from "@/data/projetos";

// Defina VITE_SITE_URL (ex.: https://seudominio.com) para gerar URLs absolutas.
const BASE_URL = ((import.meta.env["VITE_SITE_URL"] as string | undefined) ?? "").replace(/\/$/, "");

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre", changefreq: "monthly", priority: "0.9" },
          { path: "/experiencia", changefreq: "monthly", priority: "0.9" },
          { path: "/projetos", changefreq: "monthly", priority: "0.8" },
          {
            path: "/projetos/financas-pessoais",
            changefreq: "monthly",
            priority: "0.7",
          },
          { path: "/artigos", changefreq: "monthly", priority: "0.8" },
          { path: "/contato", changefreq: "yearly", priority: "0.6" },
        ];

        for (const p of PROJETOS) {
          entries.push({
            path: `/projetos/${p.slug}`,
            changefreq: "yearly",
            priority: "0.7",
          });
        }

        for (const a of ARTIGOS) {
          entries.push({
            path: `/artigos/${a.slug}`,
            changefreq: "yearly",
            priority: "0.7",
          });
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});