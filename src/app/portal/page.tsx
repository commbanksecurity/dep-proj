import type { Metadata } from "next";
import { Suspense } from "react";
import { BellRing, FileText, LineChart, ShieldCheck } from "lucide-react";
import { AuthCard } from "@/components/portal/AuthCard";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Investor Portal" };

const perks = [
  { icon: LineChart, t: "Track performance", d: "See your balance and returns at a glance." },
  { icon: FileText, t: "Statements & tax", d: "Download statements and annual tax summaries." },
  { icon: BellRing, t: "Maturity reminders", d: "Get notified before your term ends." },
  { icon: ShieldCheck, t: "Secure access", d: "Two factor login and encrypted connections." },
];

export default function PortalPage() {
  return (
    <>
      <PageHero title="Investor Portal" subtitle="Manage Your Investments Online">
        <p>Access your account, track performance and manage your investments securely.</p>
      </PageHero>
      <section className="bg-mist py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="order-2 space-y-5 lg:order-1 lg:pt-6">
            <h2 className="font-serif text-3xl text-navy-900">Everything in one place</h2>
            <div className="gold-divider w-20" />
            {perks.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4">
                <span className="bg-navy-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ring-gold-400">
                  <Icon className="h-5 w-5 text-gold-300" />
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{t}</p>
                  <p className="text-sm text-slate-600">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <Suspense fallback={<div className="mx-auto h-[560px] max-w-md animate-pulse rounded-2xl bg-white" />}>
              <AuthCard />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
