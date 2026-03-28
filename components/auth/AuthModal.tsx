'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: Props) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth()

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const fn = mode === 'signin' ? signInWithEmail : signUpWithEmail
    const { error } = await fn(email, password)

    setLoading(false)
    if (error) {
      setError(error)
    } else if (mode === 'signup') {
      setSuccess(true)
    } else {
      onClose()
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '2px solid #E8E0D0',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-inter, Inter, sans-serif)',
    backgroundColor: '#FAF7F0',
    color: '#2C1810',
    outline: 'none',
    boxSizing: 'border-box',
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(26,16,8,0.6)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#FAF7F0',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '1.25rem',
            color: '#A89278',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        <h2
          style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", serif)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#2C1810',
            marginBottom: '4px',
          }}
        >
          {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#8B6F47',
            marginBottom: '24px',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
          }}
        >
          {mode === 'signin' ? 'Sign in to leave reviews and save favorites.' : 'Join MycoMaps to review retailers and more.'}
        </p>

        {success ? (
          <div
            style={{
              backgroundColor: '#E8F5E3',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              color: '#2D5016',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            <p style={{ fontWeight: 700, marginBottom: '4px' }}>Check your email!</p>
            <p style={{ fontSize: '0.85rem' }}>We sent a confirmation link to {email}</p>
          </div>
        ) : (
          <>
            {/* Google */}
            <button
              onClick={signInWithGoogle}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '2px solid #E8E0D0',
                backgroundColor: '#fff',
                color: '#2C1810',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '16px',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
                color: '#A89278',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E0D0' }} />
              or
              <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E0D0' }} />
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                style={inputStyle}
              />

              {error && (
                <p style={{ color: '#D44', fontSize: '0.85rem', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#2D5016',
                  color: '#FAF7F0',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                }}
              >
                {loading ? 'Loading...' : mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            <p
              style={{
                textAlign: 'center',
                marginTop: '16px',
                fontSize: '0.85rem',
                color: '#8B6F47',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
              }}
            >
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(null) }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2D5016',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-inter, Inter, sans-serif)',
                  fontSize: '0.85rem',
                }}
              >
                {mode === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
