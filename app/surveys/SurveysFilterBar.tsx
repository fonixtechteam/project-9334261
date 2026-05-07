"use client";

import { useState } from "react";
import { List, LayoutGrid, ChevronDown } from "lucide-react";

const statusFilters = [
  "All",
  "In Progress",
  "Drafts",
  "Closing Soon",
  "Closed",
  "Needs Review",
];

export default function SurveysFilterBar({ viewMode, setViewMode }: { viewMode: "list" | "grid"; setViewMode: (v: "list" | "grid") => void }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [clientOpen, setClientOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  const dropdowns = [
    { label: "Client", open: clientOpen, setOpen: setClientOpen, options: ["All Clients", "Nordea Bank", "Allianz Group", "L'Oréal", "Siemens AG", "AXA Insurance", "Unilever", "Roche Holding", "Swiss Re", "Banco Santander", "Saudi Aramco"] },
    { label: "Service Type", open: typeOpen, setOpen: setTypeOpen, options: ["All Types", "Annual Eval", "Skills", "C-Suite", "Bespoke", "ESG", "Training", "Committee", "Suitability"] },
    { label: "Date Range", open: dateOpen, setOpen: setDateOpen, options: ["All Time", "This Week", "This Month", "Last 30 Days", "Last 90 Days", "This Year"] },
  ];

  return (
    <div className="rounded-2xl bg-white border border-[#ECEEF2] px-5 py-3.5 flex items-center justify-between">
      {/* Left: Status filter pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto">
        {statusFilters.map((f) => (
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