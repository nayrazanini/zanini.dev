import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-dCnpTRw7.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useLanguage, P as PROJETOS } from "./router-65lqO_XI.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const PROJECT_TRANSLATIONS = {
  "financas-pessoais": {
    title: "PERSONAL FINANCE TRACKER",
    tagline: "Full-stack application + SQL Server",
    description: "A personal finance management application designed to organize and monitor financial information through a practical experience."
  },
  "pr-gerencia-menu": {
    title: "PR_GERENCIA_MENU",
    tagline: "Dynamic menu manager in T-SQL",
    description: "A SQL Server procedure that dynamically creates menu structures for different systems, handling hierarchical menus, access profiles, and transactional operations."
  },
  "ponto-sql-server": {
    title: "TIME TRACKING SYSTEM",
    tagline: "Time tracking system with SQL Server",
    description: "A SQL Server project for employee records, clock-in and clock-out operations, business rules, and attendance reports."
  },
  "estoque-sql-server": {
    title: "INVENTORY MANAGEMENT",
    tagline: "Inventory management with SQL Server",
    description: "A relational inventory project using SQL Server, with data modeling, relationships, stored procedures, and T-SQL scripts for stock movements."
  }
};
function ProjectCard({ project, en }) {
  const translation = en ? PROJECT_TRANSLATIONS[project.slug] : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-terracotta", children: project.n }),
      project.slug === "pr-gerencia-menu" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-terracotta", children: en ? "Featured project" : "Projeto em destaque" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: translation?.tagline ?? project.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-terracotta", children: translation?.title ?? project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-7 text-foreground/75", children: translation?.description ?? project.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: project.tags.slice(0, 5).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "rounded-full border border-border/60 bg-paper-deep px-3 py-1.5 font-mono text-[10px] text-muted-foreground",
        children: tag
      },
      tag
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-5 border-t border-border/60 pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/projetos/$slug",
          params: { slug: project.slug },
          className: "text-xs font-semibold text-foreground transition-colors hover:text-terracotta",
          children: [
            en ? "View project" : "Conhecer projeto",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "↗" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: project.repo,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs text-muted-foreground transition-colors hover:text-terracotta",
          children: [
            "GitHub ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "↗" })
          ]
        }
      )
    ] })
  ] });
}
function ProjectsCarousel() {
  const { language } = useLanguage();
  const en = language === "en";
  const items = [...PROJETOS].sort((a, b) => a.n.localeCompare(b.n));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "projetos",
      className: "mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-10 pt-10 sm:px-8 md:pb-14 md:pt-14 lg:px-10",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1.25fr] lg:gap-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.2em] text-terracotta", children: en ? "Projects, Ideas & Solutions" : "Projetos, ideias e soluções" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-moderno text-4xl text-foreground sm:text-5xl", children: [
              en ? "Featured Projects" : "Projetos em destaque",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base", children: en ? "A collection of projects built around practical challenges, learning experiences, and real-world needs. These solutions explore application development, databases, automation, and business logic." : "Reúno projetos desenvolvidos a partir de desafios práticos, estudos e necessidades reais. As soluções envolvem desenvolvimento de aplicações, banco de dados, automação e lógica de negócio, com foco em transformar problemas em soluções funcionais." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "self-end whitespace-nowrap font-mono text-xs text-muted-foreground", children: [
              String(items.length).padStart(2, "0"),
              " ",
              en ? "projects" : "projetos"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6", children: items.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, en }, project.slug)) })
      ]
    }
  );
}
const SECTION_TITLE = "font-moderno text-3xl md:text-4xl tracking-[0.08em] leading-tight text-ink";
const SECTION_LABEL = "text-[11px] uppercase tracking-[0.18em] text-terracotta mb-2";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IndexContent, {}) });
}
function IndexContent() {
  const {
    language
  } = useLanguage();
  const en = language === "en";
  const education = en ? [{
    title: "Postgraduate Degree in Software Engineering",
    place: "UNIP · Completed: April 2026"
  }, {
    title: "Associate Degree in Systems Analysis and Development",
    place: "UNIP · Completed: December 2024"
  }, {
    title: "Bachelor's Degree in Business Administration — IT Focus",
    place: "FIAP · Completed: December 2014"
  }] : [{
    title: "Pós-graduação em Engenharia de Software",
    place: "UNIP · Conclusão: abril/2026"
  }, {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    place: "UNIP · Conclusão: dezembro/2024"
  }, {
    title: "Bacharelado em Administração — Ênfase em TI",
    place: "FIAP · Conclusão: dezembro/2014"
  }];
  const certifications = en ? [{
    name: "Scrum Fundamentals Certified (SFC™)",
    issuer: "ScrumStudy",
    date: "01/2026"
  }, {
    name: "Kanban Foundation Certification (KBFC™)",
    issuer: "Certiprof",
    date: "12/2025"
  }, {
    name: "Relational Databases (SQL)",
    issuer: "DIO",
    date: "08/2025"
  }, {
    name: "Programming Logic Training",
    issuer: "DIO",
    date: "07/2025"
  }] : [{
    name: "Scrum Fundamentals Certified (SFC™)",
    issuer: "ScrumStudy",
    date: "01/2026"
  }, {
    name: "Kanban Foundation Certification (KBFC™)",
    issuer: "Certiprof",
    date: "12/2025"
  }, {
    name: "Banco de Dados Relacionais (SQL)",
    issuer: "DIO",
    date: "08/2025"
  }, {
    name: "Formação em Lógica de Programação",
    issuer: "DIO",
    date: "07/2025"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "inicio", className: "scroll-mt-24 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-10 md:pt-14 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.18em] text-white mb-4", children: en ? "Technology · Development" : "Tecnologia · Desenvolvimento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-moderno text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink uppercase max-w-full", children: [
        "Think.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta", children: " Query." }),
        " ",
        "Build."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-sm md:text-[15px] text-muted-foreground leading-relaxed", children: en ? "Projects, data, and solutions built from real-world problems, business logic, and technology." : "Projetos, dados e soluções desenvolvidos a partir de problemas reais, lógica de negócio e tecnologia." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsCarousel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "scroll-mt-24 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[0.75fr_1.25fr] gap-7 lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: SECTION_LABEL, children: en ? "Get to know my journey" : "Conheça minha trajetória" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: SECTION_TITLE, children: en ? "About me" : "Sobre mim" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "I am a technology professional with experience in enterprise systems, ERP support, and databases, mainly working in the education sector." : "Sou profissional de tecnologia, com experiência em sistemas corporativos, sustentação de ERP e banco de dados, atuando principalmente no ambiente educacional." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "My journey at Universidade Paulista gave me in-depth knowledge of academic processes and the Lyceum ERP. This experience also contributed to my transition into software development, connecting functional knowledge with technical solutions." : "Minha trajetória na Universidade Paulista me proporcionou conhecimento aprofundado dos processos acadêmicos e do ERP Lyceum. Essa experiência também contribuiu para minha transição profissional para a área de desenvolvimento, aproximando o conhecimento funcional das soluções técnicas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "I currently work as a Junior Programmer, focusing on SQL Server and T-SQL, working with queries, Views, Stored Procedures, data analysis, inconsistency investigation, and systems support." : "Atualmente, atuo como Programadora Júnior, com foco em SQL Server e T-SQL, trabalhando com consultas, Views, Stored Procedures, análise de dados, investigação de inconsistências e sustentação de sistemas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "I am interested in software development, data engineering, continuous improvement, and solutions that connect technology to real business needs." : "Tenho interesse em desenvolvimento de software, engenharia de dados, melhoria contínua e soluções que conectem tecnologia às necessidades reais do negócio." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: (en ? ["SQL Server", "T-SQL", "Lyceum ERP", "Systems Support", "Software Engineering", "Scrum", "Kanban"] : ["SQL Server", "T-SQL", "ERP Lyceum", "Sustentação de Sistemas", "Engenharia de Software", "Scrum", "Kanban"]).map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground", children: skill }, skill)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experiencia", className: "scroll-mt-24 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: SECTION_LABEL, children: en ? "My journey" : "Minha trajetória" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: SECTION_TITLE, children: en ? "Professional Experience" : "Experiência profissional" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 lg:gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-semibold text-ink mb-3", children: en ? "Where It All Began" : "Onde tudo começou" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "My journey at Universidade Paulista began in 2015, working with academic and administrative processes. It was there that I built solid experience with the Lyceum ERP and the daily operations of an educational institution." : "Minha trajetória na Universidade Paulista começou em 2015, em uma atuação voltada aos processos acadêmicos e administrativos. Foi nesse ambiente que construí uma experiência sólida com o ERP Lyceum e com as rotinas de uma instituição de ensino." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "Daily contact with systems, academic information, and requests from different departments sparked my interest in understanding how technology works behind these processes." : "O contato diário com sistemas, informações acadêmicas e demandas de diferentes áreas despertou meu interesse em compreender melhor como a tecnologia funciona por trás dos processos." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "Rather than simply using systems, I began to see opportunities to analyze, question, and improve how they meet business needs." : "Mais do que utilizar sistemas, passei a enxergar as possibilidades de analisar, questionar e melhorar a maneira como eles atendem às necessidades do negócio." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-semibold text-ink mb-3", children: en ? "Between Processes and Technology" : "Entre processos e tecnologia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "The desire to deepen my knowledge led me to pursue a degree in Systems Analysis and Development, beginning a new stage in my professional journey." : "A vontade de aprofundar meus conhecimentos me levou à formação em Análise e Desenvolvimento de Sistemas, iniciando uma nova etapa da minha trajetória profissional." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "Throughout this journey, I connected my experience in the education sector with technical knowledge in SQL Server, queries, data analysis, functional testing, and inconsistency investigation." : "Ao longo dessa jornada, aproximei minha experiência com o ambiente educacional de conhecimentos técnicos em SQL Server, consultas, análise de dados, testes funcionais e investigação de inconsistências." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "Later, my postgraduate studies in Software Engineering broadened my perspective on development, quality, architecture, and the processes involved in building solutions." : "Posteriormente, a pós-graduação em Engenharia de Software ampliou minha perspectiva sobre desenvolvimento, qualidade, arquitetura e processos envolvidos na construção de soluções." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-semibold text-ink mb-3", children: en ? "Development in Practice" : "Desenvolvimento em prática" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "I currently work as a Junior Programmer at Universidade Paulista, combining the functional knowledge I have gained over the years with technical work on enterprise systems." : "Atualmente, atuo como Programadora Júnior na Universidade Paulista, unindo o conhecimento funcional adquirido ao longo dos anos à atuação técnica em sistemas corporativos." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "My work involves SQL Server and T-SQL, developing and maintaining queries, Views, and Stored Procedures, as well as analyzing business rules and investigating incidents in the Lyceum ERP." : "Meu trabalho envolve SQL Server e T-SQL, desenvolvimento e manutenção de consultas, Views e Stored Procedures, além da análise de regras de negócio e investigação de incidentes no ERP Lyceum." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "I also participate in functional testing and correction validation, aiming to understand problems in depth and contribute to consistent solutions aligned with users' needs." : "Também participo de testes funcionais e validações de correções, buscando compreender os problemas em profundidade e contribuir para soluções consistentes e alinhadas às necessidades dos usuários." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "formacao", className: "scroll-mt-24 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: SECTION_LABEL, children: en ? "Continuous Learning" : "Aprendizado contínuo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `${SECTION_TITLE} mb-5`, children: en ? "Education" : "Formação acadêmica" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60 border-y border-border/60", children: education.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-snug text-ink", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: item.place })
        ] }, item.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: SECTION_LABEL, children: en ? "Professional Development" : "Desenvolvimento profissional" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `${SECTION_TITLE} mb-5`, children: en ? "Certifications & Learning" : "Certificações e Estudo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60 border-y border-border/60", children: certifications.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-snug text-ink", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: item.issuer })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-terracotta whitespace-nowrap", children: item.date })
        ] }, item.name)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "artigos", className: "scroll-mt-24 border-y border-border/60 bg-background/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[0.75fr_1.25fr] gap-7 lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: SECTION_LABEL, children: en ? "Knowledge Sharing" : "Compartilhamento de conhecimento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: SECTION_TITLE, children: en ? "Articles" : "Artigos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground", children: en ? "Thoughts, studies, and content related to technology and software engineering." : "Reflexões, estudos e conteúdos relacionados à tecnologia e à engenharia de software." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border/60 rounded-xl p-5 md:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.15em] text-terracotta mb-2", children: en ? "Software Engineering" : "Engenharia de Software" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-semibold text-ink leading-snug", children: en ? "Evolution, Quality, and Challenges in Software Engineering" : "Evolução, Qualidade e Desafios da Engenharia de Software" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground", children: en ? "A reflection on the evolution of software engineering, the importance of quality, and the challenges involved in developing technological solutions." : "Uma reflexão sobre a evolução da engenharia de software, a importância da qualidade e os desafios envolvidos no desenvolvimento de soluções tecnológicas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: en ? "External publication" : "Publicação externa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex mt-3 text-xs text-muted-foreground", children: en ? "Reading link being updated." : "Link de leitura em atualização." })
      ] })
    ] }) }) })
  ] });
}
export {
  Index as component
};
