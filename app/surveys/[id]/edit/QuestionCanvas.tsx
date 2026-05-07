"use client";

import { useState } from "react";
import {
  GripVertical,
  Copy,
  Trash2,
  Settings,
  Plus,
  Check,
  MessageSquare,
  Users,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

const questionTypePills: Record<string, { label: string; bg: string; text: string }> = {
  likert: { label: "5-point Likert", bg: "#EEF1FF", text: "#1E50FF" },
  open: { label: "Open Text", bg: "#F7F8FA", text: "#6B7280" },
  linear: { label: "Linear Scale", bg: "#FDF4E8", text: "#B07D2A" },
  matrix: { label: "2x2 Matrix", bg: "#F3E8FF", text: "#8B5CF6" },
};

const questions = [
  {
    id: 1,
    text: "The audit committee has adequate expertise and independence to challenge management on financial controls",
    type: "likert",
    required: true,
    commentBox: true,
    recipients: ["Board Members", "NEDs"],
    customized: true,
  },
  {
    id: 2,
    text: "What improvements would you suggest to strengthen the board's risk oversight capabilities?",
    type: "open",
    required: false,
    commentBox: false,
    recipients: ["Board Members"],
    customized: false,
  },
  {
    id: 3,
    text: "How would you rate the board's approach to emerging regulatory risk in the past 12 months?",
    type: "linear",
    required: true,
    commentBox: true,
    recipients: ["Board Members"],
    customized: true,
  },
  {
    id: 4,
    text: "The board receives timely and comprehensive risk reports from management ahead of board meetings",
    type: "likert",
    required: true,
    commentBox: false,
    recipients: ["Board Members", "NEDs", "Observers"],
    customized: false,
  },
];

function LikertPreview() {
  const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
  return (
    <div className="flex items-center gap-4 mt-3">
      {labels.map((label, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className="w-5 h-5 rounded-full border-2 border-[#ECEEF2] bg-white" />
          <span className="text-[9px] text-[#9CA3AF] text-center max-w-[56px] leading-tight">{label}</span>
        </div>
      ))}
    </div>
  );
}

function OpenTextPreview() {
  return (
    <div className="mt-3 px-3 py-2.5 bg-[#F7F8FA] rounded-lg border border-[#ECEEF2]">
      <span className="text-[11px] text-[#9CA3AF]">Enter your response here...</span>
    </div>
  );
}

function LinearPreview() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="mt-3 flex items-center gap-3">
      <span className="text-[10px] text-[#9CA3AF]">Poor</span>
      <div className="flex items-center gap-1">
        {numbers.map((n) => (
          <span key={n} className="w-5 h-5 rounded-md border border-[#ECEEF2] flex items-center justify-center text-[9px] text-[#9CA3AF]">
            {n}
          </span>
        ))}
      </div>
      <span className="text-[10px] text-[#9CA3AF]">Excellent</span>
    </div>
  );
}

function MatrixPreview() {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="border border-[#ECEEF2] rounded-lg">
        <thead>
          <tr>
            <th className="px-2 py-1 text-[9px] text-[#9CA3AF] font-medium border-b border-r border-[#ECEEF2]"></th>
            <th className="px-2 py-1 text-[9px] text-[#9CA3AF] font-medium border-b border-r border-[#ECEEF2]">Low</th>
            <th className="px-2 py-1 text-[9px] text-[#9CA3AF] font-medium border-b border-[#ECEEF2]">High</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-1 text-[9px] text-[#9CA3AF] font-medium border-r border-[#ECEEF2]">Current</td>
            <td className="px-2 py-1 border-r border-[#ECEEF2]"><span className="w-3 h-3 rounded-full border border-[#ECEEF2] block" /></td>
            <td className="px-2 py-1"><span className="w-3 h-3 rounded-full border border-[#ECEEF2] block" /></td>
          </tr>
          <tr>
            <td className="px-2 py-1 text-[9px] text-[#9CA3AF] font-medium border-r border-t border-[#ECEEF2]">Target</td>
            <td className="px-2 py-1 border-r border-t border-[#ECEEF2]"><span className="w-3 h-3 rounded-full border border-[#ECEEF2] block" /></td>
            <td className="px-2 py-1 border-t border-[#ECEEF2]"><span className="w-3 h-3 rounded-full border border-[#ECEEF2] block" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function QuestionCard({
  question,
  index,
  active,
  onSelect,
  bulkEditMode,
}: {
  question: any;
  index: number;
  active: boolean;
  onSelect: () => void;
  bulkEditMode: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const pill = questionTypePills[question.type] || questionTypePills.likert;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      className={`relative rounded-2xl border bg-white p-5 transition-all cursor-pointer ${
        active
          ? "border-[#1E50FF] shadow-[0_0_0_2px_#1E50FF] ring-2 ring-[#1E50FF]/20"
          : "border-[#ECEEF2] hover:border-[#1E50FF]/30 hover:shadow-sm"
      } ${question.customized ? "overflow-hidden" : ""}`}
    >
      {question.customized && !active && (
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[24px] border-t-[24px] border-l-[#1E50FF] border-t-[#1E50FF]" />
      )}

      <div className="flex items-start gap-3">
        {bulkEditMode && (
          <input type="checkbox" className="mt-1 w-4 h-4 accent-[#1E50FF] rounded flex-shrink-0" />
        )}

        <span className="w-5 h-5 flex items-center justify-center text-[#9CA3AF] flex-shrink-0 mt-0.5">
          <GripVertical className="w-4 h-4" strokeWidth={1.5} />
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2 py-0.5 bg-[#070a4a] text-white text-[10px] font-semibold rounded-md">
              Q{index + 1}
            </span>
            <span
              className="px-2 py-0.5 rounded-md text-[10px] font-medium"
              style={{ backgroundColor: pill.bg, color: pill.text }}
            >
              {pill.label}
            </span>
            {question.customized && (
              <span className="px-2 py-0.5 bg-[#EEF1FF] text-[#1E50FF] text-[10px] font-medium rounded-md">
                Customized
              </span>
            )}
          </div>

          <input
            type="text"
            defaultValue={question.text}
            className="w-full text-[13px] font-medium text-[#070a4a] bg-transparent border-0 focus:outline-none focus:ring-0 p-0 leading-relaxed"
            onClick={(e) => e.stopPropagation()}
          />

          {question.type === "likert" && <LikertPreview />}
          {question.type === "open" && <OpenTextPreview />}
          {question.type === "linear" && <LinearPreview />}
          {question.type === "matrix" && <MatrixPreview />}

          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#F4F5F7] flex-wrap">
            {question.required && (
              <span className="flex items-center gap-1 text-[10px] text-[#22C55E]">
                <CheckCircle2 className="w-3 h-3" strokeWidth={2} />
                Required
              </span>
            )}
            {question.commentBox && (
              <span className="flex items-center gap-1 text-[10px] text-[#6B7280]">
                <MessageSquare className="w-3 h-3" strokeWidth={1.5} />
                Comment
              </span>
            )}
            <span className="flex items-center gap-1 text-[10px] text-[#6B7280]">
              <Users className="w-3 h-3" strokeWidth={1.5} />
              {question.recipients.join(", ")}
            </span>
            {question.customized && (
              <button className="flex items-center gap-1 text-[10px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer ml-auto">
                <RotateCcw className="w-3 h-3" strokeWidth={2} />
                Reset to Template
              </button>
            )}
          </div>
        </div>

        <div
          className={`flex flex-col gap-1 flex-shrink-0 transition-opacity ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#FEF2F2] transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5 text-[#DC2626]/70" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] transition-colors"
          >
            <Settings className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuestionCanvas({
  activeQuestion,
  onQuestionSelect,
  bulkEditMode,
}: {
  activeQuestion: number;
  onQuestionSelect: (idx: number) => void;
  bulkEditMode: boolean;
}) {
  const [addHovered, setAddHovered] = useState<number | null>(null);

  return (
    <main className="flex-1 overflow-y-auto bg-[#F7F8FA] rounded-2xl">
      <div className="mb-5">
        <input
          type="text"
          defaultValue="Risk Oversight & Audit"
          className="w-full text-[22px] font-light text-[#070a4a] bg-transparent border-0 focus:outline-none focus:ring-0 p-0 leading-tight"
        />
        <textarea
          defaultValue="Evaluate the board's risk management and audit committee effectiveness"
          className="w-full mt-2 text-[13px] text-[#6B7280] bg-transparent border-0 focus:outline-none focus:ring-0 p-0 resize-none"
          rows={2}
        />
      </div>

      <div className="space-y-4 max-w-[720px]">
        {questions.map((q, i) => (
          <div key={q.id} className="relative">
            <QuestionCard
              question={q}
              index={i}
              active={activeQuestion === i}
              onSelect={() => onQuestionSelect(i)}
              bulkEditMode={bulkEditMode}
            />
            {addHovered === i && (
              <button className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-10 flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-[#ECEEF2] text-[11px] font-medium text-[#1E50FF] hover:border-[#1E50FF]/30 transition-all cursor-pointer shadow-sm whitespace-nowrap">
                <Plus className="w-3 h-3" strokeWidth={2} />
                Add Question
              </button>
            )}
            <div
              className="h-4"
              onMouseEnter={() => setAddHovered(i)}
              onMouseLeave={() => setAddHovered(null)}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 max-w-[720px]">
        <button className="w-full flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl border border-dashed border-[#ECEEF2] text-[13px] font-medium text-[#9CA3AF] hover:text-[#1E50FF] hover:border-[#1E50FF]/30 transition-all cursor-pointer whitespace-nowrap">
          <Plus className="w-4 h-4" strokeWidth={2} />
          Add Question
        </button>
      </div>

      <div className="h-6" />
    </main>
  );
}