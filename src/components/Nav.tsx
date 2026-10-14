import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#pedir", label: "Pedir a domicilio" },
];

export default function Nav({ count }: { count: number }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <a className="nav__brand" href="#inicio" onClick={() => setOpen(false)}>
        <span className="nav__sun" aria-hidden="true" />
        Sabor Caribeño
      </a>
      <div className="nav__right">
        <Magnetic>
          <a className="pill pill--hot" href="#pedir" onClick={() => setOpen(false)}>
            Pedir a domicilio{count > 0 && <b className="pill__n">{count}</b>}
          </a>
        </Magnetic>
        <button className="pill pill--menu" aria-expanded={open} aria-controls="overlay" onClick={() => setOpen((o) => !o)}>
          {open ? "Cerrar" : "Menú"}
          <span className={`burger ${open ? "is-x" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="overlay" className={`overlay ${open ? "is-open" : ""}`} aria-label="Principal">
        <ul>
          {links.map((l, i) => (
            <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
