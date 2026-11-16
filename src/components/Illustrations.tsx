/* Hand-built SVG artwork so the site has no external image dependencies.
   Swap any of these for real photography by dropping images into /public/images. */

const windowsPattern = (
  <pattern id="win" width="8" height="10" patternUnits="userSpaceOnUse">
    <rect width="8" height="10" fill="transparent" />
    <rect x="2" y="2" width="3" height="4" fill="#f6d98a" opacity="0.75" />
  </pattern>
);

function Towers({ opacity = 1 }: { opacity?: number }) {
  // x, width, height
  const t: [number, number, number][] = [
    [380, 34, 190], [418, 26, 140], [448, 40, 250], [492, 30, 175], [526, 22, 300],
    [552, 38, 220], [594, 30, 160], [628, 46, 270], [678, 28, 200], [710, 40, 330],
    [754, 32, 210], [790, 26, 150], [820, 44, 240], [868, 30, 180], [902, 36, 260],
    [942, 28, 170], [974, 40, 230], [1018, 30, 150], [1052, 46, 280], [1102, 34, 190],
    [1140, 30, 230], [1174, 26, 160],
  ];
  return (
    <g opacity={opacity}>
      {t.map(([x, w, h], i) => (
        <g key={i}>
          <rect x={x} y={420 - h} width={w} height={h} fill="url(#tower)" />
          <rect x={x + 3} y={420 - h + 8} width={w - 6} height={h - 12} fill="url(#win)" opacity={0.35 + (i % 3) * 0.2} />
        </g>
      ))}
      {/* spire on tallest tower */}
      <rect x="728" y="50" width="4" height="40" fill="#f6d98a" />
      <circle cx="730" cy="48" r="3" fill="#fff4cf" className="animate-twinkle" />
    </g>
  );
}

function Sail({ x, y, s, flip = false }: { x: number; y: number; s: number; flip?: boolean }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}
      d="M0 0 C 8 -55, 45 -92, 92 -100 C 78 -66, 72 -34, 74 0 Z"
      fill="url(#sail)"
      stroke="#f6d98a"
      strokeWidth={1.2 / s}
    />
  );
}

export function HarbourScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#081a45" />
          <stop offset="0.55" stopColor="#1a3d86" />
          <stop offset="0.8" stopColor="#c58b3a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#f2c66b" />
        </linearGradient>
        <linearGradient id="tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c3a78" />
          <stop offset="1" stopColor="#0a1940" />
        </linearGradient>
        <linearGradient id="sail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset="0.6" stopColor="#f3e3bf" />
          <stop offset="1" stopColor="#d9a854" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b3570" />
          <stop offset="1" stopColor="#050d26" />
        </linearGradient>
        <radialGradient id="glow" cx="0.6" cy="0.75" r="0.5">
          <stop offset="0" stopColor="#ffd98a" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
        {windowsPattern}
      </defs>

      <rect width="1200" height="600" fill="url(#sky)" />
      <rect width="1200" height="600" fill="url(#glow)" />

      {/* stars */}
      {[[120, 40], [260, 90], [420, 30], [560, 70], [880, 40], [1010, 85], [1140, 30], [340, 150]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.4" fill="#fff" className="animate-twinkle" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      <Towers />

      {/* Opera House */}
      <g transform="translate(330 0)">
        <path d="M250 450 L760 450 L740 470 L270 470 Z" fill="#c9a062" />
        <rect x="270" y="470" width="470" height="14" fill="#7a5a2a" />
        <Sail x={330} y={450} s={1.25} />
        <Sail x={420} y={450} s={1.55} />
        <Sail x={530} y={450} s={1.85} />
        <Sail x={640} y={450} s={1.4} />
        <Sail x={700} y={450} s={0.9} />
        {/* warm interior glow */}
        <rect x="300" y="438" width="420" height="12" fill="#ffd98a" opacity="0.8" />
      </g>

      {/* water */}
      <rect y="484" width="1200" height="116" fill="url(#water)" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect
          key={i}
          x={300 + ((i * 53) % 460)}
          y={492 + i * 7}
          width={60 - (i % 4) * 10}
          height="2"
          rx="1"
          fill="#f6d98a"
          opacity={0.55 - i * 0.03}
        />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={`c${i}`} x={820 + i * 34} y={496 + (i % 3) * 14} width="18" height="2" fill="#f6d98a" opacity="0.3" />
      ))}
    </svg>
  );
}

export function CoinStacks({ className = "" }: { className?: string }) {
  const stacks = [
    { x: 40, n: 6 },
    { x: 110, n: 9 },
    { x: 180, n: 12 },
    { x: 250, n: 16 },
    { x: 320, n: 21 },
  ];
  return (
    <svg viewBox="0 0 420 320" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="coinSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8e6520" />
          <stop offset="0.35" stopColor="#f6d98a" />
          <stop offset="0.7" stopColor="#d9a63f" />
          <stop offset="1" stopColor="#8e6520" />
        </linearGradient>
        <linearGradient id="arrow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#d9a63f" stopOpacity="0.2" />
          <stop offset="1" stopColor="#fbe39c" />
        </linearGradient>
      </defs>
      {stacks.map((s, si) => (
        <g key={si}>
          {Array.from({ length: s.n }).map((_, i) => {
            const y = 290 - i * 11;
            return (
              <g key={i}>
                <rect x={s.x - 26} y={y - 5} width="52" height="10" fill="url(#coinSide)" />
                <ellipse cx={s.x} cy={y + 5} rx="26" ry="6" fill="#8e6520" />
                <ellipse cx={s.x} cy={y - 5} rx="26" ry="6" fill="#ecc35e" stroke="#b8862b" strokeWidth="0.8" />
              </g>
            );
          })}
        </g>
      ))}
      <path d="M20 250 L120 190 L180 205 L300 90 L330 105 L400 20" fill="none" stroke="url(#arrow)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M372 18 L404 16 L398 48 Z" fill="#fbe39c" />
    </svg>
  );
}

export function GrowthLine({ className = "" }: { className?: string }) {
  const pts = [
    [0, 170], [40, 160], [80, 165], [120, 150], [160, 140], [200, 145], [240, 128], [280, 120],
    [320, 108], [360, 112], [400, 95], [440, 85], [480, 70], [520, 60], [560, 40], [600, 20],
  ];
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
  return (
    <svg viewBox="-10 0 620 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ecc35e" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ecc35e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L600 200 L0 200 Z`} fill="url(#area)" />
      <path d={d} fill="none" stroke="#ecc35e" strokeWidth="2.5" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === pts.length - 1 ? 6 : 3.5} fill="#fbe39c" stroke="#b8862b" />
      ))}
    </svg>
  );
}
