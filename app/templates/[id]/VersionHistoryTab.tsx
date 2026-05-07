"use client";

import { useState } from "react";
import {
  GitCommit,
  Clock,
  User,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRightLeft,
  Plus,
  Minus,
  Pencil,
  Tag,
  GitBranch,
  Download,
} from "lucide-react";

const versions = [
  {
    version: "3.2",
    tag: "Current",
    date: "May 4, 2026",
    author: "Sarah Mitchell",
    role: "Senior Consultant",
    avatar: "https://readdy.ai/api/search-image?query=professional%20female%20business%20consultant%20headshot%20portrait%2C%20warm%20studio%20lighting%2C%20neutral%20background%2C%20confident%20smile%2C%20corporate%20attire%2C%20high%20quality%20photograph&width=80&height=80&seq=1&orientation=squarish",
    changes: [
      { type: "edit", text: "Updated ESG section questions to reflect new CSRD disclosure requirements" },
      { type: "add", text: "Added new question on board's role in climate transition planning" },
      { type: "edit", text: "Revised risk oversight section to include emerging AI governance risks" },
      { type: "edit", text: "Updated scoring weights for Strategy & Vision section (increased from 15% to 18%)" },
    ],
    stats: { added: 1, removed: 0, edited: 3, total: 47 },
  },
  {
    version: "3.1",
    tag: null,
    date: "Feb 18, 2026",
    author: "James Whitfield",
    role: "Methodology Lead",
    avatar: "https://readdy.ai/api/search-image?query=professional%20male%20business%20executive%20headshot%20portrait%2C%20neutral%20studio%20lighting%2C%20grey%20background%2C%20confident%20expression%2C%20suit%20and%20tie%2C%20high%20quality%20photograph&width=80&height=80&seq=2&orientation=squarish",
    changes: [
      { type: "edit", text: "Refined board composition questions for better DEI measurement" },
      { type: "add", text: "Added new subsection on succession planning transparency" },
      { type: "remove", text: "Removed legacy question on pandemic response preparedness" },
      { type: "edit", text: "Updated French and German translations for Section 2" },
    ],
    stats: { added: 1, removed: 1, edited: 2, total: 46 },
  },
  {
    version: "3.0",
    tag: "Major Release",
    date: "Nov 12, 2025",
    author: "E&B Methodology Team",
    role: "Collective Review",
    avatar: null,
    changes: [
      { type: "add", text: "Complete restructuring: expanded from 4 to 6 sections" },
      { type: "add", text: "New Chair & Leadership section with 6 dedicated questions" },
      { type: "add", text: "New ESG & Sustainability section (7 questions)" },
      { type: "edit", text: "Redesigned scoring framework from 4-point to 5-point Likert scale" },
      { type: "add", text: "Added benchmarking comparison feature in reporting" },
      { type: "edit", text: "Streamlined Risk Oversight section for financial services clients" },
    ],
    stats: { added: 15, removed: 6, edited: 8, total: 47 },
  },
  {
    version: "2.4",
    tag: null,
    date: "Sep 8, 2025",
    author: "Sarah Mitchell",
    role: "Senior Consultant",
    avatar: "https://readdy.ai/api/search-image?query=professional%20female%20business%20consultant%20headshot%20portrait%2C%20warm%20studio%20lighting%2C%20neutral%20background%2C%20confident%20smile%2C%20corporate%20attire%2C%20high%20quality%20photograph&width=80&height=80&seq=1&orientation=squarish",
    changes: [
      { type: "edit", text: "Updated committee effectiveness questions for DORA compliance" },
      { type: "add", text: "Added question on board technology literacy assessment" },
      { type: "remove", text: "Deprecated question on Brexit preparedness" },
    ],
    stats: { added: 1, removed: 1, edited: 1, total: 38 },
  },
  {
    version: "2.3",
    tag: null,
    date: "Jun 22, 2025",
    author: "James Whitfield",
    role: "Methodology Lead",
    avatar: "https://readdy.ai/api/search-image?query=professional%20male%20business%20executive%20headshot%20portrait%2C%20neutral%20studio%20lighting%2C%20grey%20background%2C%20confident%20expression%2C%20suit%20and%20tie%2C%20high%20quality%20photograph&width=80&height=80&seq=2&orientation=squarish",
    changes: [
      { type: "edit", text: "Refined open-text prompts to elicit more actionable board feedback" },
      { type: "add", text: "Added optional narrative field for chair's developmental priorities" },
    ],
    stats: { added: 1, removed: 0, edited: 1, total: 38 },
  },
  {
    version: "2.2",
    tag: null,
    date: "Mar 15, 2025",
    author: "Sarah Mitchell",
    role: "Senior Consultant",
    avatar: "https://readdy.ai/api/search-image?query=professional%20female%20business%20consultant%20headshot%20portrait%2C%20warm%20studio%20lighting%2C%20neutral%20background%2C%20confident%20smile%2C%20corporate%20attire%2C%20high%20quality%20photograph&width=80&height=80&seq=1&orientation=squarish",
    changes: [
      { type: "edit", text: "Updated language to align with new UK Corporate Governance Code" },
      { type: "add", text: "Added question on board stakeholder engagement practices" },
    ],
    stats: { added: 1, removed: 0, edited: 1, total: 37 },
  },
  {
    version: "2.1",
    tag: null,
    date: "Jan 10, 2025",
    author: "E&B Methodology Team",
    role: "Collective Review",
    avatar: null,
    changes: [
      { type: "edit", text: "Minor wording refinements across all sections for clarity" },
      { type: "edit", text: "Corrected translation inconsistencies in German version" },
    ],
    stats: { added: 0, removed: 0, edited: 2, total: 36 },
  },
  {
    version: "2.0",
    tag: "Major Release",
    date: "Oct 3, 2024",
    author: "E&B Methodology Team",
    role: "Collective Review",
    avatar: null,
    changes: [
      { type: "add", text: "Introduced question type variety: Likert, Open Text, Linear Scale, Matrix" },
      { type: "add", text: "New Strategy & Vision section replacing generic governance questions" },
      { type: "edit", text: "Complete rewrite of Board Composition section for modern DEI focus" },
      { type: "remove", text: "Removed Section A: Generic Governance (superseded by focused sections)" },
      { type: "add", text: "Added multi-language support (EN, FR, DE)" },
      { type: "edit", text: "Revised scoring methodology to percentile-based benchmarking" },
    ],
    stats: { added: 14, removed: 8, edited: 6, total: 36 },
  },
];

function ChangeTypeIcon({ type }: { type: string }) {
  const config: Record<string, { icon: any; bg: string; color: string; label: string }> = {
    add: { icon: Plus, bg: "#F0FDF4", color: "#22C55E", label: "Added" },
    remove: { icon: Minus, bg: "#FEF2F2", color: "#DC2626", label: "Removed" },
    edit: { icon: Pencil, bg: "#FDF4E8", color: "#B07D2A", label: "Edited" },
  };

  const c = config[type] || config.edit;
  const Icon = c.icon;

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium"
      style={{ backgroundColor: c.bg, color: c.color }}
    >
      <Icon className="w-3 h-3" strokeWidth={2} />
      {c.label}
    </span>
  );
}

function VersionCard({ version, index }: { version: any; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#ECEEF2]" />

      <div className="flex items-start gap-4 pl-2">
        {/* Dot */}
        <div className="relative z-10 flex flex-col items-center gap-1 flex-shrink-0">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold ${
              index === 0
                ? "bg-[#1E50FF] text-white"
                : version.tag === "Major Release"
                ? "bg-[#070a4a] text-white"
                : "bg-white border-2 border-[#ECEEF2] text-[#9CA3AF]"
            }`}
          >
            {version.tag === "Major Release" ? (
              <Tag className="w-4 h-4" strokeWidth={1.5} />
            ) : (
              version.version.split(".")[0]
            )}
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 pb-4">
          <div
            onClick={() => setExpanded(!expanded)}
            role="button"
            tabIndex={0}
            className="w-full bg-white rounded-xl border border-[#ECEEF2] hover:border-[#1E50FF]/20 transition-colors cursor-pointer text-left overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-[18px] font-light text-[#070a4a]">
                    v{version.version}
                  </span>
                  {version.tag && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        version.tag === "Current"
                          ? "bg-[#EEF1FF] text-[#1E50FF]"
                          : "bg-[#070a4a] text-white"
                      }`}
                    >
                      {version.tag}
                    </span>
                  )}
                </div>

                <span className="w-1 h-1 rounded-full bg-[#ECEEF2]" />

                <div className="flex items-center gap-1.5 text-[12px] text-[#9CA3AF]">
                  <Clock className="w-3 h-3" strokeWidth={1.5} />
                  {version.date}
                </div>

                <span className="w-1 h-1 rounded-full bg-[#ECEEF2]" />

                <div className="flex items-center gap-1.5">
                  {version.avatar ? (
                    <img
                      src={version.avatar}
                      alt={version.author}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-[#F7F8FA] flex items-center justify-center">
                      <User className="w-3 h-3 text-[#9CA3AF]" strokeWidth={1.5} />
                    </span>
                  )}
                  <span className="text-[12px] text-[#6B7280]">
                    {version.author}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF]">
                    {version.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5 text-[11px] text-[#9CA3AF]">
                  {version.stats.added > 0 && (
                    <span className="flex items-center gap-1 text-[#22C55E]">
                      <Plus className="w-3 h-3" strokeWidth={2} />
                      {version.stats.added}
                    </span>
                  )}
                  {version.stats.removed > 0 && (
                    <span className="flex items-center gap-1 text-[#DC2626]">
                      <Minus className="w-3 h-3" strokeWidth={2} />
                      {version.stats.removed}
                    </span>
                  )}
                  {version.stats.edited > 0 && (
                    <span className="flex items-center gap-1 text-[#B07D2A]">
                      <Pencil className="w-3 h-3" strokeWidth={1.5} />
                      {version.stats.edited}
                    </span>
                  )}
                  <span className="w-1 h-1 rounded-full bg-[#ECEEF2]" />
                  <span>{version.stats.total} questions</span>
                </div>

                <span className="w-7 h-7 flex items-center justify-center rounded-lg">
                  {expanded ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#9CA3AF]"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#9CA3AF]"
                      strokeWidth={1.5}
                    />
                  )}
                </span>
              </div>
            </div>

            {/* Expanded body */}
            {expanded && (
              <div className="px-5 pb-5 border-t border-[#F4F5F7]">
                <div className="pt-4 space-y-2">
                  {version.changes.map((change: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#F7F8FA]/50 hover:bg-[#F7F8FA] transition-colors"
                    >
                      <ChangeTypeIcon type={change.type} />
                      <span className="text-[13px] text-[#6B7280] leading-relaxed">
                        {change.text}
                      </span>
                    </div>
                  ))}
                </div>

                {index > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#F4F5F7] flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap">
                      <ArrowRightLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                      Compare with v{versions[index - 1].version}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VersionHistoryTab() {
  return (
    <div className="space-y-5">
      {/* Info bar */}
      <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[13px] font-medium text-[#070a4a]">
            Version History
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {versions.length} versions · 2 major releases
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
            <GitBranch className="w-3.5 h-3.5" strokeWidth={1.5} />
            Branches
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer whitespace-nowrap">
            <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
            Export Log
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6">
        <div className="space-y-0">
          {versions.map((version, i) => (
            <VersionCard key={version.version} version={version} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}