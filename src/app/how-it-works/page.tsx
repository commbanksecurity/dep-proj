import type { Metadata } from "next";
import { ChartNoAxesColumnIncreasing, ChevronDown, FileText, ShieldCheck, UserRound } from "lucide-react";
import { CtaBanner, GoldButton, PageHero, SectionHeading } from "@/components/ui";
import { faqs, steps } from "@/lib/site";

export const metadata: Metadata = { title: "How It Works" };

const icons = { user: UserRound, file: FileText, shield: ShieldCheck, chart: ChartNoAxesColumnIncreasing };

export default function HowItWorksPage() {
  return (
    <>
      <PageHero title="How It Works" subtitle="A Simple 4-Step Process">
        <p>Investing with us is easy, transparent and secure.</p>
      </PageHero>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ol className="relative grid gap-10 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-gold-400 md:block" />
            {steps.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <li key={s.title} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-white font-serif text-xl text-navy-900 shadow">
                    {i + 1}
                  </span>
                  <Icon className="mt-5 h-10 w-10 text-gold-600" strokeWidth={1.4} />
                  <h3 className="mt-3 font-serif text-xl text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </li>
              );
            })}
          </ol>
          <div className="mt-14 text-center">
            <GoldButton href="/portal?tab=create">Get Started Today</GoldButton>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          {[
            { t: "Identity verification", d: "We verify every investor's identity electronically, as required by Australian anti-money-laundering law (AML/CTF Act)." },
            { t: "Funding your investment", d: "Transfer from your Australian bank account using PayID or a standard bank transfer. Your term starts once funds are received." },
            { t: "At maturity", d: "We'll remind you before your term ends. Choose to reinvest or have your capital and return paid to your nominated account." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="font-serif text-xl text-navy-900">{c.t}</h3>
              <div className="gold-divider mt-3 w-12" />
              <p className="mt-4 text-sm text-slate-600">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white px-6 py-4 open:border-gold-400 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy-900">
                  {f.q}
                  <ChevronDown className="h-5 w-5 text-gold-600 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
