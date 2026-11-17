import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, Headset, Mail, MapPin, MessageSquareWarning, Phone, Users, Video } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CtaBanner, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call, email or visit Golden Treasure Capital in Melbourne. Send an enquiry or book a consultation with our team.",
};

const items = [
  { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/ /g, "")}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Visit", value: site.address },
  { icon: Clock, label: "Business hours", value: site.hours },
];

const consultations = [
  { icon: Phone, title: "Phone call", text: "A 20-minute call to talk through our products and answer your questions." },
  { icon: Video, title: "Video meeting", text: "Meet our team online from anywhere in Australia, at a time that suits you." },
  { icon: Users, title: "In person", text: "Visit our Collins Street office in Melbourne for a face-to-face consultation." },
];

const support = [
  { icon: Headset, title: "Existing investors", text: "Log in to the investor portal for balances and statements, or call us for account help.", link: { href: "/portal", label: "Investor portal" } },
  { icon: CalendarDays, title: "New investors", text: "Questions about products, eligibility or applying? Our team will walk you through it.", link: { href: "/how-it-works", label: "How it works" } },
  { icon: MessageSquareWarning, title: "Complaints", text: "We aim to resolve complaints within 30 days. If you're not satisfied, you can contact AFCA.", link: { href: "/legal/complaints", label: "Complaints process" } },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for any enquiries."
        photo={photos.melbourne}
      >
        <p>Our Australian-based team responds to every enquiry within one business day.</p>
      </PageHero>

      {/* CONTACT CARDS */}
      <section className="relative z-10 -mt-10 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span className="bg-navy-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ring-gold-400">
                  <Icon className="h-5 w-5 text-gold-300" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="break-words font-medium text-navy-900">{value}</p>
                </div>
              </>
            );
            const cls = "flex min-w-0 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:border-gold-400";
            return href ? <a key={label} href={href} className={cls}>{body}</a> : <div key={label} className={cls}>{body}</div>;
          })}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="bg-mist py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Enquiry form</Eyebrow>
            <h2 className="font-serif text-3xl text-navy-900">Send us a message</h2>
            <div className="gold-divider mb-8 mt-4 w-24" />
            <ContactForm />
          </div>
          <div className="flex flex-col">
            <Eyebrow>Business address</Eyebrow>
            <h2 className="font-serif text-3xl text-navy-900">Visit our office</h2>
            <div className="gold-divider mb-8 mt-4 w-24" />
            <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Office location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=15&output=embed`}
                className="h-80 w-full lg:h-[calc(100%-140px)] lg:min-h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="space-y-1 p-6">
                <p className="font-semibold text-navy-900">{site.name}</p>
                <p className="text-sm text-slate-600">{site.address}</p>
                <p className="text-sm text-slate-600">Visits by appointment. Short walk from Flinders Street Station.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATIONS */}
      <section className="bg-navy-gradient py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading light title="Book a Consultation" subtitle="Prefer to talk it through? Choose the way that works best for you — there's no cost or obligation." />
          <div className="grid gap-6 md:grid-cols-3">
            {consultations.map(({ icon: Icon, title, text }) => (
              <div key={title} className="gold-ring rounded-2xl bg-navy-900/70 p-8 text-center">
                <Icon className="mx-auto h-10 w-10 text-gold-400" strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-2xl text-white">{title}</h3>
                <p className="mt-3 text-white/70">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-white/75">
            Choose <strong className="text-gold-300">&ldquo;Book a consultation&rdquo;</strong> in the enquiry form above, or call{" "}
            <a href={`tel:${site.phone.replace(/ /g, "")}`} className="font-semibold text-gold-300 underline">{site.phone}</a>.
          </p>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Customer Support" subtitle="Find the right help, fast." />
          <div className="grid gap-6 md:grid-cols-3">
            {support.map(({ icon: Icon, title, text, link }) => (
              <div key={title} className="flex flex-col rounded-2xl border border-slate-200 p-7">
                <Icon className="h-9 w-9 text-gold-600" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-xl text-navy-900">{title}</h3>
                <p className="mt-2 flex-1 text-slate-600">{text}</p>
                <Link href={link.href} className="mt-5 text-sm font-semibold text-gold-700 hover:underline">{link.label} →</Link>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-slate-500">
            Australian Financial Complaints Authority (AFCA): 1800 931 678 · www.afca.org.au · info@afca.org.au.
            Scam warning: we will never ask you to pay into a personal account or by cryptocurrency or gift cards.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
