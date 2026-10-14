import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { cop, menu } from "../data/menu";
import type { Dish } from "../data/menu";
import DishArt from "./DishArt";
import Magnetic from "./Magnetic";
import { clamp } from "../hooks";

interface Props {
  qty: Record<string, number>;
  setQty: (id: string, delta: number) => void;
}

function Card({ dish, qty, setQty }: { dish: Dish; qty: number; setQty: (d: number) => void }) {
  return (
    <li className={`mcard mcard--${dish.category.toLowerCase()} ${qty ? "is-picked" : ""}`}>
      <div className="mcard__art">
        {dish.photo ? <img src={dish.photo} alt={dish.name} loading="lazy" width={240} height={240} /> : <DishArt art={dish.art} />}
      </div>
      <p className="mcard__cat">{dish.category}</p>
      <h3 className="mcard__name">{dish.name}</h3>
      <p className="mcard__price">
        {cop(dish.price)}
        {dish.confirmPrice && <small>por confirmar</small>}
      </p>
      {qty === 0 ? (
        <Magnetic><button className="btn btn--ink" onClick={() => setQty(1)}>Quiero pedir</button></Magnetic>
      ) : (
        <div className="stepper" role="group" aria-label={`Cantidad de ${dish.name}`}>
          <button onClick={() => setQty(-1)} aria-label={`Quitar una porción de ${dish.name}`}>−</button>
          <output key={qty} aria-live="polite">{qty}</output>
          <button onClick={() => setQty(1)} aria-label={`Agregar una porción de ${dish.name}`}>+</button>
        </div>
      )}
    </li>
  );
}

export default function MenuSection({ qty, setQty }: Props) {
  const sec = useRef<HTMLElement>(null);
  const view = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = matchMedia("(min-width: 861px) and (hover: hover) and (prefers-reduced-motion: no-preference)");
    const f = () => setPinned(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);

  useEffect(() => {
    const s = sec.current, v = view.current, t = track.current;
    if (!s || !v || !t) return;
    if (!pinned) {
      s.style.height = "";
      t.style.transform = "";
      s.style.setProperty("--p", "0");
      return;
    }
    let maxX = 0, raf = 0;
    const update = () => {
      raf = 0;
      const p = maxX > 0 ? clamp(-s.getBoundingClientRect().top / maxX) : 0;
      t.style.transform = `translate3d(${-p * maxX}px,0,0)`;
      s.style.setProperty("--p", p.toFixed(4));
    };
    const measure = () => {
      maxX = Math.max(0, t.scrollWidth - v.clientWidth);
      s.style.height = `${innerHeight + maxX}px`;
      update();
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    const keep = () => { v.scrollLeft = 0; };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(t);
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", measure);
    v.addEventListener("scroll", keep);
    return () => {
      ro.disconnect();
      removeEventListener("scroll", on);
      removeEventListener("resize", measure);
      v.removeEventListener("scroll", keep);
      cancelAnimationFrame(raf);
    };
  }, [pinned]);

  // Con teclado, lleva el scroll de la página hasta la tarjeta enfocada.
  const onFocus = (e: React.FocusEvent) => {
    const s = sec.current, v = view.current, t = track.current;
    if (!pinned || !s || !v || !t) return;
    const li = (e.target as HTMLElement).closest("li");
    if (!li) return;
    const maxX = Math.max(0, t.scrollWidth - v.clientWidth);
    const tx = clamp(li.offsetLeft - (v.clientWidth - li.offsetWidth) / 2, 0, maxX);
    scrollTo({ top: s.getBoundingClientRect().top + scrollY + tx });
  };

  return (
    <section id="menu" ref={sec} className={`menu ${pinned ? "menu--pinned" : ""}`}>
      <div className="menu__sticky">
        <header className="menu__head">
          <h2 className="menu__title">¿Qué se te antoja hoy?</h2>
          <p className="menu__hint">
            Toca “Quiero pedir” en tus favoritos y envía el pedido por WhatsApp.
            <span className="menu__bar" aria-hidden="true"><i style={{ transform: "scaleX(var(--p))" } as CSSProperties} /></span>
          </p>
        </header>
        <div className="menu__view" ref={view}>
          <ul className="menu__track" ref={track} onFocusCapture={onFocus}>
            {menu.map((d) => (
              <Card key={d.id} dish={d} qty={qty[d.id] ?? 0} setQty={(delta) => setQty(d.id, delta)} />
            ))}
          </ul>
        </div>
        <p className="menu__note">Menú y precios sujetos a confirmación por el restaurante. Ilustraciones de referencia, pronto con fotos reales.</p>
      </div>
    </section>
  );
}
