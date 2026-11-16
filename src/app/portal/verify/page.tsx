import type { Metadata } from "next";
import { VerifyCode } from "@/components/portal/VerifyCode";

export const metadata: Metadata = { title: "Verify Your Account" };

export default function VerifyPage() {
  return (
    <section className="bg-navy-gradient relative flex min-h-[75vh] items-center px-5 py-16">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold-500/10 to-transparent" />
      <div className="relative w-full">
        <VerifyCode />
      </div>
    </section>
  );
}
