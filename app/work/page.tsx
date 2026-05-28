'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const portfolio = [
  { id: 1, category: 'Digital Branding', tag: 'Smart Tech', title: 'Dot Pad', desc: 'Tactile graphics device for visually impaired users. We designed the fluid interactive software, developer tools, and global launch branding.', year: '2024', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800', slug: 'dot-pad' },
  { id: 2, category: 'Marketing', tag: 'Social Campaign', title: 'Penny Price Packs', desc: 'Rewriting everyday product labels to detail the true social and economic cost of inflation, triggering global media discussions.', year: '2024', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', slug: 'penny-price-packs' },
  { id: 3, category: 'Web Development', tag: 'IoT Dashboard', title: 'Animal Alerts', desc: 'Immersive data platform powered by pet wearable biosensors, automatically broadcasting hyper-local health safety alerts.', year: '2024', img: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800', slug: 'animal-alerts' },
  { id: 4, category: 'Digital Branding', tag: 'Creative Fashion', title: 'Rainbow Wool', desc: 'Creating the world’s first fashion wool line produced by gay sheep, advocating for LGBTQ+ visibility and diversity in agriculture.', year: '2023', img: 'https://images.unsplash.com/photo-1528747045372-3c868202b37a?auto=format&fit=crop&q=80&w=800', slug: 'rainbow-wool' },
  { id: 5, category: 'Marketing', tag: 'Global Launch', title: 'Lufthansa Centennial', desc: 'A virtual interactive timeline celebrating 100 years of aviation. Users explored classic airplanes in realistic interactive 3D.', year: '2023', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800', slug: 'lufthansa-centennial' },
  { id: 6, category: 'Web Development', tag: 'Interactive Game', title: 'Lupins Quest', desc: 'Interactive online puzzle experience built for Netflix, allowing millions of global fans to crack heists live.', year: '2024', img: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=800', slug: 'lupins-quest' },
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
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-dark)' }}>
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
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '2.2rem', color: 'var(--text-dark)', lineHeight: 1 }}>
                    {filtered.length}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(234, 229, 208, 0.4)', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
                  color: 'var(--text-dark)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div className="card-top-accent">
                  <span style={{ background: 'var(--secondary)', color: '#030303FF', padding: '0.3rem 0.9rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>
                    {item.tag}
                  </span>
                </div>
                <div className="card-bottom-details">
                  <div style={{ fontSize: '0.78rem', color: 'rgba(234, 229, 208, 0.3)', marginBottom: '0.6rem', fontFamily: 'var(--font-title)', letterSpacing: '0.05em' }}>
                    {item.year}
                  </div>
                  <h3 style={{ color: 'var(--text-dark)' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(234, 229, 208, 0.6)' }}>{item.desc}</p>
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
