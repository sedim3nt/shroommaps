'use client'

import { useState } from 'react'
import { stateStatuses, STATUS_CONFIG, STATE_GRID } from '@/data/legal-status'
import type { StateStatus } from '@/lib/types'

export default function USLegalMap() {
  const [selected, setSelected] = useState<StateStatus | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  // Build grid - 12 cols, 9 rows (1-indexed)
  const COLS = 12
  const ROWS = 9
  const CELL_SIZE = 52 // px
  const GAP = 4 // px

  const stateByAbbr = Object.fromEntries(stateStatuses.map((s) => [s.abbreviation, s]))

  // Create grid array
  const cells: Array<{ col: number; row: number; state: StateStatus | null }> = []
  for (let row = 1; row <= ROWS; row++) {
    for (let col = 1; col <= COLS; col++) {
      const abbr = Object.entries(STATE_GRID).find(
        ([, pos]) => pos.col === col && pos.row === row
      )?.[0]
      cells.push({ col, row, state: abbr ? stateByAbbr[abbr] ?? null : null })
    }
  }

  const getStatusColor = (status: StateStatus) => {
    return STATUS_CONFIG[status.therapeuticStatus]?.color ?? STATUS_CONFIG.prohibited.color
  }

  const getStatusBg = (status: StateStatus) => {
    return STATUS_CONFIG[status.therapeuticStatus]?.bgColor ?? STATUS_CONFIG.prohibited.bgColor
  }

  return (
    <div>
      {/* Legend */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '32px',
          justifyContent: 'center',
        }}
      >
        {Object.entries(STATUS_CONFIG).map(([key, config]) => (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#F0EBE0',
              padding: '8px 16px',
              borderRadius: '9999px',
              border: `2px solid ${config.color}40`,
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: config.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#2C1810',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              {config.label}
            </span>
          </div>
        ))}
      </div>

      {/* Map grid */}
      <div
        style={{
          overflowX: 'auto',
          paddingBottom: '8px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
            gap: `${GAP}px`,
            width: 'fit-content',
            margin: '0 auto',
          }}
        >
          {cells.map(({ col, row, state }) => {
            if (!state) {
              return (
                <div
                  key={`${col}-${row}`}
                  style={{
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                  }}
                />
              )
            }

            const color = getStatusColor(state)
            const bg = getStatusBg(state)
            const isHovered = hovered === state.abbreviation
            const isSelected = selected?.abbreviation === state.abbreviation

            return (
              <div
                key={`${col}-${row}`}
                onClick={() => setSelected(isSelected ? null : state)}
                onMouseEnter={() => setHovered(state.abbreviation)}
                onMouseLeave={() => setHovered(null)}
                title={state.name}
                style={{
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  borderRadius: '8px',
                  backgroundColor: isSelected ? color : bg,
                  border: `2px solid ${isHovered || isSelected ? color : 'transparent'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2px',
                  transition: 'all 200ms ease',
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                  boxShadow: isSelected ? `0 4px 12px ${color}40` : '0 1px 3px rgba(0,0,0,0.08)',
                  zIndex: isHovered ? 2 : 1,
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: isSelected ? '#FAF7F0' : color,
                    letterSpacing: '0.03em',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                    lineHeight: 1,
                  }}
                >
                  {state.abbreviation}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <div
          style={{
            marginTop: '32px',
            backgroundColor: '#F0EBE0',
            borderRadius: '16px',
            padding: '28px',
            border: `2px solid ${getStatusColor(selected)}30`,
            maxWidth: '700px',
            margin: '32px auto 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '16px',
              gap: '12px',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2C1810',
                  marginBottom: '6px',
                }}
              >
                {selected.name}
              </h3>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: STATUS_CONFIG[selected.therapeuticStatus].bgColor,
                  color: STATUS_CONFIG[selected.therapeuticStatus].color,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: STATUS_CONFIG[selected.therapeuticStatus].color,
                  }}
                />
                {STATUS_CONFIG[selected.therapeuticStatus].label}
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#A89278',
                fontSize: '1.5rem',
                padding: '4px',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>

          <p
            style={{
              fontSize: '0.9rem',
              color: '#5C4033',
              lineHeight: 1.7,
              marginBottom: '20px',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            {selected.notes}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            {[
              { label: 'Therapeutic Access', value: selected.therapeuticStatus },
              { label: 'Decrim Status', value: selected.decrimStatus },
              { label: 'Medicinal (Supplements)', value: 'Legal' },
              { label: 'Gourmet (Food)', value: 'Legal' },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  backgroundColor: '#FAF7F0',
                  borderRadius: '10px',
                  padding: '12px 16px',
                }}
              >
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#A89278',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#2C1810',
                    textTransform: 'capitalize',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>

          {selected.effectiveDate && (
            <p
              style={{
                fontSize: '0.8rem',
                color: '#A89278',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Effective: {new Date(selected.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}

          {selected.sourceUrl && (
            <a
              href={selected.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#2D5016',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                marginTop: '8px',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Official Source →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
