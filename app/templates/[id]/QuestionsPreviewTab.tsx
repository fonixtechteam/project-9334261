"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare, ListOrdered, Type, BarChart3 } from "lucide-react";

const sections = [
  {
    id: "strategy",
    title: "Strategy & Vision",
    questions: 9,
    items: [
      {
        id: 1,
        text: "The board has a clear and shared understanding of the company's strategic direction and long-term vision.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
      {
        id: 2,
        text: "Management provides the board with timely, accurate, and comprehensive information to support strategic decision-making.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
      {
        id: 3,
        text: "Describe one strategic decision from the past year where the board's involvement added measurable value.",
        type: "open",
        placeholder: "Enter your response here...",
      },
    ],
  },
  {
    id: "risk",
    title: "Risk Oversight & Audit",
    questions: 8,
    items: [
      {
        id: 4,
        text: "The board receives regular, high-quality risk reports that enable informed oversight of principal risks.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
      {
        id: 5,
        text: "What improvements would you suggest to strengthen the board's risk oversight capabilities?",
        type: "open",
        placeholder: "Enter your response here...",
      },
      {
        id: 6,
        text: "The audit committee has adequate expertise and independence to challenge management on financial controls.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
    ],
  },
  {
    id: "composition",
    title: "Board Composition & Diversity",
    questions: 8,
    items: [
      {
        id: 7,
        text: "The board's current composition provides the right mix of skills, experience, and independence to govern effectively.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
      {
        id: 8,
        text: "Identify one skill or perspective that would strengthen the board if added through a new appointment.",
        type: "open",
        placeholder: "Enter your response here...",
      },
    ],
  },
  {
    id: "esg",
    title: "ESG & Sustainability",
    questions: 7,
    items: [
      {
        id: 9,
        text: "The board actively integrates environmental, social, and governance considerations into strategic planning.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
      {
        id: 10,
        text: "How well does the current ESG reporting framework meet investor and regulatory expectations?",
        type: "likert",
        scale: ["Very Poorly", "Poorly", "Adequately", "Well", "Very Well"],
      },
      {
        id: 11,
        text: "Describe the board's most impactful ESG-related decision or initiative in the past 12 months.",
        type: "open",
        placeholder: "Enter your response here...",
      },
    ],
  },
  {
    id: "committee",
    title: "Committee Effectiveness",
    questions: 9,
    items: [
      {
        id: 12,
        text: "Board committees have clear mandates, adequate meeting time, and sufficient authority to discharge their duties.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
      {
        id: 13,
        text: "Which committee would benefit most from a revised terms of reference, and why?",
        type: "open",
        placeholder: "Enter your response here...",
      },
      {
        id: 14,
        text: "Committee chairs effectively report key matters and recommendations to the full board in a timely manner.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
    ],
  },
  {
    id: "leadership",
    title: "Chair & Leadership",
    questions: 6,
    items: [
      {
        id: 15,
        text: "The chair fosters an environment where all directors feel encouraged to contribute candidly and constructively.",
        type: "likert",
        scale: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
      },
      {
        id: 16,
        text: "What is the most important leadership quality the chair should demonstrate over the next 12 months?",
        type: "open",
        placeholder: "Enter your response here...",
      },
    ],
  },
];

function LikertPreview({ scale }: { scale: string[] }) {
  return (
    <div className="flex items-center gap-6 mt-3">
      {scale.map((label, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <span className="w-4 h-4 rounded-full border-2 border-[#ECEEF2] bg-white" />
          <span className="text-[10px] text-[#9CA3AF] text-center max-w-[72px] leading-tight">{label}</span>
        </div>
      ))}
    </div>
  );
}

function QuestionCard({ item, index }: { item: any; index: number }) {
  const typeConfig: Record<string, { label: string; icon: any; bg: string; text: string }> = {
    likert: { label: "Likert 5-point", icon: BarChart3, bg: "#EEF1FF", text: "#1E50FF" },
    open: { label: "Open Text", icon: Type, bg: "#F0FDF4", text: "#22C55E" },
  };

  const config = typeConfig[item.type] || typeConfig.likert;
  const Icon = config.icon;

  return (
    <div className="p-4 rounded-xl border border-[#ECEEF2] bg-white hover:border-[#1E50FF]/20 transition-colors">
      <div className="flex items-start gap-3">
        <span className="w-6 h-6 rounded-full bg-[#F7F8FA] flex items-center justify-center text-[11px] font-medium text-[#9CA3AF] flex-shrink-0 mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium"
              style={{ backgroundColor: config.bg, color: config.text }}
            >
              <Icon className="w-3 h-3" strokeWidth={1.5} />
              {config.label}
            </span>
          </div>
          <p className="text-[13px] text-[#070a4a] leading-relaxed">{item.text}</p>
          {item.type === "likert" && <LikertPreview scale={item.scale} />}
          {item.type === "open" && (
            <div className="mt-3 px-3 py-2.5 bg-[#F7F8FA] rounded-lg border border-[#ECEEF2]">
              <span className="text-[12px] text-[#9CA3AF]">{item.placeholder}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionAccordion({ section }: { section: any }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#F7F8FA] transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-[#1E50FF]/10 flex items-center justify-center text-[11px] font-semibold text-[#1E50FF]">
            {section.questions}
          </span>
          <h3 className="text-[14px] font-semibold text-[#070a4a]">{section.title}</h3>
          <span className="text-[11px] text-[#9CA3AF]">{section.items.length} shown</span>
        </div>
        <span className="w-7 h-7 flex items-center justify-center rounded-lg">
          {open ? (
            <ChevronUp className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
          )}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-3">
          {section.items.map((item: any, i: number) => (
            <QuestionCard key={item.id} item={item} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function QuestionsPreviewTab() {
  const totalShown = sections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="space-y-5">
      {/* Info bar */}
      <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[13px] font-medium text-[#070a4a]">Questions Preview</span>
          <span className="text-[12px] text-[#9CA3AF]">
            Showing {totalShown} of 47 questions · Read-only preview
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#EEF1FF] text-[#1E50FF] text-[11px] font-medium rounded-md">
            <BarChart3 className="w-3 h-3" strokeWidth={1.5} />
            Likert 5-point
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#F0FDF4] text-[#22C55E] text-[11px] font-medium rounded-md">
            <Type className="w-3 h-3" strokeWidth={1.5} />
            Open Text
          </span>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <SectionAccordion key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}