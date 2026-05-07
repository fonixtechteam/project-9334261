"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import ClientSidebar from "./ClientSidebar";
import ClientHeader from "./ClientHeader";
import ClientHeroBanner from "./ClientHeroBanner";
import ClientTabs from "./ClientTabs";
import OverviewTab from "./OverviewTab";

export default function ClientDetail({ clientId }: { clientId: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <ClientSidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <ClientHeader />

        <main className="flex-1 p-8 space-y-5 overflow-y-auto">
          <ClientHeroBanner clientId={clientId} />

          <ClientTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "overview" && <OverviewTab clientId={clientId} />}

          {activeTab === "surveys" && (
            <div className="bg-white rounded-2xl border border-[#ECEEF2] p-12 flex flex-col items-center justify-center text-center">
              <span className="text-[16px] font-medium text-[#070a4a]">Surveys tab content</span>
              <p className="text-[13px] text-[#6B7280] mt-1">All client surveys will appear here.</p>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="bg-white rounded-2xl border border-[#ECEEF2] p-12 flex flex-col items-center justify-center text-center">
              <span className="text-[16px] font-medium text-[#070a4a]">Reports tab content</span>
              <p className="text-[13px] text-[#6B7280] mt-1">All client reports will appear here.</p>
            </div>
          )}

          {activeTab === "team" && (
            <div className="bg-white rounded-2xl border border-[#ECEEF2] p-12 flex flex-col items-center justify-center text-center">
              <span className="text-[16px] font-medium text-[#070a4a]">Team & Permissions tab content</span>
              <p className="text-[13px] text-[#6B7280] mt-1">Manage team access and permissions here.</p>
            </div>
          )}

          {activeTab === "branding" && (
            <div className="bg-white rounded-2xl border border-[#ECEEF2] p-12 flex flex-col items-center justify-center text-center">
              <span className="text-[16px] font-medium text-[#070a4a]">Branding tab content</span>
              <p className="text-[13px] text-[#6B7280] mt-1">Customise survey branding here.</p>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="bg-white rounded-2xl border border-[#ECEEF2] p-12 flex flex-col items-center justify-center text-center">
              <span className="text-[16px] font-medium text-[#070a4a]">Activity Log tab content</span>
              <p className="text-[13px] text-[#6B7280] mt-1">Full activity history will appear here.</p>
            </div>
          )}

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