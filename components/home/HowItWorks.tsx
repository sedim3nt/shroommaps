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
        backgroundColor: '#FAF7F0',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#2C1810',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#8B6F47',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
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
                    backgroundColor: '#2D5016',
                    color: '#FAF7F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: '2px',
                      backgroundImage: 'linear-gradient(to right, #2D5016, transparent)',
                      display: 'none', // visible only on desktop via CSS
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#F0EBE0',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                {step.icon}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#2C1810',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#8B6F47',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
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
            background: 'linear-gradient(135deg, #2D5016 0%, #3d6b20 100%)',
            borderRadius: '20px',
            padding: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: '#FAF7F0',
                marginBottom: '8px',
              }}
            >
              Are You a Mushroom Retailer?
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(250,247,240,0.75)',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              List your business for free. Reach customers actively searching for mushroom products.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/about#claim"
              style={{
                backgroundColor: '#D4A843',
                color: '#2C1810',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                transition: 'background-color 200ms ease',
              }}
            >
              Claim Your Listing →
            </Link>
            <Link
              href="/about#pricing"
              style={{
                backgroundColor: 'transparent',
                color: '#FAF7F0',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '2px solid rgba(250,247,240,0.3)',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
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
