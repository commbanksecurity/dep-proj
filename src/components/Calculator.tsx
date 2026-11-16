"use client";

import { useState } from "react";
import { formatAUD, products } from "@/lib/site";

export function Calculator() {
  const [slug, setSlug] = useState(products[1].slug);
  const [amount, setAmount] = useState(25000);
  const product = products.find((p) => p.slug === slug)!;
  const belowMin = amount < product.minimum;
  const earnings = amount * (product.targetRate / 100) * (product.termMonths / 12);

  return (
    <div className="grid gap-8 rounded-2xl border border-gold-500/30 bg-navy-900/60 p-8 backdrop-blur lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">Choose a term</label>
          <div className="grid grid-cols-3 gap-2">
            {products.map((p) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => setSlug(p.slug)}
                className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                  p.slug === slug
                    ? "bg-gold-gradient border-gold-400 text-navy-950"
                    : "border-white/15 text-white/80 hover:border-gold-400"
                }`}
              >
                {p.termMonths} months
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="amount" className="mb-2 flex justify-between text-sm font-medium text-white/80">
            <span>Investment amount</span>
            <span className="text-gold-300">{formatAUD(amount)}</span>
          </label>
          <input
            id="amount"
            type="range"
            min={1000}
            max={500000}
            step={1000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-[#ecc35e]"
          />
          <div className="mt-1 flex justify-between text-xs text-white/50">
            <span>$1,000</span>
            <span>$500,000</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-xl bg-navy-950/70 p-6 text-center ring-1 ring-gold-500/30">
        {belowMin ? (
          <p className="text-gold-300">The minimum for this term is {formatAUD(product.minimum)}.</p>
        ) : (
          <>
            <p className="text-sm uppercase tracking-widest text-white/60">Indicative return over {product.termMonths} months</p>
            <p className="text-gold-gradient mt-2 font-serif text-5xl">{formatAUD(earnings)}</p>
            <p className="mt-2 text-white/70">
              Total at maturity <span className="font-semibold text-white">{formatAUD(amount + earnings)}</span>
            </p>
            <p className="mt-1 text-xs text-white/50">Based on a target rate of {product.targetRate.toFixed(2)}% p.a.</p>
          </>
        )}
        <p className="mt-5 text-[11px] leading-relaxed text-white/45">
          Illustration only. Rates are variable, reviewed monthly and not guaranteed. Actual returns may be lower and
          you could lose capital. Simple interest, before tax.
        </p>
      </div>
    </div>
  );
}
