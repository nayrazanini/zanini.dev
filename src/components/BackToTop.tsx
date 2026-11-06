import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BackToTop() {
  const { language } = useLanguage();
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = language === "en" ? "Back to top" : "Voltar ao topo";

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={label}
      title={label}
      className={`fixed bottom-5 right-5 z-50 h-11 w-11 rounded-full border border-border/60 bg-background/80 backdrop-blur text-terracotta shadow-lg transition-all duration-300 hover:border-terracotta/60 hover:-translate-y-0.5 ${
        visivel ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
