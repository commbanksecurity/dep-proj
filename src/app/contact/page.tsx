import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

const items = [
  { icon: Phone, label: "Call us", value: site.phone },
  { icon: Mail, label: "Email", value: site.email },
  { icon: MapPin, label: "Visit", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We're Here to Help">
        <p>Have a question? Get in touch with our team.</p>
      </PageHero>

      <section className="bg-mist py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="space-y-4">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="bg-navy-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ring-gold-400">
                  <Icon className="h-5 w-5 text-gold-300" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="font-medium text-navy-900">{value}</p>
                </div>
              </div>
            ))}
            <p className="px-2 text-xs text-slate-500">
              Not satisfied with how we handled a complaint? You can contact the Australian Financial Complaints
              Authority (AFCA) on 1800 931 678 or at afca.org.au.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
