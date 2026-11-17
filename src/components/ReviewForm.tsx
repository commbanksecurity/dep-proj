"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, Star } from "lucide-react";
import { inputCls } from "./ContactForm";

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!rating) {
      setError("Please choose a star rating.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, topic: `Review submission (${rating}/5)` }),
    }).catch(() => null);
    if (res?.ok) setStatus("sent");
    else {
      const body = await res?.json().catch(() => null);
      setError(body?.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-14 w-14 text-gold-500" />
        <h3 className="mt-4 font-serif text-2xl text-navy-900">Thank you for your feedback</h3>
        <p className="mt-2 text-slate-600">Our team will verify your review against our client records before it is published.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <p className="mb-2 text-sm font-medium text-navy-900">Your rating</p>
        <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" onClick={() => setRating(n)} onMouseEnter={() => setHover(n)} aria-label={`${n} star${n > 1 ? "s" : ""}`}>
              <Star className={`h-8 w-8 transition ${(hover || rating) >= n ? "fill-gold-400 text-gold-500" : "text-slate-300"}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Full Name *" className={inputCls} autoComplete="name" />
        <input name="email" type="email" required placeholder="Email (used to verify you're a client) *" className={inputCls} autoComplete="email" />
      </div>
      <input name="state" placeholder="Suburb / State (optional)" className={inputCls} />
      <textarea name="message" required rows={5} placeholder="Tell us about your experience *" className={inputCls} />
      <label className="flex gap-2 text-xs text-slate-600">
        <input type="checkbox" required className="mt-0.5 accent-gold-600" />
        I confirm this review reflects my genuine experience and I consent to it being published with my first name and state.
      </label>
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      <button
        disabled={status === "sending"}
        className="bg-gold-gradient flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-navy-950 shadow transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit Review"} <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
