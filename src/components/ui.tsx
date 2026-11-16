import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChartNoAxesCombined,
  Gem,
  Info,
  Mail,
  ShieldCheck,
  Star,
} from "lucide-react";
import { formatAUD, riskWarningShort, site, type Product, type Testimonial } from "@/lib/site";
import { HarbourScene } from "./Illustrations";

export function GoldButton({
  href,
  children,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
  return (
    <Link
      href={href}
      className={`bg-gold-gradient inline-flex items-center gap-2 rounded-lg font-semibold text-navy-950 shadow-[0_8px_24px_-8px_rgba(217,166,63,0.7)] transition hover:-translate-y-0.5 hover:brightness-110 ${sizes[size]} ${className}`}
    >
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SectionHeading({
  title,
  subtitle,
  light = false,
  center = true,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-2xl text-center" : ""}`}>
      <h2 className={`font-serif text-3xl sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      <div className={`gold-divider mt-4 w-24 ${center ? "mx-auto" : ""}`} />
      {subtitle && <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-slate-600"}`}>{subtitle}</p>}
    </div>
  );
}

export function PageHero({ title, subtitle, children }: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <section className="bg-navy-gradient relative overflow-hidden">
      <HarbourScene className="absolute inset-y-0 right-0 h-full w-full opacity-60 [mask-image:linear-gradient(to_right,transparent_10%,black_70%)] lg:w-3/4" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="animate-rise max-w-xl">
          <h1 className="font-serif text-4xl text-white sm:text-5xl">{title}</h1>
          <p className="mt-3 text-xl text-gold-300">{subtitle}</p>
          {children && <div className="mt-6 text-white/80">{children}</div>}
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
}

export function RiskNote({ className = "" }: { className?: string }) {
  return (
    <p className={`flex gap-2 text-xs leading-relaxed text-slate-500 ${className}`}>
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
      <span>{riskWarningShort}</span>
    </p>
  );
}

export function ComplianceBadge() {
  return (
    <div className="mx-auto flex max-w-3xl items-center gap-4 rounded-xl border border-slate-200 bg-mist px-6 py-4 shadow-sm">
      <ShieldCheck className="h-10 w-10 shrink-0 text-gold-600" />
      <p className="text-sm text-navy-900">
        Issued by {site.responsibleEntity} ({site.afsl}). Read the{" "}
        <Link href="/legal/documents" className="font-semibold text-gold-700 underline underline-offset-2">
          Product Disclosure Statement and Target Market Determination
        </Link>{" "}
        before investing.
      </p>
    </div>
  );
}

const productIcons = { calendar: CalendarDays, chart: ChartNoAxesCombined, diamond: Gem };

export function ProductCard({ product, detailed = false }: { product: Product; detailed?: boolean }) {
  const Icon = productIcons[product.icon];
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-200/50 ring-1 ring-gold-400/50">
        <Icon className="h-8 w-8 text-gold-600" />
      </div>
      <h3 className="font-serif text-2xl text-navy-900">{product.name}</h3>
      <p className="mt-2 text-slate-600">{product.summary}</p>
      <div className="my-5">
        <p className="text-xs uppercase tracking-widest text-slate-500">Target return*</p>
        <p className="font-serif text-4xl text-gold-600">
          {product.targetRate.toFixed(2)}%<span className="text-base text-slate-500"> p.a.</span>
        </p>
        <p className="text-sm text-slate-500">Minimum {formatAUD(product.minimum)}</p>
      </div>
      {detailed && (
        <ul className="mb-6 space-y-2 text-left text-sm text-slate-700">
          {product.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={detailed ? `/portal?product=${product.slug}` : `/investments#${product.slug}`}
        className="mt-auto inline-flex items-center justify-center gap-1 text-sm font-semibold text-navy-800 group-hover:text-gold-700"
      >
        {detailed ? "Invest Now" : "Learn More"} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-gold-400 text-gold-500`} />
      ))}
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
      <div className="bg-navy-gradient flex h-16 w-16 items-center justify-center rounded-full font-serif text-xl text-gold-300 ring-2 ring-gold-400">
        {t.initials}
      </div>
      <Stars className="mt-4 h-4 w-4" />
      <blockquote className="mt-4 flex-1 text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-5">
        <p className="font-semibold text-navy-900">{t.name}</p>
        <p className="text-sm text-gold-700">{t.state}</p>
      </figcaption>
    </figure>
  );
}

export function SampleReviewNotice() {
  if (!site.showSampleReviewNotice) return null;
  return (
    <p className="mx-auto mb-8 max-w-2xl rounded-lg border border-dashed border-gold-500 bg-gold-200/30 px-4 py-2 text-center text-xs text-gold-700">
      Preview only: these are sample testimonials for design purposes. Replace with real, verified reviews before
      launch.
    </p>
  );
}

export function CtaBanner() {
  return (
    <section className="bg-navy-gradient relative overflow-hidden">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-14 text-center md:flex-row md:text-left lg:px-8">
        <Mail className="h-14 w-14 shrink-0 text-gold-400" strokeWidth={1.25} />
        <div className="flex-1">
          <h2 className="font-serif text-3xl text-gold-400">Ready to Start?</h2>
          <p className="mt-1 text-white/85">
            Create your account today and take the first step towards your financial goals.
          </p>
        </div>
        <GoldButton href="/portal?tab=create" size="lg">
          Sign Up Now
        </GoldButton>
      </div>
      <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60 C 400 0, 900 70, 1440 10 L1440 60 Z" fill="#040b20" />
        <path d="M0 50 C 400 -5, 900 60, 1440 4" fill="none" stroke="#ecc35e" strokeWidth="2" />
      </svg>
    </section>
  );
}
