"use client";

import { useState } from "react";
import {
  Plus,
  ChevronDown,
  ToggleLeft,
  ToggleRight,
  Undo2,
  Redo2,
  GitBranch,
} from "lucide-react";

const sections = [
  { id: 1, label: "Section 1: Strategy & Vision", count: 9 },
  { id: 2, label: "Section 2: Risk Oversight & Audit", count: 8 },
  { id: 3, label: "Section 3: Board Composition", count: 8 },
  { id: 4, label: "Section 4: ESG & Sustainability", count: 7 },
  { id: 5, label: "Section 5: Committee Effectiveness", count: 9 },
  { id: 6, label: "Section 6: Chair & Leadership", count: 6 },
];

const languages = ["EN", "FR", "DE"];

export default function EditToolbar({
  activeSection,
  onSectionChange,
  bulkEditMode,
  onToggleBulkEdit,
}: {
  activeSection: number;
  onSectionChange: (id: number) => void;
  bulkEditMode: boolean;
  onToggleBulkEdit: () => void;
}) {
  const [sectionDropdownOpen, setSectionDropdownOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [versionOpen, setVersionOpen] = useState(false);

  const active = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <div className="h-[48px] bg-white border-b border-[#ECEEF2] flex items-center justify-between px-6 sticky top-[64px] z-30 shrink-0">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setSectionDropdownOpen(!sectionDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#070a4a] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap"
          >
            {active.label}
            <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
          </button>
          {sectionDropdownOpen && (
            <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-40 py-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { onSectionChange(s.id); setSectionDropdownOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-[12px] transition-colors cursor-pointer flex items-center justify-between ${
                    s.id === activeSection ? "bg-[#EEF1FF] text-[#1E50FF] font-medium" : "text-[#6B7280] hover:bg-[#F7F8FA]"
                  }`}
                >
                  <span>{s.label}</span>
                  <span className="text-[10px] text-[#9CA3AF]">{s.count} Q</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap">
          <Plus className="w-3.5 h-3.5" strokeWidth={2} />
          Add Section
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleBulkEdit}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
            bulkEditMode ? "bg-[#EEF1FF] text-[#1E50FF]" : "text-[#6B7280] hover:bg-[#F7F8FA]"
          }`}
        >
          {bulkEditMode ? (
            <ToggleRight className="w-4 h-4" strokeWidth={2} />
          ) : (
            <ToggleLeft className="w-4 h-4" strokeWidth={2} />
          )}
          Bulk Edit Mode
        </button>

        <div className="flex items-center bg-[#F7F8FA] rounded-lg p-0.5">
          {languages.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                l === lang ? "bg-white text-[#070a4a] shadow-sm" : "text-[#9CA3AF] hover:text-[#6B7280]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-0.5">
          <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] transition-colors cursor-pointer">
            <Undo2 className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] transition-colors cursor-pointer">
            <Redo2 className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setVersionOpen(!versionOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#ECEEF2] text-[11px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap"
          >
            <GitBranch className="w-3.5 h-3.5" strokeWidth={1.5} />
            v3.2
            <ChevronDown className="w-3 h-3 text-[#9CA3AF]" strokeWidth={1.5} />
          </button>
          {versionOpen && (
            <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-40 py-1">
              {["v3.2 (current)", "v3.1", "v3.0"].map((v) => (
                <button key={v} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                  {v}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}