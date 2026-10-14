import { useRef } from "react";
import type { MouseEvent } from "react";
import type { Dish } from "../data/menu";
import { cop } from "../data/menu";
import DishArt from "./DishArt";
import Reveal from "./Reveal";

interface Props {
  dish: Dish;
  qty: number;
  delay: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function MenuCard({ dish, qty, delay, onAdd, onRemove }: Props) {
  const card = useRef<HTMLDivElement>(null);

  const tilt = (e: MouseEvent) => {
    const el = card.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
  };
  const reset = () => {
    card.current?.style.setProperty("--rx", "0deg");
    card.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <Reveal as="li" delay={delay} className="cardwrap">
      <div ref={card} className={`card ${qty ? "card--picked" : ""}`} onMouseMove={tilt} onMouseLeave={reset}>
        <span className={`tag tag--${dish.category.toLowerCase()}`}>{dish.category}</span>
        <div className="card__art">
          {dish.photo ? <img src={dish.photo} alt={dish.name} loading="lazy" width={200} height={160} /> : <DishArt art={dish.art} />}
        </div>
        <h3 className="card__name">{dish.name}</h3>
        <p className="card__price">
          {cop(dish.price)}
          {dish.confirmPrice && <small> · por confirmar</small>}
        </p>
        <div className="card__actions">
          {qty === 0 ? (
            <button className="btn btn--primary btn--sm" onClick={onAdd}>Quiero pedir</button>
          ) : (
            <div className="stepper" role="group" aria-label={`Cantidad de ${dish.name}`}>
              <button onClick={onRemove} aria-label={`Quitar una porción de ${dish.name}`}>−</button>
              <output key={qty} aria-live="polite">{qty}</output>
              <button onClick={onAdd} aria-label={`Agregar una porción de ${dish.name}`}>+</button>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
