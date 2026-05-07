"use client";

import { TrendingUp, Building2, FileClock, BarChart3 } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const areaData = [
  { v: 14 }, { v: 16 }, { v: 15 }, { v: 18 }, { v: 19 },
  { v: 21 }, { v: 20 }, { v: 22 }, { v: 23 }, { v: 24 },
];

const sparkData = [
  { v: 78 }, { v: 80 }, { v: 79 }, { v: 82 }, { v: 83 },
  { v: 85 }, { v: 84 }, { v: 86 }, { v: 87 }, { v: 87 },
];

export default function KPICards() {
  return (
    <section className="grid grid-cols-12 gap-5">
      {/* Hero KPI — Active Surveys */}
      <div className="col-span-5 h-[168px] rounded-2xl bg-[#070a4a] relative overflow-hidden flex flex-col justify-between p-5">
        <div className="absolute top-4 right-6 text-[160px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
          &amp;
        </div>

        <div className="relative z-10">
          <span className="text-[12px] font-medium text-white/50 uppercase tracking-wider">
            Active Surveys
          </span>
          <div className="flex items-baseline gap-3 mt-2">
            <span className="text-[44px] font-light text-white leading-none tracking-tight">
              24
            </span>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#22C55E]" strokeWidth={2} />
              <span className="text-[13px] font-medium text-[#22C55E]">+3 this week</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-[36px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="dashHero" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E50FF" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#1E50FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke="#1E50FF" fill="url(#dashHero)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right column — 3 mini cards */}
      <div className="col-span-7 grid grid-cols-3 gap-5">
        {/* Active Clients */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Active Clients
          </span>
          <div className="mt-1.5">
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
              47
            </span>
          </div>
          <div className="mt-auto pt-2 flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#F4F5F7]">
              <Building2 className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
            </span>
            <span className="text-[12px] text-[#6B7280]">Across 12 sectors</span>
          </div>
        </div>

        {/* Pending Reports */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Pending Reports
          </span>
          <div className="mt-1.5">
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
              8
            </span>
          </div>
          <div className="mt-auto pt-2 flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#FEF2F2]">
              <FileClock className="w-4 h-4 text-[#DC2626]" strokeWidth={1.5} />
            </span>
            <span className="text-[12px] text-[#6B7280]">Needs attention</span>
          </div>
        </div>

        {/* Response Rate */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Response Rate
          </span>
          <div className="mt-1.5">
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
              87%
            </span>
          </div>
          <div className="h-[28px] mt-2 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="dashSpark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#22C55E" fill="url(#dashSpark)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}