'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import UserButton from '@/components/auth/UserButton'

const NAV_LINKS = [
  { href: '/search', label: 'Explore' },
  { href: '/legal', label: 'Legal Status' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      style={{
        backgroundColor: '#0D1F0D',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 0 rgba(123, 201, 80, 0.1)',
        borderBottom: '1px solid rgba(123, 201, 80, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
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
              letterSpacing: '-0.01em',
            }}
          >
            MycoMaps
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? '#7BC950' : 'rgba(224, 224, 224, 0.65)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: pathname === link.href ? 600 : 400,
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: pathname === link.href ? 'rgba(123, 201, 80, 0.1)' : 'transparent',
                transition: 'all 200ms ease',
                fontFamily: 'var(--font-literata, Literata, serif)',
              }}
            >
              {link.label}
            </Link>
          ))}

          <UserButton />

          <Link
            href="/search"
            style={{
              backgroundColor: '#7BC950',
              color: '#0D1F0D',
              padding: '8px 20px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              marginLeft: '8px',
              fontFamily: 'var(--font-literata, Literata, serif)',
              transition: 'background-color 200ms ease',
            }}
          >
            Find Retailers
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#E0E0E0',
            padding: '8px',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            ) : (
              <>
                <rect x="3" y="6" width="18" height="2" rx="1" />
                <rect x="3" y="11" width="18" height="2" rx="1" />
                <rect x="3" y="16" width="18" height="2" rx="1" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: '#0D1F0D',
            borderTop: '1px solid rgba(123, 201, 80, 0.1)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === link.href ? '#7BC950' : 'rgba(224, 224, 224, 0.8)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: pathname === link.href ? 600 : 400,
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: 'var(--font-literata, Literata, serif)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: '12px 16px' }}>
            <UserButton />
          </div>
          <Link
            href="/search"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: '#7BC950',
              color: '#0D1F0D',
              padding: '12px 16px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              marginTop: '8px',
              textAlign: 'center',
              fontFamily: 'var(--font-literata, Literata, serif)',
            }}
          >
            Find Retailers
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
