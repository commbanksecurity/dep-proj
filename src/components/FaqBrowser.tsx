"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { FaqCategory } from "@/lib/content";
import { Accordion } from "./Accordion";

export function FaqBrowser({ categories }: { categories: FaqCategory[] }) {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({ ...c, items: c.items.filter((i) => !q || `${i.q} ${i.a}`.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length);
  }, [categories, active, query]);

  const tabs = [{ id: "all", title: "All questions" }, ...categories];

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
      <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs…"
            className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30"
          />
        </div>
        <nav className="mt-4 flex gap-2 overflow-x-auto lg:flex-col lg:gap-1" aria-label="FAQ categories">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                active === t.id ? "bg-navy-900 text-gold-300" : "text-slate-600 hover:bg-white hover:text-navy-900"
              }`}
            >
              {t.title}
            </button>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 space-y-12">
        {shown.length === 0 && (
          <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
            No questions match &ldquo;{query}&rdquo;. Try another word, or contact our team.
          </p>
        )}
        {shown.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-28">
            <h2 className="mb-5 font-serif text-2xl text-navy-900">{c.title}</h2>
            <Accordion key={`${c.id}-${query}`} items={c.items} defaultOpen={query ? 0 : null} />
          </section>
        ))}
      </div>
    </div>
  );
}
