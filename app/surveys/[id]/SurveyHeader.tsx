"use client";

import { useState } from "react";
import { ChevronLeft, Bell, Download, FileText, MoreVertical } from "lucide-react";

export default function SurveyHeader({ surveyId }: { surveyId: string }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="h-[64px] bg-white border-b border-[#ECEEF2] flex items-center justify-between px-8 sticky top-0 z-40">
      {/* Left: Breadcrumb + title */}
      <div className="flex items-center gap-4 min-w-0">
        <a href="/surveys" className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#F7F8FA] transition-colors cursor-pointer flex-shrink-0">
          <ChevronLeft className="w-5 h-5 text-[#6B7280]" strokeWidth={1.5} />
        </a>
        <div className="min-w-0">
          <h1 className="text-[22px] font-light text-[#070a4a] leading-tight tracking-tight truncate">
            Board Self Evaluation 2026
          </h1>
          <p className="text-[12px] text-[#6B7280] mt-0.5">
            Nordea Bank &middot; Annual Evaluation &middot; Launched Mar 12, 2026
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)} className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
            <Bell className="w-[18px] h-[18px] text-[#6B7280]" strokeWidth={1.5} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl border border-[#ECEEF2] shadow-xl z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-[#ECEEF2] flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#070a4a]">Notifications</span>
                <span className="text-[11px] text-[#6B7280] cursor-pointer hover:text-[#070a4a]">Mark all read</span>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {[
                  { title: "New response received", desc: "Magnus Olsen completed Board Self Evaluation", time: "5 min ago" },
                  { title: "Survey approaching deadline", desc: "5 days remaining for 3 recipients", time: "1 hour ago" },
                ].map((notif, i) => (
                  <div key={i} className={`px-4 py-3 hover:bg-[#F7F8FA] transition-colors cursor-pointer border-b border-[#F4F5F7] last:border-0 ${i === 0 ? "bg-[#1E50FF]/[0.02]" : ""}`}>
                    <p className="text-[13px] font-medium text-[#070a4a]">{notif.title}</p>
                    <p className="text-[12px] text-[#6B7280] mt-0.5">{notif.desc}</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#ECEEF2] text-[13px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
          <Download className="w-4 h-4" strokeWidth={1.5} />
          Export
        </button>

        <button className="flex items-center gap-2 px-3.5 py-2 bg-[#1E50FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer whitespace-nowrap">
          <FileText className="w-4 h-4" strokeWidth={2} />
          Generate Report
        </button>

        <div className="relative">
          <button onClick={() => setMoreOpen(!moreOpen)} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
            <MoreVertical className="w-[18px] h-[18px] text-[#6B7280]" strokeWidth={1.5} />
          </button>
          {moreOpen && (
            <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
              {["Close Survey", "Duplicate", "Archive"].map((action) => (
                <button key={action} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
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