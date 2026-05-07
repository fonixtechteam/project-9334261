"use client";

import { Save, X } from "lucide-react";

export default function BottomBar({
  hasEdits,
  unsavedCount,
  onDiscard,
  onSaveDraft,
  onSave,
}: {
  hasEdits: boolean;
  unsavedCount: number;
  onDiscard: () => void;
  onSaveDraft: () => void;
  onSave: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-[240px] right-0 h-[56px] bg-white border-t border-[#ECEEF2] flex items-center justify-between px-8 z-40">
      <div className="flex items-center gap-2 text-[12px] text-[#9CA3AF]">
        <span>Last saved 3 days ago</span>
        {hasEdits && (
          <>
            <span>·</span>
            <span className="text-[#1E50FF] font-medium">
              {unsavedCount} unsaved change{unsavedCount !== 1 ? "s" : ""}
            </span>
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onDiscard}
          disabled={!hasEdits}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-medium cursor-pointer whitespace-nowrap transition-colors ${
            hasEdits
              ? "text-[#6B7280] hover:bg-[#F7F8FA]"
              : "text-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
          Discard Changes
        </button>

        <button
          onClick={onSaveDraft}
          disabled={!hasEdits}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg border text-[12px] font-medium cursor-pointer whitespace-nowrap transition-colors ${
            hasEdits
              ? "border-[#ECEEF2] text-[#070a4a] hover:bg-[#F7F8FA]"
              : "border-[#F4F5F7] text-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          Save as Draft
        </button>

        <button
          onClick={onSave}
          disabled={!hasEdits}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-medium text-white cursor-pointer whitespace-nowrap transition-colors ${
            hasEdits
              ? "bg-[#1E50FF] hover:bg-[#1843D8]"
              : "bg-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          <Save className="w-4 h-4" strokeWidth={2} />
          Save Changes
        </button>
      </div>
    </div>
  );
}