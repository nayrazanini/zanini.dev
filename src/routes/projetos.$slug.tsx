
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PROJETOS, getProjeto, type Projeto } from "@/data/projetos";

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
        { property: "og:title", content: `${projeto.title} — Projeto` },
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
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          Projetos
        </p>

        <h1 className="mt-6 font-display text-3xl md:text-5xl font-medium">
          Projeto não encontrado.
        </h1>

        <Link
          to="/projetos"
          className="mt-8 inline-flex items-center gap-2 text-terracotta underline underline-offset-4"
        >
          ← Ver todos os projetos
        </Link>
      </section>
    </SiteLayout>
  );
}

function ProjetoPage() {
  const { projeto } = Route.useLoaderData() as { projeto: Projeto };

  const outros = PROJETOS
    .filter((p) => p.slug !== projeto.slug)
    .slice(0, 3);

  return (
    <SiteLayout>
      <article className="mx-auto max-w-4xl px-5 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">

        {/* Voltar para projetos */}
        <Link
          to="/projetos"
          className="text-sm text-muted-foreground hover:text-terracotta transition-colors"
        >
          ← Todos os projetos
        </Link>

        {/* Apresentação */}
        <header className="mt-6 pb-8 border-b border-border/60">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-terracotta font-medium">
            Projeto · {projeto.tagline}
          </p>

          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-tight break-words">
            {projeto.title}
          </h1>

          <p className="mt-5 max-w-2xl text-sm sm:text-base text-foreground/85 leading-relaxed">
            {projeto.description}
          </p>

          {/* Tecnologias */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {projeto.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border/60 bg-paper-deep px-3 py-1.5 font-mono text-[10px] sm:text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Ações */}
          <div className="mt-7 flex flex-wrap gap-3">
            {projeto.appPath && (
              <Link
                to={projeto.appPath as any}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-plum-radial px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              >
                Experimentar aplicação ↗
              </Link>
            )}

            <a
              href={projeto.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-5 py-2.5 text-sm font-medium hover:border-terracotta/60 hover:text-terracotta transition-colors"
            >
              Ver código no GitHub ↗
            </a>
          </div>
        </header>

        {/* O desafio */}
        <section className="mt-10">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-terracotta">
            01 · Contexto
          </p>

          <h2 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-white">
            O desafio
          </h2>

          <p className="mt-3 max-w-3xl text-sm sm:text-base text-foreground/85 leading-relaxed line-clamp-5">
            {projeto.problem}
          </p>
        </section>

        {/* A solução */}
        <section className="mt-10">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-terracotta">
            02 · Desenvolvimento
          </p>

          <h2 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-white">
            O que foi desenvolvido
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Principais recursos e soluções implementados neste projeto.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {projeto.highlights.map((item) => (
              <div
                key={item.n}
                className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
              >
                <span className="font-mono text-xs text-terracotta">
                  {item.n}
                </span>

                <h3 className="mt-3 text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
  {item.text}
</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modelo de dados */}
        {projeto.model && (
          <section className="mt-10">
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-terracotta">
              03 · Estrutura
            </p>

            <h2 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Estrutura do projeto
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {projeto.model.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-lg border border-border/60 bg-card p-4"
                >
                  <p className="break-words font-mono text-xs text-terracotta">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detalhes técnicos opcionais */}
        {(projeto.sections.length > 0 || projeto.learnings.length > 0) && (
          <section className="mt-10">
            <details className="group rounded-xl border border-border/60 bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Detalhes técnicos e aprendizados
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Explore decisões de desenvolvimento e conhecimentos aplicados.
                  </p>
                </div>

                <span className="text-xl text-terracotta transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="space-y-7 border-t border-border/60 p-4 sm:p-5">
                {projeto.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-base font-semibold text-white">
                      {section.title}
                    </h3>

                    <div className="mt-3 space-y-3">
                      {section.paragraphs.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-relaxed text-foreground/80"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {projeto.learnings.length > 0 && (
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Principais aprendizados
                    </h3>

                    <ul className="mt-3 space-y-3">
                      {projeto.learnings.map((learning) => (
                        <li
                          key={learning}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                        >
                          <span className="text-terracotta shrink-0">→</span>
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          </section>
        )}

        {/* Outros projetos */}
        <nav className="mt-12 border-t border-border/60 pt-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Continue explorando
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Outros projetos
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
                  {item.tagline}
                </p>

                <p className="mt-2 break-words font-display text-base text-white">
                  {item.title}
                </p>

                <span className="mt-4 inline-block text-xs text-terracotta">
                  Conhecer projeto →
                </span>
              </Link>
            ))}
          </div>
        </nav>

      </article>
    </SiteLayout>
  );
}
