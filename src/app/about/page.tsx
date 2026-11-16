import type { Metadata } from "next";
import { Eye, Gem, HeartHandshake, Target } from "lucide-react";
import { CoinStacks } from "@/components/Illustrations";
import { CtaBanner, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "About Us" };

const pillars = [
  { icon: Target, title: "Our Mission", text: "To help everyday Australians grow their savings through simple, transparent fixed-term investments." },
  { icon: Eye, title: "Our Vision", text: "To be Australia's most trusted online platform for fixed-term investing." },
  { icon: Gem, title: "Our Values", text: "Honesty, plain English, security and putting investors first in every decision." },
  { icon: HeartHandshake, title: "Our Promise", text: "Clear risk warnings, fast complaint handling and real people when you need help." },
];

const team = [
  { role: "CEO & Responsible Manager", text: "Leads the business, meets licence conditions and oversees the investment strategy." },
  { role: "Compliance & Risk Manager", text: "Makes sure we follow the law, handles ASIC and AUSTRAC reporting and reviews all marketing." },
  { role: "Operations & Investor Services", text: "Runs daily operations, payments, registry and investor reporting." },
  { role: "Investor Support", text: "Answers your questions by phone and email, every business day." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Building a Stronger Financial Future Together">
        <p>
          Golden Treasure Capital is an Australian investment company focused on delivering secure, transparent and
          well-managed fixed-term investment opportunities.
        </p>
      </PageHero>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading center={false} title="Who We Are" />
            <div className="space-y-4 text-slate-600">
              <p>
                Many Australians have cash sitting in the bank earning very little. We built Golden Treasure Capital to
                offer a clear alternative: fixed-term investments with target returns shown up front, and the risks
                explained right next to them.
              </p>
              <p>
                Our investments are offered through a registered managed investment scheme run by a licensed
                responsible entity. Fund assets are held by an independent custodian, the fund is audited every year,
                and we are members of the Australian Financial Complaints Authority (AFCA).
              </p>
              <p>
                We serve individuals, retirees, self-managed super fund trustees and small business owners across
                Australia.
              </p>
            </div>
          </div>
          <CoinStacks className="mx-auto w-full max-w-md" />
        </div>
      </section>

      <section className="bg-navy-gradient py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="gold-ring rounded-2xl bg-navy-900/60 p-7">
                <Icon className="h-10 w-10 text-gold-400" strokeWidth={1.4} />
                <h3 className="mt-4 font-serif text-xl text-gold-300">{title}</h3>
                <p className="mt-2 text-sm text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Our Team" subtitle="Experienced people with clear responsibilities." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.role} className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                <div className="bg-navy-gradient mx-auto flex h-20 w-20 items-center justify-center rounded-full ring-2 ring-gold-400">
                  <span className="font-serif text-2xl text-gold-300">GT</span>
                </div>
                <h3 className="mt-4 font-serif text-lg text-navy-900">{m.role}</h3>
                <p className="mt-2 text-sm text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">Team photos and bios coming soon.</p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
