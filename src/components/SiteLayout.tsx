
import { useEffect, useState, type ReactNode, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { BackToTop } from "@/components/BackToTop";

// Ao recarregar (F5), a página deve começar no topo, sem manter #seção na URL.
let reloadTratado = false;

export function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteLayoutContent>{children}</SiteLayoutContent>;
}

function SiteLayoutContent({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const en = language === "en";
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (reloadTratado) return;
    reloadTratado = true;
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "reload") {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (!menuAberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuAberto]);

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
    setMenuAberto(false);
    const sectionId = href.split("#")[1];

    if (window.location.pathname === "/" && sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        event.preventDefault();

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

          {/* Menu no computador */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleSectionNavigation(event, item.href)}
                className="whitespace-nowrap text-sm text-muted-foreground hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/contato"
              className="whitespace-nowrap text-sm text-ink border border-terracotta/70 rounded-full px-3 py-1 hover:bg-terracotta/10 hover:border-terracotta transition-colors"
            >
              {en ? "Contact" : "Contato"}
            </a>

            <div className="flex items-center gap-1 md:border-l md:border-border/60 md:pl-3">
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

          {/* Idioma + botão do menu no celular */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex items-center gap-1 md:border-l md:border-border/60 md:pl-3">
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

            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              aria-label={menuAberto ? (en ? "Close menu" : "Fechar menu") : en ? "Open menu" : "Abrir menu"}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              className="h-10 w-10 flex items-center justify-center rounded-lg border border-border/60 text-ink hover:border-terracotta/60 transition-colors"
            >
              {menuAberto ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuAberto && (
          <>
            <button
              type="button"
              aria-label={en ? "Close menu" : "Fechar menu"}
              onClick={() => setMenuAberto(false)}
              className="md:hidden fixed inset-0 top-[64px] z-30 bg-black/50"
            />
            <nav
              id="menu-mobile"
              className="md:hidden absolute inset-x-0 top-full z-40 border-b border-border/60 bg-paper shadow-xl px-5 py-3 flex flex-col"
            >
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleSectionNavigation(event, item.href)}
                  className="py-3.5 text-base text-ink border-b border-border/40 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contato"
                onClick={() => setMenuAberto(false)}
                className="mt-3 mb-2 text-center text-base text-ink border border-terracotta/70 rounded-full px-4 py-2.5 hover:bg-terracotta/10"
              >
                {en ? "Contact" : "Contato"}
              </a>
            </nav>
          </>
        )}
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
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
