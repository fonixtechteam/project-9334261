"use client";

import { useState } from "react";
import { Users, Shield, FileSpreadsheet, ChevronDown, Minus, Plus } from "lucide-react";

interface RoleRow {
  role: string;
  admin: boolean;
  createSurveys: boolean;
  viewReports: boolean;
  manageRespondents: boolean;
  editBranding: boolean;
}

const initialRoles: RoleRow[] = [
  { role: "Consultant Admin", admin: true, createSurveys: true, viewReports: true, manageRespondents: true, editBranding: true },
  { role: "Board Member", admin: false, createSurveys: false, viewReports: true, manageRespondents: false, editBranding: false },
  { role: "Company Secretary", admin: false, createSurveys: true, viewReports: true, manageRespondents: true, editBranding: false },
  { role: "External Auditor", admin: false, createSurveys: false, viewReports: true, manageRespondents: false, editBranding: false },
  { role: "Chair", admin: false, createSurveys: false, viewReports: true, manageRespondents: false, editBranding: false },
];

const permissions = [
  { key: "admin" as const, label: "Admin" },
  { key: "createSurveys" as const, label: "Create Surveys" },
  { key: "viewReports" as const, label: "View Reports" },
  { key: "manageRespondents" as const, label: "Manage Respondents" },
  { key: "editBranding" as const, label: "Edit Branding" },
];

export default function TeamPermissions({ onEdit }: { onEdit: () => void }) {
  const [roles, setRoles] = useState<RoleRow[]>(initialRoles);
  const [counts, setCounts] = useState({ admin: 1, boardMembers: 12, surveyAccess: 3 });
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set());

  const togglePermission = (roleIdx: number, permKey: keyof RoleRow) => {
    setRoles((prev) => {
      const next = [...prev];
      next[roleIdx] = { ...next[roleIdx], [permKey]: !next[roleIdx][permKey] };
      return next;
    });
    setModifiedFields((prev) => new Set(prev).add(`perm-${roleIdx}-${permKey}`));
    onEdit();
  };

  const updateCount = (key: keyof typeof counts, delta: number) => {
    setCounts((prev) => ({ ...prev, [key]: Math.max(0, prev[key] + delta) }));
    setModifiedFields((prev) => new Set(prev).add(key));
    onEdit();
  };

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-6 py-5 border-b border-[#ECEEF2]">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-normal text-[#070a4a]">Team &amp; Permissions</h2>
          <span className="text-[11px] text-[#9CA3AF]">Last modified 1 month ago</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Count Editors */}
        <div className="grid grid-cols-3 gap-4">
          <CountEditor
            label="Admin Users"
            icon={<Shield className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />}
            value={counts.admin}
            onIncrement={() => updateCount("admin", 1)}
            onDecrement={() => updateCount("admin", -1)}
            modified={modifiedFields.has("admin")}
          />
          <CountEditor
            label="Board Members"
            icon={<Users className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />}
            value={counts.boardMembers}
            onIncrement={() => updateCount("boardMembers", 1)}
            onDecrement={() => updateCount("boardMembers", -1)}
            modified={modifiedFields.has("boardMembers")}
          />
          <CountEditor
            label="Survey Access"
            icon={<FileSpreadsheet className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />}
            value={counts.surveyAccess}
            onIncrement={() => updateCount("surveyAccess", 1)}
            onDecrement={() => updateCount("surveyAccess", -1)}
            modified={modifiedFields.has("surveyAccess")}
          />
        </div>

        {/* Permissions Matrix */}
        <div className="pt-4 border-t border-[#ECEEF2]">
          <p className="text-[12px] font-medium text-[#6B7280] uppercase tracking-wider mb-3">Permissions Matrix</p>
          <div className="rounded-xl border border-[#ECEEF2] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F7F8FA] border-b border-[#ECEEF2]">
                    <th className="px-4 py-3 text-left text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider whitespace-nowrap">Role</th>
                    {permissions.map((p) => (
                      <th key={p.key} className="px-3 py-3 text-center text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider whitespace-nowrap">
                        {p.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role, ri) => (
                    <tr key={role.role} className="border-b border-[#F4F5F7] last:border-0">
                      <td className="px-4 py-3">
                        <span className="text-[13px] font-medium text-[#070a4a] whitespace-nowrap">{role.role}</span>
                      </td>
                      {permissions.map((perm) => (
                        <td key={perm.key} className="px-3 py-3 text-center">
                          <button
                            onClick={() => togglePermission(ri, perm.key)}
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-all cursor-pointer ${
                              role[perm.key]
                                ? "bg-[#1E50FF] border-[#1E50FF]"
                                : "bg-white border-[#ECEEF2] hover:border-[#1E50FF]/30"
                            }`}
                          >
                            {role[perm.key] && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CountEditor({
  label,
  icon,
  value,
  onIncrement,
  onDecrement,
  modified,
}: {
  label: string;
  icon: React.ReactNode;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  modified: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5">
        {modified && <span className="w-1.5 h-1.5 rounded-full bg-[#1E50FF] flex-shrink-0" />}
        <label className="text-[12px] font-medium text-[#6B7280]">{label}</label>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F7F8FA]">{icon}</span>
        <button
          onClick={onDecrement}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#ECEEF2] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
        >
          <Minus className="w-3.5 h-3.5 text-[#6B7280]" strokeWidth={1.5} />
        </button>
        <span className="w-10 text-center text-[15px] font-medium text-[#070a4a]">{value}</span>
        <button
          onClick={onIncrement}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#ECEEF2] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5 text-[#6B7280]" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}