'use client'

import { SEASONAL_DATA, MONTH_LABELS } from '@/data/species'

const ABUNDANCE_COLORS = [
  'transparent',         // 0 — not active
  'rgba(123,201,80,0.2)', // 1 — low
  'rgba(123,201,80,0.5)', // 2 — moderate
  'rgba(123,201,80,0.85)', // 3 — peak
]

export default function SeasonalHeatmap() {
  const species = Object.keys(SEASONAL_DATA)

  return (
    <div
      style={{
        backgroundColor: '#1E2E1E',
        borderRadius: '16px',
        border: '1px solid rgba(123, 201, 80, 0.15)',
        padding: '24px',
        overflow: 'auto',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-fraunces, Fraunces, serif)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#E0E0E0',
          marginBottom: '4px',
        }}
      >
        Colorado Seasonal Calendar
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-literata, Literata, serif)',
          fontSize: '0.8rem',
          color: '#8A9A8A',
          marginBottom: '20px',
        }}
      >
        When to find each species in the Colorado Front Range
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            minWidth: '600px',
            borderCollapse: 'separate',
            borderSpacing: '3px',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: 'left',
                  padding: '6px 12px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#8A9A8A',
                  fontFamily: 'var(--font-literata, Literata, serif)',
                  width: '160px',
                }}
              >
                Species
              </th>
              {MONTH_LABELS.map((m) => (
                <th
                  key={m}
                  style={{
                    textAlign: 'center',
                    padding: '6px 4px',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    color: '#8A9A8A',
                    fontFamily: 'var(--font-literata, Literata, serif)',
                  }}
                >
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {species.map((name) => (
              <tr key={name}>
                <td
                  style={{
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#E0E0E0',
                    fontFamily: 'var(--font-literata, Literata, serif)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {name}
                </td>
                {SEASONAL_DATA[name].map((level, i) => (
                  <td
                    key={i}
                    style={{
                      padding: 0,
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '28px',
                        borderRadius: '4px',
                        backgroundColor: ABUNDANCE_COLORS[level],
                        border: level > 0 ? '1px solid rgba(123,201,80,0.1)' : '1px solid rgba(255,255,255,0.03)',
                        transition: 'transform 150ms ease',
                      }}
                      title={`${name} — ${MONTH_LABELS[i]}: ${['None', 'Low', 'Moderate', 'Peak'][level]}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '16px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: '0.7rem', color: '#8A9A8A', fontFamily: 'var(--font-literata, Literata, serif)' }}>
          Abundance:
        </span>
        {['None', 'Low', 'Moderate', 'Peak'].map((label, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '3px',
                backgroundColor: ABUNDANCE_COLORS[i],
                border: i > 0 ? '1px solid rgba(123,201,80,0.2)' : '1px solid rgba(255,255,255,0.1)',
              }}
            />
            <span style={{ fontSize: '0.65rem', color: '#8A9A8A', fontFamily: 'var(--font-literata, Literata, serif)' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
