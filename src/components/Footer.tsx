import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white/75">
      <div className="gold-divider" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo compact />
          <p className="text-sm leading-relaxed">
            Fixed-term investment opportunities for Australians, built on transparency, plain-English disclosure and
            secure technology.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg text-gold-400">Explore</h3>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold-300">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/portal" className="hover:text-gold-300">
                Client Portal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg text-gold-400">Important Information</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal/risk" className="hover:text-gold-300">Risk Disclosure</Link></li>
            <li><Link href="/legal/documents" className="hover:text-gold-300">PDS &amp; TMD</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-gold-300">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-gold-300">Terms &amp; Conditions</Link></li>
            <li><Link href="/legal/complaints" className="hover:text-gold-300">Complaints</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg text-gold-400">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold-400" />{site.phone}</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold-400" />{site.email}</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold-400" />{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl space-y-3 px-5 py-8 text-xs leading-relaxed text-white/50 lg:px-8">
          <p>
            <strong className="text-white/70">General advice warning:</strong> Information on this website is general
            in nature and does not take into account your objectives, financial situation or needs. Consider the
            Product Disclosure Statement (PDS) and Target Market Determination (TMD) and seek independent advice before
            making any investment decision.
          </p>
          <p>
            Investments offered by {site.name} are not bank deposits and are not covered by the Australian Government
            deposit guarantee. Returns are variable and not guaranteed. Investors may lose some or all of their capital
            and withdrawals may be delayed. Past performance is not a reliable indicator of future performance.
          </p>
          <p>
            Issued by {site.responsibleEntity} ABN {site.abn}, {site.afsl}. © 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
