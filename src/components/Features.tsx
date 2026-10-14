import DishArt from "./DishArt";

export default function Features() {
  return (
    <section className="feat" aria-label="Lo esencial">
      <div className="feat__grid">
        <article className="tile tile--sea">
          <h2>Comida de mar y carnes</h2>
          <div className="tile__art"><DishArt art="pescado" /></div>
        </article>
        <article className="tile tile--pin">
          <h2>Estamos en el centro de Medellín</h2>
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle className="ring r1" cx="60" cy="74" r="12" />
            <circle className="ring r2" cx="60" cy="74" r="12" />
            <path d="M60 18c-17 0-30 13-30 30 0 22 30 52 30 52s30-30 30-52c0-17-13-30-30-30z" fill="#062c3b" />
            <circle cx="60" cy="48" r="11" fill="#ffb626" />
          </svg>
        </article>
        <article className="tile tile--go">
          <h2>Consulta opciones para domicilio</h2>
          <svg viewBox="0 0 220 70" aria-hidden="true">
            <path className="route" d="M8 56c30-50 60 20 92-14s56-32 112-30" />
            <circle className="dot" r="7" />
          </svg>
        </article>
      </div>
    </section>
  );
}
