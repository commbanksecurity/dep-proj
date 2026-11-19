import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  CalendarClock,
  ChartNoAxesColumnIncreasing,
  CircleHelp,
  FileText,
  Handshake,
  Headset,
  Landmark,
  LockKeyhole,
  MessageSquareQuote,
  MonitorSmartphone,
  Scale,
  ShieldCheck,
  Trophy,
  UsersRound,
} from "lucide-react";
import { Calculator } from "@/components/Calculator";
import {
  ArticleCard,
  CheckList,
  CtaBanner,
  Eyebrow,
  GoldButton,
  Photo,
  ProductCard,
  RiskNote,
  SampleReviewNotice,
  SectionHeading,
  TestimonialCard,
} from "@/components/ui";
import { articles, img, photos } from "@/lib/content";
import { formatAUD, products, site, steps, testimonials } from "@/lib/site";

const pillars = [
  { icon: ShieldCheck, title: "Secure & Compliant", text: "Independent custody, audited annually" },
  { icon: ChartNoAxesColumnIncreasing, title: "Competitive Returns", text: "Shown after fees, reviewed monthly" },
  { icon: Handshake, title: "Dedicated Support", text: "Australian team, every step of the way" },
  { icon: Trophy, title: "Built for Australians", text: "Individuals, SMSFs, companies & trusts" },
];

const philosophy = [
  {
    icon: Landmark,
    title: "Capital Preservation",
    text: "We focus on conservative, income producing Australian assets with disciplined credit and diversification limits.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled Income",
    text: "Fixed terms and clear payment dates help you plan, whether you want monthly income or a lump sum at maturity.",
  },
  {
    icon: Scale,
    title: "Complete Transparency",
    text: "Rates, fees and risks are always shown side by side in a PDS you can actually read",
  },
];

const benefits = [
  { icon: BadgeDollarSign, title: "Start from $10,000", text: "Accessible minimums so you can begin at a level that suits you." },
  { icon: CalendarClock, title: "Choice of terms", text: "6, 12 or 24 months, with monthly or at maturity payout options." },
  { icon: FileText, title: "No entry or exit fees", text: "Zero hidden charges. Fixed rates are shown net of fees." },
  { icon: MonitorSmartphone, title: "24/7 investor portal", text: "Track balances, returns and statements from any device." },
  { icon: LockKeyhole, title: "Strong security", text: "Two factor login, encryption and Australian hosted data." },
  { icon: Headset, title: "Real people", text: "Speak to our Australian team, not a call centre overseas." },
];

const explore = [
  { href: "/investments", icon: ChartNoAxesColumnIncreasing, title: "Investments", text: "Products, terms, minimums and risks" },
  { href: "/how-it-works", icon: CalendarClock, title: "How It Works", text: "From registration to maturity" },
  { href: "/about-us", icon: UsersRound, title: "About Us", text: "Our story, team and values" },
  { href: "/reviews", icon: MessageSquareQuote, title: "Reviews", text: "What investors say about us" },
  { href: "/faqs", icon: CircleHelp, title: "FAQs", text: "Answers to common questions" },
  { href: "/insights", icon: BookOpen, title: "Insights", text: "Market news and investor education" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950">
        <Image src={img(photos.sydneyNight, 2000)} alt="Sydney Harbour at dusk" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-32 pt-20 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:pb-40 lg:pt-28">
          <div className="animate-rise">
            <Eyebrow light>Australian fixed term investments</Eyebrow>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Grow Your Wealth
              <br />
              with <span className="text-gold-gradient">Golden Treasure Capital</span>
            </h1>
            <p className="mt-6 text-xl text-white/90">{site.tagline}</p>
            <p className="mt-4 max-w-xl text-lg text-white/75">
              Carefully structured 6, 12 and 24 month investment terms for Australians who want a clear fixed return,
              a set timeframe and complete visibility of their money.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GoldButton href="/investments" size="lg">
                Explore Our Investments
              </GoldButton>
              <Link
                href="/how-it-works"
                className="rounded-lg border border-white/30 px-6 py-4 font-semibold text-white transition hover:border-gold-400 hover:text-gold-300"
              >
                How It Works
              </Link>
            </div>
            <p className="mt-6 max-w-lg text-xs text-white/50">
              Returns are fixed and guaranteed.
            </p>
          </div>

          {/* Rates panel */}
          <div className="animate-rise rounded-2xl border border-gold-500/30 bg-navy-950/70 p-7 shadow-2xl backdrop-blur-md [animation-delay:150ms]">
            <div className="flex justify-center">
              <div className="inline-block text-center">
                <h2 className="font-serif text-2xl text-white">Current Fixed Rates</h2>
                <div className="gold-divider mt-3 w-full" />
              </div>            </div>
            <ul className="mt-5 divide-y divide-white/10">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/investments#${p.slug}`} className="group flex items-center justify-between py-4">
                    <div>
                      <p className="font-semibold text-white group-hover:text-gold-300">{p.name}</p>
                      <p className="text-xs text-white/60">Min. {formatAUD(p.minimum)}</p>
                    </div>
                    <p className="font-serif text-3xl text-gold-gradient">
                      {p.targetRate.toFixed(2)}%<span className="text-sm text-white/50"> p.a.*</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <GoldButton href="/portal?tab=create" className="mt-4 w-full justify-center">
              Start Investing
            </GoldButton>
            <p className="mt-4 text-[11px] leading-relaxed text-white/50">
              *Returns are fixed and guaranteed. Read the PDS and TMD.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative z-10 -mt-20 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-gold-500/25 bg-navy-900 shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className={`flex flex-col items-center px-6 py-8 text-center ${i ? "border-white/10 sm:border-l" : ""}`}>
              <Icon className="h-11 w-11 text-gold-400" strokeWidth={1.4} />
              <p className="mt-3 font-semibold text-white">{title}</p>
              <p className="text-sm text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <Photo id={photos.teamMeeting} alt="Golden Treasure Capital team meeting" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl border border-gold-500/30 bg-navy-900 px-7 py-6 shadow-2xl sm:block">
              <p className="font-serif text-4xl text-gold-gradient">3</p>
              <p className="text-sm text-white/80">Fixed Term Options</p>
            </div>
          </div>
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">
              Building a stronger financial future{" "}
              <span className="inline-block">
                for Australians
                <span className="gold-divider mt-4 block w-full" />
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Golden Treasure Capital is an Australian based investment manager offering fixed term investment
              opportunities to individuals, retirees and self managed super funds.
            </p>
            <p className="mt-4 text-slate-600">
              We believe investing should be simple to understand. Every product we offer comes with a clear timeframe,
              a published fixed return, plain documents and a secure online portal so you always know how your money
              is performing.
            </p>
            <div className="mt-8">
              <CheckList
                items={[
                  "Experienced Australia based leadership and investment team",
                  "Transparent governance with independent custody and annual audits",
                  "Dedicated local client support from application to maturity",
                ]}
              />
            </div>
            <div className="mt-8">
              <GoldButton href="/about-us" size="sm">Learn More About Us</GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-navy-gradient relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            light
            title="Our Investment Philosophy"
            subtitle="Three principles guide every decision our Investment Committee makes."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {philosophy.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="gold-ring relative rounded-2xl bg-navy-900/70 p-8">
                <span className="absolute right-6 top-5 font-serif text-5xl text-white/10">0{i + 1}</span>
                <Icon className="h-10 w-10 text-gold-400" strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-2xl text-white">{title}</h3>
                <p className="mt-3 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            title="Featured Investment Opportunities"
            subtitle="Choose a fixed term that suits your goals. Your rate is locked in from day one with zero risk and guaranteed delivery."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} returnLabel="FIXED RETURN" />
            ))}
          </div>
          <RiskNote className="mx-auto mt-8 max-w-3xl" />
          <div className="mt-8 text-center">
            <GoldButton href="/investments">Compare All Investments</GoldButton>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Why Investors Choose Us" subtitle="Everything you need to invest with clarity and confidence." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group flex gap-5 rounded-2xl border border-slate-200 p-7 transition hover:border-gold-400 hover:shadow-lg">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition group-hover:bg-gold-gradient group-hover:text-navy-950">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STRIP */}
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading light title="Start Investing in Four Simple Steps" subtitle="Most investors are set up within one business day." />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="bg-gold-gradient mx-auto flex h-14 w-14 items-center justify-center rounded-full font-serif text-xl text-navy-950 shadow-lg">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="absolute left-[calc(50%+40px)] right-[calc(-50%+40px)] top-7 hidden h-px bg-gold-500/40 md:block" />}
                <h3 className="mt-5 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/how-it-works" className="inline-flex items-center gap-1 font-semibold text-gold-400 hover:text-gold-300">
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-navy-gradient py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            light
            title={<>See What Your Money <span className="text-gold-gradient">Will</span> Earn</>}
            subtitle="Calculate your projected payout at today's fixed rates."
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

      {/* LATEST UPDATES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>News & insights</Eyebrow>
              <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">Latest Company Updates</h2>
              <div className="gold-divider mt-4 w-24" />
            </div>
            <Link href="/insights" className="inline-flex items-center gap-1 font-semibold text-navy-800 hover:text-gold-700">
              View all insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="border-t border-slate-200 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Explore Golden Treasure Capital" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {explore.map(({ href, icon: Icon, title, text }) => (
              <Link key={href} href={href} className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-gold-400 hover:shadow-md">
                <Icon className="h-8 w-8 shrink-0 text-gold-600" strokeWidth={1.5} />
                <div className="flex-1">
                  <p className="font-semibold text-navy-900">{title}</p>
                  <p className="text-sm text-slate-500">{text}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
