"use client";

import { Building2 } from "lucide-react";

export default function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center py-20">
      <span className="w-16 h-16 rounded-2xl bg-[#F7F8FA] flex items-center justify-center mb-4">
        <Building2 className="w-8 h-8 text-[#9CA3AF]" strokeWidth={1.5} />
      </span>
      <h3 className="text-[16px] font-medium text-[#070a4a]">No clients match these filters</h3>
      <p className="text-[13px] text-[#6B7280] mt-1">Try adjusting your filter criteria to see more results</p>
      <button
        onClick={onClear}
        className="mt-4 px-4 py-2 bg-[#1E50FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer"
      >
        Clear filters
      </button>
    </div>
  );
}