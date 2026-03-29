'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  initialQuery?: string
  size?: 'hero' | 'compact'
}

const VERTICALS = [
  { value: '', label: 'All Verticals' },
  { value: 'therapeutic', label: '🧠 Therapeutic' },
  { value: 'medicinal', label: '💊 Medicinal' },
  { value: 'gourmet', label: '🍽️ Gourmet' },
]

function MyceliumSVG() {
  return (
    <svg className="mycelium-container" viewBox="0 0 800 200" preserveAspectRatio="none">
      {/* Branching lines radiating outward */}
      <path className="mycelium-line" d="M400,100 C350,80 280,60 180,40" />
      <path className="mycelium-line" d="M400,100 C420,60 460,30 560,10" />
      <path className="mycelium-line" d="M400,100 C380,120 320,150 220,170" />
      <path className="mycelium-line" d="M400,100 C440,130 500,160 620,180" />
      <path className="mycelium-line" d="M400,100 C350,90 300,95 200,85" />
      <path className="mycelium-line" d="M400,100 C450,85 520,70 650,55" />
      <path className="mycelium-line" d="M400,100 C370,110 310,125 190,135" />
      <path className="mycelium-line" d="M400,100 C430,115 490,130 630,140" />
      {/* Secondary branches */}
      <path className="mycelium-line" d="M300,75 C270,50 230,35 160,20" />
      <path className="mycelium-line" d="M500,65 C540,45 580,25 680,15" />
      <path className="mycelium-line" d="M320,140 C290,155 240,165 150,175" />
      <path className="mycelium-line" d="M510,145 C550,160 600,170 700,185" />
      {/* Nodes at branch tips */}
      <circle className="mycelium-node" cx="180" cy="40" r="2.5" />
      <circle className="mycelium-node" cx="560" cy="10" r="2" />
      <circle className="mycelium-node" cx="220" cy="170" r="3" />
      <circle className="mycelium-node" cx="620" cy="180" r="2.5" />
      <circle className="mycelium-node" cx="160" cy="20" r="2" />
      <circle className="mycelium-node" cx="700" cy="185" r="2" />
    </svg>
  )
}

export default function SearchBar({ initialQuery = '', size = 'hero' }: Props) {
  const [query, setQuery] = useState(initialQuery)
  const [vertical, setVertical] = useState('')
  const [focused, setFocused] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (vertical) params.set('vertical', vertical)
    router.push(`/search?${params.toString()}`)
  }

  const isHero = size === 'hero'

  return (
    <form
      onSubmit={handleSubmit}
      className={focused ? 'mycelium-active' : ''}
      style={{
        display: 'flex',
        flexDirection: isHero ? 'column' : 'row',
        gap: '12px',
        width: '100%',
        maxWidth: isHero ? '700px' : '100%',
        position: 'relative',
      }}
    >
      {isHero && <MyceliumSVG />}

      <div
        style={{
          display: 'flex',
          gap: '8px',
          flex: 1,
          flexDirection: isHero ? 'row' : 'row',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Location input */}
        <div style={{ flex: 2, minWidth: '200px', position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1rem',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          >
            📍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="City, neighborhood, or zip code"
            style={{
              width: '100%',
              padding: isHero ? '16px 16px 16px 44px' : '12px 12px 12px 40px',
              fontSize: isHero ? '1rem' : '0.9rem',
              borderRadius: '10px',
              border: focused ? '2px solid #7BC950' : '2px solid rgba(123, 201, 80, 0.3)',
              backgroundColor: 'rgba(13, 31, 13, 0.9)',
              color: '#E0E0E0',
              outline: 'none',
              fontFamily: 'var(--font-literata, Literata, serif)',
              boxSizing: 'border-box',
              transition: 'border-color 300ms ease, box-shadow 300ms ease',
              boxShadow: focused ? '0 0 20px rgba(123, 201, 80, 0.15)' : 'none',
            }}
          />
        </div>

        {/* Vertical selector */}
        <div style={{ flex: 1, minWidth: '160px' }}>
          <select
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              width: '100%',
              height: '100%',
              padding: isHero ? '16px 12px' : '12px',
              fontSize: isHero ? '1rem' : '0.9rem',
              borderRadius: '10px',
              border: '2px solid rgba(123, 201, 80, 0.3)',
              backgroundColor: 'rgba(13, 31, 13, 0.9)',
              color: '#E0E0E0',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            {VERTICALS.map((v) => (
              <option key={v.value} value={v.value}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        style={{
          padding: isHero ? '16px 32px' : '12px 20px',
          backgroundColor: '#7BC950',
          color: '#0D1F0D',
          fontWeight: 700,
          fontSize: isHero ? '1rem' : '0.9rem',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-literata, Literata, serif)',
          letterSpacing: '0.02em',
          transition: 'background-color 200ms ease, transform 200ms ease',
          position: 'relative',
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#5A9940'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#7BC950'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        Find Fungi →
      </button>
    </form>
  )
}
