'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const openings = [
  {
    title: 'General Manager',
    location: 'Sydney, Australia',
    flag: '🇦🇺',
    type: 'Full-Time',
    dept: 'Leadership',
    desc: 'Lead and grow our Australian regional operations, managing cross-functional teams and driving strategic business development across the APAC region.',
  },
  {
    title: 'Senior Manager — Human Resources',
    location: 'Toronto, Canada',
    flag: '🇨🇦',
    type: 'Full-Time',
    dept: 'HR',
    desc: 'Oversee HR strategy, talent acquisition, and workforce development for our Canadian office. You will champion the Creavie culture of trust and excellence.',
  },
  {
    title: 'Senior Marketing Executive',
    location: 'Global — Any Location',
    flag: '🌍',
    type: 'Full-Time · Remote',
    dept: 'Marketing',
    desc: 'Drive integrated marketing campaigns across our international client portfolio. Position can be based in any of our 5 country offices based on candidate preference.',
  },
  {
    title: 'Senior Logistics Officer',
    location: 'Sydney, Australia',
    flag: '🇦🇺',
    type: 'Full-Time',
    dept: 'Logistics',
    desc: 'Manage end-to-end logistics operations for our Australian office, coordinating supply chains, vendor relationships, and operational workflows at scale.',
  },
  {
    title: 'Transport Coordinator',
    location: 'London, United Kingdom',
    flag: '🇬🇧',
    type: 'Full-Time',
    dept: 'Logistics',
    desc: 'Coordinate and optimise transport and fleet operations across the UK, ensuring timely, cost-effective, and compliant delivery of services.',
  },
  {
    title: 'Senior Software Developer',
    location: 'Global — Any Location',
    flag: '🌍',
    type: 'Full-Time · Remote',
    dept: 'Technology',
    desc: 'Build, scale, and maintain cutting-edge digital platforms and internal systems. Suitable candidates may be positioned in any of our 5 global offices.',
  },
];

const values = [
  { title: 'Trust First', desc: 'Every employee undergoes a thorough one-to-one trust and capability assessment before joining. We build teams, not just headcounts.' },
  { title: 'Only the Best', desc: 'We recruit only the most capable and trustworthy professionals — people who take pride in their work and stand behind their commitments.' },
  { title: 'Global Mobility', desc: 'Many of our senior roles offer flexible placement across our offices in Ireland, Canada, Australia, USA, and New Zealand.' },
];

export default function Team() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const deptColors: Record<string, string> = {
    Leadership: '#311066',
    HR: '#2563eb',
    Marketing: '#90eb00',
    Logistics: '#f59e0b',
    Technology: '#8b5cf6',
  };

  return (
    <section id="team" style={{ paddingTop: '120px' }}>

      {/* HEADER */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)', transition: 'all 1s cubic-bezier(0.16,1,0.3,1)' }}>
          <span className="section-label">Recruitment & Careers</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h1 className="section-title" style={{ marginBottom: 0 }}>Join our global<br />team of excellence</h1>
            <p className="section-desc">We recruit only the most trustworthy and capable professionals. Each candidate undergoes a personal one-to-one evaluation of both trust and skill before joining.</p>
          </div>
        </div>
      </div>

      {/* RECRUITMENT VALUES */}
      <div style={{ background: 'var(--bg-white)', borderTop: 'var(--border-light)', borderBottom: 'var(--border-light)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} className="white-card" style={{ padding: '2rem', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s` }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--secondary)', boxShadow: '0 0 10px rgba(144,235,0,0.5)', marginBottom: '1.2rem' }} />
                <h3 style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="container" style={{ padding: '6rem 2rem' }}>
        <div style={{ marginBottom: '3rem', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.2s' }}>
          <span className="section-label">Available Positions</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)' }}>
            {openings.length} roles open now
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {openings.map((job, idx) => (
            <div
              key={idx}
              className="white-card"
              style={{
                padding: '2rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                flexWrap: 'wrap',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${0.3 + idx * 0.08}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--secondary)';
                el.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.transform = 'translateX(0)';
              }}
            >
              {/* Left: Job info */}
              <div style={{ flex: 1, minWidth: '240px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-title)', fontSize: '0.7rem', fontWeight: 700,
                    padding: '0.2rem 0.7rem', borderRadius: '100px',
                    background: deptColors[job.dept] || '#ddd',
                    color: job.dept === 'Marketing' ? '#0c0c14' : '#fff',
                  }}>{job.dept}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 600 }}>{job.type}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.4rem' }}>{job.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{job.desc}</p>
              </div>

              {/* Right: Location + CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', flexShrink: 0 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{job.flag}</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-dark)' }}>{job.location}</div>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                >
                  <span>Apply Now</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div className="white-card" style={{ padding: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', border: '1px solid rgba(144,235,0,0.25)' }}>
          <div>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', marginBottom: '0.7rem' }}>Don't see your role?</div>
            <h3 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: '0.5rem' }}>Send us a speculative application</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', maxWidth: '460px' }}>We are always looking for exceptional talent. If you believe you have what it takes to join Creavie Marketing, get in touch and tell us why.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            <span>Get in Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
