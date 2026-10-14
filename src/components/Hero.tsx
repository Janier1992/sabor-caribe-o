import front from "../assets/restaurant-front.jpg";

const words = ["El", "sabor", "del", "Caribe,", "en", "el", "corazón", "de", "Medellín"];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__sun" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__in" style={{ "--i": 0 } as React.CSSProperties}>
            Comida de mar y carnes · Centro de Medellín
          </p>
          <h1 className="hero__title">
            {words.map((w, i) => (
              <span className="hero__word" key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
                <span>{w}</span>
              </span>
            ))}
          </h1>
          <p className="hero__sub hero__in" style={{ "--i": 11 } as React.CSSProperties}>
            Disfruta comida de mar y carnes con sabor casero.
          </p>
          <div className="hero__cta hero__in" style={{ "--i": 12 } as React.CSSProperties}>
            <a className="btn btn--primary" href="#menu">Ver el menú</a>
            <a className="btn btn--ghost" href="#pedir">Pedir a domicilio</a>
          </div>
        </div>
        <div className="hero__visual hero__in" style={{ "--i": 6 } as React.CSSProperties}>
          <div className="hero__photo">
            <img src={front} width={1080} height={783} alt="Fachada y salón de Restaurante Sabor Caribeño, con mesas y paredes azules" fetchPriority="high" />
          </div>
          <div className="chip chip--a" aria-hidden="true">🐟 Mar</div>
          <div className="chip chip--b" aria-hidden="true">🥩 Carnes</div>
          <div className="chip chip--c" aria-hidden="true">🌴 Sabor casero</div>
        </div>
      </div>
      <svg className="hero__waves" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path className="wave wave--1" d="M0 60c120-40 240-40 360 0s240 40 360 0 240-40 360 0 240 40 360 0v60H0z" />
        <path className="wave wave--2" d="M0 80c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0v40H0z" />
      </svg>
      <a href="#menu" className="hero__scroll" aria-label="Bajar al menú"><span /></a>
    </section>
  );
}
