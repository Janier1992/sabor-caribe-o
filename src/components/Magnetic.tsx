import { useRef } from "react";
import type { ReactNode } from "react";

/** El hijo se acerca suavemente al cursor (solo con puntero fino y sin reduced-motion). */
export default function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ok = () => matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
  return (
    <span
      ref={ref}
      className="magnetic"
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || !ok()) return;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * strength}px, ${(e.clientY - (r.top + r.height / 2)) * strength}px)`;
      }}
      onPointerLeave={() => ref.current && (ref.current.style.transform = "")}
    >
      {children}
    </span>
  );
}
