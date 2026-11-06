import { useRef, useState, type CSSProperties, type PointerEvent } from "react";

/**
 * Arrastar com o dedo (ou mouse) para trocar de item em um carrossel.
 * A rolagem vertical da página continua funcionando normalmente.
 */
export function useSwipe({ onPrev, onNext, threshold = 60 }: { onPrev: () => void; onNext: () => void; threshold?: number }) {
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const locked = useRef<"h" | "v" | null>(null);
  const moved = useRef(false);
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);

  function reset() {
    start.current = null;
    locked.current = null;
    setDragging(false);
    setDx(0);
  }

  const handlers = {
    onPointerDown(e: PointerEvent<HTMLElement>) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
      locked.current = null;
      moved.current = false;
    },
    onPointerMove(e: PointerEvent<HTMLElement>) {
      const s = start.current;
      if (!s || e.pointerId !== s.id) return;
      const mx = e.clientX - s.x;
      const my = e.clientY - s.y;
      if (!locked.current) {
        if (Math.abs(mx) < 8 && Math.abs(my) < 8) return;
        locked.current = Math.abs(mx) > Math.abs(my) ? "h" : "v";
        if (locked.current === "h") {
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            /* ignora */
          }
          setDragging(true);
        }
      }
      if (locked.current === "h") {
        moved.current = true;
        setDx(mx);
      }
    },
    onPointerUp(e: PointerEvent<HTMLElement>) {
      const s = start.current;
      if (!s) return;
      const mx = e.clientX - s.x;
      const horizontal = locked.current === "h";
      reset();
      if (horizontal) {
        if (mx <= -threshold) onNext();
        else if (mx >= threshold) onPrev();
      }
    },
    onPointerCancel() {
      reset();
    },
    onClickCapture(e: React.MouseEvent<HTMLElement>) {
      // evita abrir o link ao terminar um arrasto
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

  const style: CSSProperties = {
    transform: dx ? `translateX(${dx}px)` : undefined,
    opacity: dx ? Math.max(0.5, 1 - Math.abs(dx) / 500) : undefined,
    transition: dragging ? "none" : "transform 250ms ease, opacity 250ms ease",
    touchAction: "pan-y",
    cursor: dragging ? "grabbing" : "grab",
    userSelect: dragging ? "none" : undefined,
  };

  return { handlers, style, dragging };
}
