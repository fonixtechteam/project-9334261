"use client";

import { useState, useRef, useEffect } from "react";
import { Building2, Users, DollarSign, AlertTriangle, ChevronDown, ToggleLeft, ToggleRight } from "lucide-react";

const listedOptions = ["Publicly Listed", "Privately Held", "State Owned", "Mutual / Cooperative"];
const sizeOptions = ["Enterprise (5000+)", "Large (1000–4999)", "Medium (250–999)", "Small (<250)"];
const revenueOptions = [
  "> €10B",
  "€1B – €10B",
  "€500M – €1B",
  "€100M – €500M",
  "< €100M",
];
const circumstanceOptions = [
  "None",
  "Restructuring",
  "Merger / Acquisition",
  "IPO Preparation",
  "Leadership Transition",
  "Regulatory Investigation",
];

interface ToggleProps {
  label: string;
  enabled: boolean;
  onChange: () => void;
}

function Toggle({ label, enabled, onChange }: ToggleProps) {
  return (
    <button
      onClick={onChange}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <span className="w-9 h-5 rounded-full flex items-center transition-colors relative" style={{ backgroundColor: enabled ? "#1E50FF" : "#ECEEF2" }}>
        <span
          className="w-4 h-4 rounded-full bg-white shadow-sm transition-all absolute"
          style={{ left: enabled ? "18px" : "2px" }}
        />
      </span>
      <span className="text-[13px] text-[#070a4a]">{label}</span>
    </button>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
  icon?: React.ReactNode;
  modified?: boolean;
}

function SelectField({ label, value, options, onChange, icon, modified }: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="space-y-1.5 relative">
      <div className="flex items-center gap-1.5">
        {modified && <span className="w-1.5 h-1.5 rounded-full bg-[#1E50FF] flex-shrink-0" />}
        <label className="text-[12px] font-medium text-[#6B7280]">{label}</label>
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => {
          timeoutRef.current = setTimeout(() => setOpen(false), 150);
        }}
        className="w-full h-[44px] px-3 rounded-lg border border-[#ECEEF2] bg-white text-[13px] text-[#070a4a] flex items-center justify-between outline-none focus:border-[#1E50FF] focus:ring-2 focus:ring-[#1E50FF]/10 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{value}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-[#9CA3AF] transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      {open && (
        <div className="absolute z-20 top-full mt-1 left-0 right-0 bg-white rounded-lg border border-[#ECEEF2] shadow-lg py-1 max-h-48 overflow-y-auto">
          {options.map((o) => (
            <button
              key={o}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { onChange(o); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-[13px] transition-colors cursor-pointer ${
                o === value ? "text-[#1E50FF] bg-[#EEF1FF]" : "text-[#070a4a] hover:bg-[#F7F8FA]"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProfileCharacteristics({ onEdit }: { onEdit: () => void }) {
  const [listed, setListed] = useState("Publicly Listed");
  const [size, setSize] = useState("Enterprise (5000+)");
  const [revenue, setRevenue] = useState("€1B – €10B");
  const [circumstances, setCircumstances] = useState<string[]>(["None"]);
  const [ftse100, setFtse100] = useState(true);
  const [esgRequired, setEsgRequired] = useState(true);
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set());

  const markModified = (key: string) => {
    setModifiedFields((prev) => new Set(prev).add(key));
    onEdit();
  };

  const toggleCircumstance = (c: string) => {
    if (c === "None") {
      setCircumstances(["None"]);
    } else {
      const next = circumstances.includes(c)
        ? circumstances.filter((x) => x !== c)
        : [...circumstances.filter((x) => x !== "None"), c];
      setCircumstances(next.length ? next : ["None"]);
    }
    markModified("circumstances");
  };

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-6 py-5 border-b border-[#ECEEF2]">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-normal text-[#070a4a]">Profile &amp; Characteristics</h2>
          <span className="text-[11px] text-[#9CA3AF]">Last modified 1 week ago</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Listed Status"
            value={listed}
            options={listedOptions}
            onChange={(v) => { setListed(v); markModified("listed"); }}
            icon={<Building2 className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />}
            modified={modifiedFields.has("listed")}
          />
          <SelectField
            label="Company Size"
            value={size}
            options={sizeOptions}
            onChange={(v) => { setSize(v); markModified("size"); }}
            icon={<Users className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />}
            modified={modifiedFields.has("size")}
          />
          <SelectField
            label="Revenue Band"
            value={revenue}
            options={revenueOptions}
            onChange={(v) => { setRevenue(v); markModified("revenue"); }}
            icon={<DollarSign className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />}
            modified={modifiedFields.has("revenue")}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-1.5">
            {modifiedFields.has("circumstances") && <span className="w-1.5 h-1.5 rounded-full bg-[#1E50FF] flex-shrink-0" />}
            <label className="text-[12px] font-medium text-[#6B7280]">Active Circumstances</label>
          </div>
          <div className="flex flex-wrap gap-2">
            {circumstanceOptions.map((c) => (
              <button
                key={c}
                onClick={() => toggleCircumstance(c)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                  circumstances.includes(c)
                    ? "bg-[#EEF1FF] text-[#1E50FF] border border-[#1E50FF]/20"
                    : "bg-[#F4F5F7] text-[#6B7280] border border-[#ECEEF2]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#ECEEF2] space-y-4">
          <p className="text-[12px] font-medium text-[#6B7280] uppercase tracking-wider">Governance Flags</p>
          <div className="grid grid-cols-2 gap-4">
            <Toggle
              label="FTSE 100 Constituent"
              enabled={ftse100}
              onChange={() => { setFtse100(!ftse100); markModified("ftse100"); }}
            />
            <Toggle
              label="ESG Reporting Required"
              enabled={esgRequired}
              onChange={() => { setEsgRequired(!esgRequired); markModified("esgRequired"); }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}