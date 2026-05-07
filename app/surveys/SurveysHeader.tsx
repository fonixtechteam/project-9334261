"use client";

import { useState } from "react";
import { Search, Bell, Plus } from "lucide-react";

export default function SurveysHeader() {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="h-[64px] bg-white border-b border-[#ECEEF2] flex items-center justify-between px-8 sticky top-0 z-40">
      <div>
        <h1 className="text-[24px] font-light text-[#070a4a] leading-tight tracking-tight">
          Surveys
        </h1>
        <p className="text-[13px] text-[#6B7280] mt-0.5">
          All surveys across every client
        </p>
      </div>

      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
            <Search className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
          </span>
          <input
            type="text"
            placeholder="Search surveys, clients, types..."
            className="w-full pl-10 pr-4 py-2 bg-[#F7F8FA] rounded-lg text-[13px] text-[#070a4a] placeholder:text-[#9CA3AF] border border-transparent focus:border-[#1E50FF]/20 focus:bg-white outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer"
          >
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
                  { title: "Survey closing soon", desc: "Director Training Needs at Roche closes in 2 days", time: "20 min ago" },
                  { title: "New survey launched", desc: "Nordea Bank Board Self Evaluation 2026", time: "1 hour ago" },
                  { title: "Draft reminder", desc: "Unilever Board Effectiveness Review still in draft", time: "3 hours ago" },
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

        <button className="flex items-center gap-2 px-3.5 py-2 bg-[#1E50FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer whitespace-nowrap">
          <Plus className="w-4 h-4" strokeWidth={2} />
          New Survey
        </button>

      </div>
    </header>
  );
}