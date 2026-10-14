import front from "../assets/restaurant-front.jpg";
import { siteConfig } from "../data/siteConfig";
import Reveal from "./Reveal";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="section location">
      <Reveal className="location__card">
        <div>
          <p className="eyebrow">Ubicación</p>
          <h2 className="section__title">Visítanos en el centro de Medellín</h2>
          {siteConfig.address && <p className="section__lead">{siteConfig.address}</p>}
          {siteConfig.mapsUrl ? (
            <a className="btn btn--primary" href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          ) : (
            <>
              <button className="btn btn--primary" disabled aria-describedby="map-pending">Cómo llegar</button>
              <p id="map-pending" className="order__pending order__pending--dark">Enlace de Google Maps pendiente de confirmación (<code>siteConfig.mapsUrl</code>).</p>
            </>
          )}
        </div>
        <img src={front} width={1080} height={783} loading="lazy" alt="Entrada del restaurante vista desde la calle, con letrero azul y crema" />
      </Reveal>
    </section>
  );
}
