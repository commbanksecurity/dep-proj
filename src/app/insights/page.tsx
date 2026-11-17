import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ChartLine, GraduationCap, Megaphone } from "lucide-react";
import { InsightsBrowser, NewsletterForm } from "@/components/InsightsBrowser";
import { CtaBanner, Eyebrow, PageHero, Photo, PreviewNotice, SectionHeading } from "@/components/ui";
import { articles, glossary, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Australian market insights, investor education, articles, company announcements and an investment glossary.",
};

const topics = [
  { icon: ChartLine, title: "Australian market insights", text: "Interest rates, the economy and what they mean for income investors." },
  { icon: GraduationCap, title: "Investment education", text: "Plain-English guides to help you invest with confidence." },
  { icon: BookOpen, title: "Financial articles", text: "Ideas for retirees, SMSF trustees and savers." },
  { icon: Megaphone, title: "Company announcements", text: "Rate updates, new features and news from our team." },
];

export default function InsightsPage() {
  const [featured] = articles;

  return (
    <>
      <PageHero
        title="News & Insights"
        subtitle="Market commentary, investor education and the latest from Golden Treasure Capital."
        eyebrow="Insights"
        photo={photos.chartsDesk}
      />

      {/* TOPICS */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {topics.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-slate-200 p-5">
              <Icon className="h-8 w-8 shrink-0 text-gold-600" strokeWidth={1.5} />
              <div>
                <p className="font-semibold text-navy-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PreviewNotice>Preview only: articles are sample content. Have them reviewed by compliance before publishing.</PreviewNotice>
          <Link href={`/insights/${featured.slug}`} className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:grid-cols-2">
            <Photo id={featured.photo} alt="" sizes="(min-width:1024px) 50vw, 100vw" className="min-h-72 transition group-hover:brightness-110" />
            <div className="flex flex-col justify-center p-10">
              <Eyebrow>Featured · {featured.category}</Eyebrow>
              <h2 className="font-serif text-3xl leading-tight text-navy-900 group-hover:text-gold-700">{featured.title}</h2>
              <p className="mt-4 text-slate-600">{featured.excerpt}</p>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold-700">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </p>
              <p className="mt-4 text-xs text-slate-500">{featured.date} · {featured.readMins} min read</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ALL ARTICLES */}
      <section className="bg-mist pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Latest Insights" />
          <InsightsBrowser articles={articles} />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-navy-gradient py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-serif text-3xl text-white">Get insights in your inbox</h2>
            <p className="mt-2 text-white/70">Monthly rate updates and investor education. Unsubscribe any time.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* GLOSSARY */}
      <section id="glossary" className="scroll-mt-28 bg-white py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading title="Investment Terminology" subtitle="Common terms explained in plain English." />
          <dl className="grid gap-4 sm:grid-cols-2">
            {glossary.map((g) => (
              <div key={g.term} className="rounded-xl border border-slate-200 p-6">
                <dt className="font-serif text-lg text-navy-900">{g.term}</dt>
                <dd className="mt-2 text-sm text-slate-600">{g.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
