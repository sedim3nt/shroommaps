import Link from 'next/link'

const CARDS = [
  {
    icon: '📍',
    title: 'Map Your Spots',
    description: 'Save secret foraging locations. Track observations. Only you see your private spots.',
    href: '/foraging',
    cta: 'Open Foraging Map',
  },
  {
    icon: '📖',
    title: 'Species Guide',
    description: 'ID features, look-alikes, seasons, and habitats for 15 Colorado species.',
    href: '/species',
    cta: 'Browse Species',
  },
  {
    icon: '🔒',
    title: 'Your Secrets Are Safe',
    description: 'Spots are private by default. Foragers keep secrets — we respect that.',
    href: '/foraging',
    cta: 'Start Foraging',
  },
]

export default function ForagingCTA() {
  return (
    <section
      style={{
        padding: '80px 24px',
        borderTop: '1px solid rgba(123, 201, 80, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#7BC950',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '8px',
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            New
          </p>
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
            Wild Mushroom Foraging
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#8A9A8A',
              fontFamily: 'var(--font-literata, Literata, serif)',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Map your foraging spots, identify species, and track the seasons.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="hover-card"
                style={{
                  backgroundColor: '#1E2E1E',
                  borderRadius: '16px',
                  border: '1px solid rgba(123, 201, 80, 0.12)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: '#162016',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    border: '1px solid rgba(123, 201, 80, 0.1)',
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#E0E0E0',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#8A9A8A',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-literata, Literata, serif)',
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#7BC950',
                    fontFamily: 'var(--font-literata, Literata, serif)',
                  }}
                >
                  {card.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
