"use client";

import { AlertTriangle, ExternalLink, X } from "lucide-react";

export default function EditWarningStrip({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="w-full bg-[#FDF4E8] border border-[#F5D9A3] rounded-2xl px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F5D9A3]/30">
          <AlertTriangle className="w-4 h-4 text-[#B07D2A]" strokeWidth={2} />
        </span>
        <p className="text-[13px] text-[#6B7280]">
          <span className="font-medium text-[#070a4a]">You are editing a live survey.</span>{" "}
          Changes apply only to this survey, not the underlying template{" "}
          <span className="text-[#1E50FF] font-medium">(Board of Director Self Evaluation v3.2)</span>.
        </p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <a href="#" className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap">
          Edit Template Instead
          <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
        </a>
        <button
          onClick={onDismiss}
          className="flex items-center gap-1 text-[12px] font-medium text-[#6B7280] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}