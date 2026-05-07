"use client";

import { useState } from "react";
import { List, LayoutGrid, ChevronDown } from "lucide-react";

const typeFilters = [
  "All",
  "Standard",
  "Bespoke",
  "Recently Updated",
  "Most Used",
];

export default function TemplatesFilterBar({ viewMode, setViewMode }: { viewMode: "list" | "grid"; setViewMode: (v: "list" | "grid") => void }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const dropdowns = [
    { label: "Service Category", open: categoryOpen, setOpen: setCategoryOpen, options: ["All Categories", "Annual Eval", "Skills", "C-Suite", "Bespoke", "ESG", "Training", "Committee", "Suitability"] },
    { label: "Language", open: langOpen, setOpen: setLangOpen, options: ["All Languages", "English", "French", "German", "Spanish", "Italian", "Swedish"] },
    { label: "Sort By", open: sortOpen, setOpen: setSortOpen, options: ["Recent", "Name", "Usage"] },
  ];

  return (
    <div className="rounded-2xl bg-white border border-[#ECEEF2] px-5 py-3.5 flex items-center justify-between">
      {/* Left: Type filter pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto">
        {typeFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all cursor-pointer ${
              f === activeFilter
                ? "bg-[#1E50FF] text-white"
                : "bg-[#F7F8FA] text-[#6B7280] hover:bg-[#F4F5F7] hover:text-[#070a4a]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Right: Dropdowns + View toggle */}
      <div className="flex items-center gap-2 flex-shrink-0 ml-4">
        {dropdowns.map((d) => (
          <div key={d.label} className="relative">
            <button
              onClick={() => d.setOpen(!d.open)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:border-[#1E50FF]/30 hover:bg-[#F7F8FA] transition-all cursor-pointer"
            >
              {d.label}
              <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
            </button>
            {d.open && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1 max-h-56 overflow-y-auto">
                {d.options.map((o) => (
                  <button
                    key={o}
                    onClick={() => d.setOpen(false)}
                    className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center rounded-lg border border-[#ECEEF2] overflow-hidden ml-1">
          <button
            onClick={() => setViewMode("list")}
            className={`w-8 h-8 flex items-center justify-center transition-colors cursor-pointer ${
              viewMode === "list" ? "bg-[#070a4a] text-white" : "text-[#6B7280] hover:bg-[#F7F8FA]"
            }`}
          >
            <List className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`w-8 h-8 flex items-center justify-center transition-colors cursor-pointer ${
              viewMode === "grid" ? "bg-[#070a4a] text-white" : "text-[#6B7280] hover:bg-[#F7F8FA]"
            }`}
          >
            <LayoutGrid className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}