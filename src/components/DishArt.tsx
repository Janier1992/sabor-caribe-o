import { useId } from "react";
import type { Art } from "../data/menu";

/** Ilustración vectorial genérica y reemplazable (no es una foto del restaurante). */
export default function DishArt({ art }: { art: Art }) {
  const id = useId().replace(/:/g, "");
  const soup = art === "sancocho";
  return (
    <svg className="plate" viewBox="0 0 240 240" role="img" aria-label="Ilustración de referencia del plato" focusable="false">
      <defs>
        <radialGradient id={`p${id}`} cx=".35" cy=".3" r=".9">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dfeeea" />
        </radialGradient>
        <linearGradient id={`m${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={art === "res" ? "#a24a25" : art === "cerdo" ? "#e9a35a" : "#f2b556"} />
          <stop offset="1" stopColor={art === "res" ? "#5b2210" : art === "cerdo" ? "#b8692c" : "#c8812a"} />
        </linearGradient>
        <linearGradient id={`f${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={art === "trucha" ? "#cdb59a" : "#e8a85a"} />
          <stop offset="1" stopColor={art === "trucha" ? "#a98a6c" : "#c27a30"} />
        </linearGradient>
        <radialGradient id={`b${id}`} cx=".5" cy=".4" r=".7">
          <stop offset="0" stopColor="#ffd36a" />
          <stop offset="1" stopColor="#e39a2a" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="116" r="108" fill={`url(#p${id})`} />
      <circle cx="120" cy="116" r="108" fill="none" stroke="#c6e0da" strokeWidth="3" />
      <circle cx="120" cy="116" r="84" fill="#fbfffd" stroke="#d6eae5" strokeWidth="2" />

      {soup ? (
        <g className="plate__food">
          <circle cx="120" cy="116" r="74" fill="#d9573a" />
          <circle cx="120" cy="116" r="64" fill={`url(#b${id})`} />
          <ellipse cx="96" cy="104" rx="26" ry="11" fill="#f6d66b" transform="rotate(-24 96 104)" />
          <g fill="#d99c1e">{[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={78 + i * 9} cy={116 - i * 4.5} r="2" />)}</g>
          <circle cx="146" cy="100" r="15" fill="#e7cf9a" /><circle cx="141" cy="96" r="5" fill="#f3e3b7" />
          <rect x="116" y="124" width="34" height="16" rx="8" fill="#f2c23c" transform="rotate(16 133 132)" />
          <circle cx="98" cy="142" r="13" fill="#8b4a25" />
          <g fill="#4f9a3e"><circle cx="150" cy="134" r="5" /><circle cx="108" cy="82" r="4.5" /><circle cx="158" cy="116" r="4" /><circle cx="86" cy="130" r="4" /></g>
          <rect x="176" y="196" width="10" height="42" rx="5" fill="#d4d9dc" transform="rotate(-38 181 217)" />
        </g>
      ) : (
        <g className="plate__food">
          {/* arroz */}
          <path d="M58 138c-2-20 14-34 32-30 16 4 22 22 12 36-10 14-40 16-44-6z" fill="#fff" stroke="#e3ece9" strokeWidth="2" />
          <g stroke="#dbe5e1" strokeWidth="2" strokeLinecap="round">
            <path d="M70 128l5 2M82 120l4 3M90 134l5-1M74 142l4-3M96 122l3 4" />
          </g>
          {/* patacones */}
          <circle cx="164" cy="150" r="19" fill="#f2c23c" stroke="#d99c1e" strokeWidth="3" />
          <circle cx="188" cy="130" r="16" fill="#f6cf56" stroke="#d99c1e" strokeWidth="3" />
          {/* ensalada */}
          <path d="M142 62c8-14 30-14 38 0 5 10-2 22-14 22s-28-8-24-22z" fill="#58b04a" />
          <path d="M150 66c6-6 16-6 22 0" stroke="#8fd77f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="170" cy="76" r="9" fill="#ee4b37" /><circle cx="170" cy="76" r="4" fill="#ff8d78" />
          {/* proteína */}
          {art === "res" && (
            <g>
              <path d="M62 78c8-20 40-26 62-16 22 10 30 32 18 50-12 18-48 22-68 6-12-10-18-24-12-40z" fill={`url(#m${id})`} />
              <g stroke="#2e1209" strokeWidth="5" strokeLinecap="round" opacity=".75"><path d="M72 76l28 26M88 66l30 28M104 62l26 24" /></g>
              <path d="M70 94c6-12 20-20 36-22" stroke="#d07a4a" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7" />
            </g>
          )}
          {art === "cerdo" && (
            <g>
              <path d="M60 84c6-22 42-30 66-18 22 12 26 36 12 52-14 16-50 18-68 4-12-10-14-24-10-38z" fill={`url(#m${id})`} />
              <path d="M70 90c8-14 28-20 46-14" stroke="#ffd9a0" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".8" />
              <circle cx="132" cy="68" r="9" fill="#fff4de" stroke="#e2c9a0" strokeWidth="2" />
              <g stroke="#7d3f15" strokeWidth="4" strokeLinecap="round" opacity=".5"><path d="M82 104l22 16M98 98l22 16" /></g>
            </g>
          )}
          {art === "pollo" && (
            <g>
              <path d="M58 90c4-24 38-32 62-22 26 10 34 36 20 52-14 16-52 18-70 2-8-8-14-18-12-32z" fill={`url(#m${id})`} />
              <g stroke="#6b3a10" strokeWidth="5" strokeLinecap="round" opacity=".6"><path d="M72 84l26 24M90 74l26 24" /></g>
              <g fill="#58b04a"><circle cx="86" cy="118" r="3" /><circle cx="108" cy="124" r="3" /><circle cx="122" cy="96" r="3" /><circle cx="76" cy="100" r="2.5" /></g>
            </g>
          )}
          {(art === "pescado" || art === "trucha") && (
            <g>
              <path d="M44 100c18-30 66-38 96-14 6 5 11 10 14 16-4 6-9 11-14 15-30 24-78 16-96-17z" fill={`url(#f${id})`} />
              <path d="M150 102l36-26v52z" fill={art === "trucha" ? "#a98a6c" : "#c27a30"} />
              <path d="M82 80c-8 14-8 30 0 44M104 76c-8 16-8 34 0 50M126 80c-6 12-6 26 0 38" stroke="rgba(255,255,255,.45)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="62" cy="98" r="5" fill="#fff" /><circle cx="61" cy="98" r="2.8" fill="#1a0f08" />
              {art === "trucha" && <g fill="#5b3a22"><circle cx="90" cy="92" r="2.6" /><circle cx="108" cy="88" r="2.6" /><circle cx="122" cy="98" r="2.6" /><circle cx="100" cy="110" r="2.6" /><circle cx="80" cy="106" r="2.6" /></g>}
              {art === "trucha" && <path d="M56 106c30 10 66 8 94-4" stroke="#ef8f7a" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".8" />}
            </g>
          )}
          {/* limón */}
          <circle cx="96" cy="176" r="15" fill="#ffe14d" stroke="#f1c40f" strokeWidth="3" />
          <g stroke="#fff6a8" strokeWidth="2" strokeLinecap="round"><path d="M96 164v24M84 176h24M87 167l18 18M105 167l-18 18" /></g>
        </g>
      )}
      <g className="plate__steam" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M96 40c-8-10 8-14 0-26" />
        <path d="M122 34c-8-10 8-14 0-26" />
        <path d="M148 40c-8-10 8-14 0-26" />
      </g>
    </svg>
  );
}
