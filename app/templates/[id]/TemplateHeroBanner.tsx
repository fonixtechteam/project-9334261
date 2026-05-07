"use client";

import { Users, BarChart3, Clock, Star, CheckCircle2 } from "lucide-react";

const metaChips = [
  { label: "Standard" },
  { label: "47 Questions" },
  { label: "6 Sections" },
  { label: "EN · FR · DE" },
  { label: "Version 3.2" },
];

const miniStats = [
  { label: "Times used", value: "47", icon: BarChart3 },
  { label: "Active surveys", value: "28", icon: BarChart3 },
  { label: "Avg completion", value: "18 min", icon: Clock },
  { label: "Avg score", value: "8.4/10", icon: Star },
];

export default function TemplateHeroBanner({ templateId }: { templateId: string }) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden relative">
      <div className="h-[3px] bg-[#1E50FF]" />

      <div className="px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="w-16 h-16 rounded-xl bg-[#1E50FF]/10 flex items-center justify-center flex-shrink-0">
            <Users className="w-7 h-7 text-[#1E50FF]" strokeWidth={1.5} />
          </span>
          <div>
            <h1 className="text-[18px] font-light text-[#070a4a] leading-tight tracking-tight">
              Board of Director Self Evaluation
            </h1>
            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
              {metaChips.map((chip, i) => (
                <span key={i} className="flex items-center gap-1 px-2 py-0.5 bg-[#F7F8FA] text-[#6B7280] text-[11px] font-medium rounded-md whitespace-nowrap">
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {miniStats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 px-5">
              <div className="flex flex-col items-start">
                <span className="text-[11px] text-[#9CA3AF] uppercase tracking-wider whitespace-nowrap">{stat.label}</span>
                <span className="text-[18px] font-light text-[#070a4a] whitespace-nowrap">{stat.value}</span>
              </div>
              {i < miniStats.length - 1 && (
                <div className="w-[1px] h-8 bg-[#ECEEF2]" />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F0FDF4] rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" strokeWidth={2} />
            <span className="text-[12px] font-medium text-[#22C55E] whitespace-nowrap">Active</span>
          </div>
          <p className="text-[12px] text-[#9CA3AF]">Used by 31 clients</p>
        </div>
      </div>
    </div>
  );
}