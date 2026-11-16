"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);
    if (res?.ok) {
      setStatus("sent");
    } else {
      const body = await res?.json().catch(() => null);
      setError(body?.error ?? "Something went wrong. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gold-400 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-14 w-14 text-gold-600" />
        <h3 className="mt-4 font-serif text-2xl text-navy-900">Thank you!</h3>
        <p className="mt-2 text-slate-600">We&apos;ve received your message and will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Full Name" className={inputCls} autoComplete="name" />
        <input name="email" type="email" required placeholder="Email Address" className={inputCls} autoComplete="email" />
      </div>
      <input name="phone" placeholder="Phone (optional)" className={inputCls} autoComplete="tel" />
      <select name="topic" className={inputCls} defaultValue="General enquiry">
        <option>General enquiry</option>
        <option>Investment options</option>
        <option>My account</option>
        <option>SMSF / company investing</option>
        <option>Complaint</option>
      </select>
      <textarea name="message" required rows={5} placeholder="Your Message" className={inputCls} />
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      <button
        disabled={status === "sending"}
        className="bg-gold-gradient flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-navy-950 shadow transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"} <Send className="h-4 w-4" />
      </button>
      <p className="text-xs text-slate-500">
        We handle your personal information in line with our Privacy Policy and the Australian Privacy Principles.
      </p>
    </form>
  );
}
