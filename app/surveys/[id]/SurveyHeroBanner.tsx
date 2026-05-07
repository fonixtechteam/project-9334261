"use client";

import { Globe, Users, ShieldCheck, BarChart3, CheckCircle2 } from "lucide-react";

const metaChips = [
  { label: "Annual Evaluation", icon: null },
  { label: "EN + SE", icon: Globe },
  { label: "15 recipients", icon: Users },
  { label: "MFA enabled", icon: ShieldCheck },
];

const miniStats = [
  { label: "Responded", value: "12/15", icon: Users },
  { label: "Complete", value: "80%", icon: BarChart3 },
  { label: "Remaining", value: "5 days", icon: null },
  { label: "Avg Time", value: "18 min", icon: null },
];

export default function SurveyHeroBanner({ surveyId }: { surveyId: string }) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden relative">
      <div className="h-[3px] bg-[#1E50FF]" />

      <div className="px-6 py-5 flex items-center justify-between">
        {/* Left: Logo + name + chips */}
        <div className="flex items-center gap-4">
          <span className="w-14 h-14 rounded-xl bg-[#1E50FF] flex items-center justify-center text-white text-[20px] font-bold flex-shrink-0">
            N
          </span>
          <div>
            <p className="text-[13px] font-medium text-[#1E50FF] leading-tight">Nordea Bank</p>
            <h1 className="text-[18px] font-light text-[#070a4a] leading-tight tracking-tight mt-0.5">
              Board Self Evaluation 2026
            </h1>
            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
              {metaChips.map((chip, i) => (
                <span key={i} className="flex items-center gap-1 px-2 py-0.5 bg-[#F7F8FA] text-[#6B7280] text-[11px] font-medium rounded-md whitespace-nowrap">
                  {chip.icon && <chip.icon className="w-3 h-3" strokeWidth={1.5} />}
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Mini stats */}
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

        {/* Right: Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EEF1FF] rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E50FF]" strokeWidth={2} />
            <span className="text-[12px] font-medium text-[#1E50FF] whitespace-nowrap">In Progress</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
            <span className="text-[12px] text-[#22C55E] font-medium">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}