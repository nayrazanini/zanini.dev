
import type { ReactNode, MouseEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BackToTop } from "@/components/BackToTop";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/nayra-zanini/" },
  { label: "Instagram", href: "https://instagram.com/nazanini_" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteLayoutContent>{children}</SiteLayoutContent>;
}

function SiteLayoutContent({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const en = language === "en";

  const navLinks = [
    { label: en ? "Home" : "Início", href: "/#inicio" },
    { label: en ? "Projects" : "Projetos", href: "/#projetos" },
    { label: en ? "About" : "Sobre", href: "/#sobre" },
    { label: en ? "Experience" : "Experiência", href: "/#experiencia" },
    { label: en ? "Articles" : "Artigos", href: "/#artigos" },
  ];

  function handleSectionNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    const sectionId = href.split("#")[1];

    if (window.location.pathname === "/" && sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        event.preventDefault();

        window.history.replaceState(null, "", `/#${sectionId}`);

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-border/60">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 min-h-[64px] flex items-center justify-between gap-6">
          <a
            href="/#inicio"
            onClick={(event) => handleSectionNavigation(event, "/#inicio")}
            className="shrink-0 flex items-center"
            aria-label={en ? "Go to homepage" : "Ir para a página inicial"}
          >
            <img
              src="/logo.png"
              alt="zanini.dev"
              width={1545}
              height={327}
              className="h-7 sm:h-9 w-auto"
            />
          </a>

          <nav className="flex items-center gap-3 sm:gap-5 lg:gap-7 overflow-x-auto">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleSectionNavigation(event, item.href)
                }
                className="whitespace-nowrap text-xs sm:text-sm text-muted-foreground hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://github.com/nayrazanini"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-xs sm:text-sm text-muted-foreground hover:text-terracotta transition-colors"
            >
              GitHub ↗
            </a>

            <a
              href="/CV_Nayra_Zanini.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-xs sm:text-sm text-muted-foreground hover:text-terracotta transition-colors"
            >
              CV ↗
            </a>

            <div className="flex items-center gap-1 border-l border-border/60 pl-3">
              <button
                type="button"
                onClick={() => setLanguage("pt")}
                aria-label="Português"
                aria-pressed={!en}
                className={`text-xs transition-colors ${
                  !en
                    ? "text-terracotta font-semibold"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                PT
              </button>

              <span className="text-muted-foreground text-xs">/</span>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-label="English"
                aria-pressed={en}
                className={`text-xs transition-colors ${
                  en
                    ? "text-terracotta font-semibold"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 mt-16">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <img
                src="/logo.png"
                alt="zanini.dev"
                width={1545}
                height={327}
                className="h-8 w-auto"
                loading="lazy"
              />

              <p className="mt-1 text-xs text-muted-foreground">
                © {new Date().getFullYear()} Náyra Zanini
              </p>
            </div>

            <p className="text-xs text-muted-foreground">
              Think. Query. Build.
            </p>

            <nav className="flex items-center gap-5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-terracotta transition-colors"
                >
                  {item.label} ↗
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
