"use client";

import { ArrowRight, Sparkles, Clock, Pencil } from "lucide-react";

const recentEdits = [
  { name: "Board Self Eval", editor: "Sarah Mitchell", time: "3d ago", color: "#1E50FF" },
  { name: "C-Suite Annual Eval", editor: "James Chen", time: "4d ago", color: "#DC2626" },
  { name: "Director Skills", editor: "Sarah Mitchell", time: "5d ago", color: "#22C55E" },
  { name: "Skills Matrix", editor: "Emma Laurent", time: "1w ago", color: "#8B5CF6" },
  { name: "Training Needs", editor: "James Chen", time: "2w ago", color: "#EA580C" },
];

export default function TemplatesBottomBento() {
  return (
    <section className="grid grid-cols-12 gap-5">
      {/* Recently Modified Templates */}
      <div className="col-span-8 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
          <h2 className="text-[16px] font-normal text-[#1E50FF]">
            Recently Modified Templates
          </h2>
          <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
            View all
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="p-5 flex gap-4 overflow-x-auto">
          {recentEdits.map((edit, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[180px] p-4 rounded-xl border border-[#ECEEF2] hover:border-[#1E50FF]/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: edit.color + "15" }}
                >
                  <Pencil
                    className="w-4 h-4"
                    strokeWidth={1.5}
                    style={{ color: edit.color }}
                  />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-[#070a4a] truncate">
                    {edit.name}
                  </p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">
                    edited by {edit.editor}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <Clock className="w-3 h-3 text-[#9CA3AF]" strokeWidth={1.5} />
                <span className="text-[11px] text-[#9CA3AF]">{edit.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="col-span-4 bg-[#F5F8FF] rounded-2xl border border-[#E0E7FF] flex flex-col">
        <div className="px-5 py-4 border-b border-[#E0E7FF] flex items-center gap-2.5">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#EEF1FF]">
            <Sparkles className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
          </span>
          <h2 className="text-[16px] font-normal text-[#070a4a]">AI Insight</h2>
        </div>

        <div className="p-5 flex flex-col gap-4 flex-1">
          <p className="text-[13px] text-[#6B7280] leading-relaxed">
            Director Training Needs hasn't been updated in 2 months. Recent
            regulatory changes may warrant a refresh.
          </p>
          <button className="flex items-center gap-1.5 text-[13px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer self-start">
            Review Template
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}