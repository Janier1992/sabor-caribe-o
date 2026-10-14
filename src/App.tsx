import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Features from "./components/Features";
import MenuSection from "./components/MenuSection";
import OrderSection from "./components/OrderSection";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import { cop, menu } from "./data/menu";

export default function App() {
  const [qty, setQtyState] = useState<Record<string, number>>({});
  const setQty = (id: string, delta: number) => setQtyState((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + delta) }));
  const count = menu.reduce((s, d) => s + (qty[d.id] ?? 0), 0);
  const total = menu.reduce((s, d) => s + d.price * (qty[d.id] ?? 0), 0);

  return (
    <>
      <a className="skip" href="#menu">Saltar al menú</a>
      <Nav count={count} />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Features />
        <MenuSection qty={qty} setQty={setQty} />
        <OrderSection qty={qty} clear={() => setQtyState({})} />
        <Visit />
      </main>
      <Footer />
      {count > 0 && (
        <a className="cartbar" href="#pedir">
          <span className="cartbar__n" key={count}>{count}</span>
          Ver mi pedido, {cop(total)}
        </a>
      )}
    </>
  );
}
