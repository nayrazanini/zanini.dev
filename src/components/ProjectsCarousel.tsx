
import { Link } from "@tanstack/react-router";
import { PROJETOS } from "@/data/projetos";
import { useLanguage } from "@/context/LanguageContext";

type Item = {
  n: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  slug?: string;
  path?: string;
  repo?: string;
  featured?: boolean;
};

const PROJECT_TRANSLATIONS: Record<
  string,
  {
    title?: string;
    tagline: string;
    description: string;
  }
> = {
  "financas-pessoais": {
    title: "PERSONAL FINANCE TRACKER",
    tagline: "Full-stack application + SQL Server",
    description:
      "A personal finance management application designed to organize, monitor, and track financial information through a practical and intuitive experience.",
  },

  "pr-gerencia-menu": {
    tagline: "Dynamic menu manager in T-SQL",
    description:
      "A SQL Server procedure designed to dynamically create menu structures for different systems. It handles hierarchical menus, permission profiles, and transactional operations, with a focus on consistency and concurrency.",
  },

  "estoque-sql-server": {
    tagline: "Inventory management with SQL Server",
    description:
      "A relational inventory management project developed with SQL Server, exploring database modeling, relationships, stored procedures, and T-SQL scripts for stock movements and product queries.",
  },

  "ponto-sql-server": {
    tagline: "Time tracking system with SQL Server",
    description:
      "A time tracking management project using SQL Server, with procedures and scripts for employee records, clock-in and clock-out operations, and report generation.",
  },

  "rastreador-estudo-disciplina": {
    tagline: "Study session tracker",
    description:
      "An application for tracking study sessions, using SQL Server concepts such as gaps and islands to calculate study streaks, organize spaced reviews, and monitor weekly goals.",
  },

  "nayra-dev": {
    tagline: "Personal portfolio",
    description:
      "A personal portfolio developed to present my professional journey, projects, and technical skills. The website evolved from an initial static version into a more complete portfolio.",
  },

  autoresumo: {
    tagline: "Text summarization tool",
    description:
      "A JavaScript tool that processes text and generates summaries in Markdown format, exploring text manipulation, automation, and practical programming concepts.",
  },
};

const FINANCIAL_PROJECT: Item = {
  n: "01",
  title: "CONTROLE FINANCEIRO",
  tagline: "Aplicação full-stack + SQL Server",
  description:
    "Projeto de aplicação financeira pessoal, com uma experiência prática para organizar e acompanhar informações financeiras.",
  tags: ["SQL Server", "T-SQL", "Next.js"],
  path: "/projetos/financas-pessoais",
  slug: "financas-pessoais",
};

function ProjectCard({
  item,
  en,
}: {
  item: Item;
  en: boolean;
}) {
  const translation =
    en && item.slug
      ? PROJECT_TRANSLATIONS[item.slug]
      : undefined;

  return (
    <article
      className={`
        group flex h-full flex-col rounded-2xl border p-6
        bg-[#09090b]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${
          item.featured
            ? "border-purple-500/40 hover:border-purple-400/70"
            : "border-white/10 hover:border-purple-500/40"
        }
      `}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="font-display text-lg text-purple-500">
          {item.n}
        </span>

        {item.featured && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-purple-400">
            {en ? "Featured project" : "Projeto em destaque"}
          </span>
        )}
      </div>

      <div className="flex-1">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
          {translation?.tagline ?? item.tagline}
        </p>

        <h3 className="mb-4 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-purple-300">
          {translation?.title ?? item.title}
        </h3>

        <p className="text-sm leading-7 text-zinc-400">
          {translation?.description ?? item.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">
        {item.path ? (
          <Link
            to="/projetos/financas-pessoais"
            className="text-xs font-semibold text-white transition-colors hover:text-purple-400"
          >
            {en ? "View project" : "Conhecer projeto"}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        ) : item.slug ? (
          <Link
            to="/projetos/$slug"
            params={{ slug: item.slug }}
            className="text-xs font-semibold text-white transition-colors hover:text-purple-400"
          >
            {en ? "View project" : "Conhecer projeto"}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        ) : null}

        {item.repo && (
          <a
            href={item.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 transition-colors hover:text-purple-400"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function ProjectsCarousel() {
  const { language } = useLanguage();
  const en = language === "en";

  const items: Item[] = [
    FINANCIAL_PROJECT,

    ...PROJETOS.map((project) => ({
      n: project.n,
      title: project.title,
      tagline: project.tagline,
      description: project.description,
      tags: project.tags,
      slug: project.slug,
      repo: project.repo,
      featured: project.slug === "pr-gerencia-menu",
    })),
  ].sort((a, b) => a.n.localeCompare(b.n));

  return (
    <section
      id="projetos"
      className="scroll-mt-24 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-10 md:pt-14 pb-10 md:pb-14"
    >
      <div className="mb-10 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-7 lg:gap-14">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-purple-500 mb-3">
            {en
              ? "Projects, Ideas & Solutions"
              : "Projetos, ideias e soluções"}
          </p>

          <h2 className="font-moderno text-4xl text-white sm:text-5xl md:text-5xl">
            {en ? "Featured Projects" : "Projetos em destaque"}
            <span className="text-purple-500">.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-zinc-400">
            {en
              ? "A collection of projects built around practical challenges, learning experiences, and real-world needs. These solutions explore application development, databases, automation, and business logic, focusing on turning problems into functional solutions."
              : "Reúno projetos desenvolvidos a partir de desafios práticos, estudos e necessidades reais, explorando diferentes possibilidades da tecnologia. As soluções envolvem desenvolvimento de aplicações, banco de dados, automação e lógica de negócio, com foco em transformar problemas em soluções funcionais."}
          </p>

          <span className="self-end whitespace-nowrap font-mono text-xs text-zinc-500">
            {String(items.length).padStart(2, "0")}{" "}
            {en ? "projects" : "projetos"}
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {items.map((item) => (
          <ProjectCard
            key={item.n}
            item={item}
            en={en}
          />
        ))}
      </div>
    </section>
  );
}
