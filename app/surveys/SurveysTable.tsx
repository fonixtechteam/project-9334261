"use client";

import { useState } from "react";
import {
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  FileText,
  BarChart3,
  Sparkles,
  Award,
  Target,
  Leaf,
  ClipboardList,
  Shield,
  Users,
  Star,
} from "lucide-react";

const surveys = [
  { slug: "board-self-evaluation-2026", name: "Board Self Evaluation 2026", client: "Nordea Bank", clientSlug: "nordea-bank", clientLogo: "N", clientBg: "#1a5f2a", type: "Annual Eval", typeIcon: FileText, launch: "Mar 12, 2026", responses: "12/15", completion: 80, status: "In Progress" },
  { slug: "director-skills-matrix", name: "Director Skills Matrix", client: "Allianz Group", clientSlug: "allianz-group", clientLogo: "A", clientBg: "#0e4b9e", type: "Skills", typeIcon: BarChart3, launch: "Mar 8, 2026", responses: "18/20", completion: 90, status: "In Progress" },
  { slug: "c-suite-annual-evaluation", name: "C-Suite Annual Evaluation", client: "L'Oréal", clientSlug: "loreal", clientLogo: "L", clientBg: "#1a1a2e", type: "C-Suite", typeIcon: Star, launch: "Mar 1, 2026", responses: "9/12", completion: 75, status: "Needs Review" },
  { slug: "board-composition-audit", name: "Board Composition Audit", client: "Siemens AG", clientSlug: "siemens-ag", clientLogo: "S", clientBg: "#6b8f3e", type: "Bespoke", typeIcon: Sparkles, launch: "Feb 22, 2026", responses: "22/22", completion: 100, status: "Closed" },
  { slug: "esg-readiness-assessment", name: "ESG Readiness Assessment", client: "AXA Insurance", clientSlug: "axa-insurance", clientLogo: "A", clientBg: "#2a4d7c", type: "ESG", typeIcon: Leaf, launch: "Feb 18, 2026", responses: "15/18", completion: 83, status: "In Progress" },
  { slug: "board-effectiveness-review", name: "Board Effectiveness Review", client: "Unilever", clientSlug: "unilever", clientLogo: "U", clientBg: "#1b5e3a", type: "Annual Eval", typeIcon: ClipboardList, launch: "Feb 10, 2026", responses: "7/14", completion: 50, status: "Draft" },
  { slug: "director-training-needs", name: "Director Training Needs", client: "Roche Holding", clientSlug: "roche-holding", clientLogo: "R", clientBg: "#8B1A1A", type: "Training", typeIcon: Award, launch: "Feb 5, 2026", responses: "11/12", completion: 92, status: "Closing Soon" },
  { slug: "board-risk-oversight", name: "Board Risk Oversight", client: "Swiss Re", clientSlug: "swiss-re", clientLogo: "S", clientBg: "#1e3a5f", type: "Bespoke", typeIcon: Shield, launch: "Jan 28, 2026", responses: "8/10", completion: 80, status: "In Progress" },
  { slug: "committee-self-eval", name: "Committee Self Eval", client: "Banco Santander", clientSlug: "banco-santander", clientLogo: "B", clientBg: "#b91c1c", type: "Committee", typeIcon: Users, launch: "Jan 20, 2026", responses: "14/14", completion: 100, status: "Closed" },
  { slug: "bank-director-suitability", name: "Bank Director Suitability", client: "Saudi Aramco", clientSlug: "saudi-aramco", clientLogo: "SA", clientBg: "#065f46", type: "Suitability", typeIcon: Target, launch: "Jan 15, 2026", responses: "9/11", completion: 82, status: "In Progress" },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "In Progress": "bg-[#EEF1FF] text-[#1E50FF]",
    Closed: "bg-[#F4F5F7] text-[#6B7280]",
    Draft: "bg-white text-[#9CA3AF] border border-[#ECEEF2]",
    "Needs Review": "bg-[#FDF4E8] text-[#B07D2A]",
    "Closing Soon": "bg-[#FEF2F2] text-[#DC2626]",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${styles[status] || styles.Draft}`}>
      {status}
    </span>
  );
}

function CompletionBar({ pct }: { pct: number }) {
  const color = pct >= 90 ? "#22C55E" : pct >= 70 ? "#1E50FF" : pct >= 50 ? "#B07D2A" : "#DC2626";
  return (
    <div className="w-16 h-1.5 bg-[#F4F5F7] rounded-full overflow-hidden flex-shrink-0">
      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

export default function SurveysTable({ viewMode }: { viewMode: "list" | "grid" }) {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsOpen, setRowsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 9;

  if (viewMode === "grid") {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {surveys.map((s, i) => {
            const TypeIcon = s.typeIcon;
            return (
              <a key={i} href={"/surveys/" + s.slug} className="bg-white rounded-xl border border-[#ECEEF2] p-4 hover:shadow-md transition-shadow cursor-pointer relative block">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#F7F8FA] flex-shrink-0">
                    <TypeIcon className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <span className="text-[13px] font-medium text-[#070a4a] truncate block">
                      {s.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0" style={{ backgroundColor: s.clientBg }}>
                        {s.clientLogo}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">{s.client}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-3">
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Type</p>
                    <p className="text-[12px] text-[#6B7280]">{s.type}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Launch</p>
                    <p className="text-[12px] text-[#6B7280]">{s.launch}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Responses</p>
                    <p className="text-[12px] font-medium text-[#070a4a]">{s.responses}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Completion</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <CompletionBar pct={s.completion} />
                      <span className="text-[11px] font-medium text-[#070a4a]">{s.completion}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#F4F5F7]">
                  <StatusPill status={s.status} />
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenuOpen(menuOpen === i ? null : i); }} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
                    <MoreVertical className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
                  </button>
                </div>

                {menuOpen === i && (
                  <div className="absolute right-2 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1" onClick={(e) => e.preventDefault()}>
                    <a href={"/surveys/" + s.slug} className="block w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                      View Details
                    </a>
                    {["Edit Survey", "Export Results", "Duplicate"].map((action) => (
                      <button key={action} onClick={(e) => e.preventDefault()} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                        {action}
                      </button>
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="bg-white rounded-xl border border-[#ECEEF2] px-5 py-3 flex items-center justify-between">
          <span className="text-[12px] text-[#6B7280]">Showing 1–10 of 87</span>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button onClick={() => setRowsOpen(!rowsOpen)} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] text-[#6B7280] hover:border-[#1E50FF]/30 transition-all cursor-pointer">
                {rowsPerPage}
                <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
              </button>
              {rowsOpen && (
                <div className="absolute bottom-full left-0 mb-1 w-12 bg-white rounded-lg border border-[#ECEEF2] shadow-lg z-30 py-1">
                  {[10, 20, 50].map((n) => (
                    <button key={n} onClick={() => { setRowsPerPage(n); setRowsOpen(false); }} className="w-full text-center px-2 py-1.5 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setPage(Math.max(1, page - 1))} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] text-[#6B7280] transition-colors cursor-pointer" disabled={page === 1}>
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              {[1, 2, 3, 4, 5].map((p) => (
                <button key={p} onClick={() => setPage(p)} className={`w-7 h-7 flex items-center justify-center rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${p === page ? "bg-[#070a4a] text-white" : "text-[#6B7280] hover:bg-[#F7F8FA]"}`}>
                  {p}
                </button>
              ))}
              <span className="text-[12px] text-[#9CA3AF] px-1">...</span>
              <button onClick={() => setPage(totalPages)} className={`w-7 h-7 flex items-center justify-center rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${page === totalPages ? "bg-[#070a4a] text-white" : "text-[#6B7280] hover:bg-[#F7F8FA]"}`}>
                {totalPages}
              </button>
              <button onClick={() => setPage(Math.min(totalPages, page + 1))} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] text-[#6B7280] transition-colors cursor-pointer" disabled={page === totalPages}>
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
      {/* Table - no horizontal scroll */}
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-[#ECEEF2] bg-[#F7F8FA]">
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[22%]">Survey Name</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[14%]">Client</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[12%]">Service Type</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[12%]">Launch Date</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[10%]">Responses</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[13%]">Completion</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[12%]">Status</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[5%]"></th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((s, i) => {
            const TypeIcon = s.typeIcon;
            return (
              <tr key={i} className="border-b border-[#F4F5F7] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-md bg-[#F7F8FA] flex-shrink-0">
                      <TypeIcon className="w-3.5 h-3.5 text-[#6B7280]" strokeWidth={1.5} />
                    </span>
                    <a href={"/surveys/" + s.slug} className="text-[12px] font-medium text-[#070a4a] truncate hover:text-[#1E50FF] transition-colors cursor-pointer">
                      {s.name}
                    </a>
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0" style={{ backgroundColor: s.clientBg }}>
                      {s.clientLogo}
                    </span>
                    <a href={`/clients/${s.clientSlug}`} className="text-[12px] text-[#070a4a] truncate hover:text-[#1E50FF] transition-colors cursor-pointer">
                      {s.client}
                    </a>
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <span className="text-[12px] text-[#6B7280] truncate block">{s.type}</span>
                </td>
                <td className="px-3 py-2.5">
                  <span className="text-[12px] text-[#6B7280]">{s.launch}</span>
                </td>
                <td className="px-3 py-2.5">
                  <span className="text-[12px] font-medium text-[#070a4a]">{s.responses}</span>
                </td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <CompletionBar pct={s.completion} />
                    <span className="text-[11px] font-medium text-[#070a4a] w-8">{s.completion}%</span>
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <StatusPill status={s.status} />
                </td>
                <td className="px-3 py-2.5 relative">
                  <button onClick={() => setMenuOpen(menuOpen === i ? null : i)} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
                    <MoreVertical className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
                  </button>
                  {menuOpen === i && (
                    <div className="absolute right-2 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
                      <a href={"/surveys/" + s.slug} className="block w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                        View Details
                      </a>
                      {["Edit Survey", "Export Results", "Duplicate"].map((action) => (
                        <button key={action} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="px-5 py-3 border-t border-[#ECEEF2] flex items-center justify-between">
        <span className="text-[12px] text-[#6B7280]">Showing 1–10 of 87</span>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button onClick={() => setRowsOpen(!rowsOpen)} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] text-[#6B7280] hover:border-[#1E50FF]/30 transition-all cursor-pointer">
              {rowsPerPage}
              <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
            </button>
            {rowsOpen && (
              <div className="absolute bottom-full left-0 mb-1 w-12 bg-white rounded-lg border border-[#ECEEF2] shadow-lg z-30 py-1">
                {[10, 20, 50].map((n) => (
                  <button key={n} onClick={() => { setRowsPerPage(n); setRowsOpen(false); }} className="w-full text-center px-2 py-1.5 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                    {n}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button onClick={() => setPage(Math.max(1, page - 1))} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] text-[#6B7280] transition-colors cursor-pointer" disabled={page === 1}>
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button key={p} onClick={() => setPage(p)} className={`w-7 h-7 flex items-center justify-center rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${p === page ? "bg-[#070a4a] text-white" : "text-[#6B7280] hover:bg-[#F7F8FA]"}`}>
                {p}
              </button>
            ))}
            <span className="text-[12px] text-[#9CA3AF] px-1">...</span>
            <button onClick={() => setPage(totalPages)} className={`w-7 h-7 flex items-center justify-center rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${page === totalPages ? "bg-[#070a4a] text-white" : "text-[#6B7280] hover:bg-[#F7F8FA]"}`}>
              {totalPages}
            </button>
            <button onClick={() => setPage(Math.min(totalPages, page + 1))} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] text-[#6B7280] transition-colors cursor-pointer" disabled={page === totalPages}>
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}