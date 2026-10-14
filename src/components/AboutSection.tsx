import front from "../assets/restaurant-front.jpg";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="nosotros" className="section about">
      <div className="about__grid">
        <Reveal from="left" className="about__media">
          <div className="about__frame">
            <img src={front} width={1080} height={783} loading="lazy" alt="Mesas y sillas del salón de Restaurante Sabor Caribeño, con paredes azules y detalles en piedra" />
          </div>
          <span className="about__blob" aria-hidden="true" />
        </Reveal>
        <Reveal from="right">
          <p className="eyebrow">Sobre nosotros</p>
          <h2 className="section__title">Un rincón caribeño en el centro</h2>
          <p className="section__lead">
            En Restaurante Sabor Caribeño encuentras opciones de comida de mar y carnes en el centro de Medellín. Explora el menú y contáctanos para consultar disponibilidad y pedidos.
          </p>
          <a className="btn btn--primary" href="#menu">Explorar el menú</a>
        </Reveal>
      </div>
    </section>
  );
}
