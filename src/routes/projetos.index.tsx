import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PROJETOS } from "@/data/projetos";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Náyra Zanini" },
      {
        name: "description",
        content:
          "Projetos autorais de Náyra Zanini em SQL Server, T-SQL e desenvolvimento web, cada um com case study próprio.",
      },
      { property: "og:title", content: "Projetos — Náyra Zanini" },
      {
        property: "og:description",
        content:
          "Bancos de dados relacionais, automações e aplicações web — com decisões técnicas documentadas.",
      },
    ],
  }),
  component: ProjetosPage,
});

type Card = {
  n: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  slug?: string;
  path?: string;
  cta: string;
};

const FINANCAS: Card = {
  n: "04",
  title: "financas-pessoais",
  tagline: "Aplicação full-stack + SQL Server",
  description:
    "Sistema de controle financeiro pessoal com autenticação, lançamentos, orçamentos e dashboard. Toda a escrita passa por stored procedures em T-SQL, com views de consolidação e app em Next.js 15. Disponível também como app utilizável aqui no site.",
  tags: ["SQL Server", "T-SQL", "Next.js", "TypeScript"],
  path: "/projetos/financas-pessoais",
  cta: "Ver case study e abrir o app",
};

const CARDS: Card[] = [
  ...PROJETOS.map((p) => ({
    n: p.n,
    title: p.title,
    tagline: p.tagline,
    description: p.description,
    tags: p.tags,
    slug: p.slug,
    cta: p.appPath ? "Ver case study e abrir o app" : "Ver case study",
  })),
  FINANCAS,
].sort((a, b) => a.n.localeCompare(b.n));

const cardClass =
  "group grid grid-cols-[auto_1fr_auto] md:grid-cols-[100px_1fr_auto] gap-4 md:gap-6 p-5 sm:p-8 rounded-2xl bg-card border border-border/60 hover:border-terracotta/50 hover:shadow-hover transition-all";

function CardBody({ p }: { p: Card }) {
  return (
    <>
      <p className="font-display text-2xl md:text-3xl text-terracotta shrink-0">{p.n}</p>
      <div className="min-w-0">
        <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">
          {p.tagline}
        </p>
        <h2 className="mt-1 font-display text-lg sm:text-2xl md:text-3xl font-medium group-hover:text-terracotta transition-colors break-words">
          {p.title}
        </h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl">
          {p.description}
        </p>
        <ul className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-paper-deep border border-border/60 font-mono"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs sm:text-sm text-terracotta font-medium">{p.cta} →</p>
      </div>
      <span className="self-start text-terracotta group-hover:translate-x-1 transition-transform text-xl md:text-2xl shrink-0">
        →
      </span>
    </>
  );
}

function ProjetosPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-12">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          Projetos
        </p>
        <h1 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
          Coisas que construí{" "}
          <span className="italic text-terracotta">na prática</span>.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Cada projeto tem uma página própria com o problema, as decisões
          técnicas, o modelo de dados e o que aprendi no caminho.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6 pb-16 sm:pb-24">
        <div className="grid gap-4 sm:gap-6">
          {CARDS.map((p) =>
            p.path ? (
              <Link key={p.title} to="/projetos/financas-pessoais" className={cardClass}>
                <CardBody p={p} />
              </Link>
            ) : (
              <Link
                key={p.title}
                to="/projetos/$slug"
                params={{ slug: p.slug! }}
                className={cardClass}
              >
                <CardBody p={p} />
              </Link>
            ),
          )}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Mais código no meu{" "}
          <a
            href="https://github.com/nayrazanini"
            target="_blank"
            rel="noreferrer"
            className="text-terracotta underline underline-offset-4 hover:opacity-80"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </SiteLayout>
  );
}
