"use client";

import { useState } from "react";
import { MoreVertical, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const clients = [
  { client: "Nordea Bank", slug: "nordea-bank", logo: "N", bg: "#1a5f2a", sector: "Banking", region: "EU (Nordics)", profile: "Listed", surveys: 3, lastActivity: "2h ago", status: "Active" },
  { client: "Allianz Group", slug: "allianz-group", logo: "A", bg: "#0e4b9e", sector: "Insurance", region: "EU (Germany)", profile: "Listed", surveys: 2, lastActivity: "5h ago", status: "Active" },
  { client: "L'Oréal", slug: "loreal", logo: "L", bg: "#1a1a2e", sector: "Consumer Goods", region: "EU (France)", profile: "Listed", surveys: 1, lastActivity: "Yesterday", status: "Needs Review" },
  { client: "Siemens AG", slug: "siemens-ag", logo: "S", bg: "#6b8f3e", sector: "Industrial", region: "EU (Germany)", profile: "Listed", surveys: 4, lastActivity: "2d ago", status: "Active" },
  { client: "AXA Insurance", slug: "axa-insurance", logo: "A", bg: "#2a4d7c", sector: "Insurance", region: "EU (France)", profile: "Listed", surveys: 2, lastActivity: "3d ago", status: "Active" },
  { client: "Unilever", slug: "unilever", logo: "U", bg: "#1b5e3a", sector: "Consumer Goods", region: "EU (UK/NL)", profile: "Listed", surveys: 1, lastActivity: "4d ago", status: "Draft" },
  { client: "Roche Holding", slug: "roche-holding", logo: "R", bg: "#8B1A1A", sector: "Pharma", region: "EU (Switzerland)", profile: "Family-Controlled", surveys: 2, lastActivity: "1w ago", status: "Active" },
  { client: "Swiss Re", slug: "swiss-re", logo: "S", bg: "#1e3a5f", sector: "Insurance", region: "EU (Switzerland)", profile: "Listed", surveys: 1, lastActivity: "1w ago", status: "Closing Soon" },
  { client: "Banco Santander", slug: "banco-santander", logo: "B", bg: "#b91c1c", sector: "Banking", region: "EU (Spain)", profile: "Listed", surveys: 3, lastActivity: "2w ago", status: "Active" },
  { client: "Saudi Aramco", slug: "saudi-aramco", logo: "SA", bg: "#065f46", sector: "Energy", region: "MENA", profile: "SOE", surveys: 2, lastActivity: "3w ago", status: "Active" },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-[#EEF1FF] text-[#1E50FF]",
    "Needs Review": "bg-[#FDF4E8] text-[#B07D2A]",
    Draft: "bg-white text-[#9CA3AF] border border-[#ECEEF2]",
    "Closing Soon": "bg-[#FEF2F2] text-[#DC2626]",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${styles[status] || styles.Draft}`}>
      {status}
    </span>
  );
}

export default function ClientsTable({ viewMode }: { viewMode: "list" | "grid" }) {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsOpen, setRowsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 5;

  if (viewMode === "grid") {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <a key={i} href={"/clients/" + c.slug} className="bg-white rounded-xl border border-[#ECEEF2] p-4 hover:shadow-md transition-shadow cursor-pointer relative block">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0" style={{ backgroundColor: c.bg }}>
                  {c.logo}
                </span>
                <div className="min-w-0">
                  <span className="text-[13px] font-medium text-[#070a4a] truncate block">
                    {c.client}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF]">{c.sector}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-3">
                <div>
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Region</p>
                  <p className="text-[12px] text-[#6B7280]">{c.region}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Profile</p>
                  <p className="text-[12px] text-[#6B7280]">{c.profile}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Surveys</p>
                  <p className="text-[12px] font-medium text-[#070a4a]">{c.surveys}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Last Activity</p>
                  <p className="text-[12px] text-[#6B7280]">{c.lastActivity}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#F4F5F7]">
                <StatusPill status={c.status} />
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenuOpen(menuOpen === i ? null : i); }} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
                  <MoreVertical className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
                </button>
              </div>

              {menuOpen === i && (
                <div className="absolute right-2 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1" onClick={(e) => e.preventDefault()}>
                  <a href={"/clients/" + c.slug} className="block w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                    View Profile
                  </a>
                  {["Edit Client", "View Surveys", "Archive"].map((action) => (
                    <button key={action} onClick={(e) => e.preventDefault()} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="bg-white rounded-xl border border-[#ECEEF2] px-5 py-3 flex items-center justify-between">
          <span className="text-[12px] text-[#6B7280]">Showing 1–10 of 47</span>
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
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[22%]">Client Name</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[12%]">Sector</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[14%]">Region</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[13%]">Profile</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[10%]">Surveys</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[12%]">Activity</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[12%]">Status</th>
            <th className="px-3 py-2.5 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider w-[5%]"></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c, i) => (
            <tr key={i} className="border-b border-[#F4F5F7] last:border-0 hover:bg-[#F7F8FA] transition-colors">
              <td className="px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: c.bg }}>
                    {c.logo}
                  </span>
                  <a href={"/clients/" + c.slug} className="text-[12px] font-medium text-[#070a4a] truncate hover:text-[#1E50FF] transition-colors cursor-pointer">
                    {c.client}
                  </a>
                </div>
              </td>
              <td className="px-3 py-2.5">
                <span className="text-[12px] text-[#6B7280] truncate block">{c.sector}</span>
              </td>
              <td className="px-3 py-2.5">
                <span className="text-[12px] text-[#6B7280] truncate block">{c.region}</span>
              </td>
              <td className="px-3 py-2.5">
                <span className="text-[12px] text-[#6B7280] truncate block">{c.profile}</span>
              </td>
              <td className="px-3 py-2.5">
                <span className="text-[12px] font-medium text-[#070a4a]">{c.surveys}</span>
              </td>
              <td className="px-3 py-2.5">
                <span className="text-[12px] text-[#6B7280]">{c.lastActivity}</span>
              </td>
              <td className="px-3 py-2.5">
                <StatusPill status={c.status} />
              </td>
              <td className="px-3 py-2.5 relative">
                <button onClick={() => setMenuOpen(menuOpen === i ? null : i)} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
                  <MoreVertical className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
                </button>
                {menuOpen === i && (
                  <div className="absolute right-2 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
                    <a href={"/clients/" + c.slug} className="block w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                      View Profile
                    </a>
                    {["Edit Client", "View Surveys", "Archive"].map((action) => (
                      <button key={action} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">
                        {action}
                      </button>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="px-5 py-3 border-t border-[#ECEEF2] flex items-center justify-between">
        <span className="text-[12px] text-[#6B7280]">Showing 1–10 of 47</span>

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
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-7 h-7 flex items-center justify-center rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${
                  p === page ? "bg-[#070a4a] text-white" : "text-[#6B7280] hover:bg-[#F7F8FA]"
                }`}
              >
                {p}
              </button>
            ))}
            <button onClick={() => setPage(Math.min(totalPages, page + 1))} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] text-[#6B7280] transition-colors cursor-pointer" disabled={page === totalPages}>
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}