"use client";

import { Building2, FileText, BarChart3, Activity, ArrowRight } from "lucide-react";

const actions = [
  { icon: Building2, label: "Add New Client", bg: "#EEF1FF", iconColor: "#1E50FF" },
  { icon: FileText, label: "Create Template", bg: "#F0F2FA", iconColor: "#070a4a" },
  { icon: BarChart3, label: "Generate Report", bg: "#E8F0FE", iconColor: "#1E50FF" },
  { icon: Activity, label: "Run Benchmark Analysis", bg: "#F4F5F7", iconColor: "#070a4a" },
];

export default function QuickActionsStrip() {
  return (
    <section className="grid grid-cols-4 gap-6">
      {actions.map((action) => (
        <button
          key={action.label}
          className="group flex items-center gap-4 rounded-2xl bg-white border border-[#ECEEF2] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#1E50FF]/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
        >
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
            style={{ backgroundColor: action.bg }}
          >
            <action.icon
              className="w-5 h-5"
              strokeWidth={1.5}
              style={{ color: action.iconColor }}
            />
          </span>
          <span className="text-[14px] font-medium text-[#070a4a] whitespace-nowrap">
            {action.label}
          </span>
          <ArrowRight
            className="w-4 h-4 text-[#ECEEF2] group-hover:text-[#1E50FF] ml-auto transition-colors flex-shrink-0"
            strokeWidth={1.5}
          />
        </button>
      ))}
    </section>
  );
}