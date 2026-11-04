import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-B87gtef5.mjs";
import { a as Route$4, u as useLanguage, P as PROJETOS } from "./router-C4pOjrFG.mjs";
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
    description: "A personal finance management application designed to organize and monitor financial information through a practical experience.",
    problem: "Spreadsheets do not guarantee data integrity, preserve a reliable history, or make analysis easy without manual work. The project addresses these limitations with a relational database and a practical interface for everyday use.",
    highlights: [{
      n: "01",
      title: "Writes handled by stored procedures",
      text: "Create, update, and delete operations are centralized in stored procedures, keeping business rules in the database with ownership validation and explicit transactions."
    }, {
      n: "02",
      title: "Read operations through consolidated views",
      text: "Account balances, monthly category summaries, and budget tracking are exposed through views, avoiding repeated aggregation logic in the application."
    }, {
      n: "03",
      title: "Analytical queries",
      text: "The project includes CTEs, LAG for period comparisons, DENSE_RANK for expense rankings, and running totals."
    }, {
      n: "04",
      title: "Authentication and data isolation",
      text: "The application uses bcrypt password hashing, httpOnly JWT sessions, and protected private routes. Database operations also scope data to the authenticated user."
    }],
    model: [{
      label: "Usuario",
      desc: "User credentials and profile, with a unique email."
    }, {
      label: "Conta",
      desc: "User accounts and opening balances."
    }, {
      label: "Categoria",
      desc: "Income and expense categories by user."
    }, {
      label: "Transacao",
      desc: "Entries associated with account, category, type, amount, and date."
    }, {
      label: "Orcamento",
      desc: "Monthly category budgets by user."
    }],
    modules: [{
      title: "Dashboard",
      text: "Consolidated balance, monthly income and expenses, and category trends."
    }, {
      title: "Transactions",
      text: "Create, paginate, and delete transactions, with period and type filters."
    }, {
      title: "Budgets",
      text: "Set monthly category limits and track the percentage used."
    }],
    sections: [{
      title: "Software engineering",
      paragraphs: ["The repository includes docker-compose.yml for local SQL Server setup, numbered SQL scripts, and documented technical decisions.", "The application uses Zod input validation, JWT-based authentication, and a structure that separates the interface from persistence rules."]
    }, {
      title: "Database",
      paragraphs: ["The model uses constraints and indexes to support period-based queries. Balances and indicators are derived from financial records and consolidation queries.", "The repository contains schema, stored procedure, view, and analytical query scripts to reproduce the database."]
    }],
    learnings: ["Centralizing business rules in the database helps maintain consistency across operations.", "Views simplify recurring queries and separate read logic from the interface.", "Transactions and validations are essential to data integrity.", "Authentication and authorization must also be considered at the data-access layer."]
  },
  "pr-gerencia-menu": {
    title: "PR_GERENCIA_MENU",
    tagline: "Dynamic menu manager in T-SQL",
    description: "A parameterized SQL Server procedure that creates menu hierarchies, generates access profile codes safely under concurrency, and associates users in a single transactional operation. Based on a real project, with generic names.",
    problem: "Different systems shared catalogs of transactions, modules, and profiles, but maintained their own naming rules and menu trees. Nearly identical procedures increased maintenance effort and made access provisioning more prone to inconsistencies.",
    highlights: [{
      n: "01",
      title: "One procedure for multiple systems",
      text: "The system parameter centralizes differences in menu prefixes and profile rules while keeping validation, hierarchy creation, and error handling shared."
    }, {
      n: "02",
      title: "Safe access-profile code generation",
      text: "Code generation considers the existing sequence and uses sp_getapplock to protect the operation against race conditions during concurrent executions."
    }, {
      n: "03",
      title: "Validated hierarchy creation",
      text: "The procedure validates submenu levels, checks module existence, and creates missing levels inside a transaction using TRY/CATCH, XACT_ABORT, and XACT_STATE."
    }],
    model: [{
      label: "catalogo.TB_USUARIO",
      desc: "Users registered and shared across systems."
    }, {
      label: "catalogo.TB_MODULO",
      desc: "Modules registered for each system."
    }, {
      label: "catalogo.TB_TRANSACAO_MENU",
      desc: "Catalog of available screens and transactions."
    }, {
      label: "catalogo.TB_PERFIL_ACESSO",
      desc: "Access profiles generated by the procedure."
    }, {
      label: "catalogo.TB_PERFIL_TRANSACAO",
      desc: "Relationship between an access profile and a transaction."
    }, {
      label: "catalogo.TB_PERFIL_USUARIO",
      desc: "Association between access profiles and users."
    }, {
      label: "dbo.TB_MENU",
      desc: "Navigation tree maintained locally by each system."
    }],
    sections: [{
      title: "System-specific rules and shared logic",
      paragraphs: ["Each system may have its own menu-prefix and profile-generation conventions. The procedure centralizes these differences in parameterized rules instead of maintaining a separate copy for each system.", "The hierarchy is processed dynamically through a TABLE variable and loop, allowing different submenu depths without duplicating code blocks."]
    }, {
      title: "Return contract and error handling",
      paragraphs: ["The procedure uses explicit return codes to distinguish success, validation failures, a missing root menu when creation is not authorized, and unexpected technical errors.", "Operations are grouped in a transaction so that hierarchy creation and related associations are committed together or rolled back on failure."]
    }, {
      title: "Current state",
      paragraphs: ["This unified version replaces earlier implementations separated by system. The repository includes the demonstration database script, documented procedure, and execution examples.", "Table, system, and module names are generic. The logic and architecture reflect a real project developed in partnership."]
    }],
    learnings: ["Generating sequential codes under a lock prevents duplicate codes during concurrent executions.", "A parameterized procedure reduces duplication and centralizes maintenance.", "Separating shared catalogs from system-specific data improves reuse.", "Explicit return codes make procedures more predictable for their consumers."]
  },
  "ponto-sql-server": {
    title: "TIME TRACKING SYSTEM",
    tagline: "Time tracking system with SQL Server",
    description: "A SQL Server database project for employee records, clock-in and clock-out entries, business rules, and attendance reports.",
    problem: "Payroll closing depends on reliable time records. The project structures work schedules, time entries, and occurrences to support consistent calculations of worked hours, delays, and overtime.",
    highlights: [{
      n: "01",
      title: "Recorded hours versus expected schedule",
      text: "Each employee has a reference schedule. Time entries are compared against it to calculate worked hours, delays, and overtime."
    }, {
      n: "02",
      title: "Business rules in the database",
      text: "Stored procedures validate the sequence of time entries, preventing clock-outs without a previous clock-in and handling duplicate records."
    }, {
      n: "03",
      title: "Reports by period",
      text: "Queries support monthly attendance reports and summaries by department, employee, and date."
    }],
    model: [{
      label: "Funcionario",
      desc: "Employee records, department, and contracted schedule."
    }, {
      label: "Marcacao",
      desc: "Clock-in and clock-out records with date and time."
    }, {
      label: "Ocorrencia",
      desc: "Absences, approved leave, and justifications."
    }],
    sections: [{
      title: "T-SQL applied to date and time",
      paragraphs: ["The project addresses common attendance-system scenarios, including DATE versus DATETIME, overnight shifts, minute rounding, and monthly reporting periods.", "Queries use date functions, CASE expressions to classify occurrences, and conditional aggregations to separate regular hours from overtime."]
    }],
    learnings: ["Handling date and time values rigorously prevents silent discrepancies.", "Validating event sequences in the database is safer than relying only on the interface.", "Reports should be considered from the data-modeling stage."]
  },
  "estoque-sql-server": {
    title: "INVENTORY MANAGEMENT",
    tagline: "Inventory management with SQL Server",
    description: "A SQL Server inventory project with relational modeling, tables, relationships, stored procedures, and T-SQL scripts for product entries, exits, and queries.",
    problem: "Managing inventory in spreadsheets can lead to negative balances, untracked movements, and no guarantee that a stock deduction was completed correctly. The project uses a relational database to preserve history and prevent invalid states.",
    highlights: [{
      n: "01",
      title: "Relational data modeling",
      text: "Products, suppliers, movements, and users are organized in related tables, with foreign keys and constraints ensuring referential integrity."
    }, {
      n: "02",
      title: "Movements through stored procedures",
      text: "Incoming and outgoing movements are processed by stored procedures that validate available quantities within a transaction."
    }, {
      n: "03",
      title: "Balance derived from movements",
      text: "Current stock is derived from movement history through views, preserving traceability instead of manually overwriting a quantity."
    }],
    model: [{
      label: "Produto",
      desc: "Product records, units of measurement, and minimum stock."
    }, {
      label: "Fornecedor",
      desc: "Supplier information associated with incoming movements."
    }, {
      label: "Movimentacao",
      desc: "Incoming and outgoing movements with date, quantity, and responsible user."
    }],
    sections: [{
      title: "Queries supporting daily operations",
      paragraphs: ["In addition to registration operations, the project includes queries to identify products below minimum stock, analyze movements by period, and retrieve each product's movement history.", "Queries use JOINs, aggregations, and window functions, demonstrating the database as an analytical layer as well as a storage layer."]
    }],
    learnings: ["A well-defined constraint reduces duplicated validation in the application.", "Explicit transactions make stock movements more reliable.", "Numbered, idempotent scripts make the environment easier to reproduce."]
  }
};
function ProjetoPage() {
  const {
    projeto
  } = Route$4.useLoaderData();
  const {
    language
  } = useLanguage();
  const en = language === "en";
  const traducao = PROJECT_TRANSLATIONS[projeto.slug];
  const conteudo = en ? {
    ...projeto,
    ...traducao
  } : projeto;
  const outros = PROJETOS.filter((item) => item.slug !== projeto.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-4xl px-5 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "projetos", className: "text-sm text-muted-foreground transition-colors hover:text-terracotta", children: en ? "← All projects" : "← Todos os projetos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-5 border-b border-border/60 pb-6 sm:mt-6 sm:pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-medium uppercase tracking-[0.2em] text-terracotta sm:text-xs", children: [
        en ? "Case study" : "Estudo de projeto",
        " · ",
        conteudo.tagline
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 break-words font-display text-2xl font-medium leading-tight sm:mt-4 sm:text-3xl md:text-5xl", children: conteudo.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base", children: conteudo.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: conteudo.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full border border-border/60 bg-paper-deep px-3 py-1.5 font-mono text-[10px] sm:text-xs", children: tag }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
        conteudo.appPath && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: conteudo.appPath, className: "inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90", children: [
          en ? "Open application" : "Abrir o app",
          " →"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: conteudo.repo, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium transition-colors hover:border-terracotta/50 hover:text-terracotta", children: [
          en ? "View source on GitHub" : "Ver código no GitHub",
          " ↗"
        ] }),
        conteudo.sqlPath && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: conteudo.sqlPath, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium transition-colors hover:border-terracotta/50 hover:text-terracotta", children: [
          en ? "SQL scripts" : "Scripts SQL",
          " ↗"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg font-semibold tracking-tight text-white md:text-2xl", children: en ? "The challenge" : "O problema" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base", children: conteudo.problem })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg font-semibold tracking-tight text-white md:text-2xl", children: en ? "Architecture and key decisions" : "Decisões de arquitetura" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 sm:gap-5", children: conteudo.highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-terracotta md:text-2xl", children: item.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-medium sm:text-lg", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-foreground/85", children: item.text })
        ] })
      ] }, item.n)) })
    ] }),
    conteudo.model && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg font-semibold tracking-tight text-white md:text-2xl", children: en ? "Data model" : "Modelo de dados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border/60 border-y border-border/60", children: conteudo.model.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-mono text-sm text-terracotta sm:w-48", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-relaxed text-foreground/85", children: item.desc })
      ] }, item.label)) })
    ] }),
    conteudo.modules && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg font-semibold tracking-tight text-white md:text-2xl", children: en ? "Application modules" : "Módulos da aplicação" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 sm:grid-cols-3", children: conteudo.modules.map((module) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-medium sm:text-lg", children: module.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-foreground/85", children: module.text })
      ] }, module.title)) })
    ] }),
    conteudo.sections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg font-semibold tracking-tight text-white md:text-2xl", children: en ? "Technical details" : "Detalhes técnicos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-6", children: conteudo.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-medium sm:text-lg", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3", children: section.paragraphs.map((paragraph, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/85 sm:text-base", children: paragraph }, `${section.title}-${index}`)) })
      ] }, section.title)) })
    ] }),
    conteudo.learnings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg font-semibold tracking-tight text-white md:text-2xl", children: en ? "Key takeaways" : "Principais aprendizados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: conteudo.learnings.map((learning, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm leading-relaxed text-foreground/85 sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-terracotta", children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: learning })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-12 border-t border-border/60 pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: en ? "Keep exploring" : "Continue explorando" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-xl font-semibold text-white", children: en ? "Other projects" : "Outros projetos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 sm:grid-cols-3", children: outros.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projetos/$slug", params: {
        slug: item.slug
      }, className: "min-w-0 rounded-xl border border-border/60 p-4 transition-colors hover:border-terracotta/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: en ? PROJECT_TRANSLATIONS[item.slug]?.tagline ?? item.tagline : item.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 break-words font-display text-base text-white", children: en ? PROJECT_TRANSLATIONS[item.slug]?.title ?? item.title : item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 inline-block text-xs text-terracotta", children: en ? "View project →" : "Conhecer projeto →" })
      ] }, item.slug)) })
    ] })
  ] }) });
}
export {
  ProjetoPage as component
};
