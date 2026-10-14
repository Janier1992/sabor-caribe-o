import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <strong>{siteConfig.name}</strong>
        <nav aria-label="Pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#pedir">Contacto</a>
        </nav>
        {siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} rel="noopener noreferrer" target="_blank">Instagram</a>}
        {siteConfig.facebookUrl && <a href={siteConfig.facebookUrl} rel="noopener noreferrer" target="_blank">Facebook</a>}
        <small>© {new Date().getFullYear()} {siteConfig.name} · {siteConfig.city}. Menú y precios sujetos a confirmación.</small>
      </div>
    </footer>
  );
}
