import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    icon: '🔍',
    title: 'Search Your Area',
    description:
      'Enter your city, neighborhood, or zip code. Filter by vertical — therapeutic, medicinal, or gourmet — to find exactly what you need.',
  },
  {
    number: '02',
    icon: '📍',
    title: 'Browse on the Map',
    description:
      'See retailers near you on an interactive map. Color-coded pins show the type of retailer. Click to preview, then dive into the full profile.',
  },
  {
    number: '03',
    icon: '🤝',
    title: 'Connect with Confidence',
    description:
      'Read verified reviews, check hours and contact info, browse products and deals. Then reach out directly or visit in person.',
  },
]

export default function HowItWorks() {
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
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            How It Works
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#8A9A8A',
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            Finding the right mushroom retailer has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {STEPS.map((step, i) => (
            <div key={step.number} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Number + connector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#2D5A27',
                    color: '#7BC950',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    flexShrink: 0,
                    border: '1px solid rgba(123, 201, 80, 0.3)',
                  }}
                >
                  {step.number}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      backgroundImage: 'linear-gradient(to right, rgba(123, 201, 80, 0.3), transparent)',
                      display: 'none',
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#1E2E1E',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  border: '1px solid rgba(123, 201, 80, 0.1)',
                }}
              >
                {step.icon}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#E0E0E0',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#8A9A8A',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-literata, Literata, serif)',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1A3A1A 0%, #2D5A27 100%)',
            borderRadius: '2px',
            padding: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            border: '1px solid rgba(123, 201, 80, 0.2)',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: '#E0E0E0',
                marginBottom: '8px',
              }}
            >
              Are You a Mushroom Retailer?
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(224, 224, 224, 0.65)',
                fontFamily: 'var(--font-literata, Literata, serif)',
              }}
            >
              List your business for free. Reach customers actively searching for mushroom products.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/about#claim"
              style={{
                backgroundColor: '#7BC950',
                color: '#0D1F0D',
                padding: '14px 28px',
                borderRadius: '2px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-literata, Literata, serif)',
                transition: 'background-color 200ms ease',
              }}
            >
              Claim Your Listing →
            </Link>
            <Link
              href="/about#pricing"
              style={{
                backgroundColor: 'transparent',
                color: '#E0E0E0',
                padding: '14px 28px',
                borderRadius: '2px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid rgba(224, 224, 224, 0.2)',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-literata, Literata, serif)',
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
