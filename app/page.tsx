"use client";

import { useEffect } from "react";
import { Lock } from "lucide-react";
import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/HeaderBar";
import KPICards from "./components/KPICards";
import ActiveSurveysTable from "./components/ActiveSurveysTable";
import RecentActivityFeed from "./components/RecentActivityFeed";
import InsightsRow from "./components/InsightsRow";
import QuickActionsStrip from "./components/QuickActionsStrip";

export default function Dashboard() {
  useEffect(() => {
    const handleClick = () => {
      document.dispatchEvent(new CustomEvent("close-dropdowns"));
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Sidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <HeaderBar />

        <main className="flex-1 p-8 space-y-5 overflow-y-auto">
          <KPICards />

          <section className="grid grid-cols-12 gap-5">
            <div className="col-span-8">
              <ActiveSurveysTable />
            </div>
            <div className="col-span-4">
              <RecentActivityFeed />
            </div>
          </section>

          <InsightsRow />

          <QuickActionsStrip />

          <footer className="pt-2 pb-1 flex items-center justify-center gap-2 text-[12px] text-[#9CA3AF]">
            <span className="w-4 h-4 flex items-center justify-center">
              <Lock className="w-3 h-3" strokeWidth={1.5} />
            </span>
            <span>EU-hosted &middot; GDPR compliant &middot; SOC 2 Type 2</span>
          </footer>
        </main>
      </div>
    </div>
  );
}