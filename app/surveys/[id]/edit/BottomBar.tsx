"use client";

import { Save, RotateCcw } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="h-[52px] bg-white border-t border-[#ECEEF2] flex items-center justify-between px-8 shrink-0 z-40">
      <div className="flex items-center gap-4">
        <span className="text-[13px] text-[#6B7280]">
          <span className="text-[#070a4a] font-medium">47</span> questions
          <span className="mx-2 text-[#ECEEF2]">|</span>
          <span className="text-[#1E50FF] font-medium">2</span> customized
          <span className="mx-2 text-[#ECEEF2]">|</span>
          <span className="text-[#B07D2A] font-medium">3</span> unsaved changes
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
          <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
          Discard Changes
        </button>
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#070a4a] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
          <Save className="w-3.5 h-3.5" strokeWidth={1.5} />
          Save Draft
        </button>
        <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#1E50FF] text-white text-[12px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer whitespace-nowrap">
          <Save className="w-3.5 h-3.5" strokeWidth={2} />
          Save Changes
        </button>
      </div>
    </div>
  );
}