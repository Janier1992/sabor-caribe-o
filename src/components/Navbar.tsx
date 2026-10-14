import { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(window.scrollY > 24);
      setProgress(h.scrollHeight > h.clientHeight ? window.scrollY / (h.scrollHeight - h.clientHeight) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav__inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__sun" aria-hidden="true" />
          <span>
            <small>Restaurante</small>
            Sabor Caribeño
          </span>
        </a>
        <nav id="menu-principal" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary btn--sm nav__cta" href="#pedir" onClick={() => setOpen(false)}>
            Pedir a domicilio
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : `Abrir menú de ${siteConfig.name}`}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
