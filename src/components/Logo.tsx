import Link from "next/link";

export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbe39c" />
          <stop offset="0.5" stopColor="#ecc35e" />
          <stop offset="1" stopColor="#b8862b" />
        </linearGradient>
      </defs>
      <polygon
        points="32,3 57,17.5 57,46.5 32,61 7,46.5 7,17.5"
        fill="none"
        stroke="url(#lg-gold)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <g fill="none" stroke="url(#lg-gold)" strokeWidth="3.5" strokeLinecap="butt" strokeLinejoin="miter">
        {/* G */}
        <path d="M21.5 21 h-4 a5 5 0 0 0 -5 5 v12 a5 5 0 0 0 5 5 h4 v-9 h-4" />
        {/* A */}
        <path d="M25 43 L31.5 21 L38 43 M27.4 35 h8.2" />
        {/* C */}
        <path d="M51.5 21 h-5 a5 5 0 0 0 -5 5 v12 a5 5 0 0 0 5 5 h5" />
      </g>
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Golden Age Capital home">
      <LogoMark className={compact ? "h-11 w-11 shrink-0" : "h-12 w-12 shrink-0 xl:h-[52px] xl:w-[52px]"} />
      <span className={`w-px shrink-0 bg-gold-500/60 ${compact ? "h-11" : "h-11 xl:h-12"}`} />
      <span
        className={`flex flex-col items-center gap-0.5 whitespace-nowrap font-serif leading-[1.15] tracking-[0.08em] ${
          compact ? "text-lg" : "text-lg xl:text-xl"
        }`}
      >
        <span className="text-white">GOLDEN AGE</span>
        <span className="text-gold-400">CAPITAL</span>
      </span>
    </Link>
  );
}
