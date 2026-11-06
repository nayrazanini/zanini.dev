import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";
import { ARTIGOS_TODOS as ARTIGOS, ARTIGOS_EN_TODOS as ARTIGOS_EN, dataEn } from "@/data/artigos.todos";

export const Route = createFileRoute("/artigos/")({
  head: () => ({
    meta: [
      { title: "Artigos — Náyra Zanini" },
      {
        name: "description",
        content:
          "Artigos escritos por Náyra Zanini sobre tecnologia, dados, qualidade de software e as experiências que moldam sua trajetória profissional.",
      },
      { property: "og:title", content: "Artigos — Náyra Zanini" },
      {
        property: "og:description",
        content:
          "Reflexões autorais sobre tecnologia, dados e desenvolvimento pessoal e profissional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ArtigosPage,
});

// Silence unused-import in strict builds while keeping notFound available for future use.
void notFound;

function ArtigosPage() {
  const { language } = useLanguage();
  const en = language === "en";

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-12">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          {en ? "Articles" : "Artigos"}
        </p>
        <h1 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
          {en ? "Writing what I " : "Escrevendo o que "}
          <span className="italic text-terracotta">{en ? "study" : "estudo"}</span>.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {en
            ? "Articles about technology, data and the experiences that shape my path — from the postgraduate program in Software Engineering (UNIP) to my study routine and personal development. Writing is how I found to consolidate what I learn."
            : "Artigos sobre tecnologia, dados e as experiências que moldam minha trajetória — da pós-graduação em Engenharia de Software (UNIP) à rotina de estudos e ao desenvolvimento pessoal. Escrever é a forma que encontrei de consolidar o aprendizado."}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-6 pb-16 sm:pb-24">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {ARTIGOS.map((original) => {
            const a = en ? { ...original, ...ARTIGOS_EN[original.slug] } : original;
            return (
            <li key={a.slug}>
              <Link
                to="/artigos/$slug"
                params={{ slug: a.slug }}
                className="group grid md:grid-cols-[140px_1fr_auto] gap-2 md:gap-6 py-5 sm:py-6 items-baseline"
              >
                <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                  {a.subject}
                </p>
                <div className="min-w-0">
                  <h2 className="font-display text-lg sm:text-xl md:text-2xl font-medium leading-snug group-hover:text-terracotta transition-colors">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                    {a.summary}
                  </p>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-terracotta whitespace-nowrap">
                  {en ? dataEn(a.publishedAt) : a.date} →
                </span>
              </Link>
            </li>
            );
          })}
        </ul>
      </section>
    </SiteLayout>
  );
}