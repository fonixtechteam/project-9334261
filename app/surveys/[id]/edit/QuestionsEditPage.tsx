"use client";

import { useState } from "react";
import SurveySidebar from "../SurveySidebar";
import EditSurveyHeader from "./EditSurveyHeader";
import SurveyHeroBanner from "../SurveyHeroBanner";
import EditWarningStrip from "./EditWarningStrip";
import EditSurveyTabs from "./EditSurveyTabs";
import SectionNavigator from "./SectionNavigator";
import QuestionCanvas from "./QuestionCanvas";
import InspectorPanel from "./InspectorPanel";
import BottomBar from "./BottomBar";
import AIAssistButton from "./AIAssistButton";

export default function QuestionsEditPage({ surveyId }: { surveyId: string }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [bulkEditMode, setBulkEditMode] = useState(false);
  const [warningDismissed, setWarningDismissed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <SurveySidebar />

      <div className="ml-[240px] min-w-0 flex flex-col h-screen">
        <EditSurveyHeader surveyId={surveyId} />

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="p-8 space-y-5">
              <SurveyHeroBanner surveyId={surveyId} />
              <EditSurveyTabs />

              {!warningDismissed && (
                <EditWarningStrip onDismiss={() => setWarningDismissed(true)} />
              )}

              <div className="flex gap-5" style={{ minHeight: "calc(100vh - 420px)" }}>
                <SectionNavigator />

                <QuestionCanvas
                  activeQuestion={activeQuestion}
                  onQuestionSelect={setActiveQuestion}
                  bulkEditMode={bulkEditMode}
                />

                <InspectorPanel activeQuestion={activeQuestion} />
              </div>
            </div>
          </div>
        </main>

        <BottomBar />
        <AIAssistButton />
      </div>
    </div>
  );
}