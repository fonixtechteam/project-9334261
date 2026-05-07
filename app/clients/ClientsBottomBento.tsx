"use client";

import { AlertTriangle, ArrowRight, Clock, FileX, AlertCircle } from "lucide-react";

const recentClients = [
  { name: "Roche Holding", logo: "R", bg: "#8B1A1A", sector: "Pharma", days: 2 },
  { name: "Swiss Re", logo: "S", bg: "#1e3a5f", sector: "Insurance", days: 5 },
  { name: "Banco Santander", logo: "B", bg: "#b91c1c", sector: "Banking", days: 8 },
  { name: "Saudi Aramco", logo: "SA", bg: "#065f46", sector: "Energy", days: 12 },
  { name: "AXA Insurance", logo: "A", bg: "#2a4d7c", sector: "Insurance", days: 18 },
];

const alerts = [
  { icon: AlertTriangle, text: "L'Oréal", sub: "Low response rate on C-Suite evaluation", color: "#B07D2A", bg: "#FDF4E8" },
  { icon: Clock, text: "Unilever", sub: "Survey unlaunched for 14 days", color: "#070a4a", bg: "#F0F2FA" },
  { icon: FileX, text: "Saudi Aramco", sub: "Governance report overdue", color: "#DC2626", bg: "#FEF2F2" },
];

export default function ClientsBottomBento() {
  return (
    <section className="grid grid-cols-12 gap-5">
      {/* Recently Onboarded */}
      <div className="col-span-8 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
          <h2 className="text-[16px] font-normal text-[#1E50FF]">Recently Onboarded Clients</h2>
          <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
            View all
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="p-5 flex gap-4 overflow-x-auto">
          {recentClients.map((c, i) => (
            <div key={i} className="flex-shrink-0 w-[160px] p-4 rounded-xl border border-[#ECEEF2] hover:border-[#1E50FF]/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0" style={{ backgroundColor: c.bg }}>
                  {c.logo}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-[#070a4a] truncate">{c.name}</p>
                  <p className="text-[11px] text-[#6B7280]">{c.sector}</p>
                </div>
              </div>
              <p className="text-[11px] text-[#9CA3AF] mt-3">
                Onboarded {c.days} {c.days === 1 ? "day" : "days"} ago
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Need Attention */}
      <div className="col-span-4 bg-[#FDF8F0] rounded-2xl border border-[#F0E0C0] flex flex-col">
        <div className="px-5 py-4 border-b border-[#F0E0C0] flex items-center gap-2.5">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FDF4E8]">
            <AlertCircle className="w-4 h-4 text-[#B07D2A]" strokeWidth={1.5} />
          </span>
          <h2 className="text-[16px] font-normal text-[#070a4a]">Need Attention</h2>
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1">
          {alerts.map((a, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#ECEEF2]">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: a.bg }}>
                <a.icon className="w-4 h-4" strokeWidth={1.5} style={{ color: a.color }} />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#070a4a]">{a.text}</p>
                <p className="text-[12px] text-[#6B7280] mt-0.5">{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}