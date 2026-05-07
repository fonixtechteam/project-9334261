"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function AIAssistButton() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div
      className="fixed bottom-20 right-6 z-50"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <button className="w-12 h-12 rounded-full bg-[#1E50FF] text-white flex items-center justify-center shadow-lg hover:bg-[#1843D8] hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
        <Sparkles className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {tooltipVisible && (
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-[#070a4a] text-white text-[12px] font-medium rounded-lg whitespace-nowrap shadow-lg">
          AI Assist — rephrase, translate, suggest
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#070a4a] rotate-45" />
        </div>
      )}
    </div>
  );
}