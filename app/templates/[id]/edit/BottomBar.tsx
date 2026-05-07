"use client";

export default function BottomBar() {
  return (
    <div className="h-[48px] bg-white border-t border-[#ECEEF2] flex items-center justify-between px-6 shrink-0">
      <span className="text-[12px] text-[#9CA3AF]">
        47 questions · 6 sections · 3 unsaved changes
      </span>

      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
          Save Draft
        </button>
        <button className="px-4 py-2 rounded-lg bg-[#1E50FF] text-white text-[12px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer whitespace-nowrap">
          Save & Publish
        </button>
      </div>
    </div>
  );
}