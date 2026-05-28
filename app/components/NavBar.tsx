'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IconLogoMark } from './Icons';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; avatar: string } | null>(null);
  const pathname = usePathname();
  const router = useRouter(); // Next.js router instance

  useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem('creative_user');
      if (stored) {
        setUser(JSON.parse(stored));
      } else {
        setUser(null);
      }
    };
    checkUser();

    // Listen to storage changes for instant reactive navbar updates
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('creative_user');
    window.dispatchEvent(new Event('storage'));
    router.push('/login');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''} style={{ padding: scrolled ? '0.7rem 0' : '1.2rem 0' }}>
        <div className="nav-container">
          <Link href="/" className="nav-logo" style={{ fontSize: '1.15rem' }}>
            <IconLogoMark size={18} />
            <span className="logo-text" style={{ whiteSpace: 'nowrap' }}>Creative Marketing</span>
          </Link>

          <ul className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  style={{
                    color: pathname === link.path ? 'var(--text-dark)' : undefined,
                    fontWeight: pathname === link.path ? '700' : undefined,
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            {user ? (
              <>
                <li style={{ marginLeft: '1rem' }}>
                  <Link href="/portal" className="nav-cta" style={{ background: 'var(--bg-dark)', color: 'var(--text-light)' }}>
                    Client Portal
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#dc2626', fontWeight: 600, fontSize: '0.95rem', marginLeft: '0.5rem', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li style={{ marginLeft: '1rem' }}>
                  <Link href="/login" style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-cta">
                    Get Started
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Hamburger — shown on mobile via CSS class */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="hamburger-btn"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: 'var(--text-dark)',
                  borderRadius: '4px',
                  transition: 'var(--transition-smooth)',
                  opacity: i === 1 && isOpen ? 0 : 1,
                  transform:
                    i === 0 && isOpen
                      ? 'translateY(7px) rotate(45deg)'
                      : i === 2 && isOpen
                      ? 'translateY(-7px) rotate(-45deg)'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? '0' : '-100%',
          width: '72%',
          maxWidth: '320px',
          height: '100vh',
          background: 'rgba(8,8,16,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          transition: 'right 0.5s cubic-bezier(0.16,1,0.3,1)',
          zIndex: 99,
          borderLeft: 'var(--border-light)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.04)',
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setIsOpen(false)}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: pathname === link.path ? 'var(--secondary)' : 'var(--text-dark)',
            }}
          >
            {link.name}
          </Link>
        ))}
        {user ? (
          <>
            <Link
              href="/portal"
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--text-dark)',
              }}
            >
              Client Portal
            </Link>
            <button
              onClick={() => { handleLogout(); setIsOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-title)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#dc2626',
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--text-dark)',
              }}
            >
              Log In
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
            >
              <span>Get Started</span>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
