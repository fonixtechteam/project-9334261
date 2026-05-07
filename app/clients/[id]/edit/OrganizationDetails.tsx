"use client";

import { useState, useRef, useEffect } from "react";
import { Clock, ChevronDown, AlertCircle } from "lucide-react";

const initialData = {
  clientName: "Nordea Bank",
  legalEntity: "Nordea Bank Abp",
  sector: "Banking",
  region: "EU (Nordics)",
  country: "Finland",
  headquarters: "Helsinki",
  website: "https://www.nordea.com",
  founded: "1820",
  description:
    "Nordea Bank is one of the largest financial services groups in the Nordics, providing banking services across personal, business, and wholesale banking. Headquartered in Helsinki, Finland, Nordea serves over 10 million customers across Northern Europe.",
};

const sectorOptions = [
  "Banking",
  "Financial Services",
  "Insurance",
  "Technology",
  "Energy",
  "Healthcare",
];
const regionOptions = ["EU (Nordics)", "EU (Western)", "EU (Eastern)", "North America", "APAC"];

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
  modified?: boolean;
}

function FormField({ label, value, onChange, placeholder, type = "text", modified }: FormFieldProps) {
  const [focus, setFocus] = useState(false);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5">
        {modified && <span className="w-1.5 h-1.5 rounded-full bg-[#1E50FF] flex-shrink-0" />}
        <label className="text-[12px] font-medium text-[#6B7280]">{label}</label>
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        className={`w-full h-[44px] px-3 rounded-lg border bg-white text-[13px] text-[#070a4a] outline-none transition-all ${
          focus
            ? "border-[#1E50FF] ring-2 ring-[#1E50FF]/10"
            : "border-[#ECEEF2]"
        }`}
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
  modified?: boolean;
}

function SelectField({ label, value, options, onChange, modified }: SelectFieldProps) {
  const [focus, setFocus] = useState(false);
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
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
          timeoutRef.current = setTimeout(() => setOpen(false), 150);
        }}
        className={`w-full h-[44px] px-3 rounded-lg border bg-white text-[13px] text-[#070a4a] flex items-center justify-between outline-none transition-all cursor-pointer ${
          focus ? "border-[#1E50FF] ring-2 ring-[#1E50FF]/10" : "border-[#ECEEF2]"
        }`}
      >
        <span>{value}</span>
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

export default function OrganizationDetails({ onEdit }: { onEdit: () => void }) {
  const [form, setForm] = useState(initialData);
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set());

  const update = (key: keyof typeof initialData, val: string) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (val !== initialData[key]) {
      setModifiedFields((prev) => new Set(prev).add(key));
    } else {
      setModifiedFields((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }
    onEdit();
  };

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-6 py-5 border-b border-[#ECEEF2]">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-normal text-[#070a4a]">Organization Details</h2>
          <span className="text-[11px] text-[#9CA3AF]">Last modified 3 days ago</span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Client Name"
            value={form.clientName}
            onChange={(v) => update("clientName", v)}
            modified={modifiedFields.has("clientName")}
          />
          <FormField
            label="Legal Entity"
            value={form.legalEntity}
            onChange={(v) => update("legalEntity", v)}
            modified={modifiedFields.has("legalEntity")}
          />
          <SelectField
            label="Sector"
            value={form.sector}
            options={sectorOptions}
            onChange={(v) => update("sector", v)}
            modified={modifiedFields.has("sector")}
          />
          <SelectField
            label="Region"
            value={form.region}
            options={regionOptions}
            onChange={(v) => update("region", v)}
            modified={modifiedFields.has("region")}
          />
          <FormField
            label="Country"
            value={form.country}
            onChange={(v) => update("country", v)}
            modified={modifiedFields.has("country")}
          />
          <FormField
            label="Headquarters"
            value={form.headquarters}
            onChange={(v) => update("headquarters", v)}
            modified={modifiedFields.has("headquarters")}
          />
          <FormField
            label="Website"
            value={form.website}
            onChange={(v) => update("website", v)}
            type="url"
            modified={modifiedFields.has("website")}
          />
          <FormField
            label="Founded"
            value={form.founded}
            onChange={(v) => update("founded", v)}
            modified={modifiedFields.has("founded")}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            {modifiedFields.has("description") && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E50FF] flex-shrink-0" />
            )}
            <label className="text-[12px] font-medium text-[#6B7280]">Description</label>
          </div>
          <textarea
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            rows={4}
            maxLength={500}
            className="w-full px-3 py-3 rounded-lg border border-[#ECEEF2] bg-white text-[13px] text-[#070a4a] outline-none focus:border-[#1E50FF] focus:ring-2 focus:ring-[#1E50FF]/10 transition-all resize-none"
          />
        </div>

        <div className="pt-1 flex items-center gap-1.5 text-[12px] text-[#9CA3AF] cursor-pointer hover:text-[#1E50FF] transition-colors">
          <span className="w-4 h-4 flex items-center justify-center">
            <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
          </span>
          View Change History
        </div>
      </div>
    </div>
  );
}