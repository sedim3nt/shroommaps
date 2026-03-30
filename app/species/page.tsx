'use client'

import { useState } from 'react'
import { SPECIES_LIST } from '@/data/species'
import { MONTH_LABELS } from '@/data/species'
import type { MushroomSpecies, SpeciesCategory } from '@/lib/types'

const CATEGORY_STYLES: Record<SpeciesCategory, { bg: string; border: string; badge: string; badgeBg: string; label: string }> = {
  edible: {
    bg: '#1E2E1E',
    border: 'rgba(123,201,80,0.15)',
    badge: '#7BC950',
    badgeBg: 'rgba(123,201,80,0.15)',
    label: 'Edible',
  },
  medicinal: {
    bg: '#1E2E1E',
    border: 'rgba(155,136,206,0.2)',
    badge: '#9B88CE',
    badgeBg: 'rgba(155,136,206,0.15)',
    label: 'Medicinal',
  },
  caution: {
    bg: '#1E2E1E',
    border: 'rgba(232,154,74,0.2)',
    badge: '#E89A4A',
    badgeBg: 'rgba(232,154,74,0.15)',
    label: 'Caution',
  },
  deadly: {
    bg: '#0D1F0D',
    border: 'rgba(220,50,50,0.4)',
    badge: '#FF4444',
    badgeBg: 'rgba(220,50,50,0.2)',
    label: 'DEADLY',
  },
}

export default function SpeciesGuidePage() {
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all' ? SPECIES_LIST : SPECIES_LIST.filter((s) => s.category === filter)

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px 32px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#E0E0E0',
            marginBottom: '8px',
          }}
        >
          Species Guide
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-literata)',
            color: '#8A9A8A',
            fontSize: '1.05rem',
            maxWidth: '650px',
            marginBottom: '24px',
            lineHeight: 1.7,
          }}
        >
          Quick reference cards for 15 forageable mushroom species found in Colorado. Learn to identify, find, and safely harvest wild fungi.
        </p>

        {/* Safety banner */}
        <div
          style={{
            backgroundColor: 'rgba(220,50,50,0.1)',
            border: '1px solid rgba(220,50,50,0.3)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '32px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>☠️</span>
          <p style={{ fontFamily: 'var(--font-literata)', color: '#E0E0E0', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.5 }}>
            Never eat a mushroom you cannot positively identify. When in doubt, throw it out.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {[
            { key: 'all', label: 'All Species' },
            { key: 'edible', label: 'Edible' },
            { key: 'medicinal', label: 'Medicinal' },
            { key: 'deadly', label: 'Deadly' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: `1px solid ${filter === key ? '#7BC950' : 'rgba(255,255,255,0.1)'}`,
                backgroundColor: filter === key ? 'rgba(123,201,80,0.15)' : 'transparent',
                color: filter === key ? '#7BC950' : '#8A9A8A',
                cursor: 'pointer',
                fontWeight: filter === key ? 600 : 400,
                fontSize: '0.85rem',
                fontFamily: 'var(--font-literata)',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Species Cards Grid */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '20px',
        }}
      >
        {filtered.map((species) => (
          <SpeciesCard key={species.commonName} species={species} />
        ))}
      </section>
    </div>
  )
}

function SpeciesCard({ species }: { species: MushroomSpecies }) {
  const style = CATEGORY_STYLES[species.category]
  const isDeadly = species.category === 'deadly'

  return (
    <div
      style={{
        backgroundColor: style.bg,
        borderRadius: '16px',
        border: `${isDeadly ? '2px' : '1px'} solid ${style.border}`,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
      }}
      className="hover-card"
    >
      {/* Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: isDeadly ? '#FF4444' : '#E0E0E0',
                marginBottom: '2px',
              }}
            >
              {isDeadly && '☠️ '}{species.commonName}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-literata)',
                fontSize: '0.8rem',
                color: '#8A9A8A',
                fontStyle: 'italic',
              }}
            >
              {species.scientificName}
            </p>
          </div>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.7rem',
              fontWeight: 700,
              backgroundColor: style.badgeBg,
              color: style.badge,
              border: `1px solid ${style.border}`,
              fontFamily: 'var(--font-literata)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {style.label}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-literata)',
            fontSize: '0.85rem',
            color: isDeadly ? '#FF8888' : '#8A9A8A',
            fontWeight: isDeadly ? 600 : 400,
            marginTop: '8px',
            lineHeight: 1.5,
          }}
        >
          {species.edibility}
        </p>
      </div>

      {/* Quick info */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <MiniTag label={`📅 ${species.season}`} />
        <MiniTag label={`🌲 ${species.habitat}`} />
      </div>

      {/* Season bar */}
      <div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {MONTH_LABELS.map((m, i) => (
            <div
              key={m}
              style={{
                flex: 1,
                height: '6px',
                borderRadius: '3px',
                backgroundColor: species.months.includes(i + 1)
                  ? isDeadly ? 'rgba(255,68,68,0.6)' : 'rgba(123,201,80,0.6)'
                  : 'rgba(255,255,255,0.04)',
              }}
              title={m}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
          <span style={{ fontSize: '0.55rem', color: '#555' }}>Jan</span>
          <span style={{ fontSize: '0.55rem', color: '#555' }}>Dec</span>
        </div>
      </div>

      {/* ID Features */}
      <div>
        <h4
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#8A9A8A',
            marginBottom: '8px',
            fontFamily: 'var(--font-literata)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Key ID Features
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {species.idFeatures.map((f, i) => (
            <li
              key={i}
              style={{
                fontSize: '0.8rem',
                color: '#E0E0E0',
                fontFamily: 'var(--font-literata)',
                lineHeight: 1.5,
                paddingLeft: '16px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: isDeadly ? '#FF4444' : '#7BC950' }}>•</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Look-alikes */}
      <div
        style={{
          backgroundColor: isDeadly ? 'rgba(220,50,50,0.08)' : 'rgba(232,154,74,0.06)',
          borderRadius: '10px',
          padding: '14px',
          border: `1px solid ${isDeadly ? 'rgba(220,50,50,0.15)' : 'rgba(232,154,74,0.1)'}`,
        }}
      >
        <h4
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: isDeadly ? '#FF4444' : '#E89A4A',
            marginBottom: '8px',
            fontFamily: 'var(--font-literata)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {isDeadly ? '⚠️ Commonly Confused With' : '⚠️ Look-alikes'}
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {species.lookAlikes.map((la, i) => (
            <li
              key={i}
              style={{
                fontSize: '0.78rem',
                color: isDeadly ? '#FF8888' : '#8A9A8A',
                fontFamily: 'var(--font-literata)',
                lineHeight: 1.5,
                paddingLeft: '16px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#E89A4A' }}>!</span>
              {la}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MiniTag({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '0.7rem',
        backgroundColor: '#162016',
        color: '#8A9A8A',
        border: '1px solid rgba(255,255,255,0.05)',
        fontFamily: 'var(--font-literata)',
      }}
    >
      {label}
    </span>
  )
}
