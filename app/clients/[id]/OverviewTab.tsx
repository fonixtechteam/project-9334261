"use client";

import { TrendingUp, ArrowRight, Star, Calendar, FileText, Download, Sparkles, MoreVertical } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const areaData = [
  { v: 7.0 }, { v: 7.2 }, { v: 7.1 }, { v: 7.5 }, { v: 7.8 },
  { v: 8.0 }, { v: 8.1 }, { v: 8.3 }, { v: 8.5 }, { v: 8.7 },
];

const yearData = [
  { year: "2024", score: 7.2 },
  { year: "2025", score: 8.3 },
  { year: "2026", score: 8.7 },
];

const recentSurveys = [
  { name: "Board Self Evaluation 2026", type: "Annual", date: "Mar 12, 2026", responses: "12/15", pct: 80, status: "In Progress" },
  { name: "Director Skills Matrix", type: "Skills", date: "Feb 28, 2026", responses: "18/20", pct: 90, status: "Closed" },
  { name: "ESG Readiness Assessment", type: "One-off", date: "Feb 15, 2026", responses: "15/15", pct: 100, status: "Closed" },
  { name: "Committee Self-Evaluation", type: "Annual", date: "Jan 10, 2026", responses: "8/8", pct: 100, status: "Closed" },
  { name: "Crisis Response Review", type: "Ad-hoc", date: "Nov 22, 2025", responses: "14/15", pct: 93, status: "Closed" },
];

const teamMembers = [
  { name: "Eva Lindqvist", role: "Company Secretary", primary: true, initials: "EL", bg: "#1E50FF" },
  { name: "Magnus Olsen", role: "Chair", primary: false, initials: "MO", bg: "#0e4b9e" },
  { name: "Astrid Holm", role: "Senior Independent Director", primary: false, initials: "AH", bg: "#1a1a2e" },
  { name: "Henrik Berg", role: "CFO", primary: false, initials: "HB", bg: "#6b8f3e" },
  { name: "Lena Sorensen", role: "Board Liaison", primary: false, initials: "LS", bg: "#2a4d7c" },
];

const activityLog = [
  { icon: "survey", text: "Survey launched", sub: "Board Self Evaluation 2026", time: "2h ago" },
  { icon: "report", text: "Report exported", sub: "Skills Matrix Report", time: "1d ago" },
  { icon: "user", text: "New respondent added", sub: "Henrik Berg joined", time: "3d ago" },
  { icon: "logo", text: "Logo updated", sub: "Brand refresh approved", time: "1w ago" },
];

const documents = [
  { name: "Board Self Eval Report 2026", date: "Mar 28, 2026" },
  { name: "Skills Matrix Report 2026", date: "Mar 15, 2026" },
  { name: "ESG Readiness Summary", date: "Mar 1, 2026" },
  { name: "Committee Review Report", date: "Jan 28, 2026" },
  { name: "Crisis Response Findings", date: "Dec 5, 2025" },
  { name: "Annual Governance Audit", date: "Nov 15, 2025" },
];

function SurveyStatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "In Progress": "bg-[#EEF1FF] text-[#1E50FF]",
    Closed: "bg-[#F4F5F7] text-[#6B7280]",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${styles[status] || styles.Closed}`}>
      {status}
    </span>
  );
}

export default function OverviewTab({ clientId }: { clientId: string }) {
  return (
    <div className="space-y-5">
      {/* ROW 1: KPI Bento */}
      <section className="grid grid-cols-12 gap-5">
        {/* Engagement Score Hero */}
        <div className="col-span-5 h-[168px] rounded-2xl bg-[#070a4a] relative overflow-hidden flex flex-col justify-between p-5">
          <div className="absolute top-4 right-6 text-[160px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
            &amp;
          </div>
          <div className="relative z-10">
            <span className="text-[12px] font-medium text-white/50 uppercase tracking-wider">Engagement Score</span>
            <div className="flex items-baseline gap-3 mt-2">
              <span className="text-[44px] font-light text-white leading-none tracking-tight">8.7<span className="text-[20px] text-white/50">/10</span></span>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-[#22C55E]" strokeWidth={2} />
                <span className="text-[13px] font-medium text-[#22C55E]">+0.4 vs last year</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 h-[40px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="engArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E50FF" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#1E50FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#1E50FF" fill="url(#engArea)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: 3 mini cards */}
        <div className="col-span-7 grid grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
            <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">Active Surveys</span>
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight mt-2">3</span>
            <div className="mt-auto pt-3 space-y-1">
              {["Board Self Eval", "Director Skills Matrix", "ESG Readiness"].map((s, i) => (
                <p key={i} className="text-[11px] text-[#6B7280] truncate">{s}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
            <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">Last Survey Score</span>
            <span className="text-[36px] font-light text-[#070a4a] leading-none tracking-tight mt-2">7.9<span className="text-[18px] text-[#6B7280]">/10</span></span>
            <p className="text-[12px] text-[#6B7280] mt-2">Board Self Evaluation</p>
            <p className="text-[11px] text-[#9CA3AF]">Feb 2026</p>
          </div>

          <div className="rounded-2xl bg-white border border-[#ECEEF2] p-5 flex flex-col">
            <span className="text-[12px] font-medium text-[#9CA3AF] uppercase tracking-wider">Next Milestone</span>
            <div className="mt-2 flex items-start gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#EEF1FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Calendar className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[13px] font-medium text-[#070a4a]">Annual Review</p>
                <p className="text-[12px] text-[#6B7280]">in 42 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 2: Operational Bento */}
      <section className="grid grid-cols-12 gap-5">
        {/* Recent Surveys Table */}
        <div className="col-span-8 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Recent Surveys</h2>
            <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
              View all <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECEEF2] bg-[#F7F8FA]">
                  {["Survey Name", "Type", "Launch Date", "Completion", "Status", "Actions"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentSurveys.map((s, i) => (
                  <tr key={i} className="border-b border-[#F4F5F7] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] font-medium text-[#070a4a] whitespace-nowrap">{s.name}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-[#6B7280] whitespace-nowrap">{s.type}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-[#6B7280] whitespace-nowrap">{s.date}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-[#ECEEF2] rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-[#1E50FF]" style={{ width: `${s.pct}%` }} />
                        </div>
                        <span className="text-[12px] text-[#070a4a] font-medium">{s.pct}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <SurveyStatusPill status={s.status} />
                    </td>
                    <td className="px-5 py-3.5">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer">
                        <MoreVertical className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Client Team */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Client Team</h2>
            <button className="text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">Manage</button>
          </div>
          <div className="p-5 flex flex-col gap-3 flex-1">
            {teamMembers.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0" style={{ backgroundColor: m.bg }}>
                  {m.initials}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[13px] font-medium text-[#070a4a] truncate">{m.name}</p>
                    {m.primary && (
                      <span className="w-3.5 h-3.5 flex items-center justify-center">
                        <Star className="w-3.5 h-3.5 text-[#c9a44c]" strokeWidth={1.5} />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6B7280]">{m.role}</p>
                </div>
              </div>
            ))}
            <p className="text-[11px] text-[#9CA3AF] mt-1 cursor-pointer hover:text-[#1E50FF] transition-colors">+ 12 board members</p>
          </div>
        </div>
      </section>

      {/* ROW 3: Insights Bento */}
      <section className="grid grid-cols-12 gap-5">
        {/* Year-over-Year Performance */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Year-over-Year Performance</h2>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <p className="text-[12px] text-[#6B7280] mb-3">Average board effectiveness scores</p>
            <div className="flex-1 min-h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearData} barSize={40} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F4F5F7" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9CA3AF" }} domain={[0, 10]} />
                  <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #ECEEF2", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", fontSize: 12, padding: "8px 12px" }} formatter={(value) => [`${value}/10`, "Score"]} cursor={{ fill: "rgba(30,80,255,0.04)" }} />
                  <Bar dataKey="score" fill="#1E50FF" radius={[6, 6, 0, 0]} fillOpacity={0.85} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sector Benchmark Position */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Sector Benchmark Position</h2>
          </div>
          <div className="p-5 flex-1 flex flex-col items-center justify-center">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#ECEEF2" strokeWidth="10" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#1E50FF" strokeWidth="10" strokeDasharray="237 78" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[28px] font-light text-[#070a4a] leading-none">91</span>
                <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mt-0.5">percentile</span>
              </div>
            </div>
            <p className="text-[13px] text-[#6B7280] mt-4 text-center">Top 10% in EU Banking</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2]">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Recent Activity</h2>
          </div>
          <div className="px-5 py-4 flex-1">
            <div className="relative">
              <div className="absolute left-[15px] top-3 bottom-3 w-[1px] bg-[#ECEEF2]" />
              <div className="space-y-4">
                {activityLog.map((a, i) => (
                  <div key={i} className="relative flex gap-3.5">
                    <span className="w-8 h-8 rounded-full bg-[#F7F8FA] flex items-center justify-center flex-shrink-0 relative z-10">
                      {a.icon === "survey" && <FileText className="w-3.5 h-3.5 text-[#1E50FF]" strokeWidth={1.5} />}
                      {a.icon === "report" && <ArrowRight className="w-3.5 h-3.5 text-[#6B7280]" strokeWidth={1.5} />}
                      {a.icon === "user" && <Star className="w-3.5 h-3.5 text-[#c9a44c]" strokeWidth={1.5} />}
                      {a.icon === "logo" && <Sparkles className="w-3.5 h-3.5 text-[#070a4a]" strokeWidth={1.5} />}
                    </span>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-[13px] font-medium text-[#070a4a] leading-snug">{a.text}</p>
                      <p className="text-[12px] text-[#6B7280] mt-0.5">{a.sub}</p>
                      <p className="text-[11px] text-[#9CA3AF] mt-1">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 4: Bottom Bento */}
      <section className="grid grid-cols-12 gap-5">
        {/* Documents & Reports */}
        <div className="col-span-8 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
          <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
            <h2 className="text-[16px] font-normal text-[#1E50FF]">Documents &amp; Reports</h2>
            <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
              View all <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="p-5 flex gap-4 overflow-x-auto">
            {documents.map((d, i) => (
              <div key={i} className="flex-shrink-0 w-[200px] p-4 rounded-xl border border-[#ECEEF2] hover:border-[#1E50FF]/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer group">
                <div className="flex items-start justify-between">
                  <span className="w-10 h-10 rounded-lg bg-[#EEF1FF] flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#1E50FF]" strokeWidth={1.5} />
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors opacity-0 group-hover:opacity-100">
                    <Download className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
                  </span>
                </div>
                <p className="text-[13px] font-medium text-[#070a4a] mt-3 truncate">{d.name}</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">{d.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insight */}
        <div className="col-span-4 bg-[#F8FAFF] rounded-2xl border border-[#DEE4F7] flex flex-col">
          <div className="px-5 py-4 border-b border-[#DEE4F7] flex items-center gap-2.5">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#EEF1FF]">
              <Sparkles className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
            </span>
            <h2 className="text-[16px] font-normal text-[#070a4a]">AI Insight</h2>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <p className="text-[13px] font-medium text-[#070a4a]">Smart Recommendation</p>
            <p className="text-[13px] text-[#6B7280] mt-2 leading-relaxed">
              Nordea's governance scores have steadily improved. Consider proposing the Director Training Needs Assessment to capitalize on momentum.
            </p>
            <div className="mt-auto pt-4">
              <button className="flex items-center gap-1 text-[13px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
                View Full Analysis
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}