"use client";

import { useState } from "react";
import EditSidebar from "./EditSidebar";
import EditHeader from "./EditHeader";
import EditToolbar from "./EditToolbar";
import SectionNavigator from "./SectionNavigator";
import QuestionCanvas from "./QuestionCanvas";
import InspectorPanel from "./InspectorPanel";
import BottomBar from "./BottomBar";
import AIAssistButton from "./AIAssistButton";

export default function TemplateEditPage({ templateId }: { templateId: string }) {
  const [activeSection, setActiveSection] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [bulkEditMode, setBulkEditMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <EditSidebar />

      <div className="ml-[200px] min-w-0 flex flex-col h-screen">
        <EditHeader templateId={templateId} />
        <EditToolbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          bulkEditMode={bulkEditMode}
          onToggleBulkEdit={() => setBulkEditMode(!bulkEditMode)}
        />

        <div className="flex-1 flex overflow-hidden">
          <SectionNavigator
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <QuestionCanvas
            activeSection={activeSection}
            activeQuestion={activeQuestion}
            onQuestionSelect={setActiveQuestion}
            bulkEditMode={bulkEditMode}
          />

          <InspectorPanel
            activeQuestion={activeQuestion}
            activeSection={activeSection}
          />
        </div>

        <BottomBar />
        <AIAssistButton />
      </div>
    </div>
  );
}