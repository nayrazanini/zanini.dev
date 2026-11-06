import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";
import { PROJETOS, getProjeto, type Projeto } from "@/data/projetos";
import { PROJECT_TRANSLATIONS, traduzirTag } from "@/data/projetos.en";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const projeto = getProjeto(params.slug);
    if (!projeto) throw notFound();
    return { projeto };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Projeto não encontrado — Náyra Zanini" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const { projeto } = loaderData;
    return {
      meta: [
        { title: `${projeto.title} — Náyra Zanini` },
        { name: "description", content: projeto.description },
        { property: "og:title", content: `${projeto.title} — Náyra Zanini` },
        { property: "og:description", content: projeto.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: ProjetoPage,
  notFoundComponent: ProjetoNotFound,
});

function ProjetoNotFound() {
  const { language } = useLanguage();
  const en = language === "en";

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
          {en ? "Projects" : "Projetos"}
        </p>
        <h1 className="mt-6 font-display text-3xl font-medium md:text-5xl">
          {en ? "Project not found." : "Projeto não encontrado."}
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-terracotta underline underline-offset-4"
        >
          {en ? "← Back to home" : "← Voltar ao início"}
        </Link>
      </section>
    </SiteLayout>
  );
}

function ProjetoPage() {
  const { projeto } = Route.useLoaderData() as { projeto: Projeto };
  const { language } = useLanguage();
  const en = language === "en";
  const traducao = PROJECT_TRANSLATIONS[projeto.slug];

  const conteudo: Projeto = en
    ? ({ ...projeto, ...traducao } as Projeto)
    : projeto;

  const outros = PROJETOS.filter((item) => item.slug !== projeto.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article className="mx-auto max-w-4xl px-5 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
        <Link
          to="/"
          hash="projetos"
          className="text-sm text-muted-foreground transition-colors hover:text-terracotta"
        >
          {en ? "← All projects" : "← Todos os projetos"}
        </Link>

        <header className="mt-5 border-b border-border/60 pb-6 sm:mt-6 sm:pb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-terracotta sm:text-xs">
            {en ? "Case study" : "Estudo de projeto"} · {conteudo.tagline}
          </p>
          <h1 className="mt-3 break-words font-display text-2xl font-medium leading-tight sm:mt-4 sm:text-3xl md:text-5xl">
            {conteudo.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
            {conteudo.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {conteudo.tags.map((tag) => (
              <li
                key={traduzirTag(tag, en)}
                className="rounded-full border border-border/60 bg-paper-deep px-3 py-1.5 font-mono text-[10px] sm:text-xs"
              >
                {traduzirTag(tag, en)}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {conteudo.appPath && (
              <Link
                to={conteudo.appPath as "/projetos/financas-pessoais/app"}
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                {en ? "Open application" : "Abrir o app"} →
              </Link>
            )}
            <a
              href={conteudo.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium transition-colors hover:border-terracotta/50 hover:text-terracotta"
            >
              {en ? "View source on GitHub" : "Ver código no GitHub"} ↗
            </a>
            {conteudo.sqlPath && (
              <a
                href={conteudo.sqlPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium transition-colors hover:border-terracotta/50 hover:text-terracotta"
              >
                {en ? "SQL scripts" : "Scripts SQL"} ↗
              </a>
            )}
          </div>
        </header>

        <section className="mt-10">
          <h2 className="font-sans text-lg font-semibold tracking-tight text-white md:text-2xl">
            {en ? "The challenge" : "O problema"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
            {conteudo.problem}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-lg font-semibold tracking-tight text-white md:text-2xl">
            {en ? "Architecture and key decisions" : "Decisões de arquitetura"}
          </h2>
          <div className="mt-4 grid gap-4 sm:gap-5">
            {conteudo.highlights.map((item) => (
              <div
                key={item.n}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <p className="font-display text-xl text-terracotta md:text-2xl">
                  {item.n}
                </p>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-medium sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {conteudo.model && (
          <section className="mt-10">
            <h2 className="font-sans text-lg font-semibold tracking-tight text-white md:text-2xl">
              {en ? "Data model" : "Modelo de dados"}
            </h2>
            <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
              {conteudo.model.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="shrink-0 font-mono text-sm text-terracotta sm:w-48">
                    {item.label}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {conteudo.modules && (
          <section className="mt-10">
            <h2 className="font-sans text-lg font-semibold tracking-tight text-white md:text-2xl">
              {en ? "Application modules" : "Módulos da aplicação"}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {conteudo.modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-border/60 bg-card p-5"
                >
                  <h3 className="font-display text-base font-medium sm:text-lg">
                    {module.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                    {module.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {conteudo.sections.length > 0 && (
          <section className="mt-10">
            <h2 className="font-sans text-lg font-semibold tracking-tight text-white md:text-2xl">
              {en ? "Technical details" : "Detalhes técnicos"}
            </h2>
            <div className="mt-4 space-y-6">
              {conteudo.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-display text-base font-medium sm:text-lg">
                    {section.title}
                  </h3>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={`${section.title}-${index}`}
                        className="text-sm leading-relaxed text-foreground/85 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {conteudo.learnings.length > 0 && (
          <section className="mt-10">
            <h2 className="font-sans text-lg font-semibold tracking-tight text-white md:text-2xl">
              {en ? "Key takeaways" : "Principais aprendizados"}
            </h2>
            <ul className="mt-4 space-y-3">
              {conteudo.learnings.map((learning, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/85 sm:text-base"
                >
                  <span className="shrink-0 text-terracotta">→</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav className="mt-12 border-t border-border/60 pt-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {en ? "Keep exploring" : "Continue explorando"}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            {en ? "Other projects" : "Outros projetos"}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {outros.map((item) => (
              <Link
                key={item.slug}
                to="/projetos/$slug"
                params={{ slug: item.slug }}
                className="min-w-0 rounded-xl border border-border/60 p-4 transition-colors hover:border-terracotta/50"
              >
                <p className="text-[10px] text-muted-foreground">
                  {en ? PROJECT_TRANSLATIONS[item.slug]?.tagline ?? item.tagline : item.tagline}
                </p>
                <p className="mt-2 break-words font-display text-base text-white">
                  {en ? PROJECT_TRANSLATIONS[item.slug]?.title ?? item.title : item.title}
                </p>
                <span className="mt-4 inline-block text-xs text-terracotta">
                  {en ? "View project →" : "Conhecer projeto →"}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </article>
    </SiteLayout>
  );
}
