"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Menu, Phone, UserRound, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  // Remember which route the menu was opened on, so it closes automatically after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (fn: (v: boolean) => boolean) => setOpenOn(fn(open) ? pathname : null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <div className="hidden border-b border-white/10 bg-navy-900 text-xs text-white/70 lg:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 lg:px-8">
        <p>Australian fixed-term investments &middot; Target rates as at {site.ratesAsAt}</p>
        <div className="flex items-center gap-5">
          <a href={`tel:${site.phone.replace(/ /g, "")}`} className="flex items-center gap-1.5 hover:text-gold-300"><Phone className="h-3.5 w-3.5 text-gold-400" />{site.phone}</a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-gold-300"><Mail className="h-3.5 w-3.5 text-gold-400" />{site.email}</a>
          <span className="hidden xl:inline">{site.hours}</span>
        </div>
      </div>
    </div>
    <header
      className={`sticky top-0 z-50 border-b border-gold-500/20 transition-colors ${
        scrolled ? "bg-navy-950/95 backdrop-blur" : "bg-navy-950"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative whitespace-nowrap py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-gold-400" : "text-white/85 hover:text-gold-300"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-gold-400" />
              )}
            </Link>
          ))}
          <Link
            href="/portal"
            className="bg-gold-gradient flex items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold text-navy-950 shadow-md transition hover:brightness-110"
          >
            Investor Portal <UserRound className="h-4 w-4" />
          </Link>
        </nav>

        <button
          className="rounded-md p-2 text-gold-400 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold-500/20 bg-navy-950 px-5 pb-6 xl:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block border-b border-white/5 py-3 ${
                isActive(item.href) ? "text-gold-400" : "text-white/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="bg-gold-gradient mt-5 flex items-center justify-center gap-2 rounded-md px-4 py-3 font-semibold text-navy-950"
          >
            Investor Portal <UserRound className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
    </>
  );
}
