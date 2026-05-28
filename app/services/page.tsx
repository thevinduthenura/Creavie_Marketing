'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconLayers, IconPenTool, IconCode, IconPlay, IconMegaphone, IconArrowUpRight } from '../components/Icons';

const services = [
  {
    id: 'brand',
    icon: <IconLayers size={22} color="var(--secondary)" strokeWidth={1.8} />,
    title: 'Brand Strategy',
    desc: 'We work from positioning to visual identity, building brands that get noticed and keep clients coming back.',
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
    desc: 'Fast, reliable websites and web apps built with modern tools. We focus on speed, solid structure, and experiences that feel smooth to use.',
    tags: ['React', 'Next.js', 'Animation'],
  },
  {
    id: 'motion',
    icon: <IconPlay size={22} color="var(--secondary)" strokeWidth={1.8} />,
    title: 'Motion Design',
    desc: 'Animations and motion graphics that bring your brand to life. We handle everything from small interactions to full campaign video.',
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
  { q: 'Why is digital marketing important for my business?', a: 'Digital marketing gives your brand a measurable, scalable reach. Unlike traditional media, you can target the right people, track results in real time and see exactly where your budget is going.' },
  { q: 'How does digital marketing help improve brand visibility?', a: 'Through a combination of SEO, paid advertising, social media presence, and compelling content, digital marketing ensures your brand surfaces exactly where your audience is spending time online.' },
  { q: 'How can SEO boost traffic from digital marketing efforts?', a: 'SEO aligns your content with what your customers are actively searching for. When done well, it consistently drives high-intent, organic traffic without ongoing ad spend, compounding returns over time.' },
  { q: 'What makes Creative different from other agencies?', a: 'We pair strong design with solid strategy and we only take on projects we know we can improve. Every client relationship is built to last, not just to deliver a one-off job.' },
  { q: 'How do you measure the success of a digital campaign?', a: 'We agree on clear targets upfront, whether that is traffic, conversions, return on ad spend or brand awareness. You get transparent reports so you always know what impact our work is having.' },
];

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Booking states
  const [selectedService, setSelectedService] = useState<string>('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [bookingTier, setBookingTier] = useState<'consult' | 'full'>('consult');
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success'>('idle');

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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--secondary)', fontFamily: 'var(--font-title)', fontWeight: 600 }}>
                  Learn More <IconArrowUpRight size={14} color="var(--secondary)" strokeWidth={2.5} />
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(svc.title);
                    setBookingModalOpen(true);
                  }}
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--text-dark)',
                    border: 'none',
                    borderRadius: '100px',
                    padding: '0.4rem 1.1rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-title)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(144, 235, 0, 0.2)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PACKAGES & PRICING ── */}
      <div className="container" style={{ marginBottom: '8rem' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
        }}>
          <span className="section-label">Pricing Plans</span>
          <h2 className="section-title" style={{ margin: '0 auto 1.5rem auto' }}>
            PACKAGES
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', textTransform: 'uppercase', fontSize: '0.82rem', letterSpacing: '0.08em', fontWeight: 600 }}>
            High-performance design, web development, and growth marketing packages tailored for every scale. Premium value to fuel your digital ROI.
          </p>
        </div>

        {/* Row 1 Grid: Starter, Duo, Pro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {[
            {
              title: 'Brand Identity Starter',
              subtitle: 'BUDGET',
              price: '$135',
              crew: '1 Brand Strategist + 1 Graphic Designer',
              preproduction: ['1-Hour brand positioning consultation.', 'Target audience mapping.'],
              production: ['Full Visual Brand Identity Book.', '6 Custom Social Media Templates (Figma).', 'Business card & stationery mockups.'],
              postproduction: ['All source files (SVG, PDF, Figma).', '1 Round of premium brand revisions.'],
              addon: 'Add Landing Page for +$75',
              isElite: false
            },
            {
              title: 'Growth Engine Standard',
              subtitle: 'STANDARD',
              price: '$259',
              crew: '1 UI/UX Designer + 1 Developer + 1 Copywriter',
              preproduction: ['Competitive UX benchmarking.', 'Conversion rate optimization roadmap.'],
              production: ['Custom 5-Page Responsive React Website.', 'High-conversion copy designed for sales.', 'Lead capture & contact forms.'],
              postproduction: ['SEO optimization (Google Search Console).', '30-Day post-launch maintenance SLA.'],
              addon: 'Add Custom CMS / Blog for +$75',
              isElite: false
            },
            {
              title: 'Ultimate Digital Presence',
              subtitle: 'PREMIUM',
              price: '$499',
              crew: '1 Tech Lead + 2 Senior Devs + 1 Creative Director',
              preproduction: ['Deep-dive technical system mapping.', 'High-fidelity Figma user testing.'],
              production: ['Custom Web Application or Shopify Store.', 'Secure client/admin billing portal.', 'Dynamic API & inventory integration.'],
              postproduction: ['Full technical SEO & page speed acceleration.', '2 Months dedicated developer support.'],
              addon: 'Add Mobile Companion for +$365',
              isElite: false
            }
          ].map((pkg, idx) => (
            <div
              key={idx}
              className="white-card"
              style={{
                background: 'var(--bg-white)',
                border: 'var(--border-light)',
                borderRadius: '24px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.2rem' }}>{pkg.title}</h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>{pkg.subtitle}</span>
              </div>
              
              <div style={{ borderBottom: 'var(--border-light)', paddingBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)' }}>{pkg.price}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flexGrow: 1 }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Agency Team</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>{pkg.crew}</span>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Strategy & Discovery</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.preproduction.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Execution & Design</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.production.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Launch & Growth Support</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.postproduction.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>
              </div>

              {pkg.addon && (
                <div style={{ borderTop: 'var(--border-light)', paddingTop: '1.2rem', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Optional Add-On</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>{pkg.addon}</span>
                </div>
              )}

              <Link 
                href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                className="btn-primary" 
                style={{ 
                  marginTop: '1.5rem', 
                  width: '100%', 
                  justifyContent: 'center',
                  background: 'rgba(234, 229, 208, 0.03)',
                  color: 'var(--text-dark)',
                  border: '1px solid rgba(234, 229, 208, 0.1)',
                  boxShadow: 'none'
                }}
              >
                <span>Select Plan</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Row 2 Grid: Ultimate, Elite */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto 4rem auto',
        }}>
          {[
            {
              title: 'Elite Omnichannel Scale',
              subtitle: 'PREMIUM PLUS',
              price: '$849',
              crew: 'Dedicated Growth Team (5 Specialists)',
              preproduction: ['12-Month digital growth blueprint.', 'Conversion tracking & pixel architecture design.'],
              production: ['Complete platform visual redesign.', 'High-performance social ad creatives.', 'A/B testing campaign setup.'],
              postproduction: ['Live campaign scaling & daily bid tuning.', 'Weekly executive analytics & ROAS reports.'],
              isElite: false
            },
            {
              title: 'Creative Domination Elite',
              subtitle: 'ELITE - OMNICHANNEL SUITE',
              price: '$1,359',
              crew: 'Full Agency Director Team (Account, Tech, Creative, Ads leads)',
              preproduction: ['Deep market analysis & competitor teardowns.', 'Premium custom storyboard planning.'],
              production: ['Enterprise headless CMS web infrastructure.', 'Cinematic video commercial production.', 'Unlimited custom ad creatives designed monthly.'],
              postproduction: ['Lifetime technical maintenance SLA.', 'Email & SMS CRM automation integrations.', '100% ROI Guarantee or free campaign iterations.'],
              isElite: true
            }
          ].map((pkg, idx) => (
            <div
              key={idx}
              className={pkg.isElite ? "" : "white-card"}
              style={{
                background: pkg.isElite ? 'var(--bg-dark)' : 'var(--bg-white)',
                border: pkg.isElite ? '2px solid var(--secondary)' : 'var(--border-light)',
                borderRadius: '24px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${(idx + 3) * 0.1}s`,
                boxShadow: pkg.isElite ? '0 10px 40px var(--secondary-glow)' : 'none',
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.2rem' }}>{pkg.title}</h3>
                <span style={{ fontSize: '0.72rem', color: pkg.isElite ? 'var(--secondary)' : 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>{pkg.subtitle}</span>
              </div>
              
              <div style={{ borderBottom: 'var(--border-light)', paddingBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)' }}>{pkg.price}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flexGrow: 1 }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Agency Team</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>{pkg.crew}</span>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Strategy & Discovery</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.preproduction.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Execution & Design</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.production.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Launch & Growth Support</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.postproduction.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>
              </div>

              <Link 
                href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                className="btn-primary" 
                style={{ 
                  marginTop: '1.5rem', 
                  width: '100%', 
                  justifyContent: 'center',
                  background: pkg.isElite ? 'var(--secondary)' : 'rgba(234, 229, 208, 0.03)',
                  color: pkg.isElite ? '#000000' : 'var(--text-dark)',
                  border: pkg.isElite ? 'none' : '1px solid rgba(234, 229, 208, 0.1)',
                  boxShadow: pkg.isElite ? '0 8px 25px var(--secondary-glow)' : 'none'
                }}
              >
                <span>Select Plan</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Optional Add-Ons Table */}
        <div style={{
          background: 'var(--bg-white)',
          border: 'var(--border-light)',
          borderRadius: '24px',
          padding: '2.5rem',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.5s',
        }}>
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '0.05em' }}>
            OPTIONAL ADD-ONS
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
              <thead>
                <tr style={{ borderBottom: 'var(--border-light)' }}>
                  <th style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Item</th>
                  <th style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Price</th>
                  <th style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: 'var(--border-light)' }}>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 700 }}>Professional SEO Campaign Boost</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: 'var(--secondary)', fontWeight: 700 }}>$199</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>Extensive keyword research, high-quality backlink building, and 3 months of monthly content optimization.</td>
                </tr>
                <tr style={{ borderBottom: 'var(--border-light)' }}>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 700 }}>Social Media Domination Pack</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: 'var(--secondary)', fontWeight: 700 }}>$249</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>15 custom designed Instagram/LinkedIn feed posts + 5 dynamic transition reels built by our creative design team.</td>
                </tr>
                <tr style={{ borderBottom: 'var(--border-light)' }}>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 700 }}>High-Performance Paid Ads Setup</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: 'var(--secondary)', fontWeight: 700 }}>$299</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>Pixel & Conversion API setup, audience cold-targeting mapping, and copy creation for Meta and Google Ads.</td>
                </tr>
              </tbody>
            </table>
          </div>
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
      
      {/* ── IMMERSIVE BOOKING MODAL ── */}
      {bookingModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}>
          {/* Backdrop */}
          <div 
            onClick={() => {
              if (bookingStatus !== 'loading') {
                setBookingModalOpen(false);
                setBookingStatus('idle');
              }
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(5, 5, 10, 0.85)',
              backdropFilter: 'blur(16px)',
            }} 
          />

          {/* Modal Content Card */}
          <div style={{
            background: '#0d0d18',
            border: '1px solid rgba(144, 235, 0, 0.2)',
            borderRadius: '28px',
            width: '100%',
            maxWidth: '560px',
            padding: '2.5rem',
            position: 'relative',
            zIndex: 10,
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.8)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}>
            {/* Close btn */}
            <button 
              onClick={() => {
                setBookingModalOpen(false);
                setBookingStatus('idle');
              }}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              ✕
            </button>

            {bookingStatus === 'idle' && (
              <div>
                <span className="section-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>Secure Booking</span>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.75rem', fontWeight: 500, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Book {selectedService}
                </h3>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (!clientName || !clientEmail || !bookingDate || !bookingTime) {
                    alert('Please fill out all required fields.');
                    return;
                  }
                  setBookingStatus('loading');
                  setTimeout(() => {
                    setBookingStatus('success');
                  }, 2000);
                }}>
                  {/* Select Tier */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem', fontFamily: 'var(--font-title)', fontWeight: 600, textTransform: 'uppercase' }}>Select Option</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div 
                        onClick={() => setBookingTier('consult')}
                        style={{
                          border: bookingTier === 'consult' ? '1px solid var(--secondary)' : '1px solid rgba(255,255,255,0.08)',
                          background: bookingTier === 'consult' ? 'rgba(144,235,0,0.05)' : 'rgba(255,255,255,0.02)',
                          padding: '1rem',
                          borderRadius: '16px',
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Quick Consultation</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>30m Strategy Call (Free)</div>
                      </div>
                      <div 
                        onClick={() => setBookingTier('full')}
                        style={{
                          border: bookingTier === 'full' ? '1px solid var(--secondary)' : '1px solid rgba(255,255,255,0.08)',
                          background: bookingTier === 'full' ? 'rgba(144,235,0,0.05)' : 'rgba(255,255,255,0.02)',
                          padding: '1rem',
                          borderRadius: '16px',
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Full Project Booking</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Get Custom Proposal</div>
                      </div>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-title)', fontWeight: 600 }}>Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="John Doe" 
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          padding: '0.8rem 1rem',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-title)', fontWeight: 600 }}>Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="john@example.com" 
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          padding: '0.8rem 1rem',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem', fontFamily: 'var(--font-title)', fontWeight: 600, textTransform: 'uppercase' }}>Select Date *</label>
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      {['May 29', 'May 30', 'Jun 01', 'Jun 02', 'Jun 03'].map(d => (
                        <div 
                          key={d}
                          onClick={() => setBookingDate(d)}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '10px',
                            background: bookingDate === d ? 'var(--secondary)' : 'rgba(255,255,255,0.03)',
                            color: bookingDate === d ? 'var(--text-dark)' : '#fff',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            fontFamily: 'var(--font-title)',
                          }}
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem', fontFamily: 'var(--font-title)', fontWeight: 600, textTransform: 'uppercase' }}>Select Time Slot *</label>
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      {['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'].map(t => (
                        <div 
                          key={t}
                          onClick={() => setBookingTime(t)}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '10px',
                            background: bookingTime === t ? 'var(--secondary)' : 'rgba(255,255,255,0.03)',
                            color: bookingTime === t ? 'var(--text-dark)' : '#fff',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            fontFamily: 'var(--font-title)',
                          }}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      background: 'var(--secondary)',
                      color: 'var(--text-dark)',
                      border: 'none',
                    }}
                  >
                    <span>Confirm Booking</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </form>
              </div>
            )}

            {bookingStatus === 'loading' && (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '3px solid rgba(144, 235, 0, 0.1)',
                  borderTopColor: 'var(--secondary)',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 2rem auto',
                }} />
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', fontWeight: 500, color: '#fff' }}>Securing Your Session</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Setting up your slots in our dashboard...</p>
              </div>
            )}

            {bookingStatus === 'success' && (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(144, 235, 0, 0.1)',
                  border: '2px solid var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  fontSize: '2.5rem',
                  margin: '0 auto 2rem auto',
                }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.75rem', fontWeight: 500, color: '#fff', letterSpacing: '-0.03em' }}>Booking Confirmed!</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.8rem', fontSize: '0.95rem', maxWidth: '360px', margin: '0.8rem auto 2.5rem auto', lineHeight: 1.6 }}>
                  Thank you, <strong>{clientName}</strong>! Your strategy session for <strong>{selectedService}</strong> has been secured on <strong>{bookingDate}</strong> at <strong>{bookingTime}</strong>. We've sent a Calendar invite to <strong>{clientEmail}</strong>.
                </p>
                <button 
                  onClick={() => {
                    setBookingModalOpen(false);
                    setBookingStatus('idle');
                    setClientName('');
                    setClientEmail('');
                    setBookingDate('');
                    setBookingTime('');
                  }}
                  className="btn-primary"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    border: 'var(--border-light)',
                  }}
                >
                  <span>Close Window</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
