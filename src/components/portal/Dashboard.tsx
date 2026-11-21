"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CalendarClock,
  Download,
  FileText,
  LogOut,
  Plus,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { GrowthLine } from "@/components/Illustrations";
import { formatAUD } from "@/lib/site";
import { clearDemoUser, loadDemoUser, type DemoUser } from "./demo";

// Sample data for the portal preview.
const holdings = [
  { id: "GTC 12 0042", product: "12 Month Term", amount: 25000, rate: 10.85, start: "1 Mar 2026", maturity: "1 Mar 2027", status: "Active" },
  { id: "GTC 24 0017", product: "24 Month Term", amount: 50000, rate: 12.25, start: "15 Jun 2026", maturity: "15 Jun 2028", status: "Active" },
  { id: "GTC 06 0101", product: "6 Month Term", amount: 10000, rate: 7.35, start: "1 Oct 2026", maturity: "1 Apr 2027", status: "Pending funds" },
];

const transactions = [
  { date: "1 Nov 2026", desc: "Monthly return · GTC 24 0017", amount: 510.42 },
  { date: "1 Nov 2026", desc: "Monthly return · GTC 12 0042", amount: 226.04 },
  { date: "1 Oct 2026", desc: "Monthly return · GTC 24 0017", amount: 510.42 },
  { date: "1 Oct 2026", desc: "Monthly return · GTC 12 0042", amount: 226.04 },
  { date: "15 Jun 2026", desc: "Investment funded · GTC 24 0017", amount: 50000 },
];

const docs = ["Statement · October 2026", "Statement · September 2026", "Annual Tax Statement FY2026", "Product Disclosure Statement"];

export function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<DemoUser | null>(null);

  useEffect(() => {
    // Load the demo session on the client after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(loadDemoUser() ?? { name: "Demo Investor", email: "demo@example.com" });
  }, []);

  const invested = holdings.filter((h) => h.status === "Active").reduce((s, h) => s + h.amount, 0);
  const earned = 4586.46;
  const firstName = user?.name.split(" ")[0] ?? "";

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Investor Portal</p>
          <h1 className="font-serif text-3xl text-navy-900">Welcome back{firstName && `, ${firstName}`}</h1>
        </div>
        <div className="flex gap-3">
          <Link href="/investments" className="bg-gold-gradient flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-navy-950 shadow">
            <Plus className="h-4 w-4" /> New Investment
          </Link>
          <button
            onClick={() => { clearDemoUser(); router.push("/portal"); }}
            className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-gold-500"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>

      <p className="mt-4 rounded-lg border border-dashed border-gold-500 bg-gold-200/30 px-4 py-2 text-xs text-gold-700">
        Demo dashboard with sample data. Connect your registry / fund administrator to show real balances.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Wallet, label: "Total invested", value: formatAUD(invested) },
          { icon: TrendingUp, label: "Returns earned to date", value: formatAUD(earned, 2) },
          { icon: CalendarClock, label: "Next maturity", value: "1 Mar 2027" },
          { icon: ShieldCheck, label: "Identity status", value: "Verified" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Icon className="h-6 w-6 text-gold-600" />
            <p className="mt-3 text-sm text-slate-500">{label}</p>
            <p className="font-serif text-2xl text-navy-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="bg-navy-gradient overflow-hidden rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl text-gold-300">Portfolio value</h2>
            <span className="text-sm text-white/60">Last 12 months</span>
          </div>
          <p className="mt-2 font-serif text-4xl text-white">{formatAUD(invested + earned, 2)}</p>
          <GrowthLine className="mt-4 w-full" />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-navy-900">Documents</h2>
          <ul className="mt-4 divide-y divide-slate-100">
            {docs.map((d) => (
              <li key={d} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-2 text-slate-700">
                  <FileText className="h-4 w-4 text-gold-600" /> {d}
                </span>
                <Download className="h-4 w-4 cursor-pointer text-slate-400 hover:text-gold-600" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h2 className="px-6 pt-6 font-serif text-xl text-navy-900">My investments</h2>
        <table className="mt-4 w-full text-left text-sm">
          <thead className="bg-mist text-slate-500">
            <tr>
              {["Reference", "Product", "Amount", "Target rate", "Start", "Maturity", "Status"].map((h) => (
                <th key={h} className="px-6 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {holdings.map((h) => (
              <tr key={h.id}>
                <td className="px-6 py-4 font-mono text-xs text-slate-600">{h.id}</td>
                <td className="px-6 py-4 font-medium text-navy-900">{h.product}</td>
                <td className="px-6 py-4">{formatAUD(h.amount)}</td>
                <td className="px-6 py-4 text-gold-700">{h.rate.toFixed(2)}%</td>
                <td className="px-6 py-4">{h.start}</td>
                <td className="px-6 py-4">{h.maturity}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${h.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-gold-200/50 text-gold-700"}`}>
                    {h.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-serif text-xl text-navy-900">Recent transactions</h2>
        <ul className="mt-4 divide-y divide-slate-100">
          {transactions.map((t, i) => (
            <li key={i} className="flex justify-between py-3 text-sm">
              <span>
                <span className="mr-4 text-slate-400">{t.date}</span>
                <span className="text-slate-700">{t.desc}</span>
              </span>
              <span className="font-semibold text-emerald-700">+{formatAUD(t.amount, 2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
