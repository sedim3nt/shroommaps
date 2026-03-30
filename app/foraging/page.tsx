'use client'

import { useState, useCallback } from 'react'
import { useAuth } from '@/lib/auth-context'
import ForagingMapWrapper from '@/components/map/ForagingMapWrapper'
import SeasonalHeatmap from '@/components/foraging/SeasonalHeatmap'
import AuthModal from '@/components/auth/AuthModal'
import type { ForagingSpot } from '@/lib/types'
import { FORAGEABLE_SPECIES, HABITATS, SEASONS, TERRAINS } from '@/data/species'

// Demo spots for display (in production these come from Supabase)
const DEMO_SPOTS: ForagingSpot[] = [
  {
    id: 'demo-1',
    userId: 'demo',
    name: 'Flagstaff Chanterelle Ridge',
    description: 'Reliable chanterelle spot after July rains. Check under the Ponderosa pines near the second switchback.',
    latitude: 39.9886,
    longitude: -105.2936,
    isPrivate: false,
    species: ['Chanterelle', 'Hedgehog'],
    habitat: 'Mixed Forest',
    season: ['Summer', 'Fall'],
    terrain: 'Hillside',
    elevation: 7200,
    lastVisited: '2025-09-14',
    photos: [],
    createdAt: '2025-06-01',
  },
  {
    id: 'demo-2',
    userId: 'demo',
    name: 'Left Hand Canyon Morels',
    description: 'Post-burn area from 2024. Incredible morel flushes in May after warm rains.',
    latitude: 40.1178,
    longitude: -105.3964,
    isPrivate: false,
    species: ['Morel'],
    habitat: 'Coniferous Forest',
    season: ['Spring'],
    terrain: 'Mountain',
    elevation: 6800,
    lastVisited: '2025-05-22',
    photos: [],
    createdAt: '2025-04-01',
  },
  {
    id: 'demo-3',
    userId: 'demo',
    name: 'Bear Creek Turkey Tail Log',
    description: 'A downed cottonwood absolutely covered in turkey tail. Great for medicinal harvest year-round.',
    latitude: 39.6478,
    longitude: -105.2314,
    isPrivate: false,
    species: ['Turkey Tail', 'Oyster'],
    habitat: 'Dead Wood',
    season: ['Spring', 'Summer', 'Fall', 'Winter'],
    terrain: 'Valley',
    elevation: 5900,
    lastVisited: '2025-12-03',
    photos: [],
    createdAt: '2025-01-15',
  },
  {
    id: 'demo-4',
    userId: 'demo',
    name: 'Secret Porcini Meadow',
    description: 'High-elevation spruce grove. Only sharing because the access road washed out.',
    latitude: 39.63,
    longitude: -105.85,
    isPrivate: true,
    species: ['Porcini', 'King Bolete'],
    habitat: 'Coniferous Forest',
    season: ['Summer'],
    terrain: 'Mountain',
    elevation: 9400,
    lastVisited: '2025-08-10',
    photos: [],
    createdAt: '2025-07-01',
  },
]

export default function ForagingPage() {
  const { user } = useAuth()
  const [spots] = useState<ForagingSpot[]>(DEMO_SPOTS)
  const [selectedSpot, setSelectedSpot] = useState<ForagingSpot | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [pickMode, setPickMode] = useState(false)
  const [pickLocation, setPickLocation] = useState<[number, number] | null>(null)

  // Filters
  const [filterSpecies, setFilterSpecies] = useState('')
  const [filterSeason, setFilterSeason] = useState('')
  const [filterHabitat, setFilterHabitat] = useState('')

  // Form state
  const [formName, setFormName] = useState('')
  const [formSpecies, setFormSpecies] = useState<string[]>([])
  const [formHabitat, setFormHabitat] = useState('')
  const [formSeason, setFormSeason] = useState<string[]>([])
  const [formTerrain, setFormTerrain] = useState('')
  const [formDescription, setFormDescription] = useState('')
  const [formPrivate, setFormPrivate] = useState(true)

  const filteredSpots = spots.filter((spot) => {
    if (filterSpecies && !spot.species.includes(filterSpecies)) return false
    if (filterSeason && !spot.season.includes(filterSeason)) return false
    if (filterHabitat && spot.habitat !== filterHabitat) return false
    return true
  })

  const handleAddSpot = () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }
    setShowAddForm(true)
    setPickMode(true)
  }

  const handleMapClick = useCallback((lat: number, lng: number) => {
    setPickLocation([lat, lng])
  }, [])

  const toggleSpecies = (s: string) => {
    setFormSpecies((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  const toggleSeason = (s: string) => {
    setFormSeason((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  const handleSubmitSpot = () => {
    // In production, this would POST to Supabase
    alert(`Spot "${formName}" saved! (Demo mode — Supabase integration needed)`)
    setShowAddForm(false)
    setPickMode(false)
    setPickLocation(null)
    setFormName('')
    setFormSpecies([])
    setFormHabitat('')
    setFormSeason([])
    setFormTerrain('')
    setFormDescription('')
    setFormPrivate(true)
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '48px 24px 32px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-fraunces, Fraunces, serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#E0E0E0',
            marginBottom: '8px',
          }}
        >
          Foraging Map
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-literata, Literata, serif)',
            color: '#8A9A8A',
            fontSize: '1.05rem',
            maxWidth: '600px',
            marginBottom: '24px',
          }}
        >
          Map your secret mushroom spots, track observations, and discover public foraging areas across Colorado.
        </p>

        {/* Filters + Add button */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <select
            value={filterSpecies}
            onChange={(e) => setFilterSpecies(e.target.value)}
            style={selectStyle}
          >
            <option value="">All Species</option>
            {FORAGEABLE_SPECIES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <select
            value={filterSeason}
            onChange={(e) => setFilterSeason(e.target.value)}
            style={selectStyle}
          >
            <option value="">All Seasons</option>
            {SEASONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <select
            value={filterHabitat}
            onChange={(e) => setFilterHabitat(e.target.value)}
            style={selectStyle}
          >
            <option value="">All Habitats</option>
            {HABITATS.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>

          <div style={{ flex: 1 }} />

          <button
            onClick={handleAddSpot}
            style={{
              backgroundColor: '#7BC950',
              color: '#0D1F0D',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-literata, Literata, serif)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            + Add Spot
          </button>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {[
            { label: 'Edible', color: '#8B6914', emoji: '🟤' },
            { label: 'Medicinal', color: '#CC3333', emoji: '🔴' },
            { label: 'Caution', color: '#E89A4A', emoji: '⚠️' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.85rem' }}>{item.emoji}</span>
              <span style={{ fontSize: '0.75rem', color: '#8A9A8A', fontFamily: 'var(--font-literata)' }}>
                {item.label}
              </span>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.85rem' }}>🔒</span>
            <span style={{ fontSize: '0.75rem', color: '#8A9A8A', fontFamily: 'var(--font-literata)' }}>Private</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.85rem' }}>🌍</span>
            <span style={{ fontSize: '0.75rem', color: '#8A9A8A', fontFamily: 'var(--font-literata)' }}>Public</span>
          </div>
        </div>

        {pickMode && (
          <div
            style={{
              backgroundColor: 'rgba(123,201,80,0.1)',
              border: '1px solid rgba(123,201,80,0.3)',
              borderRadius: '10px',
              padding: '12px 16px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>📍</span>
            <span style={{ fontSize: '0.85rem', color: '#7BC950', fontFamily: 'var(--font-literata)' }}>
              Tap the map to set your spot location
            </span>
            {pickLocation && (
              <span style={{ fontSize: '0.75rem', color: '#8A9A8A', marginLeft: 'auto' }}>
                {pickLocation[0].toFixed(4)}, {pickLocation[1].toFixed(4)}
              </span>
            )}
          </div>
        )}
      </section>

      {/* Map + Form */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px 40px',
          display: 'grid',
          gridTemplateColumns: showAddForm ? '1fr 380px' : '1fr',
          gap: '24px',
        }}
      >
        <div style={{ height: '500px' }}>
          <ForagingMapWrapper
            spots={filteredSpots}
            onSpotSelect={setSelectedSpot}
            onMapClick={handleMapClick}
            selectedId={selectedSpot?.id}
            pickMode={pickMode}
            pickLocation={pickLocation}
          />
        </div>

        {/* Add Spot Form */}
        {showAddForm && (
          <div
            style={{
              backgroundColor: '#1E2E1E',
              borderRadius: '16px',
              border: '1px solid rgba(123,201,80,0.15)',
              padding: '24px',
              overflowY: 'auto',
              maxHeight: '500px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: '#E0E0E0', fontSize: '1.1rem' }}>
                New Foraging Spot
              </h3>
              <button
                onClick={() => { setShowAddForm(false); setPickMode(false); setPickLocation(null) }}
                style={{ background: 'none', border: 'none', color: '#8A9A8A', cursor: 'pointer', fontSize: '1.2rem' }}
              >
                ✕
              </button>
            </div>

            {/* Name */}
            <label style={labelStyle}>Name *</label>
            <input
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="e.g. Flagstaff Chanterelle Ridge"
              style={inputStyle}
            />

            {/* Species (multi-select tags) */}
            <label style={labelStyle}>Species</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {FORAGEABLE_SPECIES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSpecies(s)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '16px',
                    fontSize: '0.75rem',
                    border: `1px solid ${formSpecies.includes(s) ? '#7BC950' : 'rgba(255,255,255,0.1)'}`,
                    backgroundColor: formSpecies.includes(s) ? 'rgba(123,201,80,0.2)' : 'transparent',
                    color: formSpecies.includes(s) ? '#7BC950' : '#8A9A8A',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-literata)',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Habitat */}
            <label style={labelStyle}>Habitat</label>
            <select value={formHabitat} onChange={(e) => setFormHabitat(e.target.value)} style={inputStyle}>
              <option value="">Select habitat...</option>
              {HABITATS.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>

            {/* Season */}
            <label style={labelStyle}>Season</label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {SEASONS.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSeason(s)}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '0.75rem',
                    border: `1px solid ${formSeason.includes(s) ? '#7BC950' : 'rgba(255,255,255,0.1)'}`,
                    backgroundColor: formSeason.includes(s) ? 'rgba(123,201,80,0.2)' : 'transparent',
                    color: formSeason.includes(s) ? '#7BC950' : '#8A9A8A',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-literata)',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Terrain */}
            <label style={labelStyle}>Terrain</label>
            <select value={formTerrain} onChange={(e) => setFormTerrain(e.target.value)} style={inputStyle}>
              <option value="">Select terrain...</option>
              {TERRAINS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Private toggle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
                padding: '12px',
                borderRadius: '10px',
                backgroundColor: 'rgba(123,201,80,0.05)',
                border: '1px solid rgba(123,201,80,0.1)',
              }}
            >
              <button
                onClick={() => setFormPrivate(!formPrivate)}
                style={{
                  width: '44px',
                  height: '24px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: formPrivate ? '#7BC950' : '#3a3a4e',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'background-color 200ms',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '3px',
                    left: formPrivate ? '23px' : '3px',
                    transition: 'left 200ms',
                  }}
                />
              </button>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#E0E0E0', fontWeight: 600 }}>
                  {formPrivate ? '🔒 Private' : '🌍 Public'}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#8A9A8A' }}>
                  {formPrivate ? 'Your spot stays secret unless you share it' : 'Visible to all foragers'}
                </div>
              </div>
            </div>

            {/* Description */}
            <label style={labelStyle}>Description</label>
            <textarea
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
              placeholder="Notes about the spot, access, landmarks..."
              rows={3}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
            />

            {/* Submit */}
            <button
              onClick={handleSubmitSpot}
              disabled={!formName || !pickLocation}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: formName && pickLocation ? '#7BC950' : '#2D5A27',
                color: formName && pickLocation ? '#0D1F0D' : '#8A9A8A',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: formName && pickLocation ? 'pointer' : 'not-allowed',
                fontFamily: 'var(--font-literata)',
              }}
            >
              Save Spot
            </button>
          </div>
        )}
      </section>

      {/* Seasonal Heatmap */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 60px' }}>
        <SeasonalHeatmap />
      </section>

      {/* Safety disclaimer */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px 60px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(232, 154, 74, 0.1)',
            border: '1px solid rgba(232, 154, 74, 0.3)',
            borderRadius: '12px',
            padding: '20px 24px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚠️</span>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 700,
                color: '#E89A4A',
                fontSize: '0.95rem',
                marginBottom: '4px',
              }}
            >
              Foraging Safety
            </p>
            <p style={{ fontFamily: 'var(--font-literata)', color: '#8A9A8A', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Never eat a mushroom you cannot positively identify. When in doubt, throw it out. Always cross-reference
              multiple field guides and consult experienced foragers. Some deadly species closely resemble edible ones.
            </p>
          </div>
        </div>
      </section>

      {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />}

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

const selectStyle: React.CSSProperties = {
  backgroundColor: '#1E2E1E',
  border: '1px solid rgba(123,201,80,0.15)',
  borderRadius: '8px',
  padding: '8px 12px',
  color: '#E0E0E0',
  fontSize: '0.85rem',
  fontFamily: 'var(--font-literata, Literata, serif)',
  cursor: 'pointer',
  minWidth: '140px',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#8A9A8A',
  marginBottom: '6px',
  fontFamily: 'var(--font-literata)',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#162016',
  border: '1px solid rgba(123,201,80,0.15)',
  borderRadius: '8px',
  padding: '10px 12px',
  color: '#E0E0E0',
  fontSize: '0.85rem',
  fontFamily: 'var(--font-literata)',
  marginBottom: '16px',
  outline: 'none',
}
