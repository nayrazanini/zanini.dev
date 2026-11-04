import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-C0XWAsMS.mjs";
import { P as PROJETOS } from "./router-C72GfQ7P.mjs";
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
const FINANCAS = {
  n: "04",
  title: "financas-pessoais",
  tagline: "Aplicação full-stack + SQL Server",
  description: "Sistema de controle financeiro pessoal com autenticação, lançamentos, orçamentos e dashboard. Toda a escrita passa por stored procedures em T-SQL, com views de consolidação e app em Next.js 15. Disponível também como app utilizável aqui no site.",
  tags: ["SQL Server", "T-SQL", "Next.js", "TypeScript"],
  path: "/projetos/financas-pessoais",
  cta: "Ver case study e abrir o app"
};
const CARDS = [...PROJETOS.map((p) => ({
  n: p.n,
  title: p.title,
  tagline: p.tagline,
  description: p.description,
  tags: p.tags,
  slug: p.slug,
  cta: p.appPath ? "Ver case study e abrir o app" : "Ver case study"
})), FINANCAS].sort((a, b) => a.n.localeCompare(b.n));
const cardClass = "group grid grid-cols-[auto_1fr_auto] md:grid-cols-[100px_1fr_auto] gap-4 md:gap-6 p-5 sm:p-8 rounded-2xl bg-card border border-border/60 hover:border-terracotta/50 hover:shadow-hover transition-all";
function CardBody({
  p
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl text-terracotta shrink-0", children: p.n }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm uppercase tracking-wider text-muted-foreground", children: p.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-display text-lg sm:text-2xl md:text-3xl font-medium group-hover:text-terracotta transition-colors break-words", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 sm:mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl", children: p.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-paper-deep border border-border/60 font-mono", children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs sm:text-sm text-terracotta font-medium", children: [
        p.cta,
        " →"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-start text-terracotta group-hover:translate-x-1 transition-transform text-xl md:text-2xl shrink-0", children: "→" })
  ] });
}
function ProjetosPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium", children: "Projetos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl font-medium leading-tight", children: [
        "Coisas que construí",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-terracotta", children: "na prática" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Cada projeto tem uma página própria com o problema, as decisões técnicas, o modelo de dados e o que aprendi no caminho." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 sm:px-6 pb-16 sm:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:gap-6", children: CARDS.map((p) => p.path ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos/financas-pessoais", className: cardClass, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { p }) }, p.title) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos/$slug", params: {
        slug: p.slug
      }, className: cardClass, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { p }) }, p.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-12 text-sm text-muted-foreground", children: [
        "Mais código no meu",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/nayrazanini", target: "_blank", rel: "noreferrer", className: "text-terracotta underline underline-offset-4 hover:opacity-80", children: "GitHub" }),
        "."
      ] })
    ] })
  ] });
}
export {
  ProjetosPage as component
};
