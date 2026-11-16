import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  ChartNoAxesColumnIncreasing,
  Clock,
  Handshake,
  Headset,
  MapPinned,
  ShieldCheck,
  Trophy,
  UsersRound,
} from "lucide-react";
import { Calculator } from "@/components/Calculator";
import { CoinStacks, GrowthLine, HarbourScene } from "@/components/Illustrations";
import {
  CtaBanner,
  GoldButton,
  ProductCard,
  RiskNote,
  SampleReviewNotice,
  SectionHeading,
  TestimonialCard,
} from "@/components/ui";
import { products, site, testimonials } from "@/lib/site";

const pillars = [
  { icon: ShieldCheck, title: "Secure & Compliant", text: "Australian Focused" },
  { icon: ChartNoAxesColumnIncreasing, title: "Attractive Target Returns", text: "on Fixed-Term Investments" },
  { icon: Handshake, title: "Dedicated Support", text: "Every Step of the Way" },
  { icon: Trophy, title: "Built for", text: "Australian Investors" },
];

const reasons = [
  { icon: ChartNoAxesColumnIncreasing, label: "Competitive Returns" },
  { icon: ShieldCheck, label: "Strong Security" },
  { icon: UsersRound, label: "Expert Management" },
  { icon: Headset, label: "Personalised Support" },
];

const facts = [
  { icon: BadgeDollarSign, value: "$1,000", label: "Minimum to start" },
  { icon: Clock, value: "6–24", label: "Month fixed terms" },
  { icon: MapPinned, value: "100%", label: "Australian-hosted data" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-gradient relative overflow-hidden">
        <HarbourScene className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_right,transparent_15%,black_60%)]" />
        {/* diagonal gold slash, as in the design */}
        <div className="pointer-events-none absolute -bottom-10 left-[38%] hidden h-[140%] w-[3px] rotate-[28deg] bg-gradient-to-b from-transparent via-gold-400 to-gold-300 shadow-[0_0_25px_6px_rgba(236,195,94,0.45)] lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-20 lg:px-8 lg:pb-36 lg:pt-28">
          <div className="animate-rise max-w-2xl">
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Grow Your Wealth
              <br />
              with <span className="text-gold-gradient">Golden Treasure Capital</span>
            </h1>
            <p className="mt-6 text-xl text-white/90">{site.tagline}</p>
            <p className="mt-4 max-w-lg text-lg text-white/75">
              Invest in carefully structured fixed-term opportunities in Australia and track your investment with
              confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GoldButton href="/portal?tab=create" size="lg">
                Start Investing Today
              </GoldButton>
              <Link href="/investments" className="text-white/85 underline-offset-4 hover:text-gold-300 hover:underline">
                View target rates
              </Link>
            </div>
            <p className="mt-6 max-w-lg text-xs text-white/50">
              Target returns are variable and not guaranteed. Not a bank deposit. Capital at risk.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative z-10 -mt-16 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-gold-500/25 bg-navy-900 shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`flex flex-col items-center px-6 py-8 text-center ${i ? "border-white/10 sm:border-l" : ""}`}
            >
              <Icon className="h-11 w-11 text-gold-400" strokeWidth={1.4} />
              <p className="mt-3 font-semibold text-white">{title}</p>
              <p className="text-sm text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-mist to-gold-200/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <CoinStacks className="mx-auto w-full max-w-md drop-shadow-2xl" />
          <div>
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">Why Choose Golden Treasure Capital?</h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-5 text-lg text-slate-600">
              We are committed to helping our investors work towards their financial goals through strategic,
              transparent and well-managed fixed-term investment opportunities.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {reasons.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-3 py-5 text-center shadow-sm"
                >
                  <Icon className="h-8 w-8 text-gold-600" strokeWidth={1.5} />
                  <p className="mt-2 text-sm font-medium text-navy-900">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <GoldButton href="/about" size="sm">
                Learn More About Us
              </GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            title="Our Investment Options"
            subtitle="Choose a fixed term that suits your goals. Rates are shown up front with the risks right beside them."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <RiskNote className="mx-auto mt-8 max-w-3xl" />
          <p className="mt-2 text-center text-xs text-slate-400">*Target rates as at {site.ratesAsAt}, after fees.</p>
        </div>
      </section>

      {/* PERFORMANCE / FACTS */}
      <section className="bg-navy-gradient relative overflow-hidden py-20">
        <GrowthLine className="absolute bottom-0 right-0 hidden w-[55%] opacity-90 lg:block" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-serif text-3xl text-gold-400 sm:text-4xl">Built for Steady Growth</h2>
          <p className="mt-2 text-lg text-white/85">Clear terms. Lasting value.</p>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {facts.map(({ icon: Icon, value, label }) => (
              <div key={label} className="gold-ring flex flex-col items-center rounded-xl bg-navy-900/70 px-4 py-6 text-center">
                <Icon className="h-9 w-9 text-gold-400" strokeWidth={1.4} />
                <p className="mt-2 font-serif text-3xl text-white">{value}</p>
                <p className="text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">Past performance is not a reliable indicator of future performance.</p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            light
            title={<>See What Your Money <span className="text-gold-gradient">Could</span> Earn</>}
            subtitle="Use our calculator to estimate an indicative return at today's target rates."
          />
          <Calculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="What Our Investors Say" subtitle="Trusted by Australian investors." />
          <SampleReviewNotice />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/reviews" className="inline-flex items-center gap-1 font-semibold text-navy-800 hover:text-gold-700">
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
