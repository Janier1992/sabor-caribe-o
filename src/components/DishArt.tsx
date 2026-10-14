import type { Art } from "../data/menu";

/** Ilustraciones genéricas y reemplazables (no son fotos del restaurante). */
export default function DishArt({ art }: { art: Art }) {
  return (
    <svg className={`dish dish--${art}`} viewBox="0 0 200 160" role="img" aria-label="Ilustración del plato" focusable="false">
      <ellipse cx="100" cy="140" rx="78" ry="10" fill="rgba(0,0,0,.14)" />
      <circle cx="100" cy="82" r="64" fill="#fff8e8" stroke="#e6d3a8" strokeWidth="3" />
      <circle cx="100" cy="82" r="50" fill="#fffdf6" stroke="#efe2c0" strokeWidth="2" />
      <g className="dish__main">
        {art === "res" && (
          <>
            <path d="M52 78c0-20 22-32 50-32s48 12 48 32-20 30-48 30-50-10-50-30z" fill="#7a3b1d" />
            <path d="M62 74c10-8 24-10 36-8M96 62c14-2 28 2 40 10" stroke="#4a210e" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M70 90c14 6 38 6 58-2" stroke="#a65a2e" strokeWidth="3" strokeLinecap="round" fill="none" />
          </>
        )}
        {art === "cerdo" && (
          <>
            <rect x="54" y="52" width="94" height="52" rx="22" fill="#c9824a" />
            <rect x="62" y="58" width="78" height="22" rx="11" fill="#e0a56d" />
            <path d="M66 94h72" stroke="#a5622f" strokeWidth="4" strokeLinecap="round" />
          </>
        )}
        {art === "pollo" && (
          <>
            <ellipse cx="96" cy="80" rx="46" ry="30" fill="#e8a947" />
            <path d="M62 72c12-8 28-10 44-6M70 90c16 6 34 4 48-4" stroke="#b9711b" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M138 62l22-12 4 10-18 14z" fill="#f3ca7a" />
          </>
        )}
        {(art === "pescado" || art === "trucha") && (
          <>
            <path d="M44 82c18-24 50-30 78-18 8 3 16 8 22 14-6 6-14 11-22 14-28 12-60 6-78-10z" fill={art === "trucha" ? "#d9a37a" : "#c98b5b"} />
            <path d="M144 78l24-18v36z" fill={art === "trucha" ? "#c98462" : "#b4733f"} />
            <circle cx="64" cy="76" r="4" fill="#2b1a10" />
            {art === "trucha" && <g fill="#7a3a22"><circle cx="86" cy="70" r="2.5" /><circle cx="100" cy="66" r="2.5" /><circle cx="110" cy="78" r="2.5" /><circle cx="92" cy="86" r="2.5" /></g>}
            <path d="M80 66c6 10 6 24 0 34M102 64c6 12 6 28 0 40" stroke="rgba(255,255,255,.35)" strokeWidth="3" fill="none" />
          </>
        )}
        {art === "sancocho" && (
          <>
            <ellipse cx="100" cy="84" rx="44" ry="30" fill="#d6a23a" />
            <circle cx="82" cy="78" r="10" fill="#9a5a28" />
            <circle cx="112" cy="90" r="9" fill="#e9c35b" />
            <rect x="96" y="68" width="22" height="12" rx="6" fill="#6aa04a" transform="rotate(-18 107 74)" />
            <circle cx="122" cy="72" r="6" fill="#f08a3a" />
          </>
        )}
      </g>
      <g className="dish__garnish">
        <circle cx="150" cy="116" r="12" fill="#6aa04a" />
        <circle cx="156" cy="110" r="8" fill="#86be5f" />
        <path d="M46 112a14 14 0 0 0 28 0z" fill="#f4c542" />
      </g>
      {/* vapor */}
      <g className="dish__steam" stroke="rgba(255,255,255,.9)" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M82 36c-6-8 6-12 0-20" />
        <path d="M104 34c-6-8 6-12 0-20" />
        <path d="M124 38c-6-8 6-12 0-20" />
      </g>
    </svg>
  );
}
