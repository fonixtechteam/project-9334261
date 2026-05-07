"use client";

import { useState } from "react";
import {
  ChevronLeft,
  Eye,
  RotateCcw,
  Save,
  MoreVertical,
  Check,
} from "lucide-react";

export default function EditHeader({ templateId }: { templateId: string }) {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="h-[64px] bg-white border-b border-[#ECEEF2] flex items-center justify-between px-6 sticky top-0 z-40 shrink-0">
      <div className="flex items-center gap-3 min-w-0">
        <a
          href={`/templates/${templateId}`}
          className="flex items-center justify-center w-7 h-7 rounded-lg hover:bg-[#F7F8FA] transition-colors cursor-pointer flex-shrink-0"
        >
          <ChevronLeft className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
        </a>
        <div className="min-w-0">
          <p className="text-[11px] text-[#9CA3AF] truncate">
            Templates / Board of Director Self Evaluation / Edit
          </p>
          <div className="flex items-center gap-2">
            <h1 className="text-[18px] font-light text-[#070a4a] leading-tight tracking-tight truncate">
              Editing: Board of Director Self Evaluation
            </h1>
            <span className="flex items-center gap-1 text-[11px] text-[#22C55E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              Auto-saved 2 sec ago
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
          <Eye className="w-4 h-4" strokeWidth={1.5} />
          Preview as Respondent
        </button>

        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
          <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
          Discard Changes
        </button>

        <button className="flex items-center gap-1.5 px-3.5 py-2 bg-[#1E50FF] text-white rounded-lg text-[12px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer whitespace-nowrap">
          <Save className="w-4 h-4" strokeWidth={2} />
          Save & Publish
        </button>

        <div className="relative">
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer"
          >
            <MoreVertical className="w-[18px] h-[18px] text-[#6B7280]" strokeWidth={1.5} />
          </button>
          {moreOpen && (
            <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
              {["Export as JSON", "Duplicate Template", "Archive"].map((action) => (
                <button
                  key={action}
                  className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}