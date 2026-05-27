'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const portfolio = [
  { id: 1, category: 'Digital Branding', tag: 'Brand Identity', title: 'NovaSphere', desc: 'Tech startup identity system with futuristic visual language and motion-first brand guidelines.', year: '2024', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800', slug: 'novasphere' },
  { id: 2, category: 'Web Development', tag: 'Web Dev', title: 'Luxen Finance', desc: 'Premium fintech platform built with fluid UX, real-time data dashboards, and seamless mobile-first interactions.', year: '2024', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', slug: 'luxen-finance' },
  { id: 3, category: 'Marketing', tag: 'Campaign', title: 'Orbit Fashion', desc: '360° digital campaign that drove 3× engagement across all paid and organic channels within 60 days.', year: '2023', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', slug: 'orbit-fashion' },
  { id: 4, category: 'Digital Branding', tag: 'UI/UX Design', title: 'Pulse Health', desc: 'Healthcare app redesign improving patient experience scores by 67% while reducing drop-off by 40%.', year: '2023', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', slug: 'pulse-health' },
  { id: 5, category: 'Marketing', tag: 'Motion Design', title: 'Vertex Labs', desc: 'Brand film and motion identity for an AI startup Series B launch that reached 2M+ organic impressions.', year: '2024', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800', slug: 'vertex-labs' },
];

const filters = ['All Work', 'Digital Branding', 'Web Development', 'Marketing'];

export default function Work() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState('All Work');

  useEffect(() => { setLoaded(true); }, []);

  const filtered = active === 'All Work' ? portfolio : portfolio.filter(p => p.category === active);

  return (
    <section id="work" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '0' }}>
      {/* Light intro header */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <span className="section-label">Portfolio</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Real-world examples of how<br />we&apos;ve helped companies achieve<br />their marketing objectives.
            </h2>
            <p className="section-desc" style={{ maxWidth: '300px', fontSize: '0.95rem' }}>
              A curated selection of brands we&apos;ve propelled to new heights of visibility and impact.
            </p>
          </div>
        </div>
      </div>

      {/* DARK CONTRAST SECTION */}
      <div className="dark-section-contrast">
        <div className="container">
          {/* Filter pills + header */}
          <div className="portfolio-header-block" style={{ flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label">Our Work</span>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>
                Filter by category
              </h3>
            </div>
            <div className="category-filter-pills">
              {filters.map(f => (
                <button
                  key={f}
                  className={`filter-pill ${active === f ? 'active' : ''}`}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio grid */}
          <div className="portfolio-grid-modern" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {/* Circular chart card — decorative */}
            <div className="circle-chart-card" style={{ minHeight: '280px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <div className="lime-circular-indicator">
                  <span className="circle-center-text">LIVE</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '2.2rem', color: '#fff', lineHeight: 1 }}>
                    {filtered.length}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Case{filtered.length !== 1 ? 's' : ''} shown
                  </div>
                </div>
              </div>
            </div>

            {/* Case study cards */}
            {filtered.map((item, idx) => (
              <Link
                key={item.id}
                href={`/work/${item.slug}`}
                className="modern-work-card"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(12,12,20,0.3), rgba(12,12,20,0.95)), url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
                  minHeight: '320px',
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div className="card-top-accent">
                  <span style={{ background: 'var(--secondary)', color: 'var(--text-dark)', padding: '0.3rem 0.9rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>
                    {item.tag}
                  </span>
                </div>
                <div className="card-bottom-details">
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.6rem', fontFamily: 'var(--font-title)', letterSpacing: '0.05em' }}>
                    {item.year}
                  </div>
                  <h3>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--secondary)', fontFamily: 'var(--font-title)', fontWeight: 600 }}>
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
