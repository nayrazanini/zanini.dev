import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BSYIPaNG.mjs";
import { A as ARTIGOS } from "./router-D66Jqb45.mjs";
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
function ArtigosPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-5 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium", children: "Artigos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl font-medium leading-tight", children: [
        "Escrevendo o que",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-terracotta", children: "estudo" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Artigos sobre tecnologia, dados e as experiências que moldam minha trajetória — da pós-graduação em Engenharia de Software (UNIP) à rotina de estudos e ao desenvolvimento pessoal. Escrever é a forma que encontrei de consolidar o aprendizado." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-4xl px-5 sm:px-6 pb-16 sm:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60 border-y border-border/60", children: ARTIGOS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/artigos/$slug", params: {
      slug: a.slug
    }, className: "group grid md:grid-cols-[140px_1fr_auto] gap-2 md:gap-6 py-5 sm:py-6 items-baseline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground", children: a.subject }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg sm:text-xl md:text-2xl font-medium leading-snug group-hover:text-terracotta transition-colors", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] sm:text-sm text-muted-foreground leading-relaxed", children: a.summary })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] sm:text-xs font-mono text-terracotta whitespace-nowrap", children: [
        a.date,
        " →"
      ] })
    ] }) }, a.slug)) }) })
  ] });
}
export {
  ArtigosPage as component
};
