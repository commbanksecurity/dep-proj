import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { ArticleCard, CtaBanner, RiskNote } from "@/components/ui";
import { articles, img } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt } : { title: "Insights" };
}

export default function ArticlePage(props: PageProps<"/insights/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950" />}>
      <Content params={props.params} />
    </Suspense>
  );
}

async function Content({ params }: { params: PageProps<"/insights/[slug]">["params"] }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <Image src={img(a.photo, 2000)} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-xs text-white/60">
            <Link href="/" className="hover:text-gold-300">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/insights" className="hover:text-gold-300">Insights</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold-300">{a.category}</span>
          </nav>
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{a.title}</h1>
          <p className="mt-5 text-lg text-white/80">{a.excerpt}</p>
          <p className="mt-6 text-sm text-gold-300">{a.date} · {a.readMins} min read</p>
        </div>
        <div className="gold-divider" />
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-lg leading-relaxed text-slate-700 lg:px-8">
          {a.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2 className="mb-3 mt-4 font-serif text-2xl text-navy-900">{b.h}</h2>}
              <p>{b.p}</p>
            </div>
          ))}
          <div className="border-t border-slate-200 pt-6">
            <RiskNote />
            <p className="mt-3 text-xs text-slate-500">
              This article is general information only and is not financial advice. Consider your circumstances and seek independent advice.
            </p>
          </div>
          <Link href="/insights" className="inline-flex items-center gap-2 text-base font-semibold text-gold-700 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to all insights
          </Link>
        </div>
      </article>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl text-navy-900">Related insights</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <ArticleCard key={r.slug} a={r} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
