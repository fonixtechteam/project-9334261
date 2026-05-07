"use client";

import { Sparkles, ArrowRight } from "lucide-react";

const serviceTypes = [
  { label: "Annual Eval", count: 22, color: "#1E50FF" },
  { label: "Skills", count: 14, color: "#070a4a" },
  { label: "C-Suite", count: 11, color: "#6B7280" },
  { label: "Bespoke", count: 9, color: "#B07D2A" },
  { label: "ESG", count: 8, color: "#22C55E" },
  { label: "Training", count: 6, color: "#9CA3AF" },
  { label: "Committee", count: 10, color: "#DC2626" },
  { label: "Suitability", count: 7, color: "#ECEEF2" },
];

export default function SurveysBottomBento() {
  return (
    <section className="grid grid-cols-12 gap-5">
      {/* Service Type Distribution */}
      <div className="col-span-8 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="px-5 py-4 border-b border-[#ECEEF2]">
          <h2 className="text-[16px] font-normal text-[#1E50FF]">Service Type Distribution</h2>
        </div>

        <div className="p-5 flex items-center gap-8 flex-1">
          {/* Donut chart */}
          <div className="flex-shrink-0 w-[180px] h-[180px] relative">
            <svg viewBox="0 0 180 180" className="w-full h-full -rotate-90">
              <circle cx="90" cy="90" r="70" fill="none" stroke="#F4F5F7" strokeWidth="22" />
              {serviceTypes.reduce((acc, t) => {
                const total = serviceTypes.reduce((s, x) => s + x.count, 0);
                const pct = t.count / total;
                const circumference = 2 * Math.PI * 70;
                const offset = circumference - acc.used;
                const dash = pct * circumference;
                const el = (
                  <circle
                    key={t.label}
                    cx="90"
                    cy="90"
                    r="70"
                    fill="none"
                    stroke={t.color}
                    strokeWidth="22"
                    strokeDasharray={`${dash} ${circumference - dash}`}
                    strokeDashoffset={-acc.used}
                    strokeLinecap="round"
                  />
                );
                acc.used += dash;
                acc.elements.push(el);
                return acc;
              }, { used: 0, elements: [] as React.ReactNode[] }).elements}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-[28px] font-light text-[#070a4a] block leading-none">87</span>
                <span className="text-[11px] text-[#9CA3AF] mt-1 block">Surveys</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-3">
            {serviceTypes.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                <span className="text-[13px] text-[#070a4a] font-medium flex-1">{t.label}</span>
                <span className="text-[13px] text-[#9CA3AF]">{t.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="col-span-4 bg-[#F0F4FF] rounded-2xl border border-[#D4E0FF] flex flex-col">
        <div className="px-5 py-4 border-b border-[#D4E0FF] flex items-center gap-2.5">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white">
            <Sparkles className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
          </span>
          <h2 className="text-[16px] font-normal text-[#070a4a]">AI Insight</h2>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[15px] font-medium text-[#070a4a] mb-2">Smart Recommendation</h3>
            <p className="text-[13px] text-[#6B7280] leading-relaxed">
              3 surveys haven&apos;t been launched in 14+ days. Consider following up with client contacts to avoid delays.
            </p>
          </div>

          <button className="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer self-start">
            Review
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}