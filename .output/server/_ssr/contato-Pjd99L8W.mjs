import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-dCnpTRw7.mjs";
import "./router-65lqO_XI.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const CHANNELS = [{
  label: "Email",
  value: "zanini.n@outlook.com.br",
  href: "mailto:zanini.n@outlook.com.br"
}, {
  label: "LinkedIn",
  value: "linkedin.com/in/nayra-zanini",
  href: "https://linkedin.com/in/nayra-zanini/"
}, {
  label: "GitHub",
  value: "github.com/nayrazanini",
  href: "https://github.com/nayrazanini"
}, {
  label: "Instagram",
  value: "@nazanini_",
  href: "https://instagram.com/nazanini_"
}, {
  label: "WhatsApp",
  value: "(11) 9.8136-8778",
  href: "https://wa.me/5511981368778"
}];
function ContatoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-5 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium", children: "Contato" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-7xl font-medium leading-tight", children: [
      "Vamos",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-terracotta", children: "conversar" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Estou aberta a oportunidades como programadora Jr., analista de dados, QA ou áreas adjacentes em tecnologia. Se você acha que posso contribuir com seu time, me chame por qualquer canal abaixo." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 sm:mt-14 grid sm:grid-cols-2 gap-3 sm:gap-4", children: CHANNELS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "group p-4 sm:p-6 rounded-2xl border border-border/60 bg-card hover:border-terracotta/50 hover:shadow-hover transition-all flex items-center justify-between gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm uppercase tracking-wider text-muted-foreground", children: c.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-base sm:text-xl group-hover:text-terracotta transition-colors break-all", children: c.value })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta text-xl group-hover:translate-x-1 transition-transform shrink-0", children: "→" })
    ] }, c.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-plum-radial text-white shadow-hover", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg sm:text-2xl leading-snug", children: '"Estou escrevendo um novo capítulo da minha trajetória com coragem, resiliência e uma vontade genuína de fazer a diferença na área de tecnologia."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 sm:mt-4 text-white/60 text-xs sm:text-sm", children: "— Náyra Zanini" })
    ] })
  ] }) });
}
export {
  ContatoPage as component
};
