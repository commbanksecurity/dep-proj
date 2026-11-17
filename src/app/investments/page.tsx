import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  Building2,
  CalendarCheck2,
  Download,
  FileText,
  Landmark,
  PiggyBank,
  Repeat,
  ShieldCheck,
  UserRound,
  UsersRound,
  Wallet,
} from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { Calculator } from "@/components/Calculator";
import {
  CheckList,
  ComplianceBadge,
  CtaBanner,
  Eyebrow,
  GoldButton,
  PageHero,
  Photo,
  ProductCard,
  RiskNote,
  SectionHeading,
  StatBand,
  SubNav,
} from "@/components/ui";
import { faqCategories, photos } from "@/lib/content";
import { formatAUD, products, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investment Opportunities",
  description: "Compare 6, 12 and 24-month fixed-term investment options: target returns, minimums, return structures, risks and documents.",
};

const sections = [
  { id: "products", label: "Products" },
  { id: "compare", label: "Compare terms" },
  { id: "returns", label: "Return structures" },
  { id: "eligibility", label: "Eligibility" },
  { id: "risks", label: "Risks" },
  { id: "documents", label: "Documents" },
  { id: "calculator", label: "Calculator" },
  { id: "faqs", label: "FAQs" },
];

const investorTypes = [
  { icon: UserRound, title: "Individuals", text: "Australian residents aged 18 and over." },
  { icon: UsersRound, title: "Joint investors", text: "Couples, family members or business partners." },
  { icon: Building2, title: "Companies", text: "Australian-registered proprietary companies." },
  { icon: Landmark, title: "Trusts", text: "Family, unit and discretionary trusts." },
  { icon: PiggyBank, title: "SMSFs", text: "Self-managed super funds, individual or corporate trustee." },
];

const risks = [
  { title: "Not a bank deposit", text: "Not covered by the Australian Government's Financial Claims Scheme." },
  { title: "Returns can vary", text: "Target rates are variable and depend on the fund's actual earnings." },
  { title: "Capital risk", text: "You could lose some or all of the money you invest." },
  { title: "Liquidity risk", text: "Withdrawals, including at maturity, may be delayed in some circumstances." },
  { title: "Credit risk", text: "Borrowers or counterparties of the fund could fail to repay." },
  { title: "Interest rate risk", text: "Changes in market rates can affect what the fund earns and pays." },
];

const documents = [
  { name: "Product Disclosure Statement (PDS)", meta: "PDF · Issued by the responsible entity" },
  { name: "Target Market Determination (TMD)", meta: "PDF · Who this product is designed for" },
  { name: "Application Guide", meta: "PDF · Step-by-step help with applying" },
  { name: "Fund Constitution Summary", meta: "PDF · Key terms of the scheme" },
  { name: "Monthly Rate Update", meta: `PDF · Target rates as at ${site.ratesAsAt}` },
  { name: "Financial Services Guide (FSG)", meta: "PDF · Our services and how we're paid" },
];

type P = (typeof products)[number];
const compareRows: [string, (p: P) => ReactNode][] = [
  ["Target return (p.a.)*", (p) => <span className="font-semibold text-gold-700">{p.targetRate.toFixed(2)}%</span>],
  ["Term", (p) => `${p.termMonths} months`],
  ["Minimum investment", (p) => formatAUD(p.minimum)],
  ["Return paid", (p) => (p.termMonths === 6 ? "At maturity" : "Monthly or at maturity")],
  ["Application fee", () => "Nil"],
  ["Fees at maturity", () => "Nil"],
  ["Reinvestment option", () => "Yes"],
  ["Early access", () => "At RE discretion"],
  ["Suitable for SMSFs", () => "Yes, subject to TMD"],
];

export default function InvestmentsPage() {
  const faqItems = [...faqCategories[0].items, ...faqCategories[3].items].slice(0, 7);

  return (
    <>
      <PageHero
        title="Investment Opportunities"
        subtitle="Fixed-term investments designed to deliver stable, competitive target returns."
        eyebrow="Investments"
        photo={photos.towers}
      >
        <p>
          Choose from 6, 12 or 24-month terms, starting from {formatAUD(1000)}. Every option shows its target
          return, minimum, payment options and risks up front.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <GoldButton href="#products">View Products</GoldButton>
          <Link href="#documents" className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:border-gold-400 hover:text-gold-300">
            Read the PDS
          </Link>
        </div>
      </PageHero>

      <SubNav items={sections} />

      {/* RATE HIGHLIGHTS */}
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <StatBand
            stats={[
              ...products.map((p) => ({ value: `${p.targetRate.toFixed(2)}%`, label: `${p.name} target p.a.*` })),
              { value: formatAUD(1000), label: "Minimum to start" },
            ]}
          />
          <p className="mt-4 text-center text-xs text-white/50">
            *Target returns as at {site.ratesAsAt}, net of fees. Variable, reviewed monthly and not guaranteed.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-36 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            title="Available Investment Products"
            subtitle="Three fixed terms, one simple structure. Pick the timeframe that matches your goals."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <div key={p.slug} id={p.slug} className="relative scroll-mt-40">
                {i === 1 && (
                  <span className="bg-gold-gradient absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy-950 shadow">
                    Most popular
                  </span>
                )}
                <ProductCard product={p} detailed />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ComplianceBadge />
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="scroll-mt-36 bg-mist py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading title="Investment Terms at a Glance" subtitle="Compare every feature side by side." />
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-900 text-gold-300">
                <tr>
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  {products.map((p) => (
                    <th key={p.slug} className="px-6 py-4 font-semibold">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {compareRows.map(([label, cell]) => (
                  <tr key={label} className="hover:bg-mist/60">
                    <td className="px-6 py-4 font-medium text-navy-900">{label}</td>
                    {products.map((p) => (
                      <td key={p.slug} className="px-6 py-4">{cell(p)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">*Target rates as at {site.ratesAsAt}, net of fees, variable and reviewed monthly.</p>
        </div>
      </section>

      {/* RETURN STRUCTURES */}
      <section id="returns" className="scroll-mt-36 bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Return structures</Eyebrow>
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">Choose how you receive your returns</h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-6 text-slate-600">
              The fund pays investors a variable rate that depends on what it actually earns. Rates are reviewed
              monthly, and our management margin is already deducted from the rates shown.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Wallet, title: "Monthly returns", text: "Paid to your nominated account around the first business day of each month. Available on 12 and 24-month terms." },
                { icon: CalendarCheck2, title: "At maturity", text: "Returns accrue and are paid together with your capital at the end of the term. Available on all terms." },
                { icon: Repeat, title: "Reinvest", text: "Roll your capital (and returns) into a new term at maturity at the rate applying then." },
                { icon: ShieldCheck, title: "Held in custody", text: "Fund assets are held by an independent custodian, separate from our own accounts." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-slate-200 p-5">
                  <Icon className="h-7 w-7 text-gold-600" strokeWidth={1.5} />
                  <h3 className="mt-3 font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Photo id={photos.analytics} alt="Investment analytics on screen" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-2xl shadow-2xl" />
            <div className="rounded-2xl bg-navy-900 p-7 text-white">
              <h3 className="font-serif text-xl text-gold-400">Where your money goes</h3>
              <p className="mt-3 text-sm text-white/75">
                Investor funds are pooled in a registered managed investment scheme and invested in Australian
                income-producing assets in line with the fund&apos;s investment policy, which sets limits on
                asset type, credit quality and concentration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="scroll-mt-36 bg-navy-gradient py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading light title="Who Can Invest" subtitle="Our products are available to a wide range of Australian investors who fall within the Target Market Determination." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {investorTypes.map(({ icon: Icon, title, text }) => (
              <div key={title} className="gold-ring rounded-2xl bg-navy-900/70 p-6 text-center">
                <Icon className="mx-auto h-10 w-10 text-gold-400" strokeWidth={1.4} />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/65">{text}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-navy-950/50 p-8">
            <h3 className="font-serif text-xl text-white">These products may suit you if you:</h3>
            <div className="mt-5">
              <CheckList
                light
                items={[
                  "Are seeking regular income or a lump-sum return over a fixed period",
                  "Can commit your money for the full term and don't need early access",
                  "Understand that returns are variable and your capital is at risk",
                  "Want an investment that forms part of a diversified portfolio",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section id="risks" className="scroll-mt-36 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Understanding the Risks" subtitle="All investments carry risk. Please read these carefully, along with the PDS, before investing." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {risks.map((r) => (
              <div key={r.title} className="flex gap-4 rounded-xl border border-amber-200 bg-amber-50/60 p-6">
                <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600" />
                <div>
                  <h3 className="font-semibold text-navy-900">{r.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
          <RiskNote className="mx-auto mt-10 max-w-3xl" />
          <p className="mt-4 text-center">
            <Link href="/legal/risk" className="font-semibold text-gold-700 underline underline-offset-4">Read the full risk disclosure</Link>
          </p>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section id="documents" className="scroll-mt-36 bg-mist py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading title="Product Documentation" subtitle="Everything you need to make an informed decision, in one place." />
          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((d) => (
              <Link key={d.name} href="/legal/documents" className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-gold-400 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-navy-900">{d.name}</p>
                  <p className="text-xs text-slate-500">{d.meta}</p>
                </div>
                <Download className="h-5 w-5 text-slate-400 group-hover:text-gold-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="scroll-mt-36 bg-navy-950 py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading light title="Investment Calculator" subtitle="Estimate an indicative return for each term." />
          <Calculator />
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-36 bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading title="Investment FAQs" />
          <Accordion items={faqItems} />
          <p className="mt-8 text-center">
            <Link href="/faqs" className="font-semibold text-gold-700 underline underline-offset-4">See all FAQs</Link>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
