"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import ClientsSidebar from "./ClientsSidebar";
import ClientsHeader from "./ClientsHeader";
import ClientsKPICards from "./ClientsKPICards";
import ClientsFilterBar from "./ClientsFilterBar";
import ClientsTable from "./ClientsTable";
import ClientsBottomBento from "./ClientsBottomBento";

export default function ClientsPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <ClientsSidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <ClientsHeader />

        <main className="flex-1 p-8 space-y-5 overflow-y-auto">
          <ClientsKPICards />

          <ClientsFilterBar viewMode={viewMode} setViewMode={setViewMode} />

          <ClientsTable viewMode={viewMode} />

          <ClientsBottomBento />

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