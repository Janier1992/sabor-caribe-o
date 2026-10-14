import { useRef } from "react";
import front from "../assets/restaurant-front.jpg";
import DishArt from "./DishArt";
import Magnetic from "./Magnetic";
import { useScrollVar } from "../hooks";

const word = "CARIBE".split("");

export default function Hero() {
  const ref = useScrollVar<HTMLElement>("out");
  const stage = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const s = stage.current;
    if (!s || e.pointerType !== "mouse") return;
    const r = s.getBoundingClientRect();
    s.style.setProperty("--tx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    s.style.setProperty("--ty", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };

  return (
    <section id="inicio" className="hero" ref={ref} onPointerMove={onMove}>
      <div className="hero__stage" ref={stage}>
        <div className="hero__copy">
          <h1 className="hero__h1">
            <span className="sr">El sabor del Caribe, en el corazón de Medellín</span>
            <span className="hero__l hero__l--a" aria-hidden="true"><span>El sabor del</span></span>
            <span className="hero__big" aria-hidden="true">
              {word.map((c, i) => (
                <span className="hero__ch" key={i} style={{ "--i": i } as React.CSSProperties}><span>{c}</span></span>
              ))}
            </span>
            <span className="hero__l hero__l--b" aria-hidden="true"><span>en el corazón de Medellín</span></span>
          </h1>
          <p className="hero__sub">Disfruta comida de mar y carnes con sabor casero.</p>
          <div className="hero__cta">
            <Magnetic><a className="btn btn--ink" href="#menu">Ver el menú</a></Magnetic>
            <Magnetic><a className="btn btn--line" href="#pedir">Pedir a domicilio</a></Magnetic>
          </div>
        </div>

        <div className="hero__art" aria-hidden="false">
          <div className="hero__arch">
            <img src={front} width={1080} height={783} alt="Fachada y salón de Restaurante Sabor Caribeño, con mesas y paredes azules" fetchPriority="high" />
          </div>
          <div className="hero__plate"><DishArt art="trucha" /></div>
          <svg className="hero__badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="circ" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" /></defs>
            <g className="badge__ring">
              <circle cx="60" cy="60" r="58" fill="#ffb626" />
              <text><textPath href="#circ" startOffset="0">Comida de mar y carnes  Centro de Medellín  </textPath></text>
            </g>
            <path d="M60 46v28m-10-10l10 12 10-12" stroke="#062c3b" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <svg className="hero__wave" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path className="w1" d="M0 70c120-50 240-50 360 0s240 50 360 0 240-50 360 0 240 50 360 0 240-50 360 0 240 50 360 0V140H0z" />
        <path className="w2" d="M0 100c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0 240-30 360 0 240 30 360 0V140H0z" />
      </svg>
    </section>
  );
}
