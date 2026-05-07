"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import TemplateSidebar from "./TemplateSidebar";
import TemplateHeader from "./TemplateHeader";
import TemplateHeroBanner from "./TemplateHeroBanner";
import TemplateTabs from "./TemplateTabs";
import OverviewTab from "./OverviewTab";
import QuestionsPreviewTab from "./QuestionsPreviewTab";
import UsageHistoryTab from "./UsageHistoryTab";
import VersionHistoryTab from "./VersionHistoryTab";

export default function TemplateDetail({ templateId }: { templateId: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <TemplateSidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <TemplateHeader templateId={templateId} />

        <main className="flex-1 p-8 space-y-5 overflow-y-auto">
          <TemplateHeroBanner templateId={templateId} />

          <TemplateTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "overview" && <OverviewTab templateId={templateId} />}
          {activeTab === "questions" && <QuestionsPreviewTab />}
          {activeTab === "usage" && <UsageHistoryTab />}
          {activeTab === "versions" && <VersionHistoryTab />}

          {activeTab !== "overview" && activeTab !== "questions" && activeTab !== "usage" && activeTab !== "versions" && (
            <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-12 flex flex-col items-center justify-center min-h-[300px]">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F7F8FA] mb-4">
                <Lock className="w-6 h-6 text-[#9CA3AF]" strokeWidth={1.5} />
              </span>
              <p className="text-[15px] font-medium text-[#070a4a]">Coming Soon</p>
              <p className="text-[13px] text-[#6B7280] mt-1">This section is under development.</p>
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