"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import TemplatesSidebar from "./TemplatesSidebar";
import TemplatesHeader from "./TemplatesHeader";
import TemplatesKPICards from "./TemplatesKPICards";
import TemplatesFilterBar from "./TemplatesFilterBar";
import TemplatesGrid from "./TemplatesGrid";
import TemplatesBottomBento from "./TemplatesBottomBento";

export default function TemplatesPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <TemplatesSidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <TemplatesHeader />

        <main className="flex-1 p-8 space-y-5 overflow-y-auto">
          <TemplatesKPICards />

          <TemplatesFilterBar viewMode={viewMode} setViewMode={setViewMode} />

          <TemplatesGrid />

          <TemplatesBottomBento />

          <footer className="pt-2 pb-1 flex items-center justify-center gap-2 text-[12px] text-[#9CA3AF]">
            <span className="w-4 h-4 flex items-center justify-center">
              <Lock className="w-3 h-3" strokeWidth={1.5} />
            </span>
            <span>EU-hosted · GDPR compliant · SOC 2 Type 2</span>
          </footer>
        </main>
      </div>
    </div>
  );
}