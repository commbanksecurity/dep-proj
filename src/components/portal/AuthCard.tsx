"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, Phone, UserRound } from "lucide-react";
import { products } from "@/lib/site";
import { saveDemoUser } from "./demo";

function Field({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-4 focus-within:border-gold-500 focus-within:ring-2 focus-within:ring-gold-400/30">
      <span className="text-gold-600">{icon}</span>
      {children}
    </div>
  );
}

const input = "w-full bg-transparent py-3 text-navy-900 outline-none placeholder:text-slate-400";

export function AuthCard() {
  const params = useSearchParams();
  const router = useRouter();
  const [tab, setTab] = useState<"signin" | "create">(params.get("tab") === "create" || params.get("product") ? "create" : "signin");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const product = products.find((p) => p.slug === params.get("product"));

  function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const password = String(f.get("password"));
    if (password.length < 10 || !/\d/.test(password) || !/[A-Za-z]/.test(password)) {
      setError("Password must be at least 10 characters and include letters and numbers.");
      return;
    }
    saveDemoUser({ name: String(f.get("name")), email: String(f.get("email")) });
    router.push("/portal/verify");
  }

  function onSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    saveDemoUser({ name: "Investor", email: String(f.get("email")) });
    router.push("/portal/dashboard");
  }

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="grid grid-cols-2 text-sm font-semibold">
        {(["signin", "create"] as const).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setError(""); }}
            className={`py-4 transition ${
              tab === t ? "border-b-2 border-gold-500 text-navy-900" : "border-b border-slate-200 bg-mist text-slate-500 hover:text-navy-900"
            }`}
          >
            {t === "signin" ? "Sign In" : "Create Account"}
          </button>
        ))}
      </div>

      <div className="p-8">
        {tab === "create" ? (
          <form onSubmit={onCreate} className="space-y-4">
            <div className="text-center">
              <h2 className="font-serif text-2xl text-navy-900">Create Your Account</h2>
              <p className="mt-1 text-sm text-slate-500">Join Golden Age Capital in just a few simple steps.</p>
              {product && (
                <p className="mt-3 rounded-md bg-gold-200/40 px-3 py-2 text-sm text-gold-700">
                  Selected: <strong>{product.name}</strong> at a target {product.targetRate.toFixed(2)}% p.a.
                </p>
              )}
            </div>
            <Field icon={<UserRound className="h-5 w-5" />}>
              <input name="name" required placeholder="Full Name" className={input} autoComplete="name" />
            </Field>
            <Field icon={<Mail className="h-5 w-5" />}>
              <input name="email" type="email" required placeholder="Email Address" className={input} autoComplete="email" />
            </Field>
            <Field icon={<Phone className="h-5 w-5" />}>
              <input name="mobile" type="tel" required placeholder="Mobile Number" pattern="^(\+?61|0)4\d{8}$" title="Australian mobile, e.g. 0412345678" className={input} autoComplete="tel" />
            </Field>
            <Field icon={<Lock className="h-5 w-5" />}>
              <input name="password" type={showPw ? "text" : "password"} required placeholder="Create Password" className={input} autoComplete="new-password" />
              <button type="button" onClick={() => setShowPw((v) => !v)} className="text-slate-500" aria-label="Toggle password visibility">
                {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </Field>
            <label className="flex items-start gap-2 text-xs text-slate-600">
              <input type="checkbox" required className="mt-0.5 accent-[#d9a63f]" />
              <span>
                I agree to the{" "}
                <Link href="/legal/terms" className="text-gold-700 underline">Terms &amp; Conditions</Link> and{" "}
                <Link href="/legal/privacy" className="text-gold-700 underline">Privacy Policy</Link>, and confirm I am
                an Australian resident aged 18+.
              </span>
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button className="bg-gold-gradient flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-navy-950 shadow transition hover:brightness-110">
              Create Account <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <button type="button" onClick={() => setTab("signin")} className="font-semibold text-gold-700">Sign in</button>
            </p>
          </form>
        ) : (
          <form onSubmit={onSignIn} className="space-y-4">
            <div className="text-center">
              <h2 className="font-serif text-2xl text-navy-900">Welcome Back</h2>
              <p className="mt-1 text-sm text-slate-500">Sign in to manage your investments.</p>
            </div>
            <Field icon={<Mail className="h-5 w-5" />}>
              <input name="email" type="email" required placeholder="Email Address" className={input} autoComplete="email" />
            </Field>
            <Field icon={<Lock className="h-5 w-5" />}>
              <input name="password" type={showPw ? "text" : "password"} required placeholder="Password" className={input} autoComplete="current-password" />
              <button type="button" onClick={() => setShowPw((v) => !v)} className="text-slate-500" aria-label="Toggle password visibility">
                {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </Field>
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="accent-[#d9a63f]" /> Remember me
              </label>
              <span className="text-gold-700">Forgot password?</span>
            </div>
            <button className="bg-gold-gradient flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-navy-950 shadow transition hover:brightness-110">
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-sm text-slate-500">
              New here?{" "}
              <button type="button" onClick={() => setTab("create")} className="font-semibold text-gold-700">Create an account</button>
            </p>
          </form>
        )}
        <p className="mt-6 rounded-md bg-mist px-3 py-2 text-center text-[11px] text-slate-500">
          Demo mode: no real accounts are created and passwords are never stored.
        </p>
      </div>
    </div>
  );
}
