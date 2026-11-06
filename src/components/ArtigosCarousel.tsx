import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSlider } from "@/hooks/use-slider";

export type ArtigoCard = {
  slug: string;
  title: string;
  subject: string;
  summary: string;
  dataLabel: string;
};

const INTERVAL = 6000;

export function ArtigosCarousel({ artigos, en }: { artigos: ArtigoCard[]; en: boolean }) {
  const total = artigos.length;
  const [pausado, setPausado] = useState(false);
  const slider = useSlider(total);
  const { index, go, goTo } = slider;

  useEffect(() => {
    if (pausado || total < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, pausado, total, go]);

  if (total === 0) return null;

  return (
    <div
      className="grid gap-4"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onPointerDown={() => setPausado(true)}
      onPointerUp={() => setPausado(false)}
      onPointerCancel={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <style>{`
        @keyframes artigo-bar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .artigo-bar { animation: none !important; } }
      `}</style>

      <div className="relative overflow-hidden rounded-xl border border-border/60 hover:border-terracotta/50 transition-colors">
        <div
          ref={slider.containerRef}
          {...slider.handlers}
          style={slider.containerStyle}
          aria-live="polite"
        >
          <div style={slider.trackStyle}>
            {slider.visiveis.map(({ key, i }) => {
              const a = artigos[i];
              return (
                <Link
                  key={key}
                  to="/artigos/$slug"
                  params={{ slug: a.slug }}
                  draggable={false}
                  tabIndex={key === "cur" ? 0 : -1}
                  aria-hidden={key !== "cur"}
                  className="group block p-5 md:p-7 min-h-[230px]"
                  style={{ flex: "1 1 0", minWidth: 0 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.15em] text-terracotta mb-2">{a.subject}</p>
                  <h3 className="text-lg md:text-2xl font-semibold text-ink leading-snug group-hover:text-terracotta transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground line-clamp-4">
                    {a.summary}
                  </p>
                  <p className="mt-5 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span className="font-mono">{a.dataLabel}</span>
                    <span className="text-terracotta">{en ? "Read article →" : "Ler artigo →"}</span>
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* barra de progresso do tempo até o próximo artigo */}
        {total > 1 && (
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-border/40 pointer-events-none">
            <div
              key={`${index}-${pausado ? "p" : "r"}`}
              className="artigo-bar h-full origin-left bg-terracotta"
              style={{
                animation: pausado ? undefined : `artigo-bar ${INTERVAL}ms linear forwards`,
                transform: pausado ? "scaleX(0)" : undefined,
              }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label={en ? "Articles" : "Artigos"}>
          {artigos.map((x, i) => (
            <button
              key={x.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={x.title}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-terracotta" : "w-2 bg-border hover:bg-terracotta/50"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={en ? "Previous article" : "Artigo anterior"}
            className="h-8 w-8 rounded-full border border-border/60 text-muted-foreground hover:text-terracotta hover:border-terracotta/50 transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={en ? "Next article" : "Próximo artigo"}
            className="h-8 w-8 rounded-full border border-border/60 text-muted-foreground hover:text-terracotta hover:border-terracotta/50 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <Link
        to="/artigos"
        className="inline-flex text-sm text-terracotta underline underline-offset-4 hover:opacity-80 transition-opacity"
      >
        {en ? "View all articles →" : "Ver todos os artigos →"}
      </Link>
    </div>
  );
}
