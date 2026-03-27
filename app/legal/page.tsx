import type { Metadata } from 'next'
import USLegalMap from '@/components/legal/USLegalMap'
import { stateStatuses, STATUS_CONFIG } from '@/data/legal-status'

export const metadata: Metadata = {
  title: 'Psilocybin Legal Status Map',
  description:
    'Interactive map showing psilocybin mushroom legal status across all 50 US states. Find where therapeutic access, decriminalization, and prohibition apply.',
}

export default function LegalPage() {
  const legalCount = stateStatuses.filter((s) => s.therapeuticStatus === 'legal').length
  const pendingCount = stateStatuses.filter((s) => s.therapeuticStatus === 'pending').length
  const decrimCount = stateStatuses.filter((s) => s.therapeuticStatus === 'decriminalized').length

  return (
    <div style={{ backgroundColor: '#FAF7F0', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #7B68AE 0%, #5a4d8a 100%)',
          padding: '60px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '9999px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}
          >
            <span style={{ fontSize: '0.8rem' }}>⚖️</span>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              Legal Status Tracker
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#FAF7F0',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Psilocybin Legal Status
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(250,247,240,0.85)' }}>Across America</span>
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(250,247,240,0.8)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              maxWidth: '560px',
              margin: '0 auto 32px',
            }}
          >
            Track the rapidly evolving legal landscape for psilocybin mushrooms. Updated as laws change.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { value: legalCount, label: 'States with Legal Access', color: STATUS_CONFIG.legal.color },
              { value: pendingCount, label: 'Pending Legislation', color: STATUS_CONFIG.pending.color },
              { value: decrimCount, label: 'Decriminalized', color: STATUS_CONFIG.decriminalized.color },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#FAF7F0',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(250,247,240,0.7)',
                    fontFamily: 'var(--font-inter, Inter, sans-serif)',
                    marginTop: '4px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2C1810',
              marginBottom: '12px',
            }}
          >
            Click any state to see details
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#8B6F47',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            Note: Medicinal supplements and gourmet mushrooms are legal in all 50 states.
            This map tracks therapeutic psilocybin access only.
          </p>
        </div>

        <USLegalMap />
      </div>

      {/* Disclaimer */}
      <div
        id="disclaimer"
        style={{
          backgroundColor: '#F0EBE0',
          borderTop: '2px solid #E8E0D0',
          padding: '40px 24px',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#2C1810',
              marginBottom: '12px',
            }}
          >
            ⚠️ Legal Disclaimer
          </h3>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#5C4033',
              lineHeight: 1.7,
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              marginBottom: '12px',
            }}
          >
            The information on this page is for educational purposes only and does not constitute legal advice.
            Laws regarding psilocybin mushrooms are rapidly changing at federal, state, and local levels.
            Always consult with a qualified attorney and verify current laws before taking any action.
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#5C4033',
              lineHeight: 1.7,
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            ShroomMaps only lists therapeutic retailers in jurisdictions where healing centers are legally
            licensed. We do not facilitate or encourage any illegal activity.
          </p>
        </div>
      </div>
    </div>
  )
}
