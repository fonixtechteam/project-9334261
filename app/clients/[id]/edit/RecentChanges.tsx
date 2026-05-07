"use client";

import { Clock, ArrowRight } from "lucide-react";

const changes = [
  { text: "Sector updated from 'Financial Services' to 'Banking'", time: "3d ago by Sarah" },
  { text: "Logo replaced", time: "1w ago by John Doe" },
  { text: "Branding theme enabled", time: "2w ago by Sarah" },
  { text: "Workspace permissions updated", time: "1m ago by Admin" },
];

export default function RecentChanges() {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center gap-2">
        <span className="w-4 h-4 flex items-center justify-center">
          <Clock className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
        </span>
        <h2 className="text-[16px] font-normal text-[#070a4a]">Recent Changes</h2>
      </div>

      <div className="px-5 py-4 space-y-4">
        {changes.map((c, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            <p className="text-[13px] text-[#070a4a]">{c.text}</p>
            <p className="text-[11px] text-[#9CA3AF]">{c.time}</p>
          </div>
        ))}

        <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer mt-2">
          View full change log
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}