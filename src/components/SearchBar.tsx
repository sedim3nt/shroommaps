"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
  defaultValue?: string;
  large?: boolean;
}

export default function SearchBar({ defaultValue = "", large = false }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <label htmlFor="search-input" className="sr-only">
        Search for mushroom retailers
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className={`${large ? "w-6 h-6" : "w-5 h-5"} text-secondary`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city, name, or type..."
          className={`w-full ${
            large ? "py-4 pl-13 pr-32 text-lg" : "py-3 pl-12 pr-24 text-sm"
          } bg-white border border-secondary/20 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-soil placeholder-soil-light/60 transition-shadow`}
        />
        <button
          type="submit"
          className={`absolute right-2 ${
            large ? "top-2 px-6 py-2 text-base" : "top-1.5 px-4 py-1.5 text-sm"
          } bg-accent hover:bg-accent-light text-soil font-semibold rounded-full transition-colors shadow-sm`}
        >
          Search
        </button>
      </div>
    </form>
  );
}
