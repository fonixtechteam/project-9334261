"use client";

import { useState } from "react";
import {
  ChevronRight,
  Check,
  Star,
  Building2,
  Landmark,
  Calendar,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const recommendedChips = [
  "Listed Companies",
  "Financial Institutions",
  "Annual Cycles",
  "Boards of 8+ members",
];

const compatibleChips = [
  "Standalone Survey",
  "Bundled with Skills Matrix",
  "Bundled with Committee Eval",
];

const sections = [
  { num: "01", title: "Strategy & Vision", questions: 9, icon: "strategy" },
  { num: "02", title: "Risk Oversight & Audit", questions: 8, icon: "risk" },
  { num: "03", title: "Board Composition & Diversity", questions: 8, icon: "diversity" },
  { num: "04", title: "ESG & Sustainability", questions: 7, icon: "esg" },
  { num: "05", title: "Committee Effectiveness", questions: 9, icon: "committee" },
  { num: "06", title: "Chair & Leadership", questions: 6, icon: "leadership" },
];

const questionTypeLegend = [
  { label: "Likert", color: "#1E50FF" },
  { label: "Linear Scale", color: "#0EA5E9" },
  { label: "Open Text", color: "#22C55E" },
  { label: "2x2 Matrix", color: "#B07D2A" },
  { label: "Array", color: "#8B5CF6" },
];

const sectorData = [
  { label: "Banking", pct: 32, color: "#1E50FF" },
  { label: "Insurance", pct: 24, color: "#0EA5E9" },
  { label: "Industrial", pct: 18, color: "#22C55E" },
  { label: "Consumer", pct: 14, color: "#B07D2A" },
  { label: "Other", pct: 12, color: "#8B5CF6" },
];

const recipientTypes = [
  { label: "Board Members", count: 89 },
  { label: "Non-Executive Directors", count: 54 },
  { label: "Observers", count: 12 },
  { label: "Senior Management", count: 8 },
];

const recentSurveys = [
  { client: "Nordea Bank", logo: "N", logoBg: "#1a5f2a", date: "Mar 12", completion: 80, score: "8.4", status: "In Progress" },
  { client: "Allianz Group", logo: "A", logoBg: "#0e4b9e", date: "Feb 28", completion: 100, score: "8.7", status: "Closed" },
  { client: "Siemens AG", logo: "S", logoBg: "#6b8f3e", date: "Feb 15", completion: 100, score: "8.2", status: "Closed" },
  { client: "Banco Santander", logo: "B", logoBg: "#b91c1c", date: "Jan 20", completion: 100, score: "7.9", status: "Closed" },
  { client: "Roche Holding", logo: "R", logoBg: "#8B1A1A", date: "Dec 10", completion: 100, score: "8.6", status: "Closed" },
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

function DonutChart() {
  const data = [
    { pct: 60, color: "#1E50FF", label: "Likert 5-point" },
    { pct: 20, color: "#22C55E", label: "Open Text" },
    { pct: 12, color: "#0EA5E9", label: "Linear Scale" },
    { pct: 5, color: "#B07D2A", label: "2x2 Matrix" },
    { pct: 3, color: "#8B5CF6", label: "Array" },
  ];

  let cumulative = 0;
  const size = 96;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center gap-5">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="flex-shrink-0">
        {data.map((d, i) => {
          const transform = `rotate(${(cumulative / 100) * 360 - 90} ${size / 2} ${size / 2})`;
          cumulative += d.pct;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={stroke}
              strokeDasharray={`${(d.pct / 100) * circumference} ${circumference}`}
              strokeLinecap="round"
              transform={transform}
              style={{ transition: "all 0.3s" }}
            />
          );
        })}
      </svg>
      <div className="space-y-1.5">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
            <span className="text-[12px] text-[#6B7280]">{d.label}</span>
            <span className="text-[12px] font-medium text-[#070a4a] ml-auto">{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionMap() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <h2 className="text-[15px] font-semibold text-[#070a4a]">Section Structure</h2>
          <span className="text-[12px] text-[#9CA3AF]">6 sections · 47 questions total</span>
        </div>
      </div>

      <div className="space-y-1">
        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-[#F7F8FA] transition-colors cursor-pointer text-left group"
          >
            <span className="w-8 h-8 rounded-lg bg-[#1E50FF]/10 flex items-center justify-center text-[12px] font-semibold text-[#1E50FF] flex-shrink-0">
              {s.num}
            </span>
            <span className="text-[14px] font-medium text-[#070a4a] flex-1">{s.title}</span>
            <span className="text-[12px] text-[#9CA3AF]">{s.questions} questions</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-lg group-hover:bg-white transition-colors">
              <ChevronRight className={`w-4 h-4 text-[#9CA3AF] transition-transform ${expanded === i ? "rotate-90" : ""}`} strokeWidth={1.5} />
            </span>
          </button>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-[#F4F5F7] flex items-center gap-4 flex-wrap">
        <span className="text-[11px] text-[#9CA3AF] uppercase tracking-wider">Question types used:</span>
        {questionTypeLegend.map((qt, i) => (
          <span key={i} className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: qt.color }} />
            {qt.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function QualityScoreCard() {
  return (
    <div className="bg-[#070a4a] rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6 relative overflow-hidden">
      <span className="absolute top-3 right-4 text-[64px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">&amp;</span>
      <h2 className="text-[15px] font-semibold text-white relative z-10">Template Health</h2>

      <div className="mt-5 relative z-10">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[42px] font-extralight text-white leading-none">9.2</span>
          <span className="text-[16px] text-white/60 font-extralight">/10</span>
        </div>
        <p className="text-[13px] text-white/60 mt-1">Quality Score</p>
      </div>

      <div className="mt-4 space-y-2 relative z-10">
        {[
          { label: "Question clarity", ok: true },
          { label: "Coverage breadth", ok: true },
          { label: "Up-to-date", ok: true },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#22C55E]/20 flex-shrink-0">
              <Check className="w-3 h-3 text-[#22C55E]" strokeWidth={2} />
            </span>
            <span className="text-[12px] text-white/80">{item.label}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-white/40 relative z-10">Reviewed by E&amp;B Methodology Team</p>
    </div>
  );
}

function QuestionTypeCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
      <h2 className="text-[15px] font-semibold text-[#070a4a] mb-5">Question Type Distribution</h2>
      <DonutChart />
    </div>
  );
}

function SectorCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
      <h2 className="text-[15px] font-semibold text-[#070a4a] mb-5">Most Used By Sector</h2>
      <div className="space-y-3">
        {sectorData.map((s, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#6B7280]">{s.label}</span>
              <span className="text-[12px] font-medium text-[#070a4a]">{s.pct}%</span>
            </div>
            <div className="w-full h-2 bg-[#F4F5F7] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecipientCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
      <h2 className="text-[15px] font-semibold text-[#070a4a] mb-5">Recipient Types</h2>
      <div className="flex flex-wrap gap-2">
        {recipientTypes.map((rt, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F8FA] text-[#070a4a] text-[12px] font-medium rounded-lg border border-[#ECEEF2]">
            {rt.label}
            <span className="px-1.5 py-0.5 bg-white text-[#1E50FF] text-[10px] font-semibold rounded-full">{rt.count}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function RecentSurveysTable() {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
      <h2 className="text-[15px] font-semibold text-[#070a4a] mb-5">Recent Surveys Using This Template</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#ECEEF2]">
              <th className="text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider pb-2 pr-4">Client</th>
              <th className="text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider pb-2 pr-4">Launch Date</th>
              <th className="text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider pb-2 pr-4">Completion</th>
              <th className="text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider pb-2 pr-4">Avg Score</th>
              <th className="text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentSurveys.map((row, i) => (
              <tr key={i} className="border-b border-[#F4F5F7] last:border-0">
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" style={{ backgroundColor: row.logoBg }}>
                      {row.logo}
                    </span>
                    <span className="text-[12px] font-medium text-[#070a4a]">{row.client}</span>
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <span className="text-[12px] text-[#6B7280]">{row.date}</span>
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-[#F4F5F7] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${row.completion}%`, backgroundColor: row.completion >= 100 ? "#22C55E" : "#1E50FF" }} />
                    </div>
                    <span className="text-[11px] font-medium text-[#070a4a]">{row.completion}%</span>
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#B07D2A]" strokeWidth={1.5} fill="#B07D2A" />
                    <span className="text-[12px] font-medium text-[#070a4a]">{row.score}</span>
                  </div>
                </td>
                <td className="py-3">
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AIInsightCard() {
  return (
    <div className="bg-[#F0F7FF] rounded-2xl border border-[#E0EDFF] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#1E50FF]/10 flex-shrink-0">
          <Sparkles className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
        </span>
        <span className="text-[13px] font-semibold text-[#070a4a]">Smart Suggestion</span>
      </div>
      <p className="text-[13px] text-[#6B7280] leading-relaxed">
        This template performs best for boards of 10–15 members. Consider creating a &quot;lite&quot; variant for smaller boards.
      </p>
      <button className="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap">
        Create Variant
        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
      </button>
    </div>
  );
}

export default function OverviewTab({ templateId }: { templateId: string }) {
  return (
    <div className="space-y-5">
      {/* Row 1: Description + Quality Score */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
          <h2 className="text-[15px] font-semibold text-[#070a4a] mb-3">About This Template</h2>
          <h3 className="text-[13px] font-medium text-[#070a4a] mb-2">Purpose &amp; Methodology</h3>
          <p className="text-[13px] text-[#6B7280] leading-relaxed">
            A comprehensive annual self-assessment tool designed to evaluate board effectiveness across strategy, risk oversight, composition, ESG integration, committees, and leadership. Used by listed corporates, financial institutions, and family-controlled businesses across Europe.
          </p>

          <div className="mt-5">
            <p className="text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-2">Recommended For</p>
            <div className="flex flex-wrap gap-2">
              {recommendedChips.map((chip, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F7F8FA] text-[#6B7280] text-[12px] rounded-md border border-[#ECEEF2] whitespace-nowrap">
                  <Building2 className="w-3 h-3 text-[#9CA3AF]" strokeWidth={1.5} />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-2">Compatible Services</p>
            <div className="flex flex-wrap gap-2">
              {compatibleChips.map((chip, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F0F7FF] text-[#1E50FF] text-[12px] rounded-md border border-[#E0EDFF] whitespace-nowrap">
                  <Check className="w-3 h-3" strokeWidth={2} />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <QualityScoreCard />
        </div>
      </div>

      {/* Row 2: Section Map */}
      <SectionMap />

      {/* Row 3: Insights Bento */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <QuestionTypeCard />
        </div>
        <div className="col-span-4">
          <SectorCard />
        </div>
        <div className="col-span-4">
          <RecipientCard />
        </div>
      </div>

      {/* Row 4: Bottom Bento */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <RecentSurveysTable />
        </div>
        <div className="col-span-4">
          <AIInsightCard />
        </div>
      </div>
    </div>
  );
}