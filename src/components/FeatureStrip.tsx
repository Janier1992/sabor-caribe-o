import Reveal from "./Reveal";

const items = [
  { icon: "🐟", text: "Comida de mar y carnes" },
  { icon: "📍", text: "Estamos en el centro de Medellín" },
  { icon: "🛵", text: "Consulta opciones para domicilio" },
];

export default function FeatureStrip() {
  return (
    <section className="strip" aria-label="Atributos">
      <ul className="strip__list">
        {items.map((it, i) => (
          <Reveal as="li" key={it.text} delay={i * 120} from="zoom" className="strip__item">
            <span className="strip__icon" aria-hidden="true">{it.icon}</span>
            {it.text}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
