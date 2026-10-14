import { menu } from "../data/menu";

const claims = ["Comida de mar", "Carnes", "Sabor casero", "Centro de Medellín", "Domicilios"];

function Row({ items }: { items: string[] }) {
  const list = [...items, ...items];
  return (
    <div className="marquee__track">
      {list.map((t, i) => (
        <span key={i} className="marquee__item">{t}<i className="marquee__sep" /></span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__band marquee__band--a"><Row items={claims} /></div>
      <div className="marquee__band marquee__band--b"><Row items={menu.map((d) => d.name)} /></div>
    </div>
  );
}
