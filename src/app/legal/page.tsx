"use client";

import { useState } from "react";
import { legalStatuses } from "@/data/legal";
import { LegalStatus } from "@/types";

type StatusType = "legal" | "decriminalized" | "illegal" | "pending";

const statusColors: Record<
  StatusType,
  { bg: string; text: string; label: string }
> = {
  legal: { bg: "bg-medicinal", text: "text-medicinal", label: "Legal" },
  decriminalized: {
    bg: "bg-accent",
    text: "text-accent",
    label: "Decriminalized",
  },
  pending: {
    bg: "bg-therapeutic",
    text: "text-therapeutic",
    label: "Pending Legislation",
  },
  illegal: { bg: "bg-red-400", text: "text-red-500", label: "Illegal" },
};

const statusDot: Record<StatusType, string> = {
  legal: "bg-medicinal",
  decriminalized: "bg-accent",
  pending: "bg-therapeutic",
  illegal: "bg-red-400",
};

export default function LegalPage() {
  const [selectedState, setSelectedState] = useState<LegalStatus | null>(null);
  const [category, setCategory] = useState<"therapeutic" | "medicinal">(
    "therapeutic"
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-4">
          Legal Status Map
        </h1>
        <p className="text-soil-light max-w-2xl mx-auto">
          Mushroom legality varies by state and type. Gourmet mushrooms are legal
          everywhere. Here&apos;s the current landscape for medicinal and
          therapeutic mushrooms.
        </p>
      </div>

      {/* Category Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-bg-alt rounded-full p-1">
          <button
            onClick={() => setCategory("therapeutic")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              category === "therapeutic"
                ? "bg-therapeutic text-white shadow-sm"
                : "text-soil-light hover:text-soil"
            }`}
          >
            🧠 Therapeutic (Psilocybin)
          </button>
          <button
            onClick={() => setCategory("medicinal")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              category === "medicinal"
                ? "bg-medicinal text-white shadow-sm"
                : "text-soil-light hover:text-soil"
            }`}
          >
            🌿 Medicinal
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(statusColors).map(([status, config]) => (
          <div key={status} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${config.bg}`} />
            <span className="text-sm text-soil-light">{config.label}</span>
          </div>
        ))}
      </div>

      {/* State Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-2 mb-10">
        {legalStatuses.map((state) => {
          const status = state[category] as StatusType;
          return (
            <button
              key={state.abbreviation}
              onClick={() => setSelectedState(state)}
              className={`${statusDot[status]} hover:opacity-80 rounded-lg p-2 text-center transition-all ${
                selectedState?.abbreviation === state.abbreviation
                  ? "ring-2 ring-offset-2 ring-soil scale-110"
                  : ""
              }`}
              title={`${state.state}: ${statusColors[status].label}`}
            >
              <span className="text-xs font-bold text-white block">
                {state.abbreviation}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected State Detail */}
      {selectedState ? (
        <div className="bg-white border border-secondary/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-4">
            {selectedState.state}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-bg rounded-xl">
              <p className="text-xs text-soil-light uppercase tracking-wider mb-1">
                Medicinal
              </p>
              <span
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                  statusColors[selectedState.medicinal].text
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    statusDot[selectedState.medicinal]
                  }`}
                />
                {statusColors[selectedState.medicinal].label}
              </span>
            </div>
            <div className="text-center p-4 bg-bg rounded-xl">
              <p className="text-xs text-soil-light uppercase tracking-wider mb-1">
                Therapeutic
              </p>
              <span
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                  statusColors[selectedState.therapeutic].text
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    statusDot[selectedState.therapeutic]
                  }`}
                />
                {statusColors[selectedState.therapeutic].label}
              </span>
            </div>
            <div className="text-center p-4 bg-bg rounded-xl">
              <p className="text-xs text-soil-light uppercase tracking-wider mb-1">
                Gourmet
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-medicinal">
                <span className="w-2 h-2 rounded-full bg-medicinal" />
                Legal
              </span>
            </div>
          </div>
          <p className="text-sm text-soil-light leading-relaxed">
            {selectedState.notes}
          </p>
        </div>
      ) : (
        <div className="text-center text-soil-light py-8">
          <p>Click on a state above to see detailed legal information.</p>
        </div>
      )}

      {/* Full State Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-6">
          All States
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-secondary/10">
                <th className="text-left py-3 px-4 font-semibold text-soil">
                  State
                </th>
                <th className="text-center py-3 px-4 font-semibold text-soil">
                  Medicinal
                </th>
                <th className="text-center py-3 px-4 font-semibold text-soil">
                  Therapeutic
                </th>
                <th className="text-center py-3 px-4 font-semibold text-soil">
                  Gourmet
                </th>
              </tr>
            </thead>
            <tbody>
              {legalStatuses.map((state) => (
                <tr
                  key={state.abbreviation}
                  className="border-b border-secondary/5 hover:bg-bg-alt/50 cursor-pointer transition-colors"
                  onClick={() => setSelectedState(state)}
                >
                  <td className="py-3 px-4 font-medium text-soil">
                    {state.state}
                  </td>
                  {(["medicinal", "therapeutic", "gourmet"] as const).map(
                    (cat) => {
                      const status = state[cat] as StatusType;
                      return (
                        <td key={cat} className="py-3 px-4 text-center">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-medium ${statusColors[status].text}`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${statusDot[status]}`}
                            />
                            {statusColors[status].label}
                          </span>
                        </td>
                      );
                    }
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 p-6 bg-bg-alt rounded-xl text-center">
        <p className="text-xs text-soil-light max-w-2xl mx-auto">
          <strong>Disclaimer:</strong> This information is for educational
          purposes only and may not reflect the most current legislation. Laws
          change frequently. Always verify the current legal status in your
          jurisdiction before purchasing or consuming any mushroom products.
          ShroomMaps is not a legal advisor.
        </p>
      </div>
    </div>
  );
}
