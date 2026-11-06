import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";
import { ARTIGOS, getArtigo } from "@/data/artigos";
import { ARTIGOS_EN, dataEn } from "@/data/artigos.en";

export const Route = createFileRoute("/artigos/$slug")({
  loader: ({ params }) => {
    const artigo = getArtigo(params.slug);
    if (!artigo) throw notFound();
    return { artigo };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo não encontrado — Náyra Zanini" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { artigo } = loaderData;
    return {
      meta: [
        { title: `${artigo.title} — Náyra Zanini` },
        { name: "description", content: artigo.summary },
        { property: "og:title", content: artigo.title },
        { property: "og:description", content: artigo.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: ArtigoPage,
  notFoundComponent: ArtigoNotFound,
});

function ArtigoNotFound() {
  const { language } = useLanguage();
  const en = language === "en";

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          {en ? "Articles" : "Artigos"}
        </p>
        <h1 className="mt-6 font-display text-4xl md:text-5xl font-medium">
          {en ? "Article not found." : "Artigo não encontrado."}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {en
            ? "Maybe it was moved. See all available articles."
            : "Talvez ele tenha sido movido. Veja todos os artigos disponíveis."}
        </p>
        <Link
          to="/artigos"
          className="mt-8 inline-flex items-center gap-2 text-terracotta underline underline-offset-4"
        >
          {en ? "← See all articles" : "← Ver todos os artigos"}
        </Link>
      </section>
    </SiteLayout>
  );
}

function ArtigoPage() {
  const { artigo: artigoOriginal } = Route.useLoaderData();
  const { language } = useLanguage();
  const en = language === "en";
  const traduzir = <T extends { slug: string }>(a: T) =>
    en ? { ...a, ...ARTIGOS_EN[a.slug] } : a;
  const artigo = traduzir(artigoOriginal);
  const currentIndex = ARTIGOS.findIndex((a) => a.slug === artigo.slug);
  const prev = currentIndex > 0 ? traduzir(ARTIGOS[currentIndex - 1]) : null;
  const next =
    currentIndex >= 0 && currentIndex < ARTIGOS.length - 1
      ? traduzir(ARTIGOS[currentIndex + 1])
      : null;

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <Link
          to="/artigos"
          className="text-sm text-muted-foreground hover:text-terracotta transition-colors"
        >
          {en ? "← Articles" : "← Artigos"}
        </Link>

        <header className="mt-5 sm:mt-6 pb-6 sm:pb-8 border-b border-border/60">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-terracotta font-medium">
            {artigo.subject}
          </p>
          <h1 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-5xl font-medium leading-tight">
            {artigo.title}
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground font-mono">
            {en ? `Published on ${dataEn(artigo.publishedAt)}` : `Publicado em ${artigo.date}`}
          </p>
          {artigo.externalUrl && (
            <a
              href={artigo.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs sm:text-sm text-terracotta underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {en ? "Also read on LinkedIn (in Portuguese) ↗" : "Ler também no LinkedIn ↗"}
            </a>
          )}
        </header>

        <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-[15px] sm:text-base md:text-lg leading-relaxed text-foreground/90">
          {artigo.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <footer className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
          {artigo.footer}
        </footer>

        {(prev || next) && (
          <nav className="mt-12 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to="/artigos/$slug"
                params={{ slug: prev.slug }}
                className="p-5 rounded-2xl border border-border/60 hover:border-terracotta/50 transition-colors"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {en ? "← Previous" : "← Anterior"}
                </p>
                <p className="mt-2 font-display text-lg group-hover:text-terracotta">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/artigos/$slug"
                params={{ slug: next.slug }}
                className="p-5 rounded-2xl border border-border/60 hover:border-terracotta/50 transition-colors text-right"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {en ? "Next →" : "Próximo →"}
                </p>
                <p className="mt-2 font-display text-lg">{next.title}</p>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </article>
    </SiteLayout>
  );
}