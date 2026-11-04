import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-B87gtef5.mjs";
import { R as Route$7, A as ARTIGOS } from "./router-C4pOjrFG.mjs";
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
function ArtigoPage() {
  const {
    artigo
  } = Route$7.useLoaderData();
  const currentIndex = ARTIGOS.findIndex((a) => a.slug === artigo.slug);
  const prev = currentIndex > 0 ? ARTIGOS[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < ARTIGOS.length - 1 ? ARTIGOS[currentIndex + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl px-5 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/artigos", className: "text-sm text-muted-foreground hover:text-terracotta transition-colors", children: "← Artigos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-5 sm:mt-6 pb-6 sm:pb-8 border-b border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] sm:text-xs uppercase tracking-[0.2em] text-terracotta font-medium", children: artigo.subject }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-5xl font-medium leading-tight", children: artigo.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground font-mono", children: [
        "Publicado em ",
        artigo.date
      ] }),
      artigo.externalUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: artigo.externalUrl, target: "_blank", rel: "noopener noreferrer", className: "mt-2 inline-flex items-center gap-1 text-xs sm:text-sm text-terracotta underline underline-offset-4 hover:opacity-80 transition-opacity", children: "Ler também no LinkedIn ↗" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-[15px] sm:text-base md:text-lg leading-relaxed text-foreground/90", children: artigo.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed italic", children: artigo.footer }),
    (prev || next) && /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-12 grid sm:grid-cols-2 gap-4", children: [
      prev ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/artigos/$slug", params: {
        slug: prev.slug
      }, className: "p-5 rounded-2xl border border-border/60 hover:border-terracotta/50 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "← Anterior" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg group-hover:text-terracotta", children: prev.title })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
      next ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/artigos/$slug", params: {
        slug: next.slug
      }, className: "p-5 rounded-2xl border border-border/60 hover:border-terracotta/50 transition-colors text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Próximo →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg", children: next.title })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
    ] })
  ] }) });
}
export {
  ArtigoPage as component
};
