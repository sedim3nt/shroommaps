'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ForagingMapWrapper from '@/components/map/ForagingMapWrapper'
import type { ForagingSpot, SpotObservation } from '@/lib/types'
import { MONTH_LABELS } from '@/data/species'
import { SPECIES_LIST } from '@/data/species'

// Demo data — in production, fetch from Supabase by ID
const DEMO_SPOT: ForagingSpot = {
  id: 'demo-1',
  userId: 'demo',
  name: 'Flagstaff Chanterelle Ridge',
  description: 'Reliable chanterelle spot after July rains. Check under the Ponderosa pines near the second switchback. The north-facing slope holds moisture longer. Best after 2-3 days of rain followed by sun.',
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
}

const DEMO_OBSERVATIONS: SpotObservation[] = [
  {
    id: 'obs-1',
    spotId: 'demo-1',
    userId: 'demo',
    speciesFound: ['Chanterelle'],
    date: '2025-09-14',
    notes: 'Great flush after last week\'s rain. Found about 3 lbs of chanterelles along the ridge. Some hedgehog mushrooms too.',
    conditions: 'rain',
    quantity: 'abundant',
    photos: [],
    createdAt: '2025-09-14',
  },
  {
    id: 'obs-2',
    spotId: 'demo-1',
    userId: 'demo',
    speciesFound: ['Chanterelle', 'Hedgehog'],
    date: '2025-08-20',
    notes: 'Moderate finds. Dry spell has slowed things down. A few young chanterelles coming up.',
    conditions: 'dry',
    quantity: 'few',
    photos: [],
    createdAt: '2025-08-20',
  },
  {
    id: 'obs-3',
    spotId: 'demo-1',
    userId: 'demo',
    speciesFound: ['Chanterelle'],
    date: '2025-07-30',
    notes: 'First chanterelles of the season! Small buttons just emerging. Should be great in a week.',
    conditions: 'rain',
    quantity: 'some',
    photos: [],
    createdAt: '2025-07-30',
  },
]

const QUANTITY_LABELS: Record<string, { label: string; color: string }> = {
  none: { label: 'None found', color: '#8A9A8A' },
  few: { label: 'A few', color: '#E89A4A' },
  some: { label: 'Some', color: '#7BC950' },
  abundant: { label: 'Abundant', color: '#3D7A35' },
}

const CONDITIONS_EMOJI: Record<string, string> = {
  rain: '🌧️',
  dry: '☀️',
  frost: '🥶',
}

export default function SpotDetailPage() {
  const params = useParams()
  const spotId = params.id as string
  const [showObsForm, setShowObsForm] = useState(false)

  // Form state for new observation
  const [obsSpecies, setObsSpecies] = useState<string[]>([])
  const [obsNotes, setObsNotes] = useState('')
  const [obsConditions, setObsConditions] = useState('')
  const [obsQuantity, setObsQuantity] = useState('')

  // In production, fetch spot by ID from Supabase
  const spot = DEMO_SPOT
  const observations = DEMO_OBSERVATIONS

  // Get species seasonal months
  const speciesMonths = spot.species.map((name) => {
    const data = SPECIES_LIST.find((s) => s.commonName === name)
    return { name, months: data?.months || [] }
  })

  const handleSubmitObs = () => {
    alert(`Observation saved! (Demo mode — Supabase integration needed)`)
    setShowObsForm(false)
    setObsSpecies([])
    setObsNotes('')
    setObsConditions('')
    setObsQuantity('')
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px 0' }}>
        <Link
          href="/foraging"
          style={{
            color: '#7BC950',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-literata)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '16px',
          }}
        >
          ← Back to Foraging Map
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: '#E0E0E0',
            }}
          >
            {spot.name}
          </h1>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 600,
              backgroundColor: spot.isPrivate ? 'rgba(224,224,224,0.1)' : 'rgba(123,201,80,0.15)',
              color: spot.isPrivate ? '#E0E0E0' : '#7BC950',
              border: `1px solid ${spot.isPrivate ? 'rgba(224,224,224,0.2)' : 'rgba(123,201,80,0.3)'}`,
              fontFamily: 'var(--font-literata)',
            }}
          >
            {spot.isPrivate ? '🔒 Private — only you can see this' : '🌍 Public'}
          </span>
        </div>

        {spot.description && (
          <p
            style={{
              fontFamily: 'var(--font-literata)',
              color: '#8A9A8A',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              maxWidth: '700px',
              marginBottom: '24px',
            }}
          >
            {spot.description}
          </p>
        )}

        {/* Meta tags */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {spot.habitat && <Tag label={`🌲 ${spot.habitat}`} />}
          {spot.terrain && <Tag label={`⛰️ ${spot.terrain}`} />}
          {spot.elevation && <Tag label={`📏 ${spot.elevation.toLocaleString()} ft`} />}
          {spot.lastVisited && <Tag label={`📅 Last visit: ${spot.lastVisited}`} />}
        </div>
      </section>

      {/* Map + Info grid */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
      >
        {/* Map */}
        <div style={{ height: '350px', borderRadius: '16px', overflow: 'hidden' }}>
          <ForagingMapWrapper
            spots={[spot]}
            center={[spot.latitude, spot.longitude]}
            zoom={13}
            selectedId={spot.id}
          />
        </div>

        {/* Species + Seasonal Calendar */}
        <div
          style={{
            backgroundColor: '#1E2E1E',
            borderRadius: '16px',
            border: '1px solid rgba(123,201,80,0.15)',
            padding: '24px',
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: '#E0E0E0', marginBottom: '16px' }}>
            Species & Seasons
          </h3>

          {/* Species tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {spot.species.map((s) => (
              <span
                key={s}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(123,201,80,0.15)',
                  color: '#7BC950',
                  border: '1px solid rgba(123,201,80,0.2)',
                  fontFamily: 'var(--font-literata)',
                }}
              >
                🍄 {s}
              </span>
            ))}
          </div>

          {/* Seasonal calendar mini */}
          <div style={{ marginBottom: '8px' }}>
            <p style={{ fontSize: '0.75rem', color: '#8A9A8A', marginBottom: '10px', fontFamily: 'var(--font-literata)' }}>
              Expected fruiting months:
            </p>
            {speciesMonths.map(({ name, months }) => (
              <div key={name} style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '0.8rem', color: '#E0E0E0', marginBottom: '4px', fontFamily: 'var(--font-literata)' }}>
                  {name}
                </div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {MONTH_LABELS.map((m, i) => (
                    <div
                      key={m}
                      style={{
                        flex: 1,
                        height: '20px',
                        borderRadius: '3px',
                        backgroundColor: months.includes(i + 1)
                          ? 'rgba(123,201,80,0.6)'
                          : 'rgba(255,255,255,0.03)',
                        border: months.includes(i + 1)
                          ? '1px solid rgba(123,201,80,0.2)'
                          : '1px solid rgba(255,255,255,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.5rem',
                        color: months.includes(i + 1) ? '#E0E0E0' : '#3a3a4e',
                      }}
                      title={`${name} — ${m}`}
                    >
                      {m.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Season tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {spot.season.map((s) => (
              <span
                key={s}
                style={{
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  backgroundColor: 'rgba(232,154,74,0.15)',
                  color: '#E89A4A',
                  border: '1px solid rgba(232,154,74,0.2)',
                  fontFamily: 'var(--font-literata)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Observation Log */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', fontWeight: 700, color: '#E0E0E0' }}>
            Observation Log ({observations.length})
          </h2>
          <button
            onClick={() => setShowObsForm(!showObsForm)}
            style={{
              backgroundColor: '#7BC950',
              color: '#0D1F0D',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-literata)',
            }}
          >
            + Add Observation
          </button>
        </div>

        {/* Add Observation Form */}
        {showObsForm && (
          <div
            style={{
              backgroundColor: '#1E2E1E',
              borderRadius: '16px',
              border: '1px solid rgba(123,201,80,0.15)',
              padding: '24px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: '#E0E0E0', marginBottom: '16px', fontSize: '1rem' }}>
              New Observation
            </h3>

            <label style={labelStyle}>Species Found</label>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {spot.species.map((s) => (
                <button
                  key={s}
                  onClick={() =>
                    setObsSpecies((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s])
                  }
                  style={{
                    padding: '4px 10px',
                    borderRadius: '16px',
                    fontSize: '0.75rem',
                    border: `1px solid ${obsSpecies.includes(s) ? '#7BC950' : 'rgba(255,255,255,0.1)'}`,
                    backgroundColor: obsSpecies.includes(s) ? 'rgba(123,201,80,0.2)' : 'transparent',
                    color: obsSpecies.includes(s) ? '#7BC950' : '#8A9A8A',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-literata)',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Conditions</label>
                <select value={obsConditions} onChange={(e) => setObsConditions(e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="rain">🌧️ Rain</option>
                  <option value="dry">☀️ Dry</option>
                  <option value="frost">🥶 Frost</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Quantity</label>
                <select value={obsQuantity} onChange={(e) => setObsQuantity(e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="none">None found</option>
                  <option value="few">A few</option>
                  <option value="some">Some</option>
                  <option value="abundant">Abundant</option>
                </select>
              </div>
            </div>

            <label style={labelStyle}>Notes</label>
            <textarea
              value={obsNotes}
              onChange={(e) => setObsNotes(e.target.value)}
              placeholder="What did you find? How were conditions?"
              rows={3}
              style={{ ...inputStyle, resize: 'vertical' }}
            />

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleSubmitObs}
                style={{
                  backgroundColor: '#7BC950',
                  color: '#0D1F0D',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-literata)',
                }}
              >
                Save Observation
              </button>
              <button
                onClick={() => setShowObsForm(false)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#8A9A8A',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-literata)',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Observations list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {observations.map((obs) => (
            <div
              key={obs.id}
              style={{
                backgroundColor: '#1E2E1E',
                borderRadius: '12px',
                border: '1px solid rgba(123,201,80,0.1)',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: '#E0E0E0', fontWeight: 600, fontFamily: 'var(--font-literata)' }}>
                    {obs.date}
                  </span>
                  {obs.conditions && (
                    <span style={{ fontSize: '0.85rem' }}>{CONDITIONS_EMOJI[obs.conditions]}</span>
                  )}
                </div>
                {obs.quantity && (
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      backgroundColor: `${QUANTITY_LABELS[obs.quantity].color}22`,
                      color: QUANTITY_LABELS[obs.quantity].color,
                      fontFamily: 'var(--font-literata)',
                    }}
                  >
                    {QUANTITY_LABELS[obs.quantity].label}
                  </span>
                )}
              </div>

              {obs.speciesFound.length > 0 && (
                <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  {obs.speciesFound.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '0.7rem',
                        backgroundColor: 'rgba(123,201,80,0.1)',
                        color: '#7BC950',
                        fontFamily: 'var(--font-literata)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {obs.notes && (
                <p style={{ color: '#8A9A8A', fontSize: '0.85rem', lineHeight: 1.6, fontFamily: 'var(--font-literata)' }}>
                  {obs.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '0.8rem',
        backgroundColor: '#162016',
        color: '#8A9A8A',
        border: '1px solid rgba(255,255,255,0.06)',
        fontFamily: 'var(--font-literata)',
      }}
    >
      {label}
    </span>
  )
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
  marginBottom: '0',
  outline: 'none',
}
