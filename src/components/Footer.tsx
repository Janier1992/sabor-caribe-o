import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="foot">
      <p className="foot__mark" aria-hidden="true">Sabor Caribeño</p>
      <div className="foot__row">
        <strong>{siteConfig.name}</strong>
        <nav aria-label="Pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#pedir">Contacto</a>
          {siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>}
          {siteConfig.facebookUrl && <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>}
        </nav>
        <small>© {new Date().getFullYear()} {siteConfig.name}, {siteConfig.city}. Menú y precios sujetos a confirmación.</small>
      </div>
    </footer>
  );
}
