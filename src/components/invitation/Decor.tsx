// Hand-drawn SVG decorations for the invitation page (no image downloads).

const MARIGOLD = ["#f59e0b", "#ea580c", "#fbbf24", "#f97316"];

// Swags of marigold flowers hanging from the top edge, with tassels at each join.
export function Garland({ swags = 4, className = "" }: { swags?: number; className?: string }) {
  const w = 100;
  const flowers: { x: number; y: number; r: number; c: string }[] = [];
  for (let s = 0; s < swags; s++) {
    const x0 = s * w;
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      // quadratic curve (x0,4) → control (x0+50,58) → (x0+100,4)
      const x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * (x0 + 50) + t * t * (x0 + w);
      const y = (1 - t) * (1 - t) * 4 + 2 * (1 - t) * t * 58 + t * t * 4;
      flowers.push({ x, y, r: i % 2 ? 4.2 : 5, c: MARIGOLD[(i + s) % MARIGOLD.length] });
    }
  }
  const joins = Array.from({ length: swags + 1 }, (_, i) => i * w);
  return (
    <svg className={`garland ${className}`} viewBox={`0 0 ${swags * w} 64`} preserveAspectRatio="xMidYMin meet" aria-hidden="true" focusable="false">
      {joins.map((x) => (
        <g key={x}>
          <path d={`M${x - 6} 2 q6 -4 12 0`} stroke="#3f7d3a" strokeWidth="3" fill="none" />
          <line x1={x} y1="4" x2={x} y2="40" stroke="#f59e0b" strokeWidth="1" />
          {[10, 18, 26, 34].map((y, i) => (
            <circle key={y} cx={x} cy={y} r={i === 3 ? 3.4 : 2.6} fill={MARIGOLD[(i + x / w) % MARIGOLD.length]} />
          ))}
          <path d={`M${x - 2.5} 38 l2.5 6 l2.5 -6 z`} fill="#c2410c" />
        </g>
      ))}
      {flowers.map((f, i) => (
        <circle key={i} cx={f.x} cy={f.y} r={f.r} fill={f.c} stroke="rgb(0 0 0 / 0.12)" strokeWidth="0.6" />
      ))}
    </svg>
  );
}

// A sagging string of warm lights. Dots are HTML spans so the twinkle (opacity)
// runs on the compositor instead of repainting SVG every frame.
export function Lights({ className = "" }: { className?: string }) {
  const n = 22;
  return (
    <div className={`lights ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 44" preserveAspectRatio="none" focusable="false">
        <path d="M0 8 Q200 62 400 8" stroke="rgb(255 225 170 / 0.35)" strokeWidth="0.8" fill="none" />
      </svg>
      {Array.from({ length: n }, (_, i) => {
        const t = i / (n - 1);
        return (
          <span
            key={i}
            className="lights__dot"
            style={{ left: `${1 + t * 98}%`, top: `${((8 + Math.sin(t * Math.PI) * 22 + (i % 2) * 2) / 44) * 100}%`, animationDelay: `${(i * 0.37) % 2.4}s` }}
          />
        );
      })}
    </div>
  );
}

// Himalaya silhouette with snow caps and a three-tier pagoda.
export function Mountains({ className = "" }: { className?: string }) {
  return (
    <svg className={`mountains ${className}`} viewBox="0 0 400 140" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path d="M0 140 V86 L52 50 L84 72 L130 30 L170 66 L214 40 L262 78 L300 46 L346 80 L400 56 V140 Z" fill="#5a1422" opacity="0.75" />
      <path d="M118 41 L130 30 L142 41 L134 38 L130 42 L125 38 Z M204 47 L214 40 L224 47 L217 45 L214 48 L210 45 Z M291 53 L300 46 L309 53 L303 51 L300 54 L296 51 Z" fill="#f4dfe2" opacity="0.85" />
      <path d="M0 140 V104 Q60 84 120 100 T240 96 T400 92 V140 Z" fill="#43101b" />
      <g fill="#2b0910" transform="translate(318 58)">
        <rect x="20" y="58" width="16" height="26" />
        <path d="M6 60 H50 L40 50 H16 Z" />
        <rect x="22" y="38" width="12" height="12" />
        <path d="M10 40 H46 L37 31 H19 Z" />
        <rect x="24" y="22" width="8" height="9" />
        <path d="M14 23 H42 L34 15 H22 Z" />
        <path d="M27 15 L28 4 L29 15 Z" />
      </g>
      <path d="M0 140 V118 Q100 108 200 116 T400 112 V140 Z" fill="#2b0910" />
    </svg>
  );
}

// Kalash (sacred pot) with mango leaves and coconut.
export function Kalash({ className = "" }: { className?: string }) {
  return (
    <svg className={`kalash ${className}`} viewBox="0 0 48 60" aria-hidden="true" focusable="false">
      <path d="M14 18 Q24 6 34 18" fill="#3f7d3a" />
      <path d="M10 20 Q16 10 22 19 M38 20 Q32 10 26 19" stroke="#2f6b2b" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="24" cy="14" rx="7" ry="6" fill="#b45309" />
      <path d="M15 22 H33 L31 26 H17 Z" fill="#d4a017" />
      <path d="M17 26 Q6 36 12 48 Q24 58 36 48 Q42 36 31 26 Z" fill="#e0a526" />
      <path d="M12 40 Q24 46 36 40" stroke="#9e2a3a" strokeWidth="2.4" fill="none" />
      <text x="24" y="38" textAnchor="middle" fontSize="7" fontWeight="700" fill="#9e2a3a">शुभ</text>
    </svg>
  );
}

// Petals drifting down the page. Positions and timings are fixed so SSR matches.
export function Petals({ count = 14 }: { count?: number }) {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            animationDuration: `${9 + ((i * 7) % 8)}s`,
            animationDelay: `${-((i * 1.9) % 12)}s`,
            background: ["#f59e0b", "#e11d48", "#fb923c", "#be123c"][i % 4],
          }}
        />
      ))}
    </div>
  );
}

// Ornamental diamond divider.
export function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span />
    </div>
  );
}
