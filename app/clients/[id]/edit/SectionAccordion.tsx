"use client";

import { ChevronDown } from "lucide-react";
import type React from "react";

export default function SectionAccordion({
  id,
  label,
  summary,
  expanded,
  onToggle,
  children,
}: {
  id: string;
  label: string;
  summary: string;
  expanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3 min-w-0">
          <h2 className="text-[16px] font-normal text-[#070a4a] whitespace-nowrap">{label}</h2>
          {!expanded && <span className="text-[12px] text-[#9CA3AF] truncate">{summary}</span>}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#9CA3AF] transition-transform flex-shrink-0 ${expanded ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>

      {expanded && children && (
        <div className="border-t border-[#ECEEF2]">
          {children}
        </div>
      )}
    </div>
  );
}