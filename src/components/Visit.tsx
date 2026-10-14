import front from "../assets/restaurant-front.jpg";
import { siteConfig } from "../data/siteConfig";
import { useScrollVar } from "../hooks";

export default function Visit() {
  const ref = useScrollVar<HTMLElement>("sticky");
  return (
    <section id="ubicacion" className="visit" ref={ref}>
      <div className="visit__sticky">
        <div className="visit__frame">
          <img src={front} width={1080} height={783} loading="lazy" alt="Entrada del restaurante vista desde la calle, con letrero azul y crema" />
        </div>
        <div className="visit__copy">
          <h2>Visítanos en el centro de Medellín</h2>
          {siteConfig.address && <p>{siteConfig.address}</p>}
          {siteConfig.mapsUrl ? (
            <a className="btn btn--sun" href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          ) : (
            <>
              <button className="btn btn--sun" disabled aria-describedby="map-pending">Cómo llegar</button>
              <p id="map-pending" className="visit__pending">Enlace de Google Maps pendiente de confirmación (<code>siteConfig.mapsUrl</code>).</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
