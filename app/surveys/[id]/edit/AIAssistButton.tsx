"use client";

import { Sparkles } from "lucide-react";

export default function AIAssistButton() {
  return (
    <button className="fixed bottom-[72px] right-6 z-50 w-12 h-12 rounded-full bg-[#1E50FF] text-white shadow-lg hover:bg-[#1843D8] hover:shadow-xl transition-all cursor-pointer flex items-center justify-center">
      <Sparkles className="w-5 h-5" strokeWidth={2} />
    </button>
  );
}
