"use client";

import { useState } from "react";
import {
  ChevronDown,
  Plus,
  GripVertical,
  Check,
  AlertTriangle,
  Languages,
  ArrowRight,
  ChevronUp,
  X,
} from "lucide-react";

const tabs = ["Question", "Section", "Logic"];
const recipientOptions = [
  { label: "Board Members", checked: true },
  { label: "NEDs", checked: true },
  { label: "Observers", checked: false },
  { label: "Management", checked: false },
  { label: "Shareholders", checked: false },
];

const scaleLabels = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

export default function InspectorPanel({
  activeQuestion,
}: {
  activeQuestion: number;
}) {
  const [activeTab, setActiveTab] = useState("Question");
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [toggles, setToggles] = useState({
    required: true,
    na: false,
    commentBox: true,
    definition: false,
  });
  const [recipients, setRecipients] = useState(recipientOptions);
  const [diffExpanded, setDiffExpanded] = useState(false);

  const toggleRecipient = (idx: number) => {
    setRecipients((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, checked: !r.checked } : r))
    );
  };

  return (
    <aside className="w-[320px] bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden shrink-0">
      {/* Tabs */}
      <div className="flex border-b border-[#ECEEF2] shrink-0">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex-1 py-3 text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === t
                ? "text-[#1E50FF] border-b-2 border-[#1E50FF]"
                : "text-[#9CA3AF] hover:text-[#6B7280]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
        {/* Question Type */}
        <div>
          <label className="block text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-1.5">
            Question Type
          </label>
          <div className="relative">
            <button
              onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-[#ECEEF2] text-[13px] text-[#070a4a] hover:border-[#1E50FF]/30 transition-colors cursor-pointer"
            >
              <span>5-point Likert</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" strokeWidth={1.5} />
            </button>
            {typeDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-40 py-1">
                {["5-point Likert", "7-point Likert", "Open Text", "Linear Scale", "2x2 Matrix", "Multiple Choice"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeDropdownOpen(false)}
                    className="w-full text-left px-3 py-2 text-[12px] text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Scale Labels */}
        <div>
          <label className="block text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-1.5">
            Scale Labels
          </label>
          <div className="space-y-1.5">
            {scaleLabels.map((label, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-4 h-4 flex items-center justify-center text-[#9CA3AF]">
                  <GripVertical className="w-3 h-3" strokeWidth={1.5} />
                </span>
                <input
                  type="text"
                  defaultValue={label}
                  className="flex-1 px-2.5 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] text-[#070a4a] focus:outline-none focus:ring-2 focus:ring-[#1E50FF]/20 focus:border-[#1E50FF] transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-2">
          {[
            { key: "required", label: "Required" },
            { key: "na", label: "Allow N/A" },
            { key: "commentBox", label: "Comment box" },
            { key: "definition", label: "Add definition tooltip" },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-[13px] text-[#070a4a]">{label}</span>
              <button
                onClick={() =>
                  setToggles((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
                }
                className={`relative w-9 h-5 rounded-full transition-colors cursor-pointer ${
                  toggles[key as keyof typeof toggles] ? "bg-[#1E50FF]" : "bg-[#ECEEF2]"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                    toggles[key as keyof typeof toggles] ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Conditionality */}
        <div>
          <label className="block text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-1.5">
            Conditionality
          </label>
          <div className="p-3 rounded-xl bg-[#F7F8FA] border border-[#ECEEF2] space-y-2">
            <p className="text-[12px] text-[#6B7280]">Show this question if...</p>
            <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap">
              <Plus className="w-3.5 h-3.5" strokeWidth={2} />
              Add Condition
            </button>
          </div>
        </div>

        {/* Recipient Types */}
        <div>
          <label className="block text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-1.5">
            Recipient Types
          </label>
          <div className="flex flex-wrap gap-1.5">
            {recipients.map((r, i) => (
              <button
                key={i}
                onClick={() => toggleRecipient(i)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all cursor-pointer whitespace-nowrap ${
                  r.checked
                    ? "bg-[#EEF1FF] text-[#1E50FF] border-[#1E50FF]/20"
                    : "bg-white text-[#9CA3AF] border-[#ECEEF2] hover:text-[#6B7280]"
                }`}
              >
                {r.checked && <Check className="w-3 h-3" strokeWidth={2} />}
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Translation Status */}
        <div>
          <label className="block text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-1.5">
            Translation Status
          </label>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[12px] text-[#22C55E]">
              <Check className="w-3 h-3" strokeWidth={2} />
              EN
            </span>
            <span className="text-[#ECEEF2]">|</span>
            <span className="flex items-center gap-1 text-[12px] text-[#B07D2A]">
              <AlertTriangle className="w-3 h-3" strokeWidth={1.5} />
              SE
            </span>
            <span className="text-[#ECEEF2]">|</span>
            <span className="flex items-center gap-1 text-[12px] text-[#22C55E]">
              <Check className="w-3 h-3" strokeWidth={2} />
              DE
            </span>
          </div>
          <button className="mt-2 flex items-center gap-1 text-[11px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap">
            <Languages className="w-3 h-3" strokeWidth={1.5} />
            Quick-translate SE
          </button>
        </div>

        {/* Apply link */}
        <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer whitespace-nowrap pt-2 border-t border-[#F4F5F7]">
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          Apply to similar questions
        </button>
      </div>

      {/* Diff Indicator */}
      <div className="border-t border-[#ECEEF2] px-4 py-3 shrink-0">
        <button
          onClick={() => setDiffExpanded(!diffExpanded)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1E50FF] rounded-full" />
            <span className="text-[12px] font-medium text-[#070a4a]">2 differences from template</span>
          </div>
          <span className="text-[11px] font-medium text-[#1E50FF] hover:text-[#070a4a] transition-colors cursor-pointer">
            {diffExpanded ? "Hide" : "View Diff"}
          </span>
        </button>

        {diffExpanded && (
          <div className="mt-3 space-y-2">
            <div className="p-2.5 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-[12px] text-[#DC2626]">
              <div className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>Removed: &quot;Open to all recipients&quot; (was in template)</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#E8F5EE] border border-[#A7F3D0] text-[12px] text-[#22C55E]">
              <div className="flex items-start gap-2">
                <Plus className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>Added: &quot;Comment box enabled&quot; (not in template)</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FEF3C7] border border-[#FDE68A] text-[12px] text-[#B07D2A]">
              <div className="flex items-start gap-2">
                <ChevronUp className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>Changed: Scale labels modified from template defaults</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}