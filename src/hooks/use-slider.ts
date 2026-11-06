import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

const DURACAO = 350;

/**
 * Carrossel "de verdade": o slide anterior, o atual e o próximo ficam lado a lado
 * e acompanham o dedo (ou o mouse) enquanto você arrasta. Ao soltar, encaixa no
 * próximo/anterior ou volta ao lugar. A rolagem vertical da página continua normal.
 */
export function useSlider(count: number) {
  const [index, setIndex] = useState(0);
  const [dx, setDx] = useState(0);
  const [anim, setAnim] = useState(false);
  const [dragging, setDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const lock = useRef<"h" | "v" | null>(null);
  const moved = useRef(false);

  const mod = useCallback((i: number) => (count ? ((i % count) + count) % count : 0), [count]);
  const largura = () => containerRef.current?.offsetWidth || 0;

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  /** Desliza até o slide vizinho (dir = 1 próximo, -1 anterior) e então troca o índice. */
  const go = useCallback(
    (dir: 1 | -1) => {
      if (count < 2 || busy.current) return;
      busy.current = true;
      setAnim(true);
      setDx(-dir * largura());
      timer.current = setTimeout(() => {
        setAnim(false);
        setIndex((i) => mod(i + dir));
        setDx(0);
        busy.current = false;
      }, DURACAO);
    },
    [count, mod],
  );

  const goTo = useCallback((i: number) => {
    if (busy.current) return;
    setAnim(false);
    setDx(0);
    setIndex(mod(i));
  }, [mod]);

  const handlers = {
    onPointerDown(e: PointerEvent<HTMLElement>) {
      if (count < 2 || busy.current) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
      lock.current = null;
      moved.current = false;
    },
    onPointerMove(e: PointerEvent<HTMLElement>) {
      const s = start.current;
      if (!s || e.pointerId !== s.id) return;
      const mx = e.clientX - s.x;
      const my = e.clientY - s.y;
      if (!lock.current) {
        if (Math.abs(mx) < 8 && Math.abs(my) < 8) return;
        lock.current = Math.abs(mx) > Math.abs(my) ? "h" : "v";
        if (lock.current === "h") {
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            /* ignora */
          }
          setAnim(false);
          setDragging(true);
        }
      }
      if (lock.current === "h") {
        moved.current = true;
        const w = largura();
        setDx(Math.max(-w, Math.min(w, mx)));
      }
    },
    onPointerUp(e: PointerEvent<HTMLElement>) {
      const s = start.current;
      start.current = null;
      if (!s) return;
      const horizontal = lock.current === "h";
      lock.current = null;
      setDragging(false);
      if (!horizontal) return;
      const mx = e.clientX - s.x;
      const limite = Math.min(80, largura() * 0.2);
      if (mx <= -limite) go(1);
      else if (mx >= limite) go(-1);
      else {
        setAnim(true);
        setDx(0);
      }
    },
    onPointerCancel() {
      start.current = null;
      lock.current = null;
      if (dragging) {
        setDragging(false);
        setAnim(true);
        setDx(0);
      }
    },
    onClickCapture(e: React.MouseEvent<HTMLElement>) {
      if (moved.current) {
        e.preventDefault();
        e.stopPropagation();
        moved.current = false;
      }
    },
    onDragStart(e: React.DragEvent<HTMLElement>) {
      e.preventDefault();
    },
  };

  const containerStyle: CSSProperties = {
    touchAction: "pan-y",
    cursor: dragging ? "grabbing" : "grab",
    userSelect: dragging ? "none" : undefined,
  };

  /** Faixa com 3 slides (anterior, atual, próximo): mostra o do meio e desloca junto com o dedo. */
  const trackStyle: CSSProperties = {
    display: "flex",
    width: "300%",
    transform: `translateX(calc(-33.3333333% + ${dx}px))`,
    transition: anim ? `transform ${DURACAO}ms cubic-bezier(0.22, 0.61, 0.36, 1)` : "none",
    willChange: "transform",
  };

  const visiveis = count
    ? [
        { key: "prev", i: mod(index - 1) },
        { key: "cur", i: index },
        { key: "next", i: mod(index + 1) },
      ]
    : [];

  return { index, go, goTo, handlers, containerRef, containerStyle, trackStyle, visiveis, dragging };
}
