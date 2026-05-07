"use client";

import { TrendingUp, Building2, BarChart3 } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const sparkData = [
  { v: 42 }, { v: 43 }, { v: 43 }, { v: 44 }, { v: 45 },
  { v: 45 }, { v: 46 }, { v: 46 }, { v: 47 }, { v: 47 },
];

export default function ClientsKPICards() {
  return (
    <section className="grid grid-cols-12 gap-5">
      {/* Hero KPI — Total Active Clients */}
      <div className="col-span-5 h-[168px] rounded-2xl bg-[#070a4a] relative overflow-hidden flex flex-col justify-between p-5">
        <div className="absolute top-4 right-6 text-[160px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
          &amp;
        </div>

        <div className="relative z-10">
          <span className="text-[12px] font-medium text-white/50 uppercase tracking-wider">
            Total Active Clients
          </span>
          <div className="flex items-baseline gap-3 mt-2">
            <span className="text-[44px] font-light text-white leading-none tracking-tight">
              47
            </span>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#22C55E]" strokeWidth={2} />
              <span className="text-[13px] font-medium text-[#22C55E]">+5 this quarter</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-1.5">
          {[40, 42, 41, 44, 43, 45, 44, 46, 45, 47].map((n, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full bg-white/[0.12] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white/60" />
            </span>
          ))}
        </div>
      </div>

      {/* Right column — 3 mini cards */}
      <div className="col-span-7 grid grid-cols-3 gap-5">
        {/* By Sector */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            By Sector
          </span>
          <div className="mt-2 flex items-end justify-center flex-1">
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              <circle cx="40" cy="40" r="36" fill="none" stroke="#ECEEF2" strokeWidth="8" />
              <circle cx="40" cy="40" r="36" fill="none" stroke="#1E50FF" strokeWidth="8" strokeDasharray="90 226" strokeDashoffset="0" strokeLinecap="round" />
              <circle cx="40" cy="40" r="36" fill="none" stroke="#070a4a" strokeWidth="8" strokeDasharray="56 260" strokeDashoffset="-94" strokeLinecap="round" />
              <circle cx="40" cy="40" r="36" fill="none" stroke="#9CA3AF" strokeWidth="8" strokeDasharray="30 286" strokeDashoffset="-154" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[12px] text-[#6B7280] mt-3 text-center">12 sectors covered</p>
        </div>

        {/* By Region */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            By Region
          </span>
          <div className="mt-2 flex-1 flex flex-col justify-center gap-2">
            {[
              { label: "EU", count: 28, color: "#1E50FF" },
              { label: "MENA", count: 8, color: "#070a4a" },
              { label: "Asia", count: 6, color: "#9CA3AF" },
              { label: "Americas", count: 5, color: "#ECEEF2" },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-[#F4F5F7] rounded-full overflow-hidden flex-shrink-0">
                  <div className="h-full rounded-full" style={{ width: `${(r.count / 28) * 100}%`, backgroundColor: r.color }} />
                </div>
                <span className="text-[11px] text-[#070a4a] font-medium">{r.count}</span>
                <span className="text-[11px] text-[#9CA3AF]">{r.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* New This Month */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            New This Month
          </span>
          <div className="mt-2">
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
              5
            </span>
          </div>
          <div className="h-[32px] mt-2 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="newSpark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E50FF" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#1E50FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#1E50FF" fill="url(#newSpark)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}