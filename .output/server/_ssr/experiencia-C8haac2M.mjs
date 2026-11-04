import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-B87gtef5.mjs";
import "./router-C4pOjrFG.mjs";
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
const CV_URL = "/Curriculo_Nayra_Zanini_2026.pdf";
const JOBS = [{
  role: "Programadora Jr.",
  company: "Universidade Paulista (UNIP)",
  period: "Set/2025 — Atual",
  bullets: ["Desenvolvimento e otimização de consultas SQL Server (T-SQL)", "Análise e tratamento de inconsistências em bases de dados", "Validação de regras de negócio e testes funcionais", "Sustentação e melhoria contínua de processos sistêmicos"]
}, {
  role: "Assistente Administrativo Jr.",
  company: "Universidade Paulista (UNIP)",
  period: "2015 — Set/2025",
  bullets: ["Manipulação e validação de grandes volumes de dados acadêmicos", "Desenvolvimento de planilhas automatizadas para cálculo de notas", "Automação e padronização de rotinas administrativas", "Implementação de soluções colaborativas com OneDrive e SharePoint", "Suporte técnico e testes funcionais em sistemas acadêmicos"]
}];
const SKILLS = {
  "Competências Técnicas": ["SQL Server", "Modelagem Relacional", "Análise de Sistemas", "Engenharia de Requisitos", "Testes Funcionais", "Homologação", "UML", "BPMN", "Automação de Processos", "Scrum", "Kanban"],
  "Em desenvolvimento": ["JavaScript", "Git / GitHub", "HTML / CSS", "Fundamentos DevOps", "Procedures", "Otimização SQL"],
  Idiomas: ["Inglês — Intermediário (B2)"]
};
function ExperienciaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium", children: "Currículo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl font-medium leading-tight", children: "Experiência & formação." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Mais de 10 anos atuando na UNIP — da área administrativa à equipe técnica — somados a uma formação contínua em desenvolvimento de sistemas e engenharia de software." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 sm:mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: CV_URL, download: "Curriculo_Nayra_Zanini_2026.pdf", className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-terracotta/40 bg-terracotta/10 text-terracotta text-sm font-medium hover:bg-terracotta/20 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Baixar currículo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "↓" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 sm:px-6 py-8 sm:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-medium mb-6 sm:mb-10", children: "Experiência profissional" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 sm:space-y-10", children: JOBS.map((job) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-[200px_1fr] gap-3 md:gap-6 pb-8 sm:pb-10 border-b border-border/60 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-terracotta text-sm", children: job.period }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl font-medium", children: job.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-muted-foreground mt-1", children: job.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-foreground/90", children: job.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta mt-2 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, b)) })
        ] })
      ] }, job.role + job.period)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 sm:px-6 py-8 sm:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-medium mb-6 sm:mb-10", children: "Competências" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8", children: Object.entries(SKILLS).map(([group, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base sm:text-lg font-medium text-terracotta mb-3 sm:mb-4", children: group }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm bg-paper-deep border border-border/60", children: s }, s)) })
      ] }, group)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 py-12 pb-24" })
  ] });
}
export {
  ExperienciaPage as component
};
