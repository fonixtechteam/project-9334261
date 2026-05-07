"use client";

import { useState } from "react";
import {
  Calendar,
  Building2,
  FileSpreadsheet,
  BarChart3,
  ChevronRight,
  Filter,
  Download,
} from "lucide-react";

const timelineData = [
  {
    year: "2026",
    months: [
      {
        month: "March",
        entries: [
          {
            date: "Mar 12",
            client: "Nordea Bank",
            logo: "N",
            logoBg: "#1a5f2a",
            surveys: 1,
            status: "Active",
            responses: "12/15",
            completion: 80,
            type: "Board Self Evaluation 2026",
          },
          {
            date: "Mar 8",
            client: "Allianz Group",
            logo: "A",
            logoBg: "#0e4b9e",
            surveys: 1,
            status: "Active",
            responses: "18/20",
            completion: 90,
            type: "Director Skills Matrix",
          },
          {
            date: "Mar 3",
            client: "BNP Paribas",
            logo: "B",
            logoBg: "#1e3a5f",
            surveys: 2,
            status: "Active",
            responses: "22/25",
            completion: 88,
            type: "Board Self Evaluation 2026",
          },
        ],
      },
      {
        month: "February",
        entries: [
          {
            date: "Feb 28",
            client: "Allianz Group",
            logo: "A",
            logoBg: "#0e4b9e",
            surveys: 1,
            status: "Closed",
            responses: "20/20",
            completion: 100,
            type: "Board Self Evaluation 2025",
          },
          {
            date: "Feb 22",
            client: "Siemens AG",
            logo: "S",
            logoBg: "#6b8f3e",
            surveys: 1,
            status: "Closed",
            responses: "14/14",
            completion: 100,
            type: "Board Self Evaluation 2025",
          },
          {
            date: "Feb 15",
            client: "Siemens AG",
            logo: "S",
            logoBg: "#6b8f3e",
            surveys: 1,
            status: "Closed",
            responses: "16/16",
            completion: 100,
            type: "Board Self Evaluation 2026",
          },
          {
            date: "Feb 10",
            client: "AXA Insurance",
            logo: "A",
            logoBg: "#2a4d7c",
            surveys: 1,
            status: "Active",
            responses: "8/12",
            completion: 67,
            type: "Board Self Evaluation 2026",
          },
          {
            date: "Feb 5",
            client: "Roche Holding",
            logo: "R",
            logoBg: "#8B1A1A",
            surveys: 1,
            status: "Closed",
            responses: "11/11",
            completion: 100,
            type: "Board Self Evaluation 2025",
          },
        ],
      },
      {
        month: "January",
        entries: [
          {
            date: "Jan 28",
            client: "Swiss Re",
            logo: "S",
            logoBg: "#1e3a5f",
            surveys: 1,
            status: "Closed",
            responses: "10/10",
            completion: 100,
            type: "Board Self Evaluation 2025",
          },
          {
            date: "Jan 20",
            client: "Banco Santander",
            logo: "B",
            logoBg: "#b91c1c",
            surveys: 1,
            status: "Closed",
            responses: "14/14",
            completion: 100,
            type: "Board Self Evaluation 2025",
          },
          {
            date: "Jan 15",
            client: "Saudi Aramco",
            logo: "SA",
            logoBg: "#065f46",
            surveys: 1,
            status: "Closed",
            responses: "9/9",
            completion: 100,
            type: "Board Self Evaluation 2025",
          },
        ],
      },
    ],
  },
  {
    year: "2025",
    months: [
      {
        month: "December",
        entries: [
          {
            date: "Dec 10",
            client: "Roche Holding",
            logo: "R",
            logoBg: "#8B1A1A",
            surveys: 1,
            status: "Closed",
            responses: "12/12",
            completion: 100,
            type: "Board Self Evaluation 2024",
          },
          {
            date: "Dec 3",
            client: "L'Oréal",
            logo: "L",
            logoBg: "#1a1a2e",
            surveys: 1,
            status: "Closed",
            responses: "10/10",
            completion: 100,
            type: "Board Self Evaluation 2024",
          },
        ],
      },
      {
        month: "November",
        entries: [
          {
            date: "Nov 18",
            client: "Unilever",
            logo: "U",
            logoBg: "#1b5e3a",
            surveys: 1,
            status: "Closed",
            responses: "13/13",
            completion: 100,
            type: "Board Self Evaluation 2024",
          },
          {
            date: "Nov 5",
            client: "Swiss Re",
            logo: "S",
            logoBg: "#1e3a5f",
            surveys: 1,
            status: "Closed",
            responses: "11/11",
            completion: 100,
            type: "Board Self Evaluation 2024",
          },
        ],
      },
      {
        month: "October",
        entries: [
          {
            date: "Oct 22",
            client: "Nordea Bank",
            logo: "N",
            logoBg: "#1a5f2a",
            surveys: 1,
            status: "Closed",
            responses: "15/15",
            completion: 100,
            type: "Board Self Evaluation 2024",
          },
          {
            date: "Oct 8",
            client: "Saudi Aramco",
            logo: "SA",
            logoBg: "#065f46",
            surveys: 1,
            status: "Closed",
            responses: "8/8",
            completion: 100,
            type: "Board Self Evaluation 2024",
          },
        ],
      },
    ],
  },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-[#EEF1FF] text-[#1E50FF]",
    Closed: "bg-[#F4F5F7] text-[#6B7280]",
    Draft: "bg-white text-[#9CA3AF] border border-[#ECEEF2]",
    "Needs Review": "bg-[#FDF4E8] text-[#B07D2A]",
    "Closing Soon": "bg-[#FEF2F2] text-[#DC2626]",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${styles[status] || styles.Draft}`}
    >
      {status}
    </span>
  );
}

function CompletionBar({ pct }: { pct: number }) {
  const color =
    pct >= 90 ? "#22C55E" : pct >= 70 ? "#1E50FF" : pct >= 50 ? "#B07D2A" : "#DC2626";
  return (
    <div className="w-16 h-1.5 bg-[#F4F5F7] rounded-full overflow-hidden flex-shrink-0">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

function TimelineEntry({ entry }: { entry: any }) {
  return (
    <div className="flex items-start gap-4 pl-2 py-2">
      <div className="flex flex-col items-center gap-1 flex-shrink-0 w-10">
        <span className="text-[11px] font-medium text-[#9CA3AF] whitespace-nowrap">
          {entry.date}
        </span>
        <div className="w-2 h-2 rounded-full bg-[#1E50FF]" />
      </div>

      <div className="flex-1 bg-white rounded-xl border border-[#ECEEF2] p-4 hover:border-[#1E50FF]/20 transition-colors cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
              style={{ backgroundColor: entry.logoBg }}
            >
              {entry.logo}
            </span>
            <div>
              <span className="text-[13px] font-medium text-[#070a4a]">
                {entry.client}
              </span>
              <span className="text-[12px] text-[#9CA3AF] ml-2">
                {entry.type}
              </span>
            </div>
          </div>
          <StatusPill status={entry.status} />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
            <span className="text-[12px] text-[#6B7280]">
              {entry.surveys} survey{entry.surveys > 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
            <span className="text-[12px] text-[#6B7280]">{entry.responses}</span>
          </div>
          <div className="flex items-center gap-2">
            <CompletionBar pct={entry.completion} />
            <span className="text-[11px] font-medium text-[#070a4a]">
              {entry.completion}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function YearSection({ year, months }: { year: string; months: any[] }) {
  const [expanded, setExpanded] = useState(year === "2026");

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 mb-3 cursor-pointer group"
      >
        <span className="text-[16px] font-semibold text-[#070a4a]">{year}</span>
        <span className="text-[12px] text-[#9CA3AF]">
          {months.reduce((acc, m) => acc + m.entries.length, 0)} deployments
        </span>
        <ChevronRight
          className={`w-4 h-4 text-[#9CA3AF] transition-transform ${expanded ? "rotate-90" : ""}`}
          strokeWidth={1.5}
        />
      </button>

      {expanded && (
        <div className="space-y-4">
          {months.map((month) => (
            <div key={month.month}>
              <div className="flex items-center gap-2 mb-2 ml-12">
                <Calendar
                  className="w-3.5 h-3.5 text-[#9CA3AF]"
                  strokeWidth={1.5}
                />
                <span className="text-[13px] font-medium text-[#6B7280]">
                  {month.month}
                </span>
                <span className="text-[11px] text-[#9CA3AF]">
                  {month.entries.length} deployments
                </span>
              </div>
              <div className="relative ml-5">
                <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#ECEEF2]" />
                <div className="space-y-1">
                  {month.entries.map((entry: any, i: number) => (
                    <TimelineEntry key={i} entry={entry} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function UsageHistoryTab() {
  const totalDeployments = timelineData.reduce(
    (acc, y) => acc + y.months.reduce((macc, m) => macc + m.entries.length, 0),
    0
  );

  return (
    <div className="space-y-5">
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[13px] font-medium text-[#070a4a]">
            Usage History
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {totalDeployments} total deployments
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
            <Filter className="w-3.5 h-3.5" strokeWidth={1.5} />
            Filter
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
            <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
            Export
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-5">
        {[
          {
            label: "Total Deployments",
            value: "47",
            change: "+12 this year",
            positive: true,
          },
          {
            label: "Active Surveys",
            value: "8",
            change: "3 closing soon",
            positive: false,
          },
          {
            label: "Avg Completion Rate",
            value: "91%",
            change: "+3% vs last year",
            positive: true,
          },
          {
            label: "Unique Clients",
            value: "31",
            change: "+4 new this year",
            positive: true,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-5"
          >
            <p className="text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-1">
              {stat.label}
            </p>
            <p className="text-[28px] font-extralight text-[#070a4a] leading-none">
              {stat.value}
            </p>
            <p
              className={`text-[11px] mt-1.5 ${
                stat.positive ? "text-[#22C55E]" : "text-[#B07D2A]"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
        <div className="space-y-6">
          {timelineData.map((year) => (
            <YearSection
              key={year.year}
              year={year.year}
              months={year.months}
            />
          ))}
        </div>
      </div>
    </div>
  );
}