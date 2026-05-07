"use client";

import { useState, useRef } from "react";
import { Upload, Image, Palette, Check } from "lucide-react";

const presetColors = [
  "#1E50FF", "#070a4a", "#0e4b9e", "#2563EB",
  "#059669", "#7C3AED", "#DC2626", "#EA580C",
  "#0891B2", "#4B5563", "#000000", "#FFFFFF",
];

export default function BrandingWorkspace({ onEdit }: { onEdit: () => void }) {
  const [logoUrl, setLogoUrl] = useState("https://readdy.ai/api/search-image?query=Nordea%20Bank%20official%20logo%20on%20white%20background%2C%20minimal%20clean%20vector%20style%2C%20blue%20color%20scheme%2C%20professional%20corporate%20identity&width=200&height=80&seq=77&orientation=landscape");
  const [customTheme, setCustomTheme] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("#1E50FF");
  const [customColor, setCustomColor] = useState("#1E50FF");
  const [showPicker, setShowPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
      onEdit();
    }
  };

  const pickColor = (c: string) => {
    setPrimaryColor(c);
    setCustomColor(c);
    setShowPicker(false);
    onEdit();
  };

  return (
    <div className="bg-white rounded-2xl border border-[#ECEEF2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-6 py-5 border-b border-[#ECEEF2]">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-normal text-[#070a4a]">Branding &amp; Workspace</h2>
          <span className="text-[11px] text-[#9CA3AF]">Last modified 2 weeks ago</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Logo Upload */}
        <div className="space-y-3">
          <label className="text-[12px] font-medium text-[#6B7280]">Client Logo</label>
          <div className="flex items-center gap-4">
            <div
              onClick={handleLogoClick}
              className="w-[140px] h-[80px] rounded-xl border border-[#ECEEF2] bg-white flex items-center justify-center overflow-hidden cursor-pointer hover:border-[#1E50FF]/30 transition-colors relative group"
            >
              {logoUrl ? (
                <img src={logoUrl} alt="Client logo" className="w-full h-full object-contain p-2" />
              ) : (
                <Image className="w-6 h-6 text-[#9CA3AF]" strokeWidth={1.5} />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl" />
            </div>
            <div className="space-y-1">
              <button
                onClick={handleLogoClick}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#ECEEF2] text-[12px] font-medium text-[#070a4a] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" strokeWidth={1.5} />
                Replace Logo
              </button>
              <p className="text-[11px] text-[#9CA3AF]">PNG, SVG, or JPG. Max 2MB.</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/svg+xml,image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Custom Theme Toggle */}
        <div className="pt-4 border-t border-[#ECEEF2] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-medium text-[#070a4a]">Custom Theme</p>
              <p className="text-[12px] text-[#6B7280] mt-0.5">Apply client brand colours to survey interfaces</p>
            </div>
            <button
              onClick={() => { setCustomTheme(!customTheme); onEdit(); }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="w-9 h-5 rounded-full flex items-center transition-colors relative" style={{ backgroundColor: customTheme ? "#1E50FF" : "#ECEEF2" }}>
                <span className="w-4 h-4 rounded-full bg-white shadow-sm transition-all absolute" style={{ left: customTheme ? "18px" : "2px" }} />
              </span>
            </button>
          </div>

          {customTheme && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
                <label className="text-[12px] font-medium text-[#6B7280]">Primary Brand Colour</label>
              </div>
              <div className="flex flex-wrap gap-2">
                {presetColors.map((c) => (
                  <button
                    key={c}
                    onClick={() => pickColor(c)}
                    className={`w-8 h-8 rounded-lg border-2 transition-all cursor-pointer flex items-center justify-center ${
                      primaryColor === c ? "border-[#1E50FF]" : "border-transparent hover:border-[#ECEEF2]"
                    }`}
                    style={{ backgroundColor: c }}
                  >
                    {primaryColor === c && c !== "#FFFFFF" && (
                      <Check className="w-4 h-4 text-white" strokeWidth={2} />
                    )}
                    {primaryColor === c && c === "#FFFFFF" && (
                      <Check className="w-4 h-4 text-[#070a4a]" strokeWidth={2} />
                    )}
                  </button>
                ))}
                <div className="relative">
                  <button
                    onClick={() => setShowPicker(!showPicker)}
                    className="w-8 h-8 rounded-lg border border-[#ECEEF2] flex items-center justify-center hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-[#6B7280]">#</span>
                  </button>
                  {showPicker && (
                    <div className="absolute top-full mt-2 left-0 bg-white rounded-xl border border-[#ECEEF2] shadow-xl p-3 z-20 w-[240px]">
                      <label className="text-[11px] font-medium text-[#6B7280] mb-2 block">Custom Hex</label>
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] text-[#9CA3AF]">#</span>
                        <input
                          type="text"
                          value={customColor.replace("#", "")}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6);
                            const color = "#" + val;
                            setCustomColor(color);
                            if (val.length === 6) {
                              setPrimaryColor(color);
                              onEdit();
                            }
                          }}
                          className="flex-1 h-8 px-2 rounded-md border border-[#ECEEF2] text-[13px] text-[#070a4a] outline-none focus:border-[#1E50FF] uppercase"
                          maxLength={7}
                        />
                        <div className="w-8 h-8 rounded-md border border-[#ECEEF2]" style={{ backgroundColor: customColor }} />
                      </div>
                      <button
                        onClick={() => setShowPicker(false)}
                        className="mt-2 w-full py-1.5 text-[12px] font-medium text-[#1E50FF] hover:text-[#070a4a] cursor-pointer"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Preview */}
              <div className="mt-3 p-4 rounded-xl border border-[#ECEEF2] bg-[#F7F8FA]">
                <p className="text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider mb-3">Preview</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-[14px] font-bold" style={{ backgroundColor: primaryColor }}>
                    N
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#070a4a]">Nordea Bank</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium text-white" style={{ backgroundColor: primaryColor }}>
                        Active
                      </span>
                      <span className="h-3 w-[1px] bg-[#ECEEF2]" />
                      <span className="text-[11px] text-[#6B7280]">3 surveys running</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}