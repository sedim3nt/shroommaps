"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import RetailerCard from "@/components/RetailerCard";
import Map from "@/components/Map";
import { searchRetailers } from "@/data/retailers";

const verticals: { value: string; label: string; color: string }[] = [
  { value: "", label: "All", color: "bg-primary" },
  { value: "medicinal", label: "🌿 Medicinal", color: "bg-medicinal" },
  { value: "therapeutic", label: "🧠 Therapeutic", color: "bg-therapeutic" },
  { value: "gourmet", label: "👨‍🍳 Gourmet", color: "bg-gourmet" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const verticalParam = searchParams.get("vertical") || "";

  const [activeVertical, setActiveVertical] = useState(verticalParam);
  const [showMap, setShowMap] = useState(true);

  const results = useMemo(() => {
    return searchRetailers(q, activeVertical || undefined);
  }, [q, activeVertical]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-4">
          Find Retailers
        </h1>
        <SearchBar defaultValue={q} />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-sm font-medium text-soil-light">Filter:</span>
        {verticals.map((v) => (
          <button
            key={v.value}
            onClick={() => setActiveVertical(v.value)}
            className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all ${
              activeVertical === v.value
                ? `${v.color} text-white shadow-sm`
                : "bg-bg-alt text-soil-light hover:bg-secondary/10"
            }`}
          >
            {v.label}
          </button>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setShowMap(!showMap)}
            className="flex items-center gap-1.5 text-sm text-soil-light hover:text-soil transition-colors px-3 py-1.5 rounded-lg bg-bg-alt"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showMap ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              )}
            </svg>
            {showMap ? "List only" : "Show map"}
          </button>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-soil-light mb-6">
        {results.length} retailer{results.length !== 1 ? "s" : ""} found
        {q ? ` for "${q}"` : ""}
        {activeVertical ? ` in ${activeVertical}` : ""}
      </p>

      {/* Map + List layout */}
      <div
        className={`${
          showMap ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""
        }`}
      >
        {/* Map */}
        {showMap && (
          <div className="lg:sticky lg:top-20 lg:self-start">
            <Map
              retailers={results}
              className="h-[350px] lg:h-[calc(100vh-120px)]"
            />
          </div>
        )}

        {/* List */}
        <div
          className={`grid grid-cols-1 ${
            showMap ? "" : "sm:grid-cols-2 lg:grid-cols-3"
          } gap-4`}
        >
          {results.map((retailer) => (
            <RetailerCard key={retailer.id} retailer={retailer} />
          ))}
          {results.length === 0 && (
            <div className="col-span-full text-center py-16">
              <span className="text-4xl mb-4 block">🍄</span>
              <h3 className="text-lg font-semibold text-soil mb-2">
                No retailers found
              </h3>
              <p className="text-soil-light">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-bg-alt rounded w-48 mb-4" />
            <div className="h-12 bg-bg-alt rounded-full w-full max-w-2xl mb-8" />
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
