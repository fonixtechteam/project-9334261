"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  FileSpreadsheet,
  FileText,
  Workflow,
  BarChart3,
  Database,
  Sparkles,
  Settings,
  HelpCircle,
  Rocket,
  ChevronDown,
} from "lucide-react";

const primaryNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false, href: "/" },
  { icon: Building2, label: "Clients", active: false, href: "/clients" },
  { icon: FileSpreadsheet, label: "Surveys", active: false, href: "/surveys" },
  { icon: FileText, label: "Templates", active: true, href: "/templates" },
  { icon: Workflow, label: "Smart Builder", active: false, href: "/" },
  { icon: BarChart3, label: "Reports", active: false, href: "/" },
  { icon: Database, label: "Benchmarks", active: false, href: "/" },
  { icon: Sparkles, label: "AI Tools", active: false, href: "/" },
  { icon: Settings, label: "Settings", active: false, href: "/" },
];

const secondaryNavItems = [
  { icon: HelpCircle, label: "Help" },
  { icon: Rocket, label: "What's New" },
];

export default function EditSidebar() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <aside className="fixed left-0 top-0 w-[200px] h-screen bg-[#070a4a] flex flex-col z-50 overflow-hidden">
      <div className="px-3 pt-5 pb-3">
        <img
          src="https://storage.readdy-site.link/project_files/9a88f7ef-28f2-4733-971b-388e7f9f6678/667f0ea0-ded7-47d7-b4c5-4802ae7f6453_2051-Vectorized.svg?v=43ec166dcde1b3310b774790f8ad9dfd"
          alt="Ethics & Boards"
          className="h-8 w-auto"
        />
      </div>

      <nav className="flex-1 px-2.5 overflow-y-auto">
        <div className="space-y-0.5">
          {primaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] font-medium whitespace-nowrap transition-all cursor-pointer relative ${
                item.active ? "bg-white/[0.08] text-white" : "text-white/60 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {item.active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#1E50FF] rounded-r-full" />
              )}
              <span className="w-4 h-4 flex items-center justify-center">
                <item.icon className="w-[16px] h-[16px]" strokeWidth={item.active ? 2 : 1.5} />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 space-y-0.5">
          {secondaryNavItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] font-medium text-white/60 hover:bg-white/[0.05] hover:text-white transition-all whitespace-nowrap cursor-pointer"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <item.icon className="w-[16px] h-[16px]" strokeWidth={1.5} />
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="px-2.5 pb-3 pt-2 border-t border-white/10 relative">
        <button onClick={() => setProfileOpen(!profileOpen)} className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.05] transition-all cursor-pointer">
          <img src="https://readdy.ai/api/search-image?query=professional%20female%20business%20consultant%20headshot%20portrait%2C%20warm%20studio%20lighting%2C%20neutral%20background%2C%20confident%20smile%2C%20corporate%20attire%2C%20high%20quality%20photograph&width=80&height=80&seq=1&orientation=squarish" alt="Sarah Mitchell" className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
          <div className="flex-1 text-left min-w-0">
            <p className="text-[11px] font-medium text-white truncate">Sarah Mitchell</p>
            <p className="text-[10px] text-white/50 truncate">Consultant</p>
          </div>
          <ChevronDown className={`w-3.5 h-3.5 text-white/50 transition-transform flex-shrink-0 ${profileOpen ? "rotate-180" : ""}`} />
        </button>

        {profileOpen && (
          <div className="absolute bottom-full left-2.5 right-2.5 mb-1 bg-[#0a0e5a] rounded-lg border border-white/10 shadow-xl py-1.5 z-50">
            <button className="w-full text-left px-2.5 py-1.5 text-[12px] text-white/70 hover:bg-white/5 transition-colors cursor-pointer">Profile</button>
            <button className="w-full text-left px-2.5 py-1.5 text-[12px] text-white/70 hover:bg-white/5 transition-colors cursor-pointer">Settings</button>
            <button className="w-full text-left px-2.5 py-1.5 text-[12px] text-red-400 hover:bg-white/5 transition-colors cursor-pointer">Sign Out</button>
          </div>
        )}
      </div>
    </aside>
  );
}