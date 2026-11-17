"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import type { Article } from "@/lib/content";
import { ArticleCard } from "./ui";

const categories = ["All", "Market insights", "Investor education", "Articles", "Announcements"] as const;

export function InsightsBrowser({ articles }: { articles: Article[] }) {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const shown = articles.filter((a) => cat === "All" || a.category === cat);
  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              cat === c ? "bg-navy-900 text-gold-300" : "border border-slate-300 bg-white text-slate-600 hover:border-gold-400"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((a) => (
          <ArticleCard key={a.slug} a={a} />
        ))}
      </div>
    </>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, topic: "Newsletter signup", message: "Please add me to the insights newsletter." }),
    }).catch(() => null);
    setStatus(res?.ok ? "sent" : "error");
  }

  if (status === "sent")
    return (
      <p className="flex items-center gap-2 text-gold-300">
        <CheckCircle2 className="h-5 w-5" /> You&apos;re subscribed. Look out for our next update.
      </p>
    );

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:w-auto">
      <input name="name" required placeholder="First name" className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-gold-400" />
      <input name="email" type="email" required placeholder="Email address" className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-gold-400" />
      <button disabled={status === "sending"} className="bg-gold-gradient flex shrink-0 items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-navy-950 disabled:opacity-60">
        Subscribe <Send className="h-4 w-4" />
      </button>
      {status === "error" && <p className="text-sm text-red-300">Please check your details and try again.</p>}
    </form>
  );
}
