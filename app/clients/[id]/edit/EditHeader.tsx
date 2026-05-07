"use client";

import Link from "next/link";
import { ChevronLeft, Eye, X, Save } from "lucide-react";

export default function EditHeader({ clientId, hasEdits }: { clientId: string; hasEdits: boolean }) {
  return (
    <header className="h-[72px] bg-white border-b border-[#ECEEF2] flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-3 min-w-0">
        <Link
          href={`/clients/${clientId}`}
          scroll={false}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#F7F8FA] transition-colors cursor-pointer flex-shrink-0"
        >
          <ChevronLeft className="w-5 h-5 text-[#6B7280]" strokeWidth={1.5} />
        </Link>
        <div className="min-w-0">
          <p className="text-[11px] text-[#9CA3AF] truncate">
            Clients / Nordea Bank / Edit
          </p>
          <div className="flex items-baseline gap-2">
            <h1 className="text-[20px] font-light text-[#070a4a] leading-tight tracking-tight truncate">
              Edit Client
            </h1>
            <span className="text-[12px] text-[#9CA3AF]">
              Nordea Bank · Last edited by Sarah Mitchell, 3 days ago
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href={`/clients/${clientId}`}
          scroll={false}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap"
        >
          <Eye className="w-4 h-4" strokeWidth={1.5} />
          View Client
        </Link>

        <Link
          href={`/clients/${clientId}`}
          scroll={false}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
          Cancel
        </Link>

        <button
          disabled={!hasEdits}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-medium text-white transition-colors whitespace-nowrap cursor-pointer ${
            hasEdits ? "bg-[#1E50FF] hover:bg-[#1843D8]" : "bg-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          <Save className="w-4 h-4" strokeWidth={2} />
          Save Changes
        </button>
      </div>
    </header>
  );
}