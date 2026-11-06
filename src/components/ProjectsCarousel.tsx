import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSlider } from "@/hooks/use-slider";
import { PROJETOS } from "@/data/projetos";
import { useLanguage } from "@/context/LanguageContext";

const PROJECT_TRANSLATIONS: Record<
  string,
  { title: string; tagline: string; description: string }
> = {
  "financas-pessoais": {
    title: "PERSONAL FINANCE TRACKER",
    tagline: "Full-stack application + SQL Server",
    description:
      "A personal finance management application designed to organize and monitor financial information through a practical experience.",
  },
  "pr-gerencia-menu": {
    title: "PR_GERENCIA_MENU",
    tagline: "Dynamic menu manager in T-SQL",
    description:
      "A SQL Server procedure that dynamically creates menu structures for different systems, handling hierarchical menus, access profiles, and transactional operations.",
  },
  "ponto-sql-server": {
    title: "TIME TRACKING SYSTEM",
    tagline: "Time tracking system with SQL Server",
    description:
      "A SQL Server project for employee records, clock-in and clock-out operations, business rules, and attendance reports.",
  },
  "estoque-sql-server": {
    title: "INVENTORY MANAGEMENT",
    tagline: "Inventory management with SQL Server",
    description:
      "A relational inventory project using SQL Server, with data modeling, relationships, stored procedures, and T-SQL scripts for stock movements.",
  },
};

type ProjectCardProps = {
  project: (typeof PROJETOS)[number];
  en: boolean;
};

function ProjectCard({ project, en }: ProjectCardProps) {
  const translation = en ? PROJECT_TRANSLATIONS[project.slug] : undefined;
  const titulo = translation?.title ?? project.title;

  return (
    <article className="group grid min-h-[340px] gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-12">
      <div className="flex flex-col">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-3xl text-terracotta sm:text-4xl">{project.n}</span>
          {project.slug === "pr-gerencia-menu" && (
            <span className="rounded-full border border-terracotta/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-terracotta">
              {en ? "Featured project" : "Projeto em destaque"}
            </span>
          )}
        </div>

        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {translation?.tagline ?? project.tagline}
        </p>
        <h3 className="mb-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {titulo}
        </h3>
        <p className="max-w-2xl text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
          {translation?.description ?? project.description}
        </p>
      </div>

      <div className="flex flex-col justify-end gap-8">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {en ? "Technologies" : "Tecnologias"}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-paper-deep px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/projetos/$slug"
            params={{ slug: project.slug }}
            className="rounded-full border border-terracotta/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-terracotta/10"
          >
            {en ? "View project" : "Conhecer projeto"} <span aria-hidden="true">↗</span>
          </Link>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/60 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-terracotta/50 hover:text-terracotta"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

const PROJECT_INTERVAL = 15000;

export function ProjectsCarousel() {
  const { language } = useLanguage();
  const en = language === "en";

  const items = [...PROJETOS].sort((a, b) => a.n.localeCompare(b.n));
  const total = items.length;
  const [pausado, setPausado] = useState(false);
  const slider = useSlider(total);
  const { index, go, goTo } = slider;

  useEffect(() => {
    if (pausado || total < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(1), PROJECT_INTERVAL);
    return () => clearTimeout(t);
  }, [index, pausado, total, go]);

  return (
    <section
      id="projetos"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-10 pt-10 sm:px-8 md:pb-14 md:pt-14 lg:px-10"
    >
      <div className="mb-10 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-terracotta">
            {en ? "Projects, Ideas & Solutions" : "Projetos, ideias e soluções"}
          </p>
          <h2 className="font-moderno text-4xl text-foreground sm:text-5xl">
            {en ? "Featured Projects" : "Projetos em destaque"}
            <span className="text-terracotta">.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {en
              ? "A collection of projects built around practical challenges, learning experiences, and real-world needs. These solutions explore application development, databases, automation, and business logic."
              : "Reúno projetos desenvolvidos a partir de desafios práticos, estudos e necessidades reais. As soluções envolvem desenvolvimento de aplicações, banco de dados, automação e lógica de negócio, com foco em transformar problemas em soluções funcionais."}
          </p>
          <span className="self-end whitespace-nowrap font-mono text-xs text-muted-foreground">
            {String(items.length).padStart(2, "0")} {en ? "projects" : "projetos"}
          </span>
        </div>
      </div>

      <div
        className="w-full"
        onMouseEnter={() => setPausado(true)}
        onPointerDown={() => setPausado(true)}
        onPointerUp={() => setPausado(false)}
        onPointerCancel={() => setPausado(false)}
        onMouseLeave={() => setPausado(false)}
        onFocus={() => setPausado(true)}
        onBlur={() => setPausado(false)}
      >
        <style>{`
          @keyframes proj-bar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          @media (prefers-reduced-motion: reduce) { .proj-bar { animation: none !important; } }
        `}</style>

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card transition-colors hover:border-terracotta/40">
          <div ref={slider.containerRef} {...slider.handlers} style={slider.containerStyle} aria-live="polite">
            <div style={slider.trackStyle}>
              {slider.visiveis.map(({ key, i }) => (
                <div
                  key={key}
                  aria-hidden={key !== "cur"}
                  style={{ flex: "1 1 0", minWidth: 0 }}
                  {...(key !== "cur" ? { inert: true as unknown as undefined } : {})}
                >
                  <ProjectCard project={items[i]} en={en} />
                </div>
              ))}
            </div>
          </div>

          {total > 1 && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-border/40">
              <div
                key={`${index}-${pausado ? "p" : "r"}`}
                className="proj-bar h-full origin-left bg-terracotta"
                style={{
                  animation: pausado ? undefined : `proj-bar ${PROJECT_INTERVAL}ms linear forwards`,
                  transform: pausado ? "scaleX(0)" : undefined,
                }}
              />
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={en ? "Projects" : "Projetos"}>
            {items.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={p.title}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-terracotta" : "w-2 bg-border hover:bg-terracotta/50"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={en ? "Previous project" : "Projeto anterior"}
              className="h-9 w-9 rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-terracotta/50 hover:text-terracotta"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={en ? "Next project" : "Próximo projeto"}
              className="h-9 w-9 rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-terracotta/50 hover:text-terracotta"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
