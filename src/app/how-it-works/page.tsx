import type { Metadata } from "next";
import Link from "next/link";
import { BellRing, Clock, FileCheck2, Fingerprint, LockKeyhole, ServerCog, Smartphone, UserCheck } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { CheckList, CtaBanner, Eyebrow, GoldButton, PageHero, Photo, SectionHeading, SubNav } from "@/components/ui";
import { faqCategories, journey, needToApply, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Register, verify, apply, fund, earn and mature. A simple, secure six-step process to start investing.",
};

const security = [
  { icon: Fingerprint, title: "Two-factor authentication", text: "Every login and sensitive change is confirmed with a one-time code." },
  { icon: LockKeyhole, title: "Encryption", text: "Your data is encrypted in transit and at rest." },
  { icon: ServerCog, title: "Australian hosting", text: "Personal information is stored with Australian-hosted providers." },
  { icon: UserCheck, title: "Verified payments only", text: "Returns are paid only to accounts in your own (or your entity's) name." },
];

export default function HowItWorksPage() {
  const faqItems = [...faqCategories[1].items.slice(0, 2), ...faqCategories[2].items.slice(0, 2), ...faqCategories[4].items.slice(0, 2)];

  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="A simple and secure process to start growing your wealth."
        photo={photos.laptopPhone}
      >
        <p>From registration to maturity, here&apos;s exactly what to expect at every step — and how long each one takes.</p>
        <div className="mt-8">
          <GoldButton href="/portal?tab=create">Create Your Account</GoldButton>
        </div>
      </PageHero>

      <SubNav
        items={[
          { id: "process", label: "The process" },
          { id: "checklist", label: "What you need" },
          { id: "portal", label: "Investor portal" },
          { id: "security", label: "Security" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* OVERVIEW STRIP */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Your Investment Journey" subtitle="Six clear stages. Most investors are set up within one to two business days." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {journey.map((s) => (
              <a key={s.n} href={`#step-${s.n}`} className="group rounded-xl border border-slate-200 p-5 text-center transition hover:border-gold-400 hover:shadow-md">
                <p className="font-serif text-3xl text-gold-600">{s.n}</p>
                <p className="mt-2 text-sm font-semibold text-navy-900 group-hover:text-gold-700">{s.title}</p>
                <p className="mt-1 flex items-center justify-center gap-1 text-xs text-slate-500"><Clock className="h-3 w-3" />{s.time}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED TIMELINE */}
      <section id="process" className="scroll-mt-36 bg-mist py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative">
            <div className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-gold-400 via-gold-500/50 to-transparent md:left-1/2" />
            <div className="space-y-12">
              {journey.map((s, i) => (
                <div key={s.n} id={`step-${s.n}`} className={`relative scroll-mt-40 md:flex md:items-start ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="bg-gold-gradient absolute left-0 flex h-14 w-14 items-center justify-center rounded-full font-serif text-lg text-navy-950 shadow-lg ring-8 ring-mist md:left-1/2 md:-translate-x-1/2">
                    {s.n}
                  </div>
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 ? "md:pl-14" : "md:pr-14"}`}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-serif text-2xl text-navy-900">{s.title}</h3>
                        <span className="rounded-full bg-gold-200/60 px-3 py-1 text-xs font-semibold text-gold-700">{s.time}</span>
                      </div>
                      <p className="mt-2 text-slate-600">{s.lead}</p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-700">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section id="checklist" className="scroll-mt-36 bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Photo id={photos.onlineForm} alt="Applying online on a laptop" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-2xl shadow-2xl" />
          <div>
            <Eyebrow>Before you start</Eyebrow>
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">What you&apos;ll need to apply</h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-6 text-slate-600">Having these ready means you can complete your application in one sitting.</p>
            <div className="mt-8">
              <CheckList items={needToApply} />
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold-400/50 bg-gold-200/30 p-5 text-sm text-navy-900">
              <FileCheck2 className="h-5 w-5 shrink-0 text-gold-700" />
              <p>
                Please read the <Link href="/legal/documents" className="font-semibold underline">PDS and TMD</Link> before you apply. They explain the
                product, its fees and risks, and who it is designed for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL */}
      <section id="portal" className="scroll-mt-36 bg-navy-gradient relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow light>Investor portal</Eyebrow>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Transparent. Straightforward. Secure.</h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-6 text-white/75">
              Once you&apos;re invested, the investor portal puts everything at your fingertips — on desktop, tablet or phone.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Smartphone, t: "Live balances", d: "See every investment, rate and maturity date." },
                { icon: FileCheck2, t: "Statements", d: "Download transaction and annual tax statements." },
                { icon: BellRing, t: "Maturity reminders", d: "Get notified 30 days before each term ends." },
                { icon: UserCheck, t: "Manage details", d: "Update bank details and instructions securely." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="gold-ring rounded-xl bg-navy-900/60 p-5">
                  <Icon className="h-6 w-6 text-gold-400" />
                  <p className="mt-3 font-semibold text-white">{t}</p>
                  <p className="text-sm text-white/65">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <GoldButton href="/portal">Get Started Today</GoldButton>
            </div>
          </div>
          <Photo id={photos.laptopDashboard} alt="Investor portal dashboard on a laptop" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-2xl shadow-2xl ring-1 ring-gold-500/30" />
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="scroll-mt-36 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Your Security Comes First" subtitle="We protect your identity, your data and your money at every step." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {security.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-7 text-center transition hover:border-gold-400 hover:shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl bg-navy-900 px-6 py-4 text-center text-sm text-white/85">
            <strong className="text-gold-400">Scam warning:</strong> we will never cold-call you offering investments, or ask you to pay into a
            personal account, by card, cryptocurrency or gift cards.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-36 bg-mist py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading title="Process FAQs" />
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
