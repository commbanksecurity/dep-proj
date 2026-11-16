"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type ClipboardEvent, type KeyboardEvent } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function VerifyCode() {
  const router = useRouter();
  const [digits, setDigits] = useState(Array(6).fill(""));
  const [resent, setResent] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const complete = digits.every((d) => d !== "");

  function setAt(i: number, v: string) {
    const all = v.replace(/\D/g, "");
    // Several digits at once (SMS/email autofill, fast typing): spread them across the boxes.
    if (all.length > 1 && !(all.length === 2 && digits[i])) {
      const chars = all.slice(0, 6 - i).split("");
      setDigits((prev) => prev.map((x, j) => (j >= i && j < i + chars.length ? chars[j - i] : x)));
      refs.current[Math.min(i + chars.length, 5)]?.focus();
      return;
    }
    const d = all.slice(-1);
    setDigits((prev) => prev.map((x, j) => (j === i ? d : x)));
    if (d && i < 5) refs.current[i + 1]?.focus();
  }

  function onKey(i: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
  }

  function onPaste(e: ClipboardEvent<HTMLInputElement>) {
    const p = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (p.length) {
      e.preventDefault();
      setDigits(Array.from({ length: 6 }, (_, i) => p[i] ?? ""));
      refs.current[Math.min(p.length, 5)]?.focus();
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-xl">
      <div className="bg-navy-gradient mx-auto flex h-20 w-20 items-center justify-center rounded-full ring-4 ring-gold-400/40">
        <ShieldCheck className="h-10 w-10 text-gold-300" />
      </div>
      <h1 className="mt-6 font-serif text-3xl text-navy-900">Verify Your Account</h1>
      <p className="mt-2 text-sm text-slate-600">
        We&apos;ve sent a verification code to your email address. Please enter the code below to continue.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (complete) router.push("/portal/dashboard");
        }}
      >
        <div className="mt-8 flex justify-center gap-2">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              value={d}
              inputMode="numeric"
              autoComplete={i === 0 ? "one-time-code" : "off"}
              aria-label={`Digit ${i + 1}`}
              onChange={(e) => setAt(i, e.target.value)}
              onKeyDown={(e) => onKey(i, e)}
              onPaste={onPaste}
              className="h-14 w-12 rounded-lg border border-slate-300 text-center text-xl font-semibold text-navy-900 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30"
            />
          ))}
        </div>
        <button
          disabled={!complete}
          className="bg-gold-gradient mt-8 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-navy-950 shadow transition hover:brightness-110 disabled:opacity-50"
        >
          Verify Account <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      <button onClick={() => setResent(true)} className="mt-5 text-sm font-semibold text-gold-700 underline">
        {resent ? "Code resent ✓" : "Resend Code"}
      </button>
      <p className="mt-6 text-[11px] text-slate-400">Demo mode: any 6 digits will work.</p>
    </div>
  );
}
