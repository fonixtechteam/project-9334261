"use client";

import { useState } from "react";
import { Clock, TrendingUp, Database, ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const closingSurveys = [
  { client: "AXA Insurance", survey: "ESG Readiness Assessment", days: 2 },
  { client: "L'Oréal", survey: "C-Suite Annual Evaluation", days: 4 },
  { client: "Swiss Re", survey: "Board Risk Oversight Review", days: 6 },
];

const topClients = [
  { name: "Siemens AG", rate: 98 },
  { name: "Allianz Group", rate: 94 },
  { name: "Nordea Bank", rate: 91 },
  { name: "AXA Insurance", rate: 88 },
  { name: "Roche Holding", rate: 85 },
];

const benchmarkData = [
  { sector: "Healthcare", score: 8.2 },
  { sector: "Consumer", score: 7.1 },
  { sector: "Tech", score: 8.0 },
];

const sectorFilters = ["All Sectors", "Financial", "Healthcare", "Industrial", "Consumer", "Tech"];

export default function InsightsRow() {
  const [sectorFilter, setSectorFilter] = useState("All Sectors");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <section className="grid grid-cols-12 gap-6">
      {/* Surveys Closing This Week */}
      <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center gap-2.5">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FEE2E2]">
            <Clock className="w-4 h-4 text-[#DC2626]" strokeWidth={1.5} />
          </span>
          <h2 className="text-[18px] font-normal text-[#1E50FF]">
            Surveys Closing This Week
          </h2>
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1">
          {closingSurveys.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F8FA] hover:bg-[#F4F5F7] transition-colors"
            >
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#070a4a] truncate">
                  {s.client}
                </p>
                <p className="text-[11px] text-[#6B7280] mt-0.5 truncate">
                  {s.survey}
                </p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 ml-3">
                <Clock className="w-3.5 h-3.5 text-[#DC2626]" strokeWidth={2} />
                <span className="text-[12px] font-semibold text-[#DC2626] whitespace-nowrap">
                  {s.days}d left
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performing Clients */}
      <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center gap-2.5">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E8F5EE]">
            <TrendingUp className="w-4 h-4 text-[#22C55E]" strokeWidth={1.5} />
          </span>
          <h2 className="text-[18px] font-normal text-[#1E50FF]">
            Top Performing Clients
          </h2>
        </div>

        <div className="p-5 flex flex-col gap-3.5 flex-1">
          {topClients.map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[13px] font-medium text-[#9CA3AF] w-5 text-center">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[#070a4a] truncate">
                  {c.name}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-20 h-1.5 bg-[#ECEEF2] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1E50FF]"
                    style={{ width: `${c.rate}%` }}
                  />
                </div>
                <span className="text-[12px] font-medium text-[#070a4a] w-8 text-right">
                  {c.rate}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benchmark Highlights */}
      <div className="col-span-4 bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="px-5 py-4 border-b border-[#ECEEF2] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#EEF1FF]">
              <Database className="w-4 h-4 text-[#1E50FF]" strokeWidth={1.5} />
            </span>
            <h2 className="text-[18px] font-normal text-[#1E50FF]">
              Benchmark Highlights
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#6B7280] hover:border-[#1E50FF]/30 hover:bg-[#F7F8FA] transition-all cursor-pointer"
            >
              {sectorFilter}
              <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
            </button>

            {filterOpen && (
              <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl border border-[#ECEEF2] shadow-lg z-30 py-1">
                {sectorFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      setSectorFilter(f);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-[12px] transition-colors cursor-pointer ${
                      f === sectorFilter
                        ? "bg-[#EEF1FF] text-[#1E50FF] font-medium"
                        : "text-[#6B7280] hover:bg-[#F7F8FA]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <p className="text-[12px] text-[#6B7280] mb-3">
            Average board effectiveness scores by sector
          </p>

          <div className="flex-1 min-h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={benchmarkData} barSize={32} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F4F5F7" vertical={false} />
                <XAxis
                  dataKey="sector"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  domain={[0, 10]}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 10,
                    border: "1px solid #ECEEF2",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    fontSize: 12,
                    padding: "8px 12px",
                  }}
                  formatter={(value) => [`${value}/10`, "Score"]}
                  cursor={{ fill: "rgba(30,80,255,0.04)" }}
                />
                <Bar
                  dataKey="score"
                  fill="#1E50FF"
                  radius={[6, 6, 0, 0]}
                  fillOpacity={0.85}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}