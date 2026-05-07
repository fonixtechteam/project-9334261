"use client";

import {
  Plus,
  CheckCircle2,
  Building2,
  FileBarChart,
  UserPlus,
  Bell,
  Building2Icon,
  FileText,
  BarChart3,
  Activity,
} from "lucide-react";

const activities = [
  {
    icon: FileText,
    bg: "#EEF1FF",
    color: "#1E50FF",
    text: "John Doe added a new template",
    sub: "Board Skills Matrix v3.2",
    time: "12 min ago",
  },
  {
    icon: CheckCircle2,
    bg: "#E8F5EE",
    color: "#22C55E",
    text: "Survey for Nordea Bank reached 80% completion",
    sub: "Board Self Evaluation",
    time: "45 min ago",
  },
  {
    icon: Building2,
    bg: "#EEF1FF",
    color: "#1E50FF",
    text: "New client onboarded: Siemens AG",
    sub: "Industrial Sector",
    time: "2 hours ago",
  },
  {
    icon: FileBarChart,
    bg: "#F0F2FA",
    color: "#070a4a",
    text: "Report generated for Allianz Group",
    sub: "Director Skills Matrix",
    time: "3 hours ago",
  },
  {
    icon: UserPlus,
    bg: "#F4F5F7",
    color: "#6B7280",
    text: "Emma Chen joined as Analyst",
    sub: "London Office",
    time: "5 hours ago",
  },
  {
    icon: Bell,
    bg: "#FEE2E2",
    color: "#DC2626",
    text: "L'Oréal survey flagged for review",
    sub: "Low response rate detected",
    time: "Yesterday",
  },
];

const quickActions = [
  { icon: Building2Icon, label: "Add New Client", bg: "#EEF1FF", iconColor: "#1E50FF" },
  { icon: FileText, label: "Create Template", bg: "#F0F2FA", iconColor: "#070a4a" },
  { icon: BarChart3, label: "Generate Report", bg: "#E8F0FE", iconColor: "#1E50FF" },
  { icon: Activity, label: "Run Benchmark Analysis", bg: "#F4F5F7", iconColor: "#070a4a" },
];

export default function RecentActivityFeed() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col flex-1">
        <div className="px-5 py-4 border-b border-[#ECEEF2]">
          <h2 className="text-[18px] font-normal text-[#1E50FF]">
            Recent Activity
          </h2>
        </div>

        <div className="px-5 py-4 flex-1">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-3 bottom-3 w-[1px] bg-[#ECEEF2]" />

            <div className="space-y-4">
              {activities.map((a, i) => (
                <div key={i} className="relative flex gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{ backgroundColor: a.bg }}
                  >
                    <a.icon
                      className="w-3.5 h-3.5"
                      strokeWidth={1.5}
                      style={{ color: a.color }}
                    />
                  </span>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <p className="text-[13px] font-medium text-[#070a4a] leading-snug">
                      {a.text}
                    </p>
                    {a.sub && (
                      <p className="text-[12px] text-[#6B7280] mt-0.5">{a.sub}</p>
                    )}
                    <p className="text-[11px] text-[#9CA3AF] mt-1">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="px-5 py-4 border-b border-[#ECEEF2]">
          <h2 className="text-[18px] font-normal text-[#1E50FF]">
            Quick Actions
          </h2>
        </div>

        <div className="p-5 grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-[#ECEEF2] hover:border-[#1E50FF]/30 hover:bg-[#F7F8FA] transition-all cursor-pointer group"
            >
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ backgroundColor: action.bg }}
              >
                <action.icon
                  className="w-5 h-5"
                  strokeWidth={1.5}
                  style={{ color: action.iconColor }}
                />
              </span>
              <span className="text-[12px] font-medium text-[#070a4a] text-center leading-tight whitespace-nowrap">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}