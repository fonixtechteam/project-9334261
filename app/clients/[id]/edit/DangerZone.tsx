"use client";

import { useState } from "react";
import { AlertTriangle, Archive, ArrowLeftRight, Trash2, X } from "lucide-react";

type ModalType = "archive" | "delete" | null;

const actions = [
  {
    title: "Archive Client",
    description: "Move client to archive. Surveys remain accessible.",
    icon: Archive,
    button: "Archive",
    solid: false,
  },
  {
    title: "Transfer Ownership",
    description: "Move client to another E&B consultant.",
    icon: ArrowLeftRight,
    button: "Transfer",
    solid: false,
  },
  {
    title: "Delete Client",
    description: "Permanently delete client and all associated data. Cannot be undone.",
    icon: Trash2,
    button: "Delete Permanently",
    solid: true,
  },
];

export default function DangerZone() {
  const [modal, setModal] = useState<ModalType>(null);
  const [input, setInput] = useState("");

  const close = () => {
    setModal(null);
    setInput("");
  };

  const modalContent = {
    archive: {
      icon: Archive,
      title: "Archive Client",
      body: (
        <>
          <p className="text-[13px] text-[#6B7280] mt-3">
            Are you sure you want to archive <strong className="text-[#070a4a]">Nordea Bank</strong>?
          </p>
          <p className="text-[12px] text-[#9CA3AF] mt-2">
            The client will be moved to the archive. All surveys and reports will remain accessible, but the client will be hidden from the active list.
          </p>
        </>
      ),
      confirm: "Archive",
      danger: false,
    },
    delete: {
      icon: Trash2,
      title: "Delete Client Permanently",
      body: (
        <>
          <p className="text-[13px] text-[#6B7280] mt-3">
            You are about to permanently delete <strong className="text-[#070a4a]">Nordea Bank</strong> and all associated data.
          </p>
          <p className="text-[12px] text-[#9CA3AF] mt-2">
            This action cannot be undone. Please type <strong className="text-[#070a4a]">Nordea Bank</strong> to confirm.
          </p>
          <div className="mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type client name to confirm"
              className="w-full h-[44px] px-3 rounded-lg border border-[#ECEEF2] bg-white text-[13px] text-[#070a4a] outline-none focus:border-[#1E50FF] focus:ring-2 focus:ring-[#1E50FF]/10 transition-all"
            />
          </div>
        </>
      ),
      confirm: "Delete Permanently",
      danger: true,
    },
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-[#FEE2E2] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="px-6 py-5 border-b border-[#FEE2E2] flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50">
            <AlertTriangle className="w-4 h-4 text-red-500" strokeWidth={1.5} />
          </span>
          <h2 className="text-[16px] font-normal text-[#070a4a]">Danger Zone</h2>
        </div>

        <div className="divide-y divide-[#FEE2E2]">
          {actions.map((a) => (
            <div key={a.title} className="px-6 py-5 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">
                    <a.icon className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
                  </span>
                  <p className="text-[13px] font-medium text-[#070a4a]">{a.title}</p>
                </div>
                <p className="text-[12px] text-[#6B7280] mt-0.5 ml-6">{a.description}</p>
              </div>
              {a.button === "Archive" && (
                <button
                  onClick={() => setModal("archive")}
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-[12px] font-medium cursor-pointer whitespace-nowrap transition-colors border border-red-300 text-red-500 hover:bg-red-50"
                >
                  {a.button}
                </button>
              )}
              {a.button === "Transfer" && (
                <button
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-[12px] font-medium cursor-pointer whitespace-nowrap transition-colors border border-red-300 text-red-500 hover:bg-red-50"
                >
                  {a.button}
                </button>
              )}
              {a.button === "Delete Permanently" && (
                <button
                  onClick={() => setModal("delete")}
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-[12px] font-medium cursor-pointer whitespace-nowrap transition-colors bg-red-500 text-white hover:bg-red-600"
                >
                  {a.button}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={close} />
          <div className="relative bg-white rounded-2xl border border-[#ECEEF2] shadow-2xl w-[420px] max-w-[90vw] p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50">
                  {(() => {
                    const Icon = modalContent[modal].icon;
                    return <Icon className="w-5 h-5 text-red-500" strokeWidth={1.5} />;
                  })()}
                </span>
                <h3 className="text-[16px] font-medium text-[#070a4a]">{modalContent[modal].title}</h3>
              </div>
              <button
                onClick={close}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F7F8FA] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
              </button>
            </div>

            {modalContent[modal].body}

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={close}
                className="px-4 py-2 rounded-lg text-[13px] font-medium text-[#6B7280] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                disabled={modal === "delete" && input !== "Nordea Bank"}
                className={`px-4 py-2 rounded-lg text-[13px] font-medium cursor-pointer whitespace-nowrap transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                  modalContent[modal].danger
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                {modalContent[modal].confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
