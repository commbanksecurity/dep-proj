import type { Metadata } from "next";
import { CtaBanner, GoldButton, PageHero, SampleReviewNotice, Stars, TestimonialCard } from "@/components/ui";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  const [featured, ...rest] = testimonials;
  return (
    <>
      <PageHero title="Our Reviews" subtitle="Trusted by Australian Investors" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SampleReviewNotice />
          <div className="mb-12 grid items-center gap-8 rounded-2xl border border-slate-200 bg-mist p-8 md:grid-cols-[auto_1fr]">
            <div className="text-center md:border-r md:border-slate-200 md:pr-10">
              <p className="font-serif text-6xl text-gold-600">
                5.0<span className="text-2xl text-slate-500">/5</span>
              </p>
              <div className="mt-2 flex justify-center">
                <Stars className="h-5 w-5" />
              </div>
              <p className="mt-1 text-sm text-slate-500">Sample rating</p>
            </div>
            <blockquote className="font-serif text-xl italic text-navy-900">
              &ldquo;{featured.quote}&rdquo;
              <footer className="mt-3 font-sans text-sm not-italic text-gold-700">
                – {featured.name}, {featured.state}
              </footer>
            </blockquote>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...rest, featured].map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <GoldButton href="/portal?tab=create">Get Started Today</GoldButton>
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Testimonials reflect individual experiences and are not a guarantee of future results.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
