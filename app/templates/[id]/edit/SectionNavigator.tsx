"use client";

import { useState } from "react";
import { GripVertical, MoreVertical, Plus } from "lucide-react";

const sections = [
  { id: 1, title: "Strategy & Vision", questions: 9, active: false },
  { id: 2, title: "Risk Oversight & Audit", questions: 8, active: true },
  { id: 3, title: "Board Composition", questions: 8, active: false },
  { id: 4, title: "ESG & Sustainability", questions: 7, active: false },
  { id: 5, title: "Committee Effectiveness", questions: 9, active: false },
  { id: 6, title: "Chair & Leadership", questions: 6, active: false },
];

export default function SectionNavigator({
  activeSection,
  onSectionChange,
}: {
  activeSection: number;
  onSectionChange: (id: number) => void;
}) {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  return (
    <aside className="w-[240px] bg-white border-r border-[#ECEEF2] flex flex-col overflow-hidden shrink-0">
      <div className="px-4 py-3 border-b border-[#ECEEF2] flex items-center justify-between">
        <span className="text-[13px] font-semibold text-[#070a4a]">Sections</span>
        <span className="text-[11px] text-[#9CA3AF]">47 questions</span>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
        {sections.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => setHoveredSection(s.id)}
            onMouseLeave={() => { setHoveredSection(null); setMenuOpen(null); }}
            onClick={() => onSectionChange(s.id)}
            className={`relative flex items-center gap-2 px-2 py-2.5 rounded-xl cursor-pointer transition-all group ${
              s.id === activeSection
                ? "bg-[#EEF1FF]"
                : "hover:bg-[#F7F8FA]"
            }`}
          >
            {s.id === activeSection && (
              <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#1E50FF] rounded-r-full" />
            )}

            <span className="w-5 h-5 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#6B7280] transition-colors flex-shrink-0">
              <GripVertical className="w-4 h-4" strokeWidth={1.5} />
            </span>

            <div className="flex-1 min-w-0">
              <p
                className={`text-[12px] font-medium truncate leading-tight ${
                  s.id === activeSection ? "text-[#1E50FF]" : "text-[#070a4a]"
                }`}
              >
                {s.id}. {s.title}
              </p>
            </div>

            <span
              className={`px-1.5 py-0.5 rounded-md text-[10px] font-medium flex-shrink-0 ${
                s.id === activeSection
                  ? "bg-[#1E50FF]/10 text-[#1E50FF]"
                  : "bg-[#F7F8FA] text-[#9CA3AF]"
              }`}
            >
              {s.questions} Q
            </span>

            {hoveredSection === s.id && (
              <div className="relative flex-shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(menuOpen === s.id ? null : s.id);
                  }}
                  className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white/80 transition-colors"
                >
                  <MoreVertical className="w-3 h-3 text-[#9CA3AF]" strokeWidth={2} />
                </button>
                {menuOpen === s.id && (
                  <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-40 py-1">
                    {["Rename", "Duplicate", "Delete"].map((a) => (
                      <button
                        key={a}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full text-left px-2.5 py-1.5 text-[11px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="px-3 py-3 border-t border-[#ECEEF2]">
        <button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-dashed border-[#ECEEF2] text-[12px] font-medium text-[#9CA3AF] hover:text-[#1E50FF] hover:border-[#1E50FF]/30 transition-all cursor-pointer whitespace-nowrap">
          <Plus className="w-3.5 h-3.5" strokeWidth={2} />
          Add New Section
        </button>
      </div>
    </aside>
  );
}