"use client";

import { TrendingUp, Star, Globe, Pencil } from "lucide-react";

export default function TemplatesKPICards() {
  return (
    <section className="grid grid-cols-12 gap-5">
      {/* Hero KPI — Total Templates */}
      <div className="col-span-5 h-[168px] rounded-2xl bg-[#070a4a] relative overflow-hidden flex flex-col justify-between p-5">
        <div className="absolute top-4 right-6 text-[160px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
          &amp;
        </div>

        <div className="relative z-10">
          <span className="text-[12px] font-medium text-white/50 uppercase tracking-wider">
            Total Templates
          </span>
          <div className="flex items-baseline gap-3 mt-2">
            <span className="text-[36px] font-light text-white leading-none tracking-tight">
              8 Standard
            </span>
            <span className="text-[20px] font-light text-white/60">+ 14 Bespoke</span>
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <TrendingUp className="w-4 h-4 text-[#22C55E]" strokeWidth={2} />
            <span className="text-[13px] font-medium text-[#22C55E]">+2 this quarter</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-1.5">
          {[38, 40, 39, 41, 40, 42, 43, 42, 44, 45].map((n, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full bg-white/[0.12] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white/60" />
            </span>
          ))}
        </div>
      </div>

      {/* Right column — 3 mini cards */}
      <div className="col-span-7 grid grid-cols-3 gap-5">
        {/* Most Used */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Most Used
          </span>
          <div className="mt-2 flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#EEF1FF] flex-shrink-0">
              <Star className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
            </span>
            <span className="text-[14px] font-medium text-[#070a4a] leading-tight">
              Board Self Eval
            </span>
          </div>
          <p className="text-[12px] text-[#6B7280] mt-3">47 surveys created</p>
        </div>

        {/* Languages Supported */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Languages Supported
          </span>
          <div className="mt-2 flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F0F9FF] flex-shrink-0">
              <Globe className="w-4 h-4 text-[#0EA5E9]" strokeWidth={1.5} />
            </span>
            <span className="text-[28px] font-light text-[#070a4a] leading-none">
              6
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-3 flex-wrap">
            {["EN", "FR", "DE", "ES", "IT", "SE"].map((lang) => (
              <span key={lang} className="px-1.5 py-0.5 rounded bg-[#F7F8FA] text-[10px] font-medium text-[#6B7280]">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Last Updated */}
        <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
          <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
            Last Updated
          </span>
          <div className="mt-2 flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F4F5F7] flex-shrink-0">
              <Pencil className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
            </span>
            <span className="text-[22px] font-light text-[#070a4a] leading-none">
              3d ago
            </span>
          </div>
          <p className="text-[12px] text-[#6B7280] mt-3">Board Self Eval v2.3</p>
        </div>
      </div>
    </section>
  );
}