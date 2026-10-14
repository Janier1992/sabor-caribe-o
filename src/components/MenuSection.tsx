import { useState } from "react";
import { menu } from "../data/menu";
import type { Dish } from "../data/menu";
import MenuCard from "./MenuCard";
import Reveal from "./Reveal";

type Filter = "Todos" | Dish["category"];
const filters: Filter[] = ["Todos", "Carnes", "Mar", "Sopas"];

interface Props {
  qty: Record<string, number>;
  setQty: (id: string, delta: number) => void;
}

export default function MenuSection({ qty, setQty }: Props) {
  const [filter, setFilter] = useState<Filter>("Todos");
  const list = menu.filter((d) => filter === "Todos" || d.category === filter);

  return (
    <section id="menu" className="section menu">
      <Reveal>
        <p className="eyebrow">Menú destacado</p>
        <h2 className="section__title">¿Qué se te antoja hoy?</h2>
        <p className="section__lead">Arma tu pedido tocando “Quiero pedir” y envíalo por WhatsApp para confirmarlo con el restaurante.</p>
      </Reveal>
      <div className="filters" role="group" aria-label="Filtrar por categoría">
        {filters.map((f) => (
          <button key={f} className={`filter ${f === filter ? "is-on" : ""}`} aria-pressed={f === filter} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <ul className="grid" key={filter}>
        {list.map((d, i) => (
          <MenuCard key={d.id} dish={d} qty={qty[d.id] ?? 0} delay={i * 70} onAdd={() => setQty(d.id, 1)} onRemove={() => setQty(d.id, -1)} />
        ))}
      </ul>
      <p className="note">Menú y precios sujetos a confirmación por el restaurante. Ilustraciones de referencia; se reemplazarán por fotos reales.</p>
    </section>
  );
}
