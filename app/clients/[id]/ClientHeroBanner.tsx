"use client";

import { useState } from "react";
import { MoreVertical, BarChart3, Users, Calendar, TrendingUp } from "lucide-react";

const metaChips = ["Banking", "EU (Nordics)", "Listed", "Founded 1820", "Active since Mar 2024"];

export default function ClientHeroBanner({ clientId }: { clientId: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const miniStats = [
    { label: "Active Surveys", value: "3", icon: BarChart3 },
    { label: "Total Respondents", value: "47", icon: Users },
    { label: "Client Tenure", value: "2.1y", icon: Calendar },
    { label: "Avg Response Rate", value: "92%", icon: TrendingUp },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden relative">
      {/* Royal-blue gradient strip */}
      <div className="h-[3px] bg-[#1E50FF]" />

      <div className="px-6 py-5 flex items-center justify-between">
        {/* Left: Logo + name + chips */}
        <div className="flex items-center gap-4">
          <span className="w-16 h-16 rounded-2xl bg-[#1E50FF] flex items-center justify-center text-white text-[24px] font-bold flex-shrink-0">
            N
          </span>
          <div>
            <h1 className="text-[24px] font-light text-[#070a4a] leading-tight tracking-tight">
              Nordea Bank
            </h1>
            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
              {metaChips.map((chip, i) => (
                <span key={i} className="px-2 py-0.5 bg-[#F7F8FA] text-[#6B7280] text-[11px] font-medium rounded-md whitespace-nowrap">
                  {chip}
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
                <span className="text-[11px] text-[#9CA3AF] uppercase tracking-wider whitespace-nowrap">
                  {stat.label}
                </span>
                <span className="text-[18px] font-light text-[#070a4a] whitespace-nowrap">
                  {stat.value}
                </span>
              </div>
              {i < miniStats.length - 1 && (
                <div className="w-[1px] h-8 bg-[#ECEEF2]" />
              )}
            </div>
          ))}
        </div>

        {/* Right: Status + menu */}
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-[#E8F5EE] text-[#22C55E] text-[11px] font-medium rounded-full whitespace-nowrap">
            Active
          </span>
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
              <MoreVertical className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
                {["Archive Client", "Export Data", "Transfer Ownership"].map((action) => (
                  <button key={action} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}