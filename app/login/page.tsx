'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconLogoMark } from '../components/Icons';

export default function LoginPage() {
  const router = useRouter();
  
  // States: 'signup' | 'login' | 'admin'
  const [mode, setMode] = useState<'signup' | 'login' | 'admin'>('signup');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [agreePromo, setAgreePromo] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    setTimeout(() => {
      if (mode === 'admin') {
        if (email === 'admin@creavie.com' && password === 'admin') {
          setMessage({ type: 'success', text: 'Welcome back Administrator. Decrypting telemetry HQ...' });
          setTimeout(() => {
            router.push('/admin');
          }, 1500);
        } else {
          setLoading(false);
          setMessage({ type: 'error', text: 'Access Denied. Invalid administrative credentials.' });
        }
      } else {
        // Mock User Login / Sign Up
        if (!email || !password || (mode === 'signup' && !name)) {
          setLoading(false);
          setMessage({ type: 'error', text: 'Please fill in all required vectors.' });
          return;
        }
        setMessage({ type: 'success', text: mode === 'signup' ? 'Account created securely! Redirecting to home...' : 'Authorization successful. Welcome back!' });
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    }, 1200);
  };

  const handleSocialClick = (platform: string) => {
    setLoading(true);
    setMessage({ type: 'success', text: `Connecting secure OAuth pathway with ${platform}...` });
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };

  const toggleMode = (newMode: 'signup' | 'login' | 'admin') => {
    setMode(newMode);
    setShowEmailForm(false);
    setMessage(null);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.2rem',
        fontFamily: 'var(--font-title), sans-serif',
      }}
    >
      <div
        className="white-card"
        style={{
          width: '100%',
          maxWidth: '440px',
          boxShadow: mode === 'admin' 
            ? '0 15px 50px rgba(144, 235, 0, 0.12), 0 0 0 1px rgba(144, 235, 0, 0.2)'
            : '0 15px 45px rgba(12, 12, 20, 0.04)',
          borderRadius: '28px',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          border: mode === 'admin' ? '1px solid rgba(144, 235, 0, 0.4)' : '1px solid rgba(12, 12, 20, 0.06)',
          background: '#ffffff',
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
            <IconLogoMark size={20} color={mode === 'admin' ? 'var(--secondary)' : 'var(--text-dark)'} />
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
              Creavie
            </span>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            {mode === 'admin' ? 'Administrative HQ' : 'formerly Creavie Media'}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 800,
            color: 'var(--text-dark)',
            letterSpacing: '-0.02em',
            marginBottom: '1.8rem',
            textAlign: 'center',
          }}
        >
          {mode === 'signup' && 'Create an account'}
          {mode === 'login' && 'Log in to your account'}
          {mode === 'admin' && 'Secure Admin Sign-in'}
        </h2>

        {/* Messaging Box */}
        {message && (
          <div
            style={{
              width: '100%',
              padding: '0.9rem 1.2rem',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: 500,
              lineHeight: 1.4,
              marginBottom: '1.5rem',
              background: message.type === 'success' 
                ? 'rgba(144, 235, 0, 0.08)' 
                : 'rgba(239, 68, 68, 0.06)',
              border: message.type === 'success' 
                ? '1px solid rgba(144, 235, 0, 0.25)' 
                : '1px solid rgba(239, 68, 68, 0.15)',
              color: message.type === 'success' 
                ? '#548f00' 
                : '#dc2626',
            }}
          >
            {message.text}
          </div>
        )}

        {/* Interactive Authentication Form Wrapper */}
        <div style={{ width: '100%' }}>
          {(!showEmailForm && mode !== 'admin') ? (
            /* SOCIAL BUTTONS STAGE (Magnific Style) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', width: '100%' }}>
              <button
                onClick={() => handleSocialClick('Google')}
                disabled={loading}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  background: '#ffffff',
                  color: 'var(--text-dark)',
                  border: '1px solid rgba(12, 12, 20, 0.12)',
                  borderRadius: '14px',
                  padding: '0.9rem 1.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-dark)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(12, 12, 20, 0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* SVG Google Logo */}
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              <button
                onClick={() => handleSocialClick('Apple')}
                disabled={loading}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  background: '#ffffff',
                  color: 'var(--text-dark)',
                  border: '1px solid rgba(12, 12, 20, 0.12)',
                  borderRadius: '14px',
                  padding: '0.9rem 1.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-dark)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(12, 12, 20, 0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* SVG Apple Logo */}
                <svg width="16" height="19" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.3-2.01-14.88-6.42-3.38-2.61-7.22-7.25-11.53-13.91-10.19-15.66-15.29-32.74-15.29-51.27 0-14.3 3.82-25.96 11.45-34.98 7.64-9.02 16.92-13.53 27.84-13.53 5.03 0 10.39 1.43 16.1 4.3 5.7 2.86 9.87 3.8 12.51 2.82 2.01-.76 5.92-2.39 11.75-4.9 5.82-2.52 10.74-3.68 14.75-3.5 14.8.76 25.86 6.07 33.19 15.93-12.57 7.64-18.72 17.84-18.47 30.6 0 9.83 3.59 18.06 10.77 24.69 7.18 6.63 15.7 10.22 25.56 10.77.78 4.3 1.63 8.35 2.57 12.16zm-36.85-116.5c0 7.9-2.9 15.1-8.7 21.6-5.8 6.5-12.8 10.3-21 11.4.1-1 .2-2 .2-3 0-7.3 2.9-14.3 8.7-21 5.8-6.7 13.1-10.5 21-11.4l-.2 2.4z" />
                </svg>
                Continue with Apple
              </button>

              <button
                onClick={() => setShowEmailForm(true)}
                disabled={loading}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  background: '#ffffff',
                  color: 'var(--text-dark)',
                  border: '1px solid rgba(12, 12, 20, 0.12)',
                  borderRadius: '14px',
                  padding: '0.9rem 1.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-dark)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(12, 12, 20, 0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Continue with email
              </button>
            </div>
          ) : (
            /* EMAIL & PASSWORD INPUT STAGE (Sleek Inputs) */
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', width: '100%' }}>
              {mode === 'signup' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(12, 12, 20, 0.15)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                  Email Coordinates
                </label>
                <input
                  type="email"
                  required
                  placeholder={mode === 'admin' ? 'admin@creavie.com' : 'you@example.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: mode === 'admin' ? '1px solid rgba(144, 235, 0, 0.3)' : '1px solid rgba(12, 12, 20, 0.15)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Security Key
                  </label>
                  {mode === 'login' && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Forgot?
                    </span>
                  )}
                </div>
                <input
                  type="password"
                  required
                  placeholder={mode === 'admin' ? 'admin password' : '••••••••'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: mode === 'admin' ? '1px solid rgba(144, 235, 0, 0.3)' : '1px solid rgba(12, 12, 20, 0.15)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Loader or Submission Button */}
              {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '0.8rem' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      border: '3px solid rgba(12,12,20,0.1)',
                      borderTopColor: mode === 'admin' ? 'var(--secondary)' : 'var(--text-dark)',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }}
                  />
                </div>
              ) : (
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: mode === 'admin' ? 'var(--secondary)' : 'var(--bg-dark)',
                    color: mode === 'admin' ? 'var(--text-dark)' : 'var(--text-light)',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '0.95rem',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    marginTop: '0.4rem',
                    boxShadow: mode === 'admin' ? '0 5px 15px var(--secondary-glow)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {mode === 'signup' && 'Create Account'}
                  {mode === 'login' && 'Log In'}
                  {mode === 'admin' && 'Authorize Access'}
                </button>
              )}

              {/* Back to choices button */}
              {mode !== 'admin' && (
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    marginTop: '0.2rem',
                  }}
                >
                  Back to all choices
                </button>
              )}
            </form>
          )}
        </div>

        {/* Promo checkbox - Only in User Sign-up mode */}
        {mode === 'signup' && !showEmailForm && (
          <label
            style={{
              width: '100%',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              cursor: 'pointer',
              marginTop: '1.5rem',
              userSelect: 'none',
            }}
          >
            <input
              type="checkbox"
              checked={agreePromo}
              onChange={() => setAgreePromo(!agreePromo)}
              style={{
                marginTop: '0.15rem',
                accentColor: 'var(--text-dark)',
                width: '15px',
                height: '15px',
                cursor: 'pointer',
              }}
            />
            <span>I do not wish to receive news and promotions from Creavie Marketing by email.</span>
          </label>
        )}

        {/* Legal notice - Except in Admin mode */}
        {mode !== 'admin' && (
          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              lineHeight: 1.6,
              margin: '1.6rem 0 0 0',
              width: '100%',
            }}
          >
            By continuing, you agree to Creavie&apos;s{' '}
            <Link href="/terms" style={{ color: 'var(--text-dark)', fontWeight: 600, textDecoration: 'underline' }}>
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy" style={{ color: 'var(--text-dark)', fontWeight: 600, textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            .
          </p>
        )}

        {/* Credentials hints for User testing & Admin testing */}
        {showEmailForm && (
          <div
            style={{
              width: '100%',
              background: 'rgba(12,12,20,0.03)',
              borderRadius: '12px',
              padding: '0.8rem 1rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              lineHeight: 1.4,
              marginTop: '1.2rem',
            }}
          >
            {mode === 'admin' ? (
              <>
                <strong style={{ color: 'var(--text-dark)' }}>Admin HQ credentials:</strong><br />
                Email: <code style={{ color: 'var(--text-dark)' }}>admin@creavie.com</code><br />
                Password: <code style={{ color: 'var(--text-dark)' }}>admin</code>
              </>
            ) : (
              <>
                <strong style={{ color: 'var(--text-dark)' }}>Dev Testing note:</strong> Any mock credentials will pass validation and redirect securely.
              </>
            )}
          </div>
        )}

        {/* Toggle Mode footer link */}
        <div
          style={{
            marginTop: '1.8rem',
            paddingTop: '1.4rem',
            borderTop: '1px solid rgba(12, 12, 20, 0.06)',
            width: '100%',
            textAlign: 'center',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
          }}
        >
          {mode === 'signup' && (
            <span>
              Already have an account?{' '}
              <button
                onClick={() => toggleMode('login')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dark)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  fontFamily: 'inherit',
                }}
              >
                Log in
              </button>
            </span>
          )}
          {mode === 'login' && (
            <span>
              Don&apos;t have an account?{' '}
              <button
                onClick={() => toggleMode('signup')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dark)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  fontFamily: 'inherit',
                }}
              >
                Sign up
              </button>
            </span>
          )}
          {mode === 'admin' && (
            <button
              onClick={() => toggleMode('login')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-dark)',
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0,
                fontFamily: 'inherit',
              }}
            >
              Back to Standard Login
            </button>
          )}
        </div>

        {/* Secure Admin Headquarters entry point link */}
        {mode !== 'admin' && (
          <button
            onClick={() => {
              toggleMode('admin');
              setShowEmailForm(true);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline',
              marginTop: '1.2rem',
              padding: 0,
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Looking for Admin HQ Sign-in?
          </button>
        )}
      </div>
    </div>
  );
}
