import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

// DRAFT legal content – every page must be written / approved by your lawyer before launch.
const pages: Record<string, { title: string; subtitle: string; sections: { h: string; p: string }[] }> = {
  risk: {
    title: "Risk Disclosure",
    subtitle: "Please read before investing",
    sections: [
      { h: "Not a bank deposit", p: "Our fixed term investments are units in a registered managed investment scheme. They are not bank deposits or term deposits, and are not covered by the Australian Government deposit guarantee (Financial Claims Scheme)." },
      { h: "Returns are not guaranteed", p: "Rates shown are target returns. They are variable, reviewed monthly and depend on the fund's actual earnings. Actual returns may be lower than the target rate, or nil." },
      { h: "Capital risk", p: "You could lose some or all of the money you invest." },
      { h: "Liquidity risk", p: "Investments are designed to be held to maturity. Withdrawals, including at maturity, may be delayed or suspended in some circumstances." },
      { h: "Interest rate and market risk", p: "Changes in interest rates and market conditions can affect the fund's earnings and the rates we can pay." },
      { h: "Seek advice", p: "This information is general only and does not consider your personal circumstances. Read the PDS and TMD and consider seeking independent financial advice." },
    ],
  },
  documents: {
    title: "PDS & TMD",
    subtitle: "Product Disclosure Statement and Target Market Determination",
    sections: [
      { h: "Product Disclosure Statement (PDS)", p: "The PDS explains the fund, how it invests, the fees, the risks and how to apply. It will be available here to download once issued." },
      { h: "Target Market Determination (TMD)", p: "The TMD describes the type of investor this product is designed for. It will be available here to download once issued." },
      { h: "Issuer", p: `Units are issued by ${site.responsibleEntity}, ${site.afsl}.` },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    subtitle: "How we handle your personal information",
    sections: [
      { h: "What we collect", p: "We collect information needed to open and manage your account and verify your identity, such as your name, contact details, date of birth, identity documents and bank account details." },
      { h: "Why we collect it", p: "To provide our services, meet our obligations under the AML/CTF Act and tax laws, and communicate with you." },
      { h: "Storage and security", p: "Your data is encrypted and stored with Australian hosted providers. We follow the Australian Privacy Principles and notify you of eligible data breaches as required by law." },
      { h: "Access and correction", p: `You can ask to access or correct your information by contacting ${site.email}.` },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    subtitle: "Website and investor portal terms of use",
    sections: [
      { h: "Use of this website", p: "Information on this website is general in nature and does not constitute personal financial advice." },
      { h: "Your account", p: "You are responsible for keeping your login details secure and for all activity under your account." },
      { h: "Investments", p: "All investments are subject to the terms of the PDS, the fund constitution and acceptance of your application." },
      { h: "Changes", p: "We may update these terms from time to time. The current version will always be on this page." },
    ],
  },
  complaints: {
    title: "Complaints",
    subtitle: "We want to make things right",
    sections: [
      { h: "Tell us", p: `Contact us on ${site.phone} or ${site.email}. We will acknowledge your complaint within one business day and aim to resolve it within 30 days.` },
      { h: "External dispute resolution", p: "If you are not satisfied with our response, you can contact the Australian Financial Complaints Authority (AFCA): www.afca.org.au, info@afca.org.au, 1800 931 678." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "Legal" };
}

export default function LegalPage(props: PageProps<"/legal/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950" />}>
      <Content params={props.params} />
    </Suspense>
  );
}

async function Content({ params }: { params: PageProps<"/legal/[slug]">["params"] }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />
      <section className="bg-white py-16">
        <article className="mx-auto max-w-3xl space-y-8 px-5 lg:px-8">
          {page.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-2xl text-navy-900">{s.h}</h2>
              <div className="gold-divider mt-2 w-12" />
              <p className="mt-3 leading-relaxed text-slate-600">{s.p}</p>
            </div>
          ))}
          <p className="text-xs text-slate-400">Draft for preview. Final wording to be approved by legal counsel.</p>
        </article>
      </section>
    </>
  );
}
