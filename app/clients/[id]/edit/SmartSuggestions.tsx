"use client";

import { Sparkles } from "lucide-react";

const suggestions = [
  { text: "Update sector benchmark mapping to Banking" },
  { text: "Notify Magnus Olsen of profile changes" },
];

export default function SmartSuggestions({ onApply }: { onApply: () => void }) {
  return (
    <div className="bg-[#EEF1FF] rounded-2xl border border-[#DEE4F7] overflow-hidden">
      <div className="px-5 py-4 border-b border-[#DEE4F7] flex items-center gap-2">
        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white">
          <Sparkles className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
        </span>
        <h2 className="text-[16px] font-normal text-[#070a4a]">Smart Suggestions</h2>
      </div>

      <div className="px-5 py-4 space-y-4">
        <p className="text-[12px] text-[#6B7280]">Based on recent updates:</p>
        {suggestions.map((s, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <p className="text-[13px] text-[#070a4a] flex-1">{s.text}</p>
            <button
              onClick={onApply}
              className="text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}