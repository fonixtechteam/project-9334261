"use client";

import { HelpCircle, FileText, MessageSquare } from "lucide-react";

export default function NeedHelp() {
  return (
    <div className="bg-[#F4F5F7] rounded-2xl border border-[#ECEEF2] overflow-hidden">
      <div className="px-5 py-4 flex items-center gap-2">
        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white">
          <HelpCircle className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
        </span>
        <h2 className="text-[16px] font-normal text-[#070a4a]">Need Help?</h2>
      </div>

      <div className="px-5 pb-5 space-y-2">
        <a
          href="#"
          className="flex items-center gap-2 text-[13px] text-[#6B7280] hover:text-[#1E50FF] transition-colors cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
          Edit guide
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[13px] text-[#6B7280] hover:text-[#1E50FF] transition-colors cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.5} />
          Contact support
        </a>
      </div>
    </div>
  );
}