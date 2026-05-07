"use client";

import { useState } from "react";
import {
  MoreVertical,
  Users,
  User,
  BarChart3,
  Grid3X3,
  GraduationCap,
  Briefcase,
  Shield,
  FileX,
} from "lucide-react";

const templates = [
  {
    slug: "board-self-evaluation",
    title: "Board of Director Self Evaluation",
    subtitle: "Annual board effectiveness assessment",
    questions: 47,
    sections: 6,
    languages: "EN/FR/DE",
    used: 47,
    updated: "3d ago",
    icon: Users,
    iconBg: "#EEF1FF",
    iconColor: "#1E50FF",
  },
  {
    slug: "committee-self-evaluation",
    title: "Board Committee Self Evaluation",
    subtitle: "Committee performance review",
    questions: 32,
    sections: 4,
    languages: "EN/FR",
    used: 28,
    updated: "1w ago",
    icon: Users,
    iconBg: "#F0F9FF",
    iconColor: "#0EA5E9",
  },
  {
    slug: "director-contribution",
    title: "Individual Director Contribution Evaluation",
    subtitle: "180° director contribution review",
    questions: 24,
    sections: 3,
    languages: "EN/FR/DE/ES",
    used: 35,
    updated: "2w ago",
    icon: User,
    iconBg: "#FDF4E8",
    iconColor: "#B07D2A",
  },
  {
    slug: "director-skills",
    title: "Director Skills & Experience Assessment",
    subtitle: "Skills mapping and evolution tracking",
    questions: 18,
    sections: 0,
    languages: "EN/FR/DE",
    used: 22,
    updated: "5d ago",
    icon: BarChart3,
    iconBg: "#F0FDF4",
    iconColor: "#22C55E",
  },
  {
    slug: "skills-matrix-refresh",
    title: "Board of Directors Skills Matrix Refresh",
    subtitle: "Annual skills matrix update",
    questions: 15,
    sections: 0,
    languages: "EN/FR",
    used: 19,
    updated: "1m ago",
    icon: Grid3X3,
    iconBg: "#F5F3FF",
    iconColor: "#8B5CF6",
  },
  {
    slug: "training-needs",
    title: "Director Training Needs Assessment",
    subtitle: "Identify development priorities",
    questions: 20,
    sections: 4,
    languages: "EN/FR/DE",
    used: 12,
    updated: "2w ago",
    icon: GraduationCap,
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    slug: "c-suite-evaluation",
    title: "C-Suite Annual Evaluation",
    subtitle: "Senior management performance review",
    questions: 38,
    sections: 5,
    languages: "EN/FR/DE/ES/IT",
    used: 18,
    updated: "4d ago",
    icon: Briefcase,
    iconBg: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    slug: "director-suitability",
    title: "Bank/Insurance Director Suitability Self-Assessment",
    subtitle: "Regulator-ready fit & proper assessment",
    questions: 42,
    sections: 7,
    languages: "EN/FR/DE",
    used: 9,
    updated: "6d ago",
    icon: Shield,
    iconBg: "#F0F2FA",
    iconColor: "#070a4a",
  },
];

export default function TemplatesGrid() {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((t, i) => {
        const Icon = t.icon;
        return (
          <a
            key={i}
            href={"/templates/" + t.slug}
            className="bg-white rounded-2xl border border-[#ECEEF2] p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#1E50FF]/30 transition-all cursor-pointer group relative block"
          >
            {/* Icon + Actions */}
            <div className="flex items-start justify-between mb-4">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: t.iconBg }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: t.iconColor }} />
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMenuOpen(menuOpen === i ? null : i);
                }}
                className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
              >
                <MoreVertical className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Title */}
            <h3 className="text-[15px] font-semibold text-[#070a4a] leading-snug">
              {t.title}
            </h3>
            <p className="text-[13px] text-[#6B7280] mt-1">{t.subtitle}</p>

            {/* Meta row */}
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <span className="text-[11px] text-[#9CA3AF]">
                {t.questions} questions
              </span>
              <span className="w-1 h-1 rounded-full bg-[#ECEEF2]" />
              {t.sections > 0 ? (
                <span className="text-[11px] text-[#9CA3AF]">
                  {t.sections} sections
                </span>
              ) : (
                <span className="text-[11px] text-[#9CA3AF]">matrix-based</span>
              )}
              <span className="w-1 h-1 rounded-full bg-[#ECEEF2]" />
              <span className="text-[11px] text-[#9CA3AF]">{t.languages}</span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F4F5F7]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-[#070a4a]">
                  Used {t.used} times
                </span>
                <a
                  href={"/templates/" + t.slug + "/edit"}
                  onClick={(e) => e.stopPropagation()}
                  className="opacity-0 group-hover:opacity-100 text-[11px] font-medium text-[#1E50FF] hover:text-[#1843D8] transition-all cursor-pointer whitespace-nowrap"
                >
                  Edit →
                </a>
              </div>
              <span className="text-[11px] text-[#9CA3AF]">
                Updated {t.updated}
              </span>
            </div>

            {/* Dropdown menu */}
            {menuOpen === i && (
              <div className="absolute right-5 top-[70px] w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1" onClick={(e) => e.preventDefault()}>
                <a
                  href={"/templates/" + t.slug}
                  className="block w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                >
                  View Template
                </a>
                <a
                  href={"/templates/" + t.slug + "/edit"}
                  className="block w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                >
                  Edit Template
                </a>
                {["Duplicate", "Export", "Archive"].map(
                  (action) => (
                    <button
                      key={action}
                      onClick={(e) => e.preventDefault()}
                      className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                    >
                      {action}
                    </button>
                  )
                )}
              </div>
            )}
          </a>
        );
      })}

      {/* Empty state fallback */}
      {templates.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-20">
          <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F7F8FA] mb-4">
            <FileX className="w-6 h-6 text-[#9CA3AF]" strokeWidth={1.5} />
          </span>
          <p className="text-[15px] font-medium text-[#070a4a]">
            No templates match these filters
          </p>
          <button className="mt-3 text-[13px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}