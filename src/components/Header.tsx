"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl" role="img" aria-label="mushroom">
              🍄
            </span>
            <span className="text-xl font-bold font-[family-name:var(--font-playfair)] tracking-tight">
              ShroomMaps
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              href="/search"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Find Retailers
            </Link>
            <Link
              href="/learn"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/legal"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Legal Map
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-white/20 pt-3" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              <Link
                href="/search"
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Find Retailers
              </Link>
              <Link
                href="/learn"
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/legal"
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Legal Map
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
