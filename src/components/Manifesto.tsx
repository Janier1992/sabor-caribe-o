import front from "../assets/restaurant-front.jpg";
import { useScrollVar } from "../hooks";

const text =
  "En Restaurante Sabor Caribeño encuentras opciones de comida de mar y carnes en el centro de Medellín. Explora el menú y contáctanos para consultar disponibilidad y pedidos.";
const hot = new Set(["mar", "carnes", "Medellín."]);

export default function Manifesto() {
  const ref = useScrollVar<HTMLElement>("sticky");
  const words = text.split(" ");
  return (
    <section id="nosotros" className="mani" ref={ref}>
      <div className="mani__sticky">
        <p className="mani__text">
          <span className="sr">{text}</span>
          <span aria-hidden="true">
            {words.map((w, i) => (
              <span key={i} className={`mani__w ${hot.has(w) ? "mani__w--hot" : ""}`} style={{ "--w": (i / words.length).toFixed(3) } as React.CSSProperties}>
                {w}{" "}
              </span>
            ))}
          </span>
        </p>
        <figure className="mani__photo">
          <img src={front} width={1080} height={783} loading="lazy" alt="Mesas y sillas del salón de Restaurante Sabor Caribeño, con paredes azules y detalles en piedra" />
        </figure>
      </div>
    </section>
  );
}
