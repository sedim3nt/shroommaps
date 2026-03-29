import Link from 'next/link'

const LINKS = {
  Explore: [
    { href: '/search', label: 'Find Retailers' },
    { href: '/search?vertical=therapeutic', label: 'Therapeutic Centers' },
    { href: '/search?vertical=medicinal', label: 'Medicinal Shops' },
    { href: '/search?vertical=gourmet', label: 'Gourmet Farms' },
    { href: '/legal', label: 'Legal Status' },
  ],
  Company: [
    { href: '/about', label: 'About MycoMaps' },
    { href: '/about#retailers', label: 'For Retailers' },
    { href: '/about#claim', label: 'Claim a Listing' },
  ],
  Legal: [
    { href: '/legal', label: 'Psilocybin Legal Map' },
    { href: '/legal#disclaimer', label: 'Legal Disclaimer' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
  ],
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1A1A2E',
        color: '#E0E0E0',
        padding: '64px 24px 32px',
        marginTop: 'auto',
        borderTop: '1px solid rgba(123, 201, 80, 0.1)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: '#7BC950',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                }}
              >
                🍄
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: '#E0E0E0',
                }}
              >
                MycoMaps
              </span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: '#8A9A8A',
                lineHeight: 1.6,
                maxWidth: '260px',
                fontFamily: 'var(--font-literata, Literata, serif)',
              }}
            >
              The mushroom marketplace. Connecting consumers with therapeutic healing centers, medicinal
              supplement shops, and gourmet mushroom farms.
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(123, 201, 80, 0.5)',
                marginTop: '16px',
                fontFamily: 'var(--font-literata, Literata, serif)',
              }}
            >
              Colorado &bull; Oregon &bull; Nationwide
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: 'var(--font-literata, Literata, serif)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#7BC950',
                  marginBottom: '16px',
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: 'rgba(224, 224, 224, 0.6)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontFamily: 'var(--font-literata, Literata, serif)',
                        transition: 'color 200ms ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(123, 201, 80, 0.1)', paddingTop: '32px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                color: '#8A9A8A',
                fontFamily: 'var(--font-literata, Literata, serif)',
              }}
            >
              © {new Date().getFullYear()} MycoMaps. All rights reserved. For informational purposes only.
              MycoMaps does not sell or facilitate the sale of controlled substances.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#8A9A8A',
                  fontFamily: 'var(--font-literata, Literata, serif)',
                }}
              >
                Built with care by
              </span>
              <span style={{ fontSize: '0.875rem' }}>🌲</span>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#7BC950',
                  fontFamily: 'var(--font-literata, Literata, serif)',
                  fontWeight: 600,
                }}
              >
                SpiritTree
              </span>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.72rem',
              color: 'rgba(138, 154, 138, 0.7)',
              marginTop: '12px',
              lineHeight: 1.5,
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            ⚠️ Disclaimer: Therapeutic listings are only shown for jurisdictions where psilocybin healing
            centers are legally licensed. Always verify local laws before seeking or providing services.
            MycoMaps is a directory platform — we do not provide medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
