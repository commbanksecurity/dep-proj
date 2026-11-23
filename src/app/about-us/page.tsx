import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Eye, Gem, Handshake, HeartHandshake, Scale, ShieldCheck, Target, TrendingUp } from "lucide-react";
import {
  CheckList,
  CtaBanner,
  Eyebrow,
  GoldButton,
  PageHero,
  Photo,
  SectionHeading,
} from "@/components/ui";
import { milestones, photos, team, values } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Golden Age Capital is a Melbourne based investment manager helping Australians invest with clarity and confidence.",
};

const valueIcons = [ShieldCheck, Eye, Scale, HeartHandshake, Handshake, TrendingUp];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Golden Age Capital"
        subtitle="Our mission is to help Australians grow their wealth through trusted, transparent investments."
        eyebrow="About Us"
        photo={photos.sydneyHarbour}
      />

      {/* BACKGROUND */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">An Australian Investment Manager Built On Clarity</h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-6 text-lg text-slate-600">
              Golden Age Capital was founded in Melbourne by a team of professionals from funds management,
              lending and client services who shared a simple belief: investors deserve to understand exactly what
              they are investing in.
            </p>
            <p className="mt-4 text-slate-600">
              Too many investment products hide behind jargon and fine print. We set out to do things differently,
              offering a small range of fixed term investments with clear terms, fixed returns and technology that lets
              investors see their money at any time.
            </p>
            <p className="mt-4 text-slate-600">
              Today we serve individuals, families, retirees, companies, trusts and self managed super funds across
              Australia, with a team that is always a phone call away.
            </p>
          </div>
          <div className="relative">
            <Photo id={photos.office} alt="Golden Age Capital office" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-8 -left-4 hidden max-w-xs rounded-2xl border border-gold-500/30 bg-navy-900 p-6 shadow-2xl sm:block">
              <p className="font-serif text-lg text-gold-400">Headquarter</p>
              <p className="mt-1 text-sm text-white/75">{site.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-navy-gradient py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          {[
            { icon: Target, title: "Our Mission", text: "To help Australians work towards their financial goals through secure, transparent and well managed fixed term investment opportunities." },
            { icon: Compass, title: "Our Vision", text: "To be Australia's most trusted name in fixed term investing, known for honesty, service and investments people genuinely understand." },
            { icon: Gem, title: "Our Promise", text: "Fixed rates and clear terms from day one. Real people to talk to. Your money held independently and reported clearly." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="gold-ring rounded-2xl bg-navy-900/70 p-8">
              <Icon className="h-10 w-10 text-gold-400" strokeWidth={1.4} />
              <h3 className="mt-5 font-serif text-2xl text-white">{title}</h3>
              <p className="mt-3 text-white/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Photo id={photos.coinPlant} alt="Coins with a growing seedling" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-2xl shadow-2xl" />
          <div>
            <Eyebrow>Investment philosophy</Eyebrow>
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">Disciplined, Conservative And Income Focused</h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-6 text-slate-600">
              Our Investment Committee meets monthly to review the fund&apos;s portfolio and asset performance. We
              favour Australian income-producing assets, apply strict credit and concentration limits, and keep
              sufficient liquidity to meet scheduled maturities.
            </p>
            <div className="mt-8">
              <CheckList
                items={[
                  "Capital preservation ahead of chasing higher returns",
                  "Diversification across assets, borrowers and maturities",
                  "Fixed rates locked in from day one for your entire investment term",
                  "Independent custody, audit and compliance oversight",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Our Business Values" subtitle="The principles that shape how we invest and how we treat every client." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg">
                  <Icon className="h-9 w-9 text-gold-600" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-xl text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-slate-600">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Management Team" subtitle="Experienced professionals accountable for your investment." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.role} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm">
                <div className="relative aspect-[4/3] bg-navy-950">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-navy-900">{m.name}</h3>
                  <p className="text-sm font-semibold text-gold-700 whitespace-nowrap">{m.role}</p>
                  <p className="mt-3 text-sm text-slate-600">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading light title="Our Journey" />
          <div className="grid gap-6 md:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.year} className="border-t-2 border-gold-500 pt-5">
                <p className="font-serif text-3xl text-gold-gradient">{m.year}</p>
                <p className="mt-3 text-sm text-white/70">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION DETAILS */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading title="Company Registration Details" subtitle="Who we are, legally, so you always know who you're dealing with." />
          <dl className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {[
              ["Trading name", site.name],
              ["ABN", site.abn],
              ["Australian Financial Services Licence", site.afsl],
              ["Responsible entity of the fund", site.responsibleEntity],
              ["External dispute resolution", "Australian Financial Complaints Authority (AFCA). Membership details to be confirmed"],
              ["Headquarter", site.address],
              ["Phone", site.phone],
              ["Email", site.email],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[260px_1fr]">
                <dt className="font-medium text-navy-900">{k}</dt>
                <dd className="text-slate-600">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-center text-xs text-slate-500">You can verify licence details on ASIC&apos;s professional registers at asic.gov.au.</p>
          <div className="mt-10 text-center">
            <GoldButton href="/contact">Speak With Our Team</GoldButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
