"use client";

import { useState } from "react";
import { Lock, Pencil } from "lucide-react";
import SurveySidebar from "./SurveySidebar";
import SurveyHeader from "./SurveyHeader";
import SurveyHeroBanner from "./SurveyHeroBanner";
import SurveyTabs from "./SurveyTabs";
import SurveyOverviewTab from "./SurveyOverviewTab";

export default function SurveyDetail({ surveyId }: { surveyId: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <SurveySidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <SurveyHeader surveyId={surveyId} />

        <main className="flex-1 p-8 space-y-5 overflow-y-auto">
          <SurveyHeroBanner surveyId={surveyId} />

          <SurveyTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "overview" && <SurveyOverviewTab surveyId={surveyId} />}

          {activeTab !== "overview" && (
            <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-12 flex flex-col items-center justify-center min-h-[300px]">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F7F8FA] mb-4">
                <Lock className="w-6 h-6 text-[#9CA3AF]" strokeWidth={1.5} />
              </span>
              <p className="text-[15px] font-medium text-[#070a4a]">Coming Soon</p>
              <p className="text-[13px] text-[#6B7280] mt-1">This section is under development.</p>
              {activeTab === "questions" && (
                <a
                  href="/surveys/board-self-evaluation-2026/edit"
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#1E50FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Pencil className="w-4 h-4" strokeWidth={2} />
                  Enter Edit Mode
                </a>
              )}
            </div>
          )}

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