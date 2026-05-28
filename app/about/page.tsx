'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const locations = [
  { city: 'Dublin', country: 'Ireland', role: 'Head Office', flag: '🇮🇪', isHQ: true },
  { city: 'Toronto', country: 'Canada', role: 'Regional Office', flag: '🇨🇦', isHQ: false },
  { city: 'Sydney', country: 'Australia', role: 'Regional Office', flag: '🇦🇺', isHQ: false },
  { city: 'New York', country: 'United States', role: 'Regional Office', flag: '🇺🇸', isHQ: false },
  { city: 'Auckland', country: 'New Zealand', role: 'Regional Office', flag: '🇳🇿', isHQ: false },
];

const articles = [
  { tag: 'Customer Experience', title: 'Keeping Clients at the Center of Every Decision', desc: 'Our customer-first philosophy ensures every campaign creates genuine value and lasting satisfaction for clients worldwide.', date: 'May 2024' },
  { tag: 'Government Projects', title: 'Excellence in Public Sector & VIP Engagements', desc: 'Creative Marketing has an established track record delivering premium, confidential projects for government bodies and VIP clients.', date: 'Apr 2024' },
  { tag: 'Global Presence', title: 'How We Scaled to 500+ Professionals Across 5 Countries', desc: 'From our Ireland HQ to offices in Canada, Australia, the USA and New Zealand. Here is how we built a globally trusted team.', date: 'Mar 2024' },
];

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, members: 0, countries: 0, satisfaction: 0 });

  useEffect(() => {
    setLoaded(true);
    const steps = 60;
    let step = 0;
    const iv = setInterval(() => {
      step++;
      setCounts({
        projects: Math.min(Math.floor((10000 / steps) * step), 10000),
        members: Math.min(Math.floor((500 / steps) * step), 500),
        countries: Math.min(Math.floor((5 / steps) * step), 5),
        satisfaction: Math.min(Math.floor((98 / steps) * step), 98),
      });
      if (step >= steps) clearInterval(iv);
    }, 2000 / steps);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="about" style={{ paddingTop: '120px' }}>

      {/* HERO */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'center',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div>
            <span className="section-label">About Creative Marketing</span>
            <h1 className="section-title">A globally trusted force,<br /><span style={{ color: 'var(--secondary)' }}>led from Ireland.</span></h1>
            <p className="statement-premium" style={{ marginBottom: '2.5rem' }}>
              Creative Marketing is a specialized digital team delivering <span className="fade">premium marketing, brand identity, and scalable interactive web applications for commercial and VIP clients worldwide.</span>
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '3rem' }}>
              Founded and led by <strong style={{ color: 'var(--text-dark)' }}>Dr. Gerald</strong>, our team of over <strong style={{ color: 'var(--text-dark)' }}>500 professionals globally</strong> has completed more than <strong style={{ color: 'var(--text-dark)' }}>10,000 projects</strong> across Ireland, Canada, Australia, the USA, and New Zealand.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                <span>Work With Us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/team" className="btn-ghost"><span>View Careers</span></Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { num: counts.projects.toLocaleString(), unit: '+', label: 'Projects Completed', accent: true },
              { num: counts.members, unit: '+', label: 'Global Professionals' },
              { num: counts.countries, unit: '', label: 'Country Offices' },
              { num: counts.satisfaction, unit: '%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="white-card" style={{ textAlign: 'center', padding: '2rem 1.5rem', border: stat.accent ? '1px solid rgba(144,235,0,0.3)' : 'var(--border-light)' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.2rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>
                  {stat.num}<span style={{ color: 'var(--secondary)' }}>{stat.unit}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-title)', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL OFFICES */}
      <div style={{ background: 'var(--bg-white)', borderTop: 'var(--border-light)', borderBottom: 'var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="section-label">Our Offices</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', marginBottom: '0.5rem' }}>Present in 5 countries</h2>
            <p className="section-desc">From Ireland HQ to regional hubs across the globe.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '1.2rem' }}>
            {locations.map((loc, idx) => (
              <div key={loc.country} className="white-card" style={{
                padding: '1.8rem',
                border: loc.isHQ ? '1px solid rgba(144,235,0,0.4)' : 'var(--border-light)',
                opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${0.2 + idx * 0.1}s`,
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{loc.flag}</div>
                <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{loc.city}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.7rem', fontFamily: 'var(--font-title)', fontWeight: 500 }}>{loc.country}</div>
                <span style={{
                  fontFamily: 'var(--font-title)', fontSize: '0.7rem', fontWeight: 700,
                  padding: '0.25rem 0.7rem', borderRadius: '100px',
                  background: loc.isHQ ? 'var(--secondary)' : 'rgba(234, 229, 208, 0.05)',
                  color: loc.isHQ ? '#000000' : 'var(--text-muted)',
                }}>{loc.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ARTICLES */}
      <div className="articles-block">
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">Our Expertise</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', marginBottom: 0 }}>What sets Creative<br />Marketing apart</h2>
              <Link href="/services" className="btn-ghost"><span>All Services</span></Link>
            </div>
          </div>
          <div className="articles-grid">
            {articles.map((art, idx) => (
              <div key={idx} className="article-card" style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${0.4 + idx * 0.12}s` }}>
                <div>
                  <div className="article-tag">{art.tag}</div>
                  <h3>{art.title}</h3>
                  <p>{art.desc}</p>
                </div>
                <div className="article-card-footer">
                  <span className="article-date">{art.date}</span>
                  <div className="article-arrow-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
