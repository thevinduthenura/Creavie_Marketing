'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Next Link or simple Link from next/link
import { useParams } from 'next/navigation';

const caseStudies: Record<string, {
  title: string;
  category: string;
  tag: string;
  year: string;
  img: string;
  desc: string;
  client: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  results: string;
}> = {
  'novasphere': {
    title: 'NovaSphere',
    category: 'Digital Branding',
    tag: 'Brand Identity',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    desc: 'Tech startup identity system with futuristic visual language and motion-first brand guidelines.',
    client: 'NovaSphere Technologies',
    metrics: [
      { value: '300%', label: 'Brand Recognition Increase' },
      { value: '2M+', label: 'Organic Impressions' },
      { value: '24%', label: 'Sales Conversion Boost' }
    ],
    challenge: 'NovaSphere wanted to disrupt the cloud storage industry but struggled to articulate their highly technical product. Their existing branding felt dry, corporate, and failed to stand out to modern developers and venture capitalists.',
    solution: 'We developed a dynamic, neon-infused brand system built around an active generative logo mark that adapts to user interactions. We crafted a premium, dark-mode-first digital language featuring custom grotesk typography, lime-green structural elements, and a complete design toolkit for their software development lifecycle.',
    results: 'The rebranding was rolled out alongside their Series A funding. The new identity helped establish NovaSphere as an industry-leading modern tech brand, contributing to a 300% surge in post-launch developer signups and secure contracts with two Fortune 500 enterprises.'
  },
  'luxen-finance': {
    title: 'Luxen Finance',
    category: 'Web Development',
    tag: 'Web Dev',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    desc: 'Premium fintech platform built with fluid UX, real-time data dashboards, and seamless mobile-first interactions.',
    client: 'Luxen Global Holdings',
    metrics: [
      { value: '67%', label: 'Drop-off Reduction' },
      { value: '0.12s', label: 'Dashboard Latency' },
      { value: '88%', label: 'Mobile Engagement Gain' }
    ],
    challenge: 'Fintech platforms are notoriously hard to navigate, leading to high drop-off rates during complex transactions. Luxen Finance needed an ultra-premium web presence that combined dense real-time financial tracking with intuitive, consumer-grade simplicity.',
    solution: 'We engineered a bespoke React & Next.js dashboard featuring state-of-the-art WebSockets integrations for instant financial telemetry. The design leverages crisp grid systems, subtle micro-interactions, and high-end typography to create a sense of trust, security, and digital craftsmanship.',
    results: 'Post-launch metrics showed a massive 67% reduction in critical transactional funnel drop-offs, establishing Luxen Finance as a premium leader in consumer-facing investment tooling.'
  },
  'orbit-fashion': {
    title: 'Orbit Fashion',
    category: 'Marketing',
    tag: 'Campaign',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    desc: '360° digital campaign that drove 3× engagement across all paid and organic channels within 60 days.',
    client: 'Orbit Wearables',
    metrics: [
      { value: '3.2x', label: 'E-commerce ROI Lift' },
      { value: '1.4M', label: 'Targeted Ad Reach' },
      { value: '+45%', label: 'Average Order Value' }
    ],
    challenge: 'Orbit Wearables entered a hyper-competitive streetwear market and needed to drive direct-to-consumer sales during a high-stakes fall campaign. Their organic presence was low, and paid traffic costs were skyrocketing.',
    solution: 'We designed and ran a precision 360° digital storytelling campaign called "Out of This World." We integrated highly interactive social media filters, influencer content loops, and dynamic, HSL-targeted ad campaigns targeting highly specific cultural and fashion archetypes globally.',
    results: 'The results exceeded all benchmarks: e-commerce ROI surged by 3.2x, ad targeting efficiency dropped acquisition costs by 35%, and organic interactions compoundedly increased brand loyalty throughout the quarter.'
  },
  'pulse-health': {
    title: 'Pulse Health',
    category: 'Digital Branding',
    tag: 'UI/UX Design',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    desc: 'Healthcare app redesign improving patient experience scores by 67% while reducing drop-off by 40%.',
    client: 'Pulse Medical Group',
    metrics: [
      { value: '+67%', label: 'Patient Experience Score' },
      { value: '40%', label: 'Fewer Transaction Drops' },
      { value: '4.8★', label: 'App Store Rating' }
    ],
    challenge: 'Pulse Health patients found scheduling, virtual check-ins, and secure messaging incredibly frustrating, resulting in thousands of customer service requests and low operational efficiency.',
    solution: 'We stripped down the interface to its bare essentials. Our team designed a clean, comforting, high-contrast visual system with clear font sizing, intuitive step-by-step progress tracking, and secure biometric authentication portals designed for all ages.',
    results: 'The redesigned application launched on both iOS and Android, driving a 67% increase in patient satisfaction, cutting support call volume by 45%, and achieving a 4.8-star App Store rating within the first month.'
  },
  'vertex-labs': {
    title: 'Vertex Labs',
    category: 'Marketing',
    tag: 'Motion Design',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
    desc: 'Brand film and motion identity for an AI startup Series B launch that reached 2M+ organic impressions.',
    client: 'Vertex AI Systems',
    metrics: [
      { value: '2.5M', label: 'Campaign Impressions' },
      { value: '+92%', label: 'B2B Demo Requests' },
      { value: '3D', label: 'Immersive Experience' }
    ],
    challenge: 'AI hardware and software products are visually dry and complex. Vertex Labs needed a high-impact, cinematic motion identity for their Series B announcement that would capture B2B client interest and venture interest instantly.',
    solution: 'We produced an immersive, highly stylistic 3D brand film and a corresponding motion design system. We designed abstract architectural nodes, dynamic physics simulations representing data flow, and combined them with pristine typography and bespoke cinematic audio.',
    results: 'The film went viral in the B2B tech sector, racking up over 2.5M views and driving a 92% increase in institutional demo requests for their hardware stack within the first week of deployment.'
  }
};

export default function CaseStudyPage() {
  const { id } = useParams() as { id: string };
  const study = caseStudies[id];
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  if (!study) {
    return (
      <div className="container" style={{ paddingTop: '200px', textAlign: 'center', minHeight: '80vh' }}>
        <h1 style={{ fontFamily: 'var(--font-title)', fontSize: '2.5rem', fontWeight: 800 }}>Case Study Not Found</h1>
        <p style={{ color: 'var(--text-muted)', margin: '2rem 0' }}>The requested project details could not be found.</p>
        <Link href="/work" style={{ display: 'inline-flex', background: 'var(--bg-dark)', color: '#fff', padding: '0.8rem 2rem', borderRadius: '100px', fontWeight: 600, fontFamily: 'var(--font-title)' }}>
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Find next case study slug
  const slugs = Object.keys(caseStudies);
  const currentIndex = slugs.indexOf(id);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextStudy = caseStudies[nextSlug];

  return (
    <section style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-light)' }}>
      {/* Dynamic Header */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 600, marginBottom: '2rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> Back to Portfolio
          </Link>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ background: 'var(--secondary)', color: 'var(--text-dark)', padding: '0.4rem 1.1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>
              {study.tag}
            </span>
            <span style={{ border: 'var(--border-light)', background: '#fff', color: 'var(--text-muted)', padding: '0.4rem 1.1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-title)' }}>
              {study.year}
            </span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
            {study.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            {study.desc}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container" style={{ marginBottom: '6rem' }}>
        <div style={{
          borderRadius: '32px',
          overflow: 'hidden',
          height: '500px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${study.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.98)',
          transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1)'
        }} />
      </div>

      {/* Details & Metrics Grid */}
      <div className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'start' }}>
          
          {/* Main Case Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.8rem', marginBottom: '1.2rem' }}>The Challenge</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{study.challenge}</p>
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.8rem', marginBottom: '1.2rem' }}>The Solution</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{study.solution}</p>
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.8rem', marginBottom: '1.2rem' }}>The Outcome</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{study.results}</p>
            </div>
          </div>

          {/* Sidebar / Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'sticky', top: '150px' }}>
            <div className="white-card" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Project Details</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 500 }}>Client</span>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.05rem', marginTop: '0.2rem' }}>{study.client}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 500 }}>Services</span>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.05rem', marginTop: '0.2rem' }}>{study.category}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 500 }}>Timeline</span>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.05rem', marginTop: '0.2rem' }}>{study.year}</div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="white-card" style={{ padding: '2.5rem', background: 'var(--bg-dark)', color: '#fff', border: 'none' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', marginBottom: '2rem' }}>Key Impact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {study.metrics.map((metric, i) => (
                  <div key={i} style={{ borderBottom: i < study.metrics.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingBottom: i < study.metrics.length - 1 ? '1.5rem' : '0' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.4rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{metric.value}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem', fontFamily: 'var(--font-title)', fontWeight: 500 }}>{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Next Project CTA Section */}
      <div style={{ borderTop: 'var(--border-light)', background: 'var(--bg-white)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '0.8rem' }}>Next Project</span>
              <h3 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.4rem)' }}>{nextStudy.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.3rem' }}>{nextStudy.category}</p>
            </div>
            <Link href={`/work/${nextSlug}`} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>View Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
