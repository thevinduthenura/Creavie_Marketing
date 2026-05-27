'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, retention: 0, brands: 0 });
  const [activeTab, setActiveTab] = useState('All Work');

  const portfolio = [
    { category: 'Digital Branding', tag: 'Smart Tech', title: 'Dot Pad', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800', slug: 'dot-pad' },
    { category: 'Marketing', tag: 'Social Campaign', title: 'Penny Price Packs', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', slug: 'penny-price-packs' },
    { category: 'Web Development', tag: 'IoT Dashboard', title: 'Animal Alerts', img: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800', slug: 'animal-alerts' },
    { category: 'Digital Branding', tag: 'Creative Fashion', title: 'Rainbow Wool', img: 'https://images.unsplash.com/photo-1528747045372-3c868202b37a?auto=format&fit=crop&q=80&w=800', slug: 'rainbow-wool' },
    { category: 'Marketing', tag: 'Global Launch', title: 'Lufthansa Centennial', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800', slug: 'lufthansa-centennial' },
    { category: 'Web Development', tag: 'Interactive Game', title: 'Lupins Quest', img: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=800', slug: 'lupins-quest' }
  ];

  const filters = ['All Work', 'Digital Branding', 'Web Development', 'Marketing'];
  const filteredWorks = activeTab === 'All Work' ? portfolio.slice(0, 6) : portfolio.filter(p => p.category === activeTab);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const s = setTimeout(() => {
      const steps = 60;
      let step = 0;
      const iv = setInterval(() => {
        step++;
        setCounts({
          projects: Math.min(Math.floor((230 / steps) * step), 230),
          retention: Math.min(Math.floor((98 / steps) * step), 98),
          brands: Math.min(Math.floor((920 / steps) * step), 920),
        });
        if (step >= steps) clearInterval(iv);
      }, 2000 / steps);
    }, 400);
    return () => { clearTimeout(t); clearTimeout(s); };
  }, []);

  const barHeights = [20, 35, 28, 55, 42, 65, 50, 80];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section id="hero">
        <div className="hero-container">
          {/* LEFT */}
          <div className="hero-left">
            <div
              className="hero-badge"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              An award-winning digital agency with disciplines in marketing, design &amp; web development.
            </div>

            <h1
              className="hero-title"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.25s',
              }}
            >
              Stay ahead of the curve with our{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                forward-thinking.
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: 'var(--secondary)',
                  borderRadius: '4px',
                }} />
              </span>
            </h1>

            <p
              className="hero-sub"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.4s',
              }}
            >
              Strategy, design and digital experience built for brands that want to stand out and actually grow.
            </p>

            <div
              className="hero-ctas"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.55s',
              }}
            >
              <Link href="/contact" className="btn-primary">
                <span>Schedule a Call</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/work" className="btn-ghost">
                <span>View Case Studies</span>
              </Link>
            </div>

            <div
              className="hero-client-row"
              style={{
                opacity: loaded ? 1 : 0,
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.7s',
              }}
            >
              <span className="trusted-label">Trusted by the world&apos;s biggest brands</span>
              <div className="hero-client-logos">
                <span>NovaSphere</span>
                <span>Luxen</span>
                <span>OrbitFx</span>
                <span>PulseAI</span>
                <span>Vertex</span>
              </div>
            </div>
          </div>

          {/* RIGHT — visual cards */}
          <div
            className="hero-right-visuals"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.4s',
            }}
          >
            {/* Stat cards row */}
            <div className="visual-stats-row">
              {/* Semicircle visual */}
              <div className="white-card" style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div className="semicircle-visual">
                  <div className="lime-pill-icon">✦</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>Projects Delivered</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.4rem', fontWeight: 800, lineHeight: 1 }}>{counts.projects}<span style={{ color: 'var(--secondary)' }}>+</span></div>
                </div>
              </div>

              {/* Stats card */}
              <div className="white-card stats-card-main">
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Client Satisfaction</div>
                <div className="stats-big-num">{counts.brands}<span style={{ color: 'var(--secondary)', fontSize: '1.8rem' }}>+</span></div>
                <div className="stats-label-sub">Happy clients across<br />22+ countries worldwide</div>
              </div>
            </div>

            {/* Dark bar chart card */}
            <div className="dark-hero-card">
              <div className="dark-hero-card-left">
                <p>Traffic & Sales</p>
                <h4>Drive more traffic<br />and product sales</h4>
              </div>
              <div className="bar-chart-visual">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className={`bar ${i === barHeights.length - 1 || i === barHeights.length - 3 ? 'bar-active' : ''}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE TICKER ═══ */}
      <div className="marquee-wrapper" aria-hidden="true">
        <div className="marquee-track">
          {['Brand Strategy', 'UI/UX Design', 'Motion Design', 'Web Development', 'Campaign Planning', 'Content Creation', 'SEO & Analytics', 'Social Media',
            'Brand Strategy', 'UI/UX Design', 'Motion Design', 'Web Development', 'Campaign Planning', 'Content Creation', 'SEO & Analytics', 'Social Media'].map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className="mx">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══ OUT OF THE BOX IDEAS BLOCK ═══ */}
      <section className="services-teaser-block">
        <div className="container">
          <div className="teaser-grid">
            {/* Left: Text */}
            <div>
              <span className="section-label">What We Offer</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)' }}>
                Provide the best service with out of the box ideas
              </h2>
              <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
                We don't just follow trends. Our team builds strategies and designs that help you stand out from the competition.
              </p>
              <Link href="/services" className="btn-primary">
                <span>Explore Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Right: Visual widgets grid */}
            <div className="teaser-right-row">
              {/* Satisfaction card */}
              <div className="white-card avatar-stack-container">
                <div className="avatar-stack">
                  {['#a3ff12', '#0c0c14', '#888', '#ddd', '#555'].map((bg, i) => (
                    <div key={i} className="avatar-stack-circle" style={{ background: bg, color: bg === '#a3ff12' ? '#0c0c14' : bg === '#0c0c14' ? '#fff' : '#333' }}>
                      {['A', 'B', 'C', 'D', '+'][i]}
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.6rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.4rem' }}>
                  {counts.retention}%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Client retention rate</div>
              </div>

              {/* HOW WE WORK video-style card */}
              <div className="video-how-work-card" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
                <div className="video-overlay-text" style={{ color: '#fff' }}>HOW<br />WE WORK</div>
                <div className="play-circle-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-dark)">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </div>

              {/* Key services chips card */}
              <div className="white-card" style={{ gridColumn: '1 / -1', display: 'flex', flexWrap: 'wrap', gap: '0.7rem', alignItems: 'center' }}>
                {['Brand Strategy', 'UI/UX Design', 'Web Dev', 'Motion', 'Campaigns', 'Analytics', 'Content', 'SEO'].map((s) => (
                  <span key={s} style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    padding: '0.5rem 1.1rem',
                    borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: 'var(--border-light)',
                    color: 'var(--text-dark)',
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SELECTED WORKS ═══ */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)', borderTop: 'var(--border-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label">Selected Works</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem,4.5vw,2.8rem)' }}>
                Work that speaks<br />for itself
              </h2>
              {/* Filter pills */}
              <div style={{
                display: 'inline-flex',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: 'var(--border-light)',
                padding: '0.4rem',
                borderRadius: '100px',
                marginTop: '0.5rem'
              }}>
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveTab(f)}
                    style={{
                      border: 'none',
                      background: activeTab === f ? 'var(--secondary)' : 'transparent',
                      color: activeTab === f ? '#000000' : 'var(--text-muted)',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '100px',
                      fontFamily: 'var(--font-title)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: activeTab === f ? '0 2px 10px rgba(144, 235, 0, 0.2)' : 'none'
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <Link href="/work" className="btn-ghost">
              <span>View All Projects</span>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredWorks.map((work, i) => (
              <Link key={i} href={`/work/${work.slug}`} style={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: '380px',
                backgroundImage: `linear-gradient(to bottom, rgba(12,12,20,0.1), rgba(12,12,20,0.85)), url(${work.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#fff',
                textDecoration: 'none',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div>
                  <span style={{ background: 'var(--secondary)', color: '#0c0c14', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>
                    {work.tag}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>{work.title}</h3>
                  <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-title)' }}>
                    View Case Study <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
