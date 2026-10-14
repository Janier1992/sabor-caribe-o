import { siteConfig, whatsappLink } from "../data/siteConfig";
import { menu, cop } from "../data/menu";
import Reveal from "./Reveal";
import { useCountUp } from "../hooks";
import { useReveal } from "../hooks";

interface Props {
  qty: Record<string, number>;
  clear: () => void;
}

export default function ContactSection({ qty, clear }: Props) {
  const picked = menu.filter((d) => (qty[d.id] ?? 0) > 0);
  const total = picked.reduce((s, d) => s + d.price * qty[d.id], 0);
  const [ref, shown] = useReveal<HTMLDivElement>();
  const shownTotal = useCountUp(total, shown || total > 0, 500);

  const message = picked.length
    ? `Hola, quiero consultar este pedido en Restaurante Sabor Caribeño:\n${picked.map((d) => `• ${qty[d.id]} x ${d.name}`).join("\n")}\n(Referencia: ${cop(total)}, sujeto a confirmación)`
    : siteConfig.whatsappGreeting;
  const href = whatsappLink(message);

  return (
    <section id="pedir" className="section order">
      <Reveal from="zoom" className="order__card">
        <div ref={ref}>
          <p className="eyebrow eyebrow--light">Domicilios y contacto</p>
          <h2 className="section__title section__title--light">¿Se te antojó? Consulta tu pedido</h2>

          {picked.length > 0 ? (
            <div className="order__list" aria-live="polite">
              <ul>
                {picked.map((d) => (
                  <li key={d.id}><span>{qty[d.id]} × {d.name}</span><span>{cop(d.price * qty[d.id])}</span></li>
                ))}
              </ul>
              <p className="order__total">Total de referencia <strong>{cop(shownTotal)}</strong></p>
              <button className="link-btn" onClick={clear}>Vaciar pedido</button>
            </div>
          ) : (
            <p className="section__lead section__lead--light">Elige tus platos en el menú o escríbenos directamente para consultar.</p>
          )}

          {href ? (
            <a className="btn btn--wa" href={href} target="_blank" rel="noopener noreferrer">
              {picked.length ? "Enviar pedido por WhatsApp" : "Escribir por WhatsApp"}
            </a>
          ) : (
            <>
              <button className="btn btn--wa" disabled aria-describedby="wa-pending">Consultar por WhatsApp</button>
              <p id="wa-pending" className="order__pending">
                El número de WhatsApp está pendiente de confirmación. Configúralo en <code>siteConfig.whatsappNumber</code>.
              </p>
            </>
          )}
          {siteConfig.openingHours && <p className="order__meta">Horario: {siteConfig.openingHours}</p>}
        </div>
      </Reveal>
    </section>
  );
}
