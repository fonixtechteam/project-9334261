"use client";

import { useState } from "react";
import { GripVertical, Plus, Link2 } from "lucide-react";

const sections = [
  { id: 1, title: "Strategy & Vision", questions: 9, active: false },
  { id: 2, title: "Risk Oversight", questions: 8, active: true },
  { id: 3, title: "Composition", questions: 8, active: false },
  { id: 4, title: "ESG", questions: 7, active: false },
  { id: 5, title: "Committees", questions: 9, active: false },
  { id: 6, title: "Leadership", questions: 6, active: false },
];

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState(2);

  return (
    <aside className="w-[240px] bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden shrink-0">
      <div className="px-4 py-3 border-b border-[#ECEEF2] flex items-center justify-between">
        <span className="text-[13px] font-semibold text-[#070a4a]">Sections &middot; 6</span>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`relative w-full flex items-center gap-2 px-2 py-2.5 rounded-xl transition-all cursor-pointer text-left ${
              s.id === activeSection
                ? "bg-[#EEF1FF]"
                : "hover:bg-[#F7F8FA]"
            }`}
          >
            {s.id === activeSection && (
              <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#1E50FF] rounded-r-full" />
            )}

            <span className="w-5 h-5 flex items-center justify-center text-[#9CA3AF] flex-shrink-0">
              <GripVertical className="w-4 h-4" strokeWidth={1.5} />
            </span>

            <span
              className={`text-[12px] font-medium leading-tight ${
                s.id === activeSection ? "text-[#1E50FF]" : "text-[#070a4a]"
              }`}
            >
              {s.id}. {s.title}
            </span>

            <span
              className={`ml-auto px-1.5 py-0.5 rounded-md text-[10px] font-medium flex-shrink-0 ${
                s.id === activeSection
                  ? "bg-[#1E50FF]/10 text-[#1E50FF]"
                  : "bg-[#F7F8FA] text-[#9CA3AF]"
              }`}
            >
              {s.questions} Q
            </span>
          </button>
        ))}
      </div>

      <div className="px-3 py-3 border-t border-[#ECEEF2] space-y-2">
        <button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-dashed border-[#ECEEF2] text-[12px] font-medium text-[#9CA3AF] hover:text-[#1E50FF] hover:border-[#1E50FF]/30 transition-all cursor-pointer whitespace-nowrap">
          <Plus className="w-3.5 h-3.5" strokeWidth={2} />
          Add Section
        </button>
        <div className="flex items-center gap-1.5 justify-center">
          <Link2 className="w-3 h-3 text-[#9CA3AF]" strokeWidth={1.5} />
          <span className="text-[11px] text-[#9CA3AF]">Synced from template</span>
        </div>
      </div>
    </aside>
  );
}