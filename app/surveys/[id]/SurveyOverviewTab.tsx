"use client";

import { useState } from "react";
import {
  Send,
  Clock,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Download,
  Eye,
  Lock,
  Mail,
  CheckCircle2,
  AlertCircle,
  FileText,
  MoreVertical,
  Circle,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

/* ─── sparkline for Open Questions Answered ─── */
const sparkData = [
  { v: 82 }, { v: 84 }, { v: 85 }, { v: 87 }, { v: 88 },
  { v: 90 }, { v: 92 }, { v: 93 }, { v: 94 }, { v: 94 },
];

/* ─── Row 1 KPI helpers ─── */
function CircularProgress({ pct }: { pct: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="relative w-[88px] h-[88px] flex-shrink-0">
      <svg viewBox="0 0 88 88" className="w-full h-full -rotate-90">
        <circle cx="44" cy="44" r={r} fill="none" stroke="#ffffff10" strokeWidth="6" />
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke="#1E50FF"
          strokeWidth="6"
          strokeDasharray={`${dash} ${c - dash}`}
          strokeDashoffset={0}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[20px] font-light text-white">{pct}%</span>
      </div>
    </div>
  );
}

/* ─── Row 2 Table data ─── */
const respondents = [
  { name: "Magnus Olsen", role: "Chair", lang: "EN", started: "Mar 13", last: "2h ago", pct: 100, status: "Completed", initials: "MO", bg: "#0e4b9e" },
  { name: "Astrid Holm", role: "SID", lang: "SE", started: "Mar 13", last: "5h ago", pct: 100, status: "Completed", initials: "AH", bg: "#1a1a2e" },
  { name: "Henrik Berg", role: "NED", lang: "EN", started: "Mar 14", last: "1d ago", pct: 85, status: "In Progress", initials: "HB", bg: "#6b8f3e" },
  { name: "Lena Sorensen", role: "NED", lang: "SE", started: "Mar 14", last: "2d ago", pct: 72, status: "In Progress", initials: "LS", bg: "#2a4d7c" },
  { name: "Erik Nilsson", role: "Committee Chair", lang: "EN", started: "Mar 15", last: "3d ago", pct: 100, status: "Completed", initials: "EN", bg: "#b07d2a" },
  { name: "Ingrid Bergman", role: "NED", lang: "SE", started: "Mar 15", last: "—", pct: 0, status: "Not Started", initials: "IB", bg: "#8B1A1A" },
  { name: "Olaf Hansen", role: "Observer", lang: "EN", started: "Mar 16", last: "6h ago", pct: 45, status: "In Progress", initials: "OH", bg: "#065f46" },
  { name: "Maja Andersson", role: "NED", lang: "SE", started: "—", last: "—", pct: 0, status: "Not Started", initials: "MA", bg: "#1a5f2a" },
];

function RecipientStatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Completed: "bg-[#E8F5EE] text-[#22C55E]",
    "In Progress": "bg-[#EEF1FF] text-[#1E50FF]",
    "Not Started": "bg-[#F4F5F7] text-[#9CA3AF]",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${styles[status] || styles["Not Started"]}`}>
      {status}
    </span>
  );
}

/* ─── Row 2 Timeline data ─── */
const timeline = [
  { avatar: "SM", bg: "#1E50FF", text: "Survey launched by Sarah Mitchell", time: "Mar 12, 2026" },
  { avatar: "MO", bg: "#0e4b9e", text: "Magnus Olsen completed survey", time: "Mar 13, 2026" },
  { avatar: "SM", bg: "#1E50FF", text: "Reminder sent to 3 recipients", time: "Mar 15, 2026" },
  { avatar: "AH", bg: "#1a1a2e", text: "Astrid Holm completed survey", time: "Mar 16, 2026" },
  { avatar: "SM", bg: "#1E50FF", text: "Question 12 edited", time: "Mar 17, 2026" },
  { avatar: "EN", bg: "#b07d2a", text: "Survey opened by 2 new respondents", time: "Mar 18, 2026" },
];

/* ─── Row 3 Section Completion data ─── */
const sections = [
  { label: "Strategy", pct: 92, color: "#1E50FF" },
  { label: "Risk", pct: 88, color: "#22C55E" },
  { label: "Composition", pct: 75, color: "#070a4a" },
  { label: "ESG", pct: 70, color: "#B07D2A" },
  { label: "Committees", pct: 65, color: "#DC2626" },
];

/* ─── Row 4 Quick Actions ─── */
const quickActions = [
  { label: "Send Reminder to All", icon: Send, color: "#1E50FF" },
  { label: "Export Raw Data (CSV)", icon: Download, color: "#6B7280" },
  { label: "Preview as Respondent", icon: Eye, color: "#6B7280" },
  { label: "Close Survey Early", icon: Lock, color: "#DC2626" },
];

export default function SurveyOverviewTab({ surveyId }: { surveyId: string }) {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  return (
    <div className="space-y-5">
      {/* ── ROW 1: KPI Bento ── */}
      <section className="grid grid-cols-12 gap-5">
        {/* Hero — Completion Rate */}
        <div className="col-span-5 h-[168px] rounded-2xl bg-[#070a4a] relative overflow-hidden flex flex-col justify-between p-5">
          <div className="absolute top-4 right-6 text-[160px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
            &amp;
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div>
              <span className="text-[12px] font-medium text-white/50 uppercase tracking-wider">
                Completion Rate
              </span>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-[44px] font-light text-white leading-none tracking-tight">80%</span>
                <span className="text-[13px] text-white/60">12 of 15 respondents</span>
              </div>
            </div>
            <CircularProgress pct={80} />
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" strokeWidth={2} />
            <span className="text-[13px] text-white/60">7 completed &middot; 3 in progress &middot; 2 not started</span>
          </div>
        </div>

        {/* Right: 3 mini cards */}
        <div className="col-span-7 grid grid-cols-3 gap-5">
          {/* Avg Score */}
          <div className="rounded-2xl bg-white border border-[#ECEEF2] p-4 flex flex-col">
            <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
              Avg Score
            </span>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight">
                8.4<span className="text-[16px] text-[#6B7280]">/10</span>
              </span>
            </div>
            <div className="mt-auto pt-2 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" strokeWidth={2} />
              <span className="text-[12px] text-[#6B7280]">+0.3 vs benchmark</span>
            </div>
          </div>

          {/* Open Questions Answered */}
          <div className="rounded-2xl bg-white border border-[#ECEEF2] p-4 flex flex-col">
            <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
              Open Questions Answered
            </span>
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight mt-1.5">
              94%
            </span>
            <div className="h-[28px] mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="oqSpark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1E50FF" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#1E50FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke="#1E50FF" fill="url(#oqSpark)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Days Remaining */}
          <div className="rounded-2xl bg-white border border-[#ECEEF2] p-4 flex flex-col">
            <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">
              Days Remaining
            </span>
            <span className="text-[36px] font-light text-[#DC2626] leading-none tracking-tight mt-1.5">
              5
            </span>
            <div className="mt-auto pt-2 flex items-center gap-2">
              <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#FEF2F2]">
                <Clock className="w-4 h-4 text-[#DC2626]" strokeWidth={1.5} />
              </span>
              <span className="text-[12px] text-[#6B7280]">Closes Mar 17</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROW 2: Operational Bento ── */}
      <section className="grid grid-cols-12 gap-5">
        {/* Respondent Status Table */}
        <div className="col-span-8 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Respondent Status</h2>
            <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
              View all <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECEEF2] bg-[#F7F8FA]">
                  {["Recipient", "Role", "Language", "Started", "Last Activity", "Progress", "Status", "Actions"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {respondents.map((r, i) => (
                  <tr key={i} className="border-b border-[#F4F5F7] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0" style={{ backgroundColor: r.bg }}>
                          {r.initials}
                        </span>
                        <span className="text-[13px] font-medium text-[#070a4a] whitespace-nowrap">{r.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-[#6B7280] whitespace-nowrap">{r.role}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-[#6B7280] whitespace-nowrap">{r.lang}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-[#6B7280] whitespace-nowrap">{r.started}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-[#6B7280] whitespace-nowrap">{r.last}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-[#F4F5F7] rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all bg-[#1E50FF]" style={{ width: `${r.pct}%` }} />
                        </div>
                        <span className="text-[12px] font-medium text-[#070a4a] w-8">{r.pct}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <RecipientStatusPill status={r.status} />
                    </td>
                    <td className="px-5 py-3.5 relative">
                      {r.status === "Not Started" ? (
                        <button className="text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap">
                          Send Reminder
                        </button>
                      ) : (
                        <button onClick={() => setMenuOpen(menuOpen === i ? null : i)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
                          <MoreVertical className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
                        </button>
                      )}
                      {menuOpen === i && (
                        <div className="absolute right-2 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
                          {["View Responses", "Send Reminder", "Remove Access"].map((a) => (
                            <button key={a} className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer">{a}</button>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Activity Timeline</h2>
          </div>
          <div className="p-5 flex-1">
            <div className="relative">
              <div className="absolute left-[15px] top-3 bottom-3 w-[1px] bg-[#ECEEF2]" />
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={i} className="relative flex gap-3.5">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 relative z-10" style={{ backgroundColor: t.bg }}>
                      {t.avatar}
                    </span>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-[13px] font-medium text-[#070a4a] leading-snug">{t.text}</p>
                      <p className="text-[11px] text-[#9CA3AF] mt-1">{t.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROW 3: Insights Bento ── */}
      <section className="grid grid-cols-12 gap-5">
        {/* Section Completion */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Section Completion</h2>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center gap-4">
            {sections.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] text-[#070a4a] font-medium">{s.label}</span>
                  <span className="text-[12px] text-[#6B7280]">{s.pct}%</span>
                </div>
                <div className="w-full h-2 bg-[#F4F5F7] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Distribution */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Response Distribution</h2>
          </div>
          <div className="p-5 flex-1 flex items-center gap-6">
            <div className="relative w-[120px] h-[120px] flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ECEEF2" strokeWidth="16" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#1E50FF" strokeWidth="16" strokeDasharray="150.8 100.5" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#22C55E" strokeWidth="16" strokeDasharray="50.3 200" strokeDashoffset={-150.8} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[20px] font-light text-[#070a4a]">15</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E50FF] flex-shrink-0" />
                <span className="text-[13px] text-[#070a4a] flex-1">In Progress</span>
                <span className="text-[13px] font-medium text-[#070a4a]">3</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] flex-shrink-0" />
                <span className="text-[13px] text-[#070a4a] flex-1">Completed</span>
                <span className="text-[13px] font-medium text-[#070a4a]">7</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9CA3AF] flex-shrink-0" />
                <span className="text-[13px] text-[#070a4a] flex-1">Not Started</span>
                <span className="text-[13px] font-medium text-[#070a4a]">2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Email Status */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Email Status</h2>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Sent", value: 15, icon: Mail, color: "#070a4a", bg: "#F7F8FA" },
                { label: "Opened", value: 14, icon: Eye, color: "#1E50FF", bg: "#EEF1FF" },
                { label: "Clicked", value: 13, icon: FileText, color: "#22C55E", bg: "#E8F5EE" },
                { label: "Bounced", value: 0, icon: AlertCircle, color: "#DC2626", bg: "#FEF2F2" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: stat.bg }}>
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/60">
                    <stat.icon className="w-4 h-4" strokeWidth={1.5} style={{ color: stat.color }} />
                  </span>
                  <div>
                    <span className="text-[18px] font-light text-[#070a4a] block leading-none">{stat.value}</span>
                    <span className="text-[11px] text-[#6B7280] mt-0.5 block">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-[#ECEEF2] flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-md bg-[#FDF4E8]">
                <Clock className="w-3.5 h-3.5 text-[#B07D2A]" strokeWidth={1.5} />
              </span>
              <span className="text-[12px] text-[#6B7280]">
                <span className="font-medium text-[#070a4a]">4</span> reminders sent
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROW 4: Bottom Bento ── */}
      <section className="grid grid-cols-12 gap-5">
        {/* AI Insight */}
        <div className="col-span-8 bg-[#F0F4FF] rounded-2xl border border-[#D4E0FF] flex flex-col">
          <div className="px-5 py-4 border-b border-[#D4E0FF] flex items-center gap-2.5">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white">
              <Sparkles className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
            </span>
            <h2 className="text-[16px] font-normal text-[#070a4a]">AI Insight</h2>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-[15px] font-medium text-[#070a4a] mb-2">Smart Recommendation</h3>
            <p className="text-[13px] text-[#6B7280] leading-relaxed">
              2 recipients haven&apos;t started despite 4 days passing. Suggest a personalized reminder from Magnus Olsen (Chair) for higher conversion.
            </p>
            <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#1E50FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#1843D8] transition-colors cursor-pointer self-start whitespace-nowrap">
              Send Personalized Reminders
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Quick Actions</h2>
          </div>
          <div className="p-4 flex flex-col gap-1 flex-1">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors cursor-pointer whitespace-nowrap hover:bg-[#F7F8FA]"
                style={{ color: action.color }}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F7F8FA]">
                  <action.icon className="w-4 h-4" strokeWidth={1.5} style={{ color: action.color }} />
                </span>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}