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
    title: 'Senior Manager, Human Resources',
    location: 'Toronto, Canada',
    flag: '🇨🇦',
    type: 'Full-Time',
    dept: 'HR',
    desc: 'Oversee HR strategy, talent acquisition, and workforce development for our Canadian office. You will champion the Creavie culture of trust and excellence.',
  },
  {
    title: 'Senior Marketing Executive',
    location: 'Global, Any Location',
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
    location: 'Global, Any Location',
    flag: '🌍',
    type: 'Full-Time · Remote',
    dept: 'Technology',
    desc: 'Build, scale, and maintain cutting-edge digital platforms and internal systems. Suitable candidates may be positioned in any of our 5 global offices.',
  },
];

const values = [
  { title: 'Trust First', desc: 'Every employee undergoes a thorough one-to-one trust and capability assessment before joining. We build teams, not just headcounts.' },
  { title: 'Only the Best', desc: 'We hire only the most capable and trustworthy people. They take pride in what they do and they stand behind their work.' },
  { title: 'Global Mobility', desc: 'Many of our senior roles offer flexible placement across our offices in Ireland, Canada, Australia, USA, and New Zealand.' },
];

const leaders = [
  {
    name: 'James Whitmore',
    role: 'CEO & Founder',
    dept: 'Leadership',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: '20+ years in the industry. James founded Creavie with a focus on results and long-term client relationships.',
  },
  {
    name: 'Sophia Chen',
    role: 'Chief Creative Officer',
    dept: 'Creative',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Sophia leads the creative team. She has shaped the look and feel of Creavie since day one.',
  },
  {
    name: 'Marcus Reid',
    role: 'Head of Strategy',
    dept: 'Strategy',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Marcus focuses on strategy. He works closely with clients to make sure their campaigns hit the right targets.',
  },
  {
    name: 'Amelia Torres',
    role: 'Chief Technology Officer',
    dept: 'Technology',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Amelia oversees all technology at Creavie, from client platforms to internal tools and infrastructure.',
  },
  {
    name: 'Oliver Banks',
    role: 'Head of Marketing',
    dept: 'Marketing',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Oliver runs marketing across all channels. He has been behind some of our most successful campaign launches.',
  },
  {
    name: 'Nina Patel',
    role: 'Director of Operations',
    dept: 'Operations',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Nina keeps Creavie running day to day across all five offices and makes sure nothing falls through the cracks.',
  },
  {
    name: 'Ethan Kwon',
    role: 'Lead UX Designer',
    dept: 'Design',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Ethan designs the user experience side of our work. He is focused on making things easy and enjoyable to use.',
  },
  {
    name: 'Grace Liu',
    role: 'Client Success Director',
    dept: 'Client Relations',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Grace works directly with our clients to make sure they are getting what they need from every engagement.',
  },
];

const leaderDeptColors: Record<string, string> = {
  Leadership: '#90eb00',
  Creative: '#8b5cf6',
  Strategy: '#2563eb',
  Technology: '#f59e0b',
  Marketing: '#ec4899',
  Operations: '#06b6d4',
  Design: '#f97316',
  'Client Relations': '#10b981',
};

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

      {/* ═══ OUR LEADERSHIP ═══ */}
      <div style={{ background: 'var(--bg-white)', borderTop: 'var(--border-light)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '3.5rem',
          }}>
            <span className="section-label">Our Leadership</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <h2 className="section-title" style={{ marginBottom: 0, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
                The minds behind<br />Creavie Marketing
              </h2>
              <p className="section-desc" style={{ maxWidth: '380px' }}>
                A team of industry leaders, creatives and strategists who share one goal: doing great work.
              </p>
            </div>
          </div>

          {/* Members Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.8rem',
          }}>
            {leaders.map((person, i) => (
              <div
                key={i}
                className="team-member-card"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`,
                  background: '#0d0d18',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(144,235,0,0.35)';
                  el.style.transform = 'translateY(-8px)';
                  el.style.boxShadow = '0 25px 50px rgba(144,235,0,0.08)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5)';
                }}
              >
                {/* Photo */}
                <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={person.img}
                    alt={person.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                      display: 'block',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(13,13,24,1) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }} />
                  {/* Dept badge */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: leaderDeptColors[person.dept] || '#90eb00',
                    color: person.dept === 'Leadership' ? '#0c0c14' : '#fff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-title)',
                    padding: '0.28rem 0.75rem',
                    borderRadius: '100px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  }}>
                    {person.dept}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '1.4rem 1.6rem 1.8rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-title)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#fff',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {person.name}
                  </h3>
                  <div style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--secondary)',
                    fontFamily: 'var(--font-title)',
                    marginBottom: '0.7rem',
                    letterSpacing: '0.01em',
                  }}>
                    {person.role}
                  </div>
                  <p style={{
                    fontSize: '0.83rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                  }}>
                    {person.bio}
                  </p>
                  {/* LinkedIn icon */}
                  <div style={{ marginTop: '1.1rem', display: 'flex', gap: '0.6rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(144,235,0,0.15)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(144,235,0,0.4)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(144,235,0,0.15)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(144,235,0,0.4)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03A12.83 12.83 0 0 1 2.39.89 4.52 4.52 0 0 0 3.8 6.97 4.49 4.49 0 0 1 1.64 6.4v.06a4.52 4.52 0 0 0 3.62 4.43 4.54 4.54 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 0 15.54 12.77 12.77 0 0 0 6.92 17.5c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 22 2.43 9 9 0 0 1 19.07 3.2 4.52 4.52 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
