import { Link } from "@tanstack/react-router";
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

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-xl">
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="font-display text-lg text-terracotta">{project.n}</span>
        {project.slug === "pr-gerencia-menu" && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta">
            {en ? "Featured project" : "Projeto em destaque"}
          </span>
        )}
      </div>

      <div className="flex-1">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {translation?.tagline ?? project.tagline}
        </p>
        <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-terracotta">
          {translation?.title ?? project.title}
        </h3>
        <p className="text-sm leading-7 text-foreground/75">
          {translation?.description ?? project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/60 bg-paper-deep px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-border/60 pt-5">
        <Link
          to="/projetos/$slug"
          params={{ slug: project.slug }}
          className="text-xs font-semibold text-foreground transition-colors hover:text-terracotta"
        >
          {en ? "View project" : "Conhecer projeto"} <span aria-hidden="true">↗</span>
        </Link>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground transition-colors hover:text-terracotta"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function ProjectsCarousel() {
  const { language } = useLanguage();
  const en = language === "en";

  const items = [...PROJETOS].sort((a, b) => a.n.localeCompare(b.n));

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

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} en={en} />
        ))}
      </div>
    </section>
  );
}
