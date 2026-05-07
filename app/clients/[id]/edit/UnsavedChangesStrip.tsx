"use client";

import { X, Save } from "lucide-react";

export default function UnsavedChangesStrip({
  count,
  onDiscard,
  onSave,
}: {
  count: number;
  onDiscard: () => void;
  onSave: () => void;
}) {
  return (
    <div className="bg-[#EEF1FF] border-b border-[#DEE4F7] px-8 py-2.5 flex items-center justify-between sticky top-[72px] z-30">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#1E50FF]" />
        <span className="text-[13px] font-medium text-[#1E50FF]">
          You have {count} unsaved change{count !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex items-center gap-3" />

    </div>
  );
}