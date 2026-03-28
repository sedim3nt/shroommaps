import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MycoMaps',
  description:
    'Learn about MycoMaps — the mushroom marketplace connecting consumers with therapeutic healing centers, medicinal supplement shops, and gourmet mushroom farms.',
}

const PRICING_TIERS = [
  {
    name: 'Basic',
    price: 49,
    color: '#87A878',
    features: [
      'Standard directory listing',
      'Business profile with photos',
      'Hours and contact info',
      'Respond to reviews',
      'Verified badge eligibility',
    ],
  },
  {
    name: 'Plus',
    price: 99,
    color: '#7B68AE',
    featured: true,
    features: [
      'Everything in Basic',
      'Featured in category search',
      'Deal and special listings',
      'Analytics dashboard',
      'Priority support',
      'Enhanced profile page',
    ],
  },
  {
    name: 'Pro',
    price: 199,
    color: '#2D5016',
    features: [
      'Everything in Plus',
      'Top placement in results',
      'Full analytics suite',
      'Brand page with product catalog',
      'API access (coming soon)',
      'Dedicated account manager',
    ],
  },
]

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#FAF7F0' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #2D5016 0%, #3d6b20 60%, #8B6F47 100%)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '4rem',
              marginBottom: '20px',
            }}
          >
            🍄
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#FAF7F0',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            The Mushroom Boom Needs Infrastructure.{' '}
            <span style={{ color: '#D4A843', fontStyle: 'italic' }}>We&apos;re Building It.</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(250,247,240,0.8)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            MycoMaps is the first location-based marketplace connecting consumers with the full
            spectrum of mushroom commerce — from licensed psilocybin healing centers to medicinal
            supplement shops to gourmet farms.
          </p>
        </div>
      </div>

      {/* Mission section */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            marginBottom: '80px',
          }}
        >
          {[
            {
              icon: '🌱',
              title: 'Why We Exist',
              body: "The functional mushroom market is a $13.8B industry growing at 9.5% annually. Colorado's Prop 122 is opening legal psilocybin healing centers. Oregon's centers are already operational. And yet — there's no dedicated platform to find these businesses. We're changing that.",
            },
            {
              icon: '🗺️',
              title: 'What We Do',
              body: "MycoMaps is the WeedMaps of mushrooms — a location-based directory where consumers can find and connect with retailers across three verticals: therapeutic psilocybin centers, medicinal supplement shops, and gourmet mushroom farms.",
            },
            {
              icon: '⚖️',
              title: 'How We Stay Legal',
              body: "We're a directory platform, not a vendor. We never facilitate the sale of controlled substances. Therapeutic listings only appear in jurisdictions where healing centers are legally licensed. All retailers must agree to our Terms of Service.",
            },
          ].map((item) => (
            <div key={item.title}>
              <div
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '16px',
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#2C1810',
                  marginBottom: '12px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#5C4033',
                  lineHeight: 1.8,
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Market stats */}
        <div
          style={{
            backgroundColor: '#F0EBE0',
            borderRadius: '20px',
            padding: '48px',
            marginBottom: '80px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2C1810',
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            The Opportunity
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {[
              { value: '$13.8B', label: 'Functional mushroom market globally', color: '#87A878' },
              { value: '9.5%', label: 'Annual market growth rate (CAGR)', color: '#2D5016' },
              { value: '30+', label: 'US cities with decriminalization', color: '#7B68AE' },
              { value: '$193M', label: 'WeedMaps annual revenue (our model)', color: '#D4853A' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: stat.color,
                    marginBottom: '8px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: '#8B6F47',
                    lineHeight: 1.4,
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For Retailers section */}
      <div
        id="retailers"
        style={{
          backgroundColor: '#F0EBE0',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#2C1810',
                marginBottom: '12px',
              }}
            >
              Built for Mushroom Retailers
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#8B6F47',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              Reach customers who are actively searching for what you sell. No cold calls, no ads — just
              a listing where your customers are already looking.
            </p>
          </div>

          {/* Benefits */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginBottom: '60px',
            }}
          >
            {[
              { icon: '🎯', title: 'Targeted Discovery', desc: 'Customers searching specifically for mushroom products — not general Google searchers.' },
              { icon: '📊', title: 'Real Analytics', desc: 'Track profile views, search appearances, click-throughs, and customer intent signals.' },
              { icon: '⭐', title: 'Build Reputation', desc: 'Collect and respond to verified reviews. Build the social proof that drives foot traffic.' },
              { icon: '💰', title: 'Promote Deals', desc: 'Post deals, specials, and seasonal offers. Drive urgency and repeat visits.' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#FAF7F0',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h4
                  style={{
                    fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#2C1810',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#8B6F47',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div
        id="pricing"
        style={{
          backgroundColor: '#FAF7F0',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#2C1810',
                marginBottom: '12px',
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#8B6F47',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Start free. Upgrade when you see results.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                style={{
                  backgroundColor: tier.featured ? tier.color : '#F0EBE0',
                  borderRadius: '16px',
                  padding: '32px',
                  border: tier.featured ? 'none' : `2px solid ${tier.color}30`,
                  position: 'relative',
                  transform: tier.featured ? 'scale(1.03)' : 'scale(1)',
                  boxShadow: tier.featured ? '0 8px 32px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                {tier.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#D4A843',
                      color: '#2C1810',
                      padding: '4px 16px',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      fontFamily: 'var(--font-inter, Inter, sans-serif)',
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: tier.featured ? '#FAF7F0' : '#2C1810',
                    marginBottom: '8px',
                  }}
                >
                  {tier.name}
                </h3>

                <div style={{ marginBottom: '24px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: tier.featured ? '#FAF7F0' : tier.color,
                    }}
                  >
                    ${tier.price}
                  </span>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: tier.featured ? 'rgba(250,247,240,0.7)' : '#8B6F47',
                      fontFamily: 'var(--font-inter, Inter, sans-serif)',
                    }}
                  >
                    /month
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.875rem',
                        color: tier.featured ? 'rgba(250,247,240,0.9)' : '#5C4033',
                        fontFamily: 'var(--font-inter, Inter, sans-serif)',
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: tier.featured ? '#D4A843' : tier.color, flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/about#claim"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: tier.featured ? '#D4A843' : tier.color,
                    color: tier.featured ? '#2C1810' : '#FAF7F0',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                    transition: 'opacity 200ms ease',
                  }}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Claim listing CTA */}
      <div
        id="claim"
        style={{
          background: 'linear-gradient(135deg, #2C1810 0%, #3d2515 100%)',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '4rem' }}>🌱</span>
          <h2
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#FAF7F0',
              margin: '20px 0 16px',
              letterSpacing: '-0.02em',
            }}
          >
            Claim Your Free Listing
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(250,247,240,0.75)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              marginBottom: '36px',
              maxWidth: '520px',
              margin: '0 auto 36px',
            }}
          >
            We&apos;re launching with free listings for the first 50 retailers. Get in early, build your
            reputation, and convert to a paid plan when you see results.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:retailers@mycomaps.com"
              style={{
                backgroundColor: '#D4A843',
                color: '#2C1810',
                padding: '16px 32px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              📧 Apply for Free Listing
            </a>
            <Link
              href="/search"
              style={{
                backgroundColor: 'transparent',
                color: '#FAF7F0',
                padding: '16px 32px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                border: '2px solid rgba(250,247,240,0.3)',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Browse the Marketplace
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
