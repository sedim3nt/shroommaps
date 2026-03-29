import Link from 'next/link'
import type { Vertical } from '@/lib/types'
import { VERTICAL_COLORS, VERTICAL_DESCRIPTIONS } from '@/lib/utils'

const VERTICALS: {
  id: Vertical
  icon: string
  title: string
  examples: string[]
  cta: string
}[] = [
  {
    id: 'therapeutic',
    icon: '🧠',
    title: 'Therapeutic / Psilocybin',
    examples: ['Licensed healing centers', 'Guided therapy sessions', 'Integration support'],
    cta: 'Find Healing Centers',
  },
  {
    id: 'medicinal',
    icon: '💊',
    title: 'Medicinal / Functional',
    examples: ["Lion's mane extract", 'Reishi tinctures', 'Immune support supplements'],
    cta: 'Browse Supplement Shops',
  },
  {
    id: 'gourmet',
    icon: '🍽️',
    title: 'Gourmet / Culinary',
    examples: ['Fresh specialty mushrooms', 'Grow kits for home', 'Dried & specialty blends'],
    cta: 'Explore Farms & Markets',
  },
]

export default function VerticalCards() {
  return (
    <section
      style={{
        backgroundColor: '#0D1F0D',
        padding: '80px 24px',
        borderTop: '1px solid rgba(123, 201, 80, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces, Fraunces, serif)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#E0E0E0',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            Three Verticals, One Platform
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#8A9A8A',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            Whether you&apos;re seeking healing, wellness, or culinary adventure — MycoMaps connects
            you to the right resources.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {VERTICALS.map((v) => {
            const color = VERTICAL_COLORS[v.id]
            return (
              <div
                key={v.id}
                style={{
                  backgroundColor: '#1E2E1E',
                  borderRadius: '2px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  borderTop: `3px solid ${color}`,
                  borderLeft: '1px solid rgba(123, 201, 80, 0.08)',
                  borderRight: '1px solid rgba(123, 201, 80, 0.08)',
                  borderBottom: '1px solid rgba(123, 201, 80, 0.08)',
                  transition: 'transform 200ms ease, box-shadow 200ms ease',
                }}
              >
                {/* Icon + title */}
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: `${color}20`,
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      marginBottom: '16px',
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#E0E0E0',
                      marginBottom: '8px',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#8A9A8A',
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-literata, Literata, serif)',
                    }}
                  >
                    {VERTICAL_DESCRIPTIONS[v.id]}
                  </p>
                </div>

                {/* Examples */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {v.examples.map((ex) => (
                    <li
                      key={ex}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '0.875rem',
                        color: 'rgba(224, 224, 224, 0.7)',
                        fontFamily: 'var(--font-literata, Literata, serif)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: color,
                          flexShrink: 0,
                        }}
                      />
                      {ex}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/search?vertical=${v.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'transparent',
                    color: color,
                    padding: '12px 20px',
                    borderRadius: '2px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    transition: 'all 200ms ease',
                    fontFamily: 'var(--font-literata, Literata, serif)',
                    border: `1px solid ${color}60`,
                  }}
                >
                  {v.cta}
                  <span>→</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
