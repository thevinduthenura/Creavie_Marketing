import React from 'react';
import Link from 'next/link';
import { IconLogoMark, IconInstagram, IconLinkedin, IconTwitter, IconDribbble } from './Icons';

export default function Footer() {
  return (
    <footer>
      {/* Ready to Launch CTA Banner */}
      <div className="ready-launch-block">
        <div className="ready-launch-left">
          <h2>Ready to work<br />with us?</h2>
        </div>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1.1rem 2.8rem' }}>
          <span>Get Started</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div id="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ marginBottom: '0', fontSize: '1.15rem' }}>
              <IconLogoMark size={18} />
              <span className="logo-text">Creative Marketing</span>
            </Link>
            <p>A forward-thinking marketing agency elevating brands through strategy, design & digital experience.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="social-link"><IconInstagram size={15} /></a>
              <a href="#" aria-label="LinkedIn" className="social-link"><IconLinkedin size={15} /></a>
              <a href="#" aria-label="Twitter/X" className="social-link"><IconTwitter size={15} /></a>
              <a href="#" aria-label="Dribbble" className="social-link"><IconDribbble size={15} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/team">Team</Link>
            <Link href="/admin" style={{ color: 'var(--secondary)', fontWeight: 700 }}>Admin HQ</Link>
          </div>

          <div className="footer-links">
            <h4>Locate</h4>
            <Link href="/services">Brand Strategy</Link>
            <Link href="/services">UI/UX Design</Link>
            <Link href="/services">Web Development</Link>
            <Link href="/services">Motion Design</Link>
            <Link href="/services">Digital Campaigns</Link>
          </div>

          <div className="footer-contact-info">
            <h4>Contact</h4>
            <a href="mailto:hello@creativemarketingtm.com">hello@creativemarketingtm.com</a>
            <p className="footer-addr" style={{ marginTop: '0.8rem' }}>
              <strong>Head Office</strong><br />
              Dublin, Ireland
            </p>
            <p className="footer-addr">
              Also in: Canada · Australia<br />USA · New Zealand
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Creative Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
