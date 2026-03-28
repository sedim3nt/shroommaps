'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import { getRetailers, getDistinctCities } from '@/lib/retailers'
import RetailerCard from '@/components/ui/RetailerCard'
import VerticalBadge from '@/components/ui/VerticalBadge'
import MapWrapper from '@/components/map/MapWrapper'
import type { Retailer, Vertical } from '@/lib/types'

const VERTICALS: { id: Vertical | ''; label: string; color: string }[] = [
  { id: '', label: 'All', color: '#2D5016' },
  { id: 'therapeutic', label: '🧠 Therapeutic', color: '#7B68AE' },
  { id: 'medicinal', label: '💊 Medicinal', color: '#87A878' },
  { id: 'gourmet', label: '🍽️ Gourmet', color: '#D4853A' },
]

export default function SearchPage() {
  const [retailers, setRetailers] = useState<Retailer[]>([])
  const [selectedVertical, setSelectedVertical] = useState<Vertical | ''>('')
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [searchQuery, setSearchQuery] = useState('')
  const [cities, setCities] = useState<string[]>([])
  const [selectedRetailer, setSelectedRetailer] = useState<Retailer | null>(null)
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [loading, setLoading] = useState(true)

  // Load cities on mount
  useEffect(() => {
    getDistinctCities().then(setCities)
  }, [])

  // Load retailers with filters
  const loadRetailers = useCallback(async () => {
    setLoading(true)
    const data = await getRetailers({
      vertical: selectedVertical || undefined,
      city: selectedCity === 'All Cities' ? undefined : selectedCity,
      search: searchQuery || undefined,
    })
    setRetailers(data)
    setLoading(false)
  }, [selectedVertical, selectedCity, searchQuery])

  useEffect(() => {
    loadRetailers()
  }, [loadRetailers])

  // Debounced search
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(searchInput), 300)
    return () => clearTimeout(timer)
  }, [searchInput])

  return (
    <div
      style={{
        backgroundColor: '#FAF7F0',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Search header */}
      <div
        style={{
          backgroundColor: '#2D5016',
          padding: '20px 24px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '16px',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#FAF7F0',
              }}
            >
              Mushroom Retailers in Colorado
            </h1>
            <span
              style={{
                fontSize: '0.875rem',
                color: 'rgba(250,247,240,0.7)',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              {loading ? 'Loading...' : `${retailers.length} retailers found`}
            </span>
          </div>

          {/* Search input */}
          <div style={{ marginBottom: '12px' }}>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search retailers by name, city, or description..."
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '10px',
                border: '2px solid rgba(255,255,255,0.15)',
                backgroundColor: 'rgba(0,0,0,0.2)',
                color: '#FAF7F0',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Filters */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {/* Vertical filter */}
            {VERTICALS.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVertical(v.id as Vertical | '')}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  border: '2px solid',
                  borderColor: selectedVertical === v.id ? v.color : 'rgba(255,255,255,0.2)',
                  backgroundColor: selectedVertical === v.id ? `${v.color}22` : 'transparent',
                  color: selectedVertical === v.id ? '#FAF7F0' : 'rgba(250,247,240,0.75)',
                  fontSize: '0.8rem',
                  fontWeight: selectedVertical === v.id ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  whiteSpace: 'nowrap',
                }}
              >
                {v.label}
              </button>
            ))}

            {/* City filter - dynamic */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: '9999px',
                border: '2px solid rgba(255,255,255,0.2)',
                backgroundColor: 'rgba(0,0,0,0.2)',
                color: '#FAF7F0',
                fontSize: '0.8rem',
                cursor: 'pointer',
                outline: 'none',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              <option value="All Cities" style={{ backgroundColor: '#2D5016' }}>
                All Cities
              </option>
              {cities.map((c) => (
                <option key={c} value={c} style={{ backgroundColor: '#2D5016' }}>
                  {c}
                </option>
              ))}
            </select>

            {/* View mode toggle (mobile) */}
            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                gap: '4px',
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '8px',
                padding: '4px',
              }}
              className="mobile-toggle"
            >
              {(['map', 'list'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: viewMode === mode ? '#FAF7F0' : 'transparent',
                    color: viewMode === mode ? '#2D5016' : 'rgba(250,247,240,0.7)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  {mode === 'map' ? '🗺 Map' : '☰ List'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '24px',
          alignItems: 'start',
        }}
        className="search-layout"
      >
        {/* Map panel */}
        <div
          style={{
            position: 'sticky',
            top: '88px',
            height: 'calc(100vh - 200px)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
          className={viewMode === 'list' ? 'map-hidden' : ''}
        >
          <MapWrapper
            retailers={retailers}
            onRetailerSelect={(r) => setSelectedRetailer(r)}
            selectedId={selectedRetailer?.id}
          />
        </div>

        {/* Results panel */}
        <div
          className={viewMode === 'map' ? 'list-mobile-hidden' : ''}
        >
          {/* Selected retailer highlight */}
          {selectedRetailer && (
            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#2D5016',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                📍 Selected on map
              </div>
              <RetailerCard retailer={selectedRetailer} highlighted />
            </div>
          )}

          {/* Results list */}
          <div style={{ marginBottom: '12px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#2C1810',
                marginBottom: '4px',
              }}
            >
              {retailers.length} Retailers
            </h2>
            {selectedVertical && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#A89278', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                  Filtering by:
                </span>
                <VerticalBadge vertical={selectedVertical} size="sm" />
                <button
                  onClick={() => setSelectedVertical('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#A89278',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  ✕ Clear
                </button>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {retailers.length === 0 && !loading ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '48px 24px',
                  backgroundColor: '#F0EBE0',
                  borderRadius: '12px',
                  color: '#A89278',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🍄</div>
                <p style={{ fontWeight: 600, marginBottom: '4px' }}>No retailers found</p>
                <p style={{ fontSize: '0.875rem' }}>Try adjusting your filters</p>
              </div>
            ) : (
              retailers.map((retailer) => (
                <div
                  key={retailer.id}
                  onClick={() => setSelectedRetailer(retailer)}
                  style={{ cursor: 'pointer' }}
                >
                  <RetailerCard retailer={retailer} highlighted={selectedRetailer?.id === retailer.id} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .search-layout {
            grid-template-columns: 1fr !important;
          }
          .map-hidden {
            display: none !important;
          }
          .list-mobile-hidden {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .map-hidden {
            display: block !important;
          }
          .list-mobile-hidden {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}
