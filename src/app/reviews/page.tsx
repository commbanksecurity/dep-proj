import type { Metadata } from "next";
import { BadgeCheck, MessageCircleHeart, PenLine, SearchCheck, ShieldCheck } from "lucide-react";
import { ReviewForm } from "@/components/ReviewForm";
import {
  CtaBanner,
  Eyebrow,
  PageHero,
  Photo,
  PreviewNotice,
  SampleReviewNotice,
  SectionHeading,
  StatBand,
  TestimonialCard,
} from "@/components/ui";
import { caseStudies, photos, serviceStats } from "@/lib/content";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description: "Read client experiences and case studies from Golden Treasure Capital investors.",
};

const process = [
  { icon: PenLine, title: "You submit", text: "Share your experience using the form below." },
  { icon: SearchCheck, title: "We verify", text: "We confirm you are a genuine client. We never edit the content of a review." },
  { icon: BadgeCheck, title: "We publish", text: "Positive or negative, verified reviews are published with your first name and state." },
  { icon: MessageCircleHeart, title: "We respond", text: "Our team reads every review and follows up on any concerns personally." },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="What Our Clients Say"
        subtitle="Trusted by Australian investors for reliable, transparent service."
        eyebrow="Reviews"
        photo={photos.teamWin}
      />

      {/* SERVICE STATS */}
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <StatBand stats={serviceStats} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Verified Client Experiences" subtitle="Real feedback from investors across Australia." />
          <SampleReviewNotice />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER SERVICE FEEDBACK */}
      <section className="bg-navy-gradient py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow light>Customer service</Eyebrow>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Service our investors talk about</h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-6 text-white/75">
              Every enquiry is handled by our Melbourne based client services team. We track how quickly we respond,
              how often we resolve issues on first contact, and what investors tell us after each interaction, and
              we use that feedback to improve.
            </p>
            <div className="mt-8 space-y-4">
              {[
                ["Clear explanations", "Investors consistently tell us they value plain English answers about risks and returns."],
                ["Fast verification", "Most identity checks are completed electronically on the same day."],
                ["Proactive reminders", "Maturity reminders 30 days ahead mean no surprises at the end of a term."],
              ].map(([t, d]) => (
                <div key={t} className="gold-ring flex gap-4 rounded-xl bg-navy-900/60 p-5">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-gold-400" />
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-sm text-white/65">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Photo id={photos.handshake} alt="Handshake with a client" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-2xl shadow-2xl ring-1 ring-gold-500/30" />
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Case Studies" subtitle="How different investors use fixed term investments as part of their plans." />
          <PreviewNotice>
            These are illustrative scenarios, not real clients. They are general examples only and do not consider your personal circumstances.
          </PreviewNotice>
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.title} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Photo id={c.photo} alt="" sizes="(min-width:1024px) 33vw, 100vw" className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">{c.who}</p>
                  <h3 className="mt-2 font-serif text-xl text-navy-900">{c.title}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    {[
                      ["Goal", c.goal],
                      ["Approach", c.approach],
                      ["Outcome", c.outcome],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-semibold text-navy-900">{k}</dt>
                        <dd className="text-slate-600">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMISSION PROCESS */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Share Your Experience" subtitle="Our review process is open and fair. Here's how it works." />
          <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                <span className="bg-gold-gradient absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full text-sm font-bold text-navy-950">
                  {i + 1}
                </span>
                <Icon className="mx-auto mt-2 h-9 w-9 text-gold-600" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-2xl">
            <ReviewForm />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
