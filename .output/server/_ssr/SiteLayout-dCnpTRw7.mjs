import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLanguage } from "./router-65lqO_XI.mjs";
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/nayrazanini" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nayra-zanini/" },
  { label: "Instagram", href: "https://instagram.com/nazanini_" }
];
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayoutContent, { children });
}
function SiteLayoutContent({ children }) {
  const { language, setLanguage } = useLanguage();
  const en = language === "en";
  const navLinks = [
    { label: en ? "Home" : "Início", href: "/#inicio" },
    { label: en ? "Projects" : "Projetos", href: "/#projetos" },
    { label: en ? "About" : "Sobre", href: "/#sobre" },
    { label: en ? "Experience" : "Experiência", href: "/#experiencia" },
    { label: en ? "Articles" : "Artigos", href: "/#artigos" }
  ];
  function handleSectionNavigation(event, href) {
    const sectionId = href.split("#")[1];
    if (window.location.pathname === "/" && sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        event.preventDefault();
        window.history.replaceState(null, "", `/#${sectionId}`);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-paper text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 min-h-[64px] flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/#inicio",
          onClick: (event) => handleSectionNavigation(event, "/#inicio"),
          className: "font-display text-xl font-semibold tracking-tight text-ink whitespace-nowrap",
          "aria-label": en ? "Go to homepage" : "Ir para a página inicial",
          children: [
            "nayra",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta", children: ".dev" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-3 sm:gap-5 lg:gap-7 overflow-x-auto", children: [
        navLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.href,
            onClick: (event) => handleSectionNavigation(event, item.href),
            className: "whitespace-nowrap text-xs sm:text-sm text-muted-foreground hover:text-ink transition-colors",
            children: item.label
          },
          item.href
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/CV_Nayra_Zanini.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "whitespace-nowrap text-xs sm:text-sm text-muted-foreground hover:text-terracotta transition-colors",
            children: "CV ↗"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 border-l border-border/60 pl-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setLanguage("pt"),
              "aria-label": "Português",
              "aria-pressed": !en,
              className: `text-xs transition-colors ${!en ? "text-terracotta font-semibold" : "text-muted-foreground hover:text-ink"}`,
              children: "PT"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setLanguage("en"),
              "aria-label": "English",
              "aria-pressed": en,
              className: `text-xs transition-colors ${en ? "text-terracotta font-semibold" : "text-muted-foreground hover:text-ink"}`,
              children: "EN"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-ink text-base font-semibold", children: [
          "nayra",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta", children: ".dev" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Náyra Zanini"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Think. Query. Build." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-5", children: SOCIAL_LINKS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm text-muted-foreground hover:text-terracotta transition-colors",
          children: [
            item.label,
            " ↗"
          ]
        },
        item.label
      )) })
    ] }) }) })
  ] });
}
export {
  SiteLayout as S
};
