"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import ClientsSidebar from "../../ClientsSidebar";
import EditHeader from "./EditHeader";
import ProgressStepper from "./ProgressStepper";
import OrganizationDetails from "./OrganizationDetails";
import ProfileCharacteristics from "./ProfileCharacteristics";
import BrandingWorkspace from "./BrandingWorkspace";
import TeamPermissions from "./TeamPermissions";
import DangerZone from "./DangerZone";
import ClientSnapshot from "./ClientSnapshot";
import RecentChanges from "./RecentChanges";
import SmartSuggestions from "./SmartSuggestions";
import NeedHelp from "./NeedHelp";
import BottomBar from "./BottomBar";

const sections = [
  { id: "details", label: "Organization Details", summary: null },
  { id: "profile", label: "Profile & Characteristics", summary: "Listed · Large · No active circumstances" },
  { id: "branding", label: "Branding & Workspace", summary: "Logo uploaded · Custom theme enabled" },
  { id: "team", label: "Team & Permissions", summary: "1 admin · 12 board members · 3 surveys access" },
];

export default function EditClientPage({ clientId }: { clientId: string }) {
  const [activeSection, setActiveSection] = useState("details");
  const [unsavedCount, setUnsavedCount] = useState(3);
  const [hasEdits, setHasEdits] = useState(true);

  const handleEdit = () => {
    setHasEdits(true);
    setUnsavedCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <ClientsSidebar />

      <div className="ml-[240px] min-w-0 flex flex-col">
        <EditHeader clientId={clientId} hasEdits={hasEdits} />

        <main className="flex-1 p-8 pb-24 space-y-6">
          <ProgressStepper
            sections={sections}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-8 space-y-6">
              {activeSection === "details" && (
                <OrganizationDetails onEdit={handleEdit} />
              )}

              {activeSection === "profile" && (
                <ProfileCharacteristics onEdit={handleEdit} />
              )}

              {activeSection === "branding" && (
                <BrandingWorkspace onEdit={handleEdit} />
              )}

              {activeSection === "team" && (
                <TeamPermissions onEdit={handleEdit} />
              )}

              <DangerZone />
            </div>

            {/* Right Column */}
            <div className="col-span-4 space-y-6">
              <ClientSnapshot />
              <RecentChanges />
              <SmartSuggestions onApply={() => { setHasEdits(true); }} />
              <NeedHelp />
            </div>
          </div>

          <footer className="pt-2 pb-1 flex items-center justify-center gap-2 text-[12px] text-[#9CA3AF]">
            <span className="w-4 h-4 flex items-center justify-center">
              <Lock className="w-3 h-3" strokeWidth={1.5} />
            </span>
            <span>EU-hosted · GDPR compliant · SOC 2 Type 2</span>
          </footer>
        </main>

        <BottomBar
          hasEdits={hasEdits}
          unsavedCount={unsavedCount}
          onDiscard={() => { setHasEdits(false); setUnsavedCount(0); }}
          onSaveDraft={() => { setHasEdits(false); setUnsavedCount(0); }}
          onSave={() => { setHasEdits(false); setUnsavedCount(0); }}
        />
      </div>
    </div>
  );
}