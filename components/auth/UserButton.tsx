'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import AuthModal from './AuthModal'

export default function UserButton() {
  const { user, signOut, loading } = useAuth()
  const [showAuth, setShowAuth] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  if (loading) return null

  if (!user) {
    return (
      <>
        <button
          onClick={() => setShowAuth(true)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '2px solid rgba(250,247,240,0.3)',
            backgroundColor: 'transparent',
            color: '#FAF7F0',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
            whiteSpace: 'nowrap',
          }}
        >
          Sign In
        </button>
        <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
      </>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid #D4A843',
          backgroundColor: '#D4A843',
          color: '#2C1810',
          fontSize: '0.8rem',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'var(--font-inter, Inter, sans-serif)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {(user.email?.[0] ?? 'U').toUpperCase()}
      </button>

      {showMenu && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: 0,
            backgroundColor: '#FAF7F0',
            borderRadius: '10px',
            padding: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            minWidth: '180px',
            zIndex: 50,
          }}
        >
          <p
            style={{
              padding: '8px 12px',
              fontSize: '0.8rem',
              color: '#8B6F47',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              borderBottom: '1px solid #E8E0D0',
              marginBottom: '4px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {user.email}
          </p>
          <button
            onClick={() => { signOut(); setShowMenu(false) }}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'transparent',
              color: '#2C1810',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}
