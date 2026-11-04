import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BSYIPaNG.mjs";
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
import "./router-D66Jqb45.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const REPO = "https://github.com/nayrazanini/financas-pessoais";
const STACK = ["SQL Server 2022", "T-SQL", "Stored Procedures", "Views", "CTEs & Window Functions", "Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Zod", "JWT (jose)", "Docker Compose", "GitHub Actions"];
const HIGHLIGHTS = [{
  n: "01",
  title: "Toda escrita via stored procedure",
  text: "Nenhum INSERT, UPDATE ou DELETE parte da aplicação. As 11 procedures concentram as regras de negócio no banco, com validação de propriedade do dado, transações explícitas e MERGE idempotente para orçamentos."
}, {
  n: "02",
  title: "Leitura por views de consolidação",
  text: "Saldos por conta, resumo mensal por categoria e acompanhamento de orçamento saem de views versionadas — a aplicação não remonta agregações no código."
}, {
  n: "03",
  title: "Consultas analíticas de portfólio",
  text: "Arquivo dedicado com CTEs, LAG para variação mês a mês, DENSE_RANK para maiores gastos e running total de saldo acumulado."
}, {
  n: "04",
  title: "Autenticação e isolamento de dados",
  text: "Senha com bcrypt, sessão em JWT httpOnly e middleware protegendo as rotas privadas. Toda procedure recebe o UsuarioId e recusa dados de terceiros."
}];
const SCHEMA = [{
  table: "Usuario",
  desc: "Credenciais e perfil, com e-mail único."
}, {
  table: "Conta",
  desc: "Contas do usuário (corrente, poupança, carteira) e saldo inicial."
}, {
  table: "Categoria",
  desc: "Categorias de receita e despesa, por usuário."
}, {
  table: "Transacao",
  desc: "Lançamentos com conta, categoria, tipo, valor e data."
}, {
  table: "Orcamento",
  desc: "Limite mensal por categoria, com chave única (usuário, categoria, mês)."
}];
const MODULES = [{
  title: "Dashboard",
  text: "Saldo consolidado, receitas e despesas do mês e evolução por categoria — em um único round-trip com múltiplos recordsets."
}, {
  title: "Lançamentos",
  text: "Cadastro, listagem paginada (OFFSET/FETCH) e exclusão de transações, com filtros por período e tipo."
}, {
  title: "Orçamentos",
  text: "Definição de limite mensal por categoria e acompanhamento do percentual consumido."
}];
function FinancasPessoaisPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-4xl px-5 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos", className: "text-sm text-muted-foreground hover:text-terracotta transition-colors", children: "← Projetos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-5 sm:mt-6 pb-6 sm:pb-8 border-b border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] sm:text-xs uppercase tracking-[0.2em] text-terracotta font-medium", children: "Case study · Aplicação full-stack + SQL Server" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-5xl font-medium leading-tight break-words", children: "financas-pessoais" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl", children: "Sistema de controle financeiro pessoal desenhado para provar, na prática, modelagem relacional e T-SQL de produção: o banco guarda as regras de negócio e a aplicação só orquestra." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos/financas-pessoais/app", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-plum-radial text-white text-sm font-medium hover:opacity-90 transition-opacity", children: "Abrir o app →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: REPO, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 text-sm font-medium hover:border-terracotta/50 hover:text-terracotta transition-colors", children: "Ver código no GitHub ↗" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `${REPO}/tree/main/sql`, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 text-sm font-medium hover:border-terracotta/50 hover:text-terracotta transition-colors", children: "Scripts SQL ↗" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-2xl font-semibold tracking-tight text-white", children: "O problema" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed", children: "Planilhas de controle financeiro quebram por três motivos: não garantem integridade, não têm histórico confiável e não respondem perguntas analíticas sem retrabalho manual. A proposta foi resolver isso com um banco relacional bem modelado e uma interface enxuta o suficiente para o uso diário." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-2xl font-semibold tracking-tight text-white", children: "Decisões de arquitetura" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 sm:gap-5", children: HIGHLIGHTS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr] gap-4 p-5 rounded-2xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl md:text-2xl text-terracotta", children: h.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base sm:text-lg font-medium", children: h.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-foreground/85 leading-relaxed", children: h.text })
        ] })
      ] }, h.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-2xl font-semibold tracking-tight text-white", children: "Modelo de dados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border/60 border-y border-border/60", children: SCHEMA.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-terracotta sm:w-32 shrink-0", children: s.table }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/85 leading-relaxed", children: s.desc })
      ] }, s.table)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground leading-relaxed", children: [
        "Constraints, índices de apoio às consultas por período e trigger de validação de valores acompanham o schema em",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "sql/01_schema.sql" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-2xl font-semibold tracking-tight text-white", children: "Módulos da aplicação" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 sm:grid-cols-3", children: MODULES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base sm:text-lg font-medium", children: m.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-foreground/85 leading-relaxed", children: m.text })
      ] }, m.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-2xl font-semibold tracking-tight text-white", children: "Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-1.5 sm:gap-2", children: STACK.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full bg-paper-deep border border-border/60 font-mono", children: t }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-2xl font-semibold tracking-tight text-white", children: "Engenharia de software" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed", children: [
        "O repositório traz ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "docker-compose.yml" }),
        " para subir o SQL Server localmente, scripts SQL numerados e idempotentes, validação de entrada com Zod nas Server Actions, pipeline de CI no GitHub Actions (typecheck, lint e build) e as decisões registradas em",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "docs/DECISOES.md" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row gap-4 sm:items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos", className: "text-sm text-muted-foreground hover:text-terracotta transition-colors", children: "← Todos os projetos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: REPO, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-terracotta underline underline-offset-4 hover:opacity-80", children: "github.com/nayrazanini/financas-pessoais ↗" })
    ] })
  ] }) });
}
export {
  FinancasPessoaisPage as component
};
