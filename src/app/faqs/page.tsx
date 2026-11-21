import type { Metadata } from "next";
import Link from "next/link";
import { CircleDollarSign, FileSearch, Landmark, Lock, UserPlus, Wallet } from "lucide-react";
import { FaqBrowser } from "@/components/FaqBrowser";
import { CtaBanner, GoldButton, PageHero } from "@/components/ui";
import { faqCategories, photos } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about investing, registration, identity verification, payments, withdrawals, security and privacy.",
};

const icons = [Landmark, UserPlus, FileSearch, CircleDollarSign, Wallet, Lock];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="Everything you need to know"
        subtitle="Answers to common questions about investing with Golden Treasure Capital."
        eyebrow="FAQs"
        photo={photos.calculatorDocs}
      />

      {/* CATEGORY TILES */}
      <section className="relative z-10 -mt-10 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {faqCategories.map((c, i) => {
            const Icon = icons[i];
            return (
              <a key={c.id} href={`#${c.id}`} className="group rounded-xl border border-slate-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-1 hover:border-gold-400">
                <Icon className="mx-auto h-8 w-8 text-gold-600" strokeWidth={1.5} />
                <p className="mt-3 text-sm font-semibold text-navy-900 group-hover:text-gold-700">{c.title}</p>
                <p className="text-xs text-slate-500">{c.items.length} questions</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <FaqBrowser categories={faqCategories} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-navy-gradient px-8 py-12 text-center">
          <h2 className="font-serif text-3xl text-white">Still have questions?</h2>
          <p className="max-w-xl text-white/75">
            Our Australian based team is available {site.hours}. Call {site.phone} or send us a message and we&apos;ll get
            back to you within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GoldButton href="/contact">Contact Our Team</GoldButton>
            <Link href="/legal/documents" className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:border-gold-400 hover:text-gold-300">
              Read the PDS
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
