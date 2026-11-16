import type { Metadata } from "next";
import { Calculator } from "@/components/Calculator";
import { ComplianceBadge, CtaBanner, GoldButton, PageHero, ProductCard, RiskNote, SectionHeading } from "@/components/ui";
import { formatAUD, products, site } from "@/lib/site";

export const metadata: Metadata = { title: "Investments" };

export default function InvestmentsPage() {
  return (
    <>
      <PageHero title="Investments" subtitle="Fixed-Term Investment Opportunities">
        <p>
          Choose from a range of fixed-term investment options designed to deliver competitive target returns with
          managed risk.
        </p>
        <div className="mt-6">
          <GoldButton href="#options" size="sm">
            Explore Investment Options
          </GoldButton>
        </div>
      </PageHero>

      <section id="options" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Our Investment Options" />
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <div key={p.slug} id={p.slug} className="scroll-mt-28">
                <ProductCard product={p} detailed />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ComplianceBadge />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading title="Compare Terms" />
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
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">Target return (p.a.)*</td>
                  {products.map((p) => (
                    <td key={p.slug} className="px-6 py-4 font-semibold text-gold-700">{p.targetRate.toFixed(2)}%</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">Term</td>
                  {products.map((p) => <td key={p.slug} className="px-6 py-4">{p.termMonths} months</td>)}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">Minimum investment</td>
                  {products.map((p) => <td key={p.slug} className="px-6 py-4">{formatAUD(p.minimum)}</td>)}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">Return paid</td>
                  {products.map((p) => (
                    <td key={p.slug} className="px-6 py-4">{p.termMonths === 6 ? "At maturity" : "Monthly or at maturity"}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">Fees at maturity</td>
                  {products.map((p) => <td key={p.slug} className="px-6 py-4">Nil</td>)}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">Early access</td>
                  {products.map((p) => <td key={p.slug} className="px-6 py-4">At RE discretion</td>)}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">*Target rates as at {site.ratesAsAt}, net of fees, variable and reviewed monthly.</p>
          <RiskNote className="mt-4" />
        </div>
      </section>

      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading light title="Investment Calculator" subtitle="Estimate an indicative return for each term." />
          <Calculator />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 lg:px-8">
          <div>
            <h3 className="font-serif text-2xl text-navy-900">Where your money goes</h3>
            <div className="gold-divider mt-3 w-16" />
            <p className="mt-4 text-slate-600">
              Investor funds are pooled in a registered managed investment scheme and invested in Australian assets
              such as high-quality term deposits held by the fund and other conservative income investments, in line
              with the fund&apos;s investment policy. Fund assets are held by an independent custodian.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-navy-900">How returns work</h3>
            <div className="gold-divider mt-3 w-16" />
            <p className="mt-4 text-slate-600">
              The fund pays investors a variable rate that depends on what the fund actually earns. Rates are reviewed
              monthly. We keep a management margin for running the fund, which is already deducted from the rates
              shown.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
