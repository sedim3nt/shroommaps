'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
        backgroundColor: '#2D5016',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
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
              backgroundColor: '#D4A843',
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
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#FAF7F0',
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
                color: pathname === link.href ? '#D4A843' : 'rgba(250,247,240,0.75)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: pathname === link.href ? 600 : 400,
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: pathname === link.href ? 'rgba(212,168,67,0.15)' : 'transparent',
                transition: 'all 200ms ease',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/search"
            style={{
              backgroundColor: '#D4A843',
              color: '#2C1810',
              padding: '8px 20px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              marginLeft: '8px',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
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
            color: '#FAF7F0',
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
            backgroundColor: '#2D5016',
            borderTop: '1px solid rgba(255,255,255,0.1)',
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
                color: pathname === link.href ? '#D4A843' : 'rgba(250,247,240,0.85)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: pathname === link.href ? 600 : 400,
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/search"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: '#D4A843',
              color: '#2C1810',
              padding: '12px 16px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              marginTop: '8px',
              textAlign: 'center',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
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
