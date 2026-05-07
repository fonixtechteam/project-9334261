"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bell, Plus, Pencil } from "lucide-react";

export default function ClientHeader() {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="h-[64px] bg-white border-b border-[#ECEEF2] flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Link href="/clients" scroll={false} className="flex items-center gap-1.5 text-[13px] text-[#6B7280] hover:text-[#070a4a] transition-colors cursor-pointer">
          <span className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#F7F8FA] transition-colors">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          </span>
          Clients
        </Link>
        <span className="text-[#ECEEF2]">/</span>
        <span className="text-[13px] font-medium text-[#070a4a]">Nordea Bank</span>
      </div>

      <div className="flex items-center gap-2">
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
                  { title: "Survey milestone reached", desc: "Board Self Evaluation at 80%", time: "10 min ago" },
                  { title: "New report available", desc: "Director Skills Matrix Report", time: "1 hour ago" },
                  { title: "Respondent reminder sent", desc: "3 directors yet to respond", time: "3 hours ago" },
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

        <Link href="/clients/nordea-bank/edit" scroll={false} className="flex items-center gap-2 px-3.5 py-2 border border-[#ECEEF2] text-[#070a4a] rounded-lg text-[13px] font-medium hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
          <Pencil className="w-3.5 h-3.5" strokeWidth={1.5} />
          Edit Client
        </Link>

        <button className="flex items-center gap-2 px-3.5 py-2 bg-[#1E50FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer whitespace-nowrap">
          <Plus className="w-4 h-4" strokeWidth={2} />
          New Survey
        </button>

      </div>
    </header>
  );
}