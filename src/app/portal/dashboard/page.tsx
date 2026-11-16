import type { Metadata } from "next";
import { Dashboard } from "@/components/portal/Dashboard";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div className="bg-mist">
      <Dashboard />
    </div>
  );
}
