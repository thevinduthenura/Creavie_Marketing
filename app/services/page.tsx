'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconLayers, IconPenTool, IconCode, IconPlay, IconMegaphone, IconArrowUpRight } from '../components/Icons';

const services = [
  {
    id: 'brand',
    icon: <IconLayers size={22} color="var(--secondary)" strokeWidth={1.8} />,
    title: 'Brand Strategy',
    desc: 'From positioning to identity systems — we architect brands that command attention and earn loyalty across every touchpoint.',
    tags: ['Positioning', 'Identity', 'Research'],
  },
  {
    id: 'design',
    icon: <IconPenTool size={22} color="var(--secondary)" strokeWidth={1.8} />,
    title: 'UI/UX Design',
    desc: 'Interfaces that feel intuitive and look stunning. We design digital experiences that convert visitors into devoted customers.',
    tags: ['Wireframing', 'Prototyping', 'Systems'],
  },
  {
    id: 'web',
    icon: <IconCode size={22} color="var(--secondary)" strokeWidth={1.8} />,
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with modern stacks — engineered for speed, scalability, and seamless interaction.',
    tags: ['React', 'Next.js', 'Animation'],
  },
  {
    id: 'motion',
    icon: <IconPlay size={22} color="var(--secondary)" strokeWidth={1.8} />,
    title: 'Motion Design',
    desc: 'Cinematic animations and motion graphics that bring your brand to life — from micro-interactions to full campaign visuals.',
    tags: ['After Effects', 'Lottie', '3D'],
  },
  {
    id: 'campaigns',
    icon: <IconMegaphone size={22} color="var(--secondary)" strokeWidth={1.8} />,
    title: 'Digital Campaigns',
    desc: 'Data-driven campaigns across paid media, social, and search. Precision targeting meets creative storytelling for measurable ROI.',
    tags: ['Paid Media', 'Social', 'Analytics'],
  },
];

const faqs = [
  { q: 'Why is digital marketing important for my business?', a: 'Digital marketing gives your brand measurable, scalable reach. Unlike traditional media, it enables precise targeting, real-time tracking, and a provable return on every dollar spent — making it essential for modern business growth.' },
  { q: 'How does digital marketing help improve brand visibility?', a: 'Through a combination of SEO, paid advertising, social media presence, and compelling content, digital marketing ensures your brand surfaces exactly where your audience is spending time online.' },
  { q: 'How can SEO boost traffic from digital marketing efforts?', a: 'SEO aligns your content with what your customers are actively searching for. When done well, it consistently drives high-intent, organic traffic without ongoing ad spend, compounding returns over time.' },
  { q: 'What makes Creavie different from other agencies?', a: 'We combine world-class design with rigorous strategy. We don\'t take on projects we can\'t elevate — every engagement is treated as a long-term partnership aimed at measurably transforming your brand.' },
  { q: 'How do you measure the success of a digital campaign?', a: 'We define clear KPIs upfront — whether that\'s traffic, conversions, ROAS, or brand lift — and provide transparent reporting dashboards so you always know the impact of our work.' },
];

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <section id="services" style={{ paddingTop: '120px' }}>
      {/* ── HEADER ── */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <span className="section-label">What We Do</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h1 className="section-title" style={{ marginBottom: 0 }}>
              Services that<br />defy limits
            </h1>
            <Link href="/contact" className="btn-primary">
              <span>Start a Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── SERVICES CARD GRID ── */}
      <div className="container" style={{ marginBottom: '6rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              style={{
                background: 'var(--bg-white)',
                border: 'var(--border-light)',
                borderRadius: '24px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.05)';
                el.style.borderColor = 'var(--secondary)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '16px',
                background: 'rgba(144,235,0,0.1)', border: '1px solid rgba(144,235,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', fontWeight: 700 }}>{svc.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{svc.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {svc.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-title)', fontSize: '0.75rem', fontWeight: 700,
                    padding: '0.3rem 0.8rem', borderRadius: '100px',
                    background: 'rgba(255,255,255,0.05)', border: 'var(--border-light)',
                  }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--secondary)', fontFamily: 'var(--font-title)', fontWeight: 600, borderTop: 'var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                Learn More <IconArrowUpRight size={14} color="var(--secondary)" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ACCORDION ── */}
      <div className="faq-accordion-block">
        <div className="container">
          <div className="faq-grid">
            {/* Left: heading */}
            <div style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}>
              <span className="section-label">Digital Marketing FAQs</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
                Why is digital marketing important for your business?
              </h2>
              <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
                Everything you need to know about working with a modern digital agency.
              </p>
              <Link href="/contact" className="btn-ghost">
                <span>Ask Us Anything</span>
              </Link>
            </div>

            {/* Right: accordion */}
            <div className="accordion-list" style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
            }}>
              {faqs.map((faq, idx) => (
                <div key={idx} className="accordion-row">
                  <div
                    className="accordion-header"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <h4>{faq.q}</h4>
                    <span className="accordion-icon" style={{ transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)' }}>+</span>
                  </div>
                  <div
                    className="accordion-content"
                    style={{ maxHeight: openFaq === idx ? '200px' : '0' }}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
