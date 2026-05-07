"use client";

export default function ClientSnapshot() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#070a4a] p-6">
      <div className="absolute top-3 right-4 text-[120px] font-bold text-white/[0.08] leading-none select-none pointer-events-none">
        &amp;
      </div>

      <div className="relative z-10">
        <h3 className="text-[14px] font-medium text-white/80 mb-4">Client Snapshot</h3>

        <div className="space-y-4">
          <div>
            <p className="text-[28px] font-light text-white leading-none tracking-tight">47</p>
            <p className="text-[12px] text-white/60 mt-1">Total Respondents</p>
          </div>

          <div>
            <p className="text-[28px] font-light text-white leading-none tracking-tight">3</p>
            <p className="text-[12px] text-white/60 mt-1">Active Surveys</p>
          </div>

          <div>
            <p className="text-[14px] font-medium text-white leading-none">Client since Mar 2024</p>
            <p className="text-[12px] text-white/60 mt-1">12 months active</p>
          </div>
        </div>

        <p className="text-[12px] text-white/50 mt-6 pt-4 border-t border-white/10">
          Edits apply across all linked surveys
        </p>
      </div>
    </div>
  );
}