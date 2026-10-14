import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import { menu, cop } from "./data/menu";

export default function App() {
  const [qty, setQtyState] = useState<Record<string, number>>({});
  const setQty = (id: string, delta: number) =>
    setQtyState((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + delta) }));

  const count = menu.reduce((s, d) => s + (qty[d.id] ?? 0), 0);
  const total = menu.reduce((s, d) => s + d.price * (qty[d.id] ?? 0), 0);

  return (
    <>
      <a className="skip" href="#menu">Saltar al menú</a>
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <MenuSection qty={qty} setQty={setQty} />
        <AboutSection />
        <ContactSection qty={qty} clear={() => setQtyState({})} />
        <LocationSection />
      </main>
      <Footer />
      {count > 0 && (
        <a className="cartbar" href="#pedir">
          <span className="cartbar__n" key={count}>{count}</span>
          Ver mi pedido · {cop(total)}
        </a>
      )}
    </>
  );
}
