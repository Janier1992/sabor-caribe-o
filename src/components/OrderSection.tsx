import { siteConfig, whatsappLink } from "../data/siteConfig";
import { cop, menu } from "../data/menu";
import Magnetic from "./Magnetic";
import { useCountUp } from "../hooks";

interface Props {
  qty: Record<string, number>;
  clear: () => void;
}

export default function OrderSection({ qty, clear }: Props) {
  const picked = menu.filter((d) => (qty[d.id] ?? 0) > 0);
  const total = picked.reduce((s, d) => s + d.price * qty[d.id], 0);
  const shown = useCountUp(total);

  const message = picked.length
    ? `Hola, quiero consultar este pedido en Restaurante Sabor Caribeño:\n${picked.map((d) => `• ${qty[d.id]} x ${d.name}`).join("\n")}\n(Referencia: ${cop(total)}, sujeto a confirmación)`
    : siteConfig.whatsappGreeting;
  const href = whatsappLink(message);

  return (
    <section id="pedir" className="order">
      <div className="order__inner">
        <div className="order__copy">
          <h2 className="order__title">¿Se te antojó? Consulta tu pedido</h2>
          <p>Elige tus platos en el menú y escríbenos para confirmar disponibilidad.</p>
          {href ? (
            <Magnetic>
              <a className="btn btn--wa" href={href} target="_blank" rel="noopener noreferrer">
                {picked.length ? "Enviar pedido por WhatsApp" : "Escribir por WhatsApp"}
              </a>
            </Magnetic>
          ) : (
            <>
              <button className="btn btn--wa" disabled aria-describedby="wa-pending">Consultar por WhatsApp</button>
              <p id="wa-pending" className="order__pending">El número de WhatsApp está pendiente de confirmación. Se configura en <code>siteConfig.whatsappNumber</code>.</p>
            </>
          )}
          {siteConfig.openingHours && <p>Horario: {siteConfig.openingHours}</p>}
        </div>

        <div className="ticket" aria-live="polite">
          <h3 className="ticket__h">Tu pedido</h3>
          {picked.length === 0 ? (
            <p className="ticket__empty">Aún no has elegido platos. <a href="#menu">Ir al menú</a></p>
          ) : (
            <>
              <ul>
                {picked.map((d) => (
                  <li key={d.id}><span>{qty[d.id]} × {d.name}</span><span>{cop(d.price * qty[d.id])}</span></li>
                ))}
              </ul>
              <p className="ticket__total"><span>Total de referencia</span><strong>{cop(shown)}</strong></p>
              <button className="ticket__clear" onClick={clear}>Vaciar pedido</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
