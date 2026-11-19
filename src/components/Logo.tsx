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
        {/* T */}
        <path d="M25.5 21 h12 M31.5 21 v22" />
        {/* C */}
        <path d="M51.5 21 h-5 a5 5 0 0 0 -5 5 v12 a5 5 0 0 0 5 5 h5" />
      </g>
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Golden Treasure Capital – home">
      <LogoMark className={compact ? "h-10 w-10" : "h-12 w-12"} />
      <span className="h-10 w-px bg-gold-500/60" />
      <span className="whitespace-nowrap leading-tight">
        <span className="block font-serif text-base tracking-wide text-white xl:text-xl">GOLDEN TREASURE</span>
        <span className="block text-center text-[11px] tracking-[0.5em] text-gold-400">CAPITAL</span>
      </span>
    </Link>
  );
}
