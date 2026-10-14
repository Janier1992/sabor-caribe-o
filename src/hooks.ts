import { useEffect, useRef, useState } from "react";

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Escribe `--p` (0 a 1) en el elemento según el scroll, sin re-renderizar React.
 * sticky: avance dentro de una sección alta con contenido pegajoso.
 * out: cuánto ha salido el elemento por arriba de la pantalla.
 */
export function useScrollVar<T extends HTMLElement>(mode: "sticky" | "out") {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = mode === "sticky" ? (r.height > innerHeight ? -r.top / (r.height - innerHeight) : 0) : -r.top / r.height;
      el.style.setProperty("--p", clamp(p).toFixed(4));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => {
      removeEventListener("scroll", on);
      removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, [mode]);
  return ref;
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown] as const;
}

export function useCountUp(to: number, ms = 500) {
  const [v, setV] = useState(to);
  const from = useRef(to);
  useEffect(() => {
    if (reducedMotion()) return setV(to);
    const start = from.current;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = clamp((t - t0) / ms);
      const val = Math.round(start + (to - start) * (1 - Math.pow(1 - p, 3)));
      setV(val);
      from.current = val;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return v;
}
