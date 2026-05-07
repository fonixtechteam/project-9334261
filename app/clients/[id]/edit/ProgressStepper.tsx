"use client";

import { Check } from "lucide-react";

interface Section {
  id: string;
  label: string;
  summary: string | null;
}

export default function ProgressStepper({
  sections,
  activeSection,
  onSectionChange,
}: {
  sections: Section[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] px-1 flex items-center gap-0 overflow-hidden">
      {sections.map((s, i) => {
        const isActive = activeSection === s.id;
        return (
          <button
            key={s.id}
            onClick={() => onSectionChange(s.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-[13px] font-medium whitespace-nowrap transition-all cursor-pointer relative ${
              isActive
                ? "text-[#1E50FF]"
                : "text-[#6B7280] hover:text-[#070a4a]"
            }`}
          >
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#22C55E]/10 flex-shrink-0">
              <Check className="w-3 h-3 text-[#22C55E]" strokeWidth={2} />
            </span>
            <span>{s.label}</span>
            <span className="text-[10px] text-[#22C55E] font-medium ml-0.5">Editable</span>

            {isActive && (
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1E50FF] rounded-t-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}