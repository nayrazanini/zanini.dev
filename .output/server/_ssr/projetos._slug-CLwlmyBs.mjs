import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-B87gtef5.mjs";
import { u as useLanguage } from "./router-C4pOjrFG.mjs";
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
function ProjetoNotFound() {
  const {
    language
  } = useLanguage();
  const en = language === "en";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-24 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-terracotta", children: en ? "Projects" : "Projetos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-3xl font-medium md:text-5xl", children: en ? "Project not found." : "Projeto não encontrado." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-8 inline-flex items-center gap-2 text-terracotta underline underline-offset-4", children: en ? "← Back to home" : "← Voltar ao início" })
  ] }) });
}
export {
  ProjetoNotFound as notFoundComponent
};
