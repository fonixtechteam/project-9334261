"use client";

import { BarChart3, FileBarChart, Users, Palette, Activity, LayoutDashboard } from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard, count: null },
  { id: "surveys", label: "Surveys", icon: BarChart3, count: 8 },
  { id: "reports", label: "Reports", icon: FileBarChart, count: 12 },
  { id: "team", label: "Team & Permissions", icon: Users, count: null },
  { id: "branding", label: "Branding", icon: Palette, count: null },
  { id: "activity", label: "Activity Log", icon: Activity, count: null },
];

export default function ClientTabs({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-1 overflow-hidden">
      <div className="flex items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center gap-2 px-5 py-3.5 text-[14px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "text-[#1E50FF]"
                : "text-[#6B7280] hover:text-[#070a4a]"
            }`}
          >
            <tab.icon className="w-[18px] h-[18px]" strokeWidth={activeTab === tab.id ? 2 : 1.5} />
            <span>{tab.label}</span>
            {tab.count !== null && (
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                activeTab === tab.id ? "bg-[#1E50FF] text-white" : "bg-[#F4F5F7] text-[#6B7280]"
              }`}>
                {tab.count}
              </span>
            )}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E50FF] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}