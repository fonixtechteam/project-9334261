"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import SurveysSidebar from "./SurveysSidebar";
import SurveysHeader from "./SurveysHeader";
import SurveysKPICards from "./SurveysKPICards";
import SurveysFilterBar from "./SurveysFilterBar";
import SurveysTable from "./SurveysTable";
import SurveysBottomBento from "./SurveysBottomBento";

export default function SurveysPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <SurveysSidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <SurveysHeader />

        <main className="flex-1 p-8 space-y-5 overflow-y-auto">
          <SurveysKPICards />

          <SurveysFilterBar viewMode={viewMode} setViewMode={setViewMode} />

          <SurveysTable viewMode={viewMode} />

          <SurveysBottomBento />

          <footer className="pt-2 pb-1 flex items-center justify-center gap-2 text-[12px] text-[#9CA3AF]">
            <span className="w-4 h-4 flex items-center justify-center">
              <Lock className="w-3 h-3" strokeWidth={1.5} />
            </span>
            <span>EU-hosted · GDPR compliant · SOC 2 Type 2</span>
          </footer>
        </main>
      </div>
    </div>
  );
}