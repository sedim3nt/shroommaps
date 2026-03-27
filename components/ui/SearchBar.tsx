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

export default function SearchBar({ initialQuery = '', size = 'hero' }: Props) {
  const [query, setQuery] = useState(initialQuery)
  const [vertical, setVertical] = useState('')
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
      style={{
        display: 'flex',
        flexDirection: isHero ? 'column' : 'row',
        gap: '12px',
        width: '100%',
        maxWidth: isHero ? '700px' : '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flex: 1,
          flexDirection: isHero ? 'row' : 'row',
          flexWrap: 'wrap',
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
            }}
          >
            📍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, neighborhood, or zip code"
            style={{
              width: '100%',
              padding: isHero ? '16px 16px 16px 44px' : '12px 12px 12px 40px',
              fontSize: isHero ? '1rem' : '0.9rem',
              borderRadius: '10px',
              border: '2px solid rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: '#2C1810',
              outline: 'none',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Vertical selector */}
        <div style={{ flex: 1, minWidth: '160px' }}>
          <select
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
            style={{
              width: '100%',
              height: '100%',
              padding: isHero ? '16px 12px' : '12px',
              fontSize: isHero ? '1rem' : '0.9rem',
              borderRadius: '10px',
              border: '2px solid rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: '#2C1810',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
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
          backgroundColor: '#D4A843',
          color: '#2C1810',
          fontWeight: 700,
          fontSize: isHero ? '1rem' : '0.9rem',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-inter, Inter, sans-serif)',
          letterSpacing: '0.02em',
          transition: 'background-color 200ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#C09233'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#D4A843'
        }}
      >
        Find Fungi →
      </button>
    </form>
  )
}
