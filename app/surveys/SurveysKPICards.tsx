"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Clock, Pencil } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const sparkData = [
  { v: 72 }, { v: 73 }, { v: 73 }, { v: 75 }, { v: 74 },
  { v: 76 }, { v: 77 }, { v: 77 }, { v: 78 }, { v: 78 },
];

const areaData = [
  { v: 18 }, { v: 19 }, { v: 19 }, { v: 20 }, { v: 21 },
  { v: 21 }, { v: 22 }, { v: 23 }, { v: 23 }, { v: 24 },
];

function Chart({ data, id, stroke }: { data: { v: number }[]; id: string; stroke: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-full h-full bg-white/[0.04] rounded-lg" />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity={0.3} />
            <stop offset="100%" stopColor={stroke} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke={stroke} fill={`url(#${id})`} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default function SurveysKPICards() {
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
          <Chart data={areaData} id="heroArea" stroke="#1E50FF" />
        </div>
      </div>

      {/* Right column — 3 mini cards */}
      <div className="col-span-7 grid grid-cols-3 gap-5">
        {/* Closing This Week */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-4 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Closing This Week
          </span>
          <div className="mt-1.5">
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
              5
            </span>
          </div>
          <div className="mt-auto pt-2 flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#FEF2F2]">
              <Clock className="w-4 h-4 text-[#DC2626]" strokeWidth={1.5} />
            </span>
            <span className="text-[12px] text-[#6B7280]">Urgent attention</span>
          </div>
        </div>

        {/* Drafts */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-4 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Drafts
          </span>
          <div className="mt-1.5">
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
              7
            </span>
          </div>
          <div className="mt-auto pt-2 flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#F7F8FA]">
              <Pencil className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
            </span>
            <span className="text-[12px] text-[#6B7280]">Awaiting launch</span>
          </div>
        </div>

        {/* Avg Completion */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-4 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Avg Completion
          </span>
          <div className="mt-1.5">
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
              78%
            </span>
          </div>
          <div className="h-[28px] mt-2">
            <Chart data={sparkData} id="avgSpark" stroke="#1E50FF" />
          </div>
        </div>
      </div>
    </section>
  );
}