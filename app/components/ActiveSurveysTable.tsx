"use client";

import { useState } from "react";
import { ArrowRight, MoreVertical } from "lucide-react";

const surveys = [
  {
    client: "Nordea Bank",
    logo: "N",
    bg: "#1a5f2a",
    type: "Board Self Evaluation",
    launchDate: "Mar 12, 2026",
    responses: "12/15",
    status: "In Progress",
  },
  {
    client: "Allianz Group",
    logo: "A",
    bg: "#0e4b9e",
    type: "Director Skills Matrix",
    launchDate: "Mar 8, 2026",
    responses: "18/20",
    status: "In Progress",
  },
  {
    client: "L'Oréal",
    logo: "L",
    bg: "#1a1a2e",
    type: "C-Suite Annual Evaluation",
    launchDate: "Mar 1, 2026",
    responses: "9/12",
    status: "Needs Review",
  },
  {
    client: "Siemens AG",
    logo: "S",
    bg: "#6b8f3e",
    type: "Board Composition Audit",
    launchDate: "Feb 22, 2026",
    responses: "22/22",
    status: "Closed",
  },
  {
    client: "AXA Insurance",
    logo: "A",
    bg: "#2a4d7c",
    type: "ESG Readiness Assessment",
    launchDate: "Feb 18, 2026",
    responses: "15/18",
    status: "In Progress",
  },
  {
    client: "Unilever",
    logo: "U",
    bg: "#1b5e3a",
    type: "Board Effectiveness Review",
    launchDate: "Feb 10, 2026",
    responses: "7/14",
    status: "Draft",
  },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "In Progress": "bg-[#EEF1FF] text-[#1E50FF]",
    Closed: "bg-[#F4F5F7] text-[#6B7280]",
    Draft: "bg-white text-[#9CA3AF] border border-[#ECEEF2]",
    "Needs Review": "bg-[#F0F2FA] text-[#070a4a]",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${
        styles[status] || styles.Draft
      }`}
    >
      {status}
    </span>
  );
}

export default function ActiveSurveysTable() {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col h-full">
      <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
        <h2 className="text-[18px] font-normal text-[#1E50FF]">
          Active Surveys
        </h2>
        <button className="flex items-center gap-1 text-[13px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
          View all
          <span className="w-4 h-4 flex items-center justify-center">
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </span>
        </button>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#ECEEF2]">
              {["Client Name", "Survey Type", "Launch Date", "Responses", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider whitespace-nowrap"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {surveys.map((s, i) => (
              <tr
                key={i}
                className="border-b border-[#F4F5F7] last:border-0 hover:bg-[#F7F8FA] transition-colors"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                      style={{ backgroundColor: s.bg }}
                    >
                      {s.logo}
                    </span>
                    <span className="text-[13px] font-medium text-[#070a4a] whitespace-nowrap">
                      {s.client}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[13px] text-[#6B7280] whitespace-nowrap">
                    {s.type}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[13px] text-[#6B7280] whitespace-nowrap">
                    {s.launchDate}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[13px] font-medium text-[#070a4a] whitespace-nowrap">
                    {s.responses}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <StatusPill status={s.status} />
                </td>
                <td className="px-5 py-3.5 relative">
                  <button
                    onClick={() => setMenuOpen(menuOpen === i ? null : i)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer"
                  >
                    <MoreVertical className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
                  </button>

                  {menuOpen === i && (
                    <div className="absolute right-2 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
                      {["View Details", "Edit Survey", "Duplicate", "Archive"].map(
                        (action) => (
                          <button
                            key={action}
                            className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                          >
                            {action}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}