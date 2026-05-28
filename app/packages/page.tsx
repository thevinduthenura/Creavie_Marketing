'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PackagesPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#ffffff', 
      color: '#111111', 
      paddingTop: '140px', 
      paddingBottom: '8rem', 
      fontFamily: 'var(--font-title), "Helvetica Neue", sans-serif',
      transition: 'opacity 0.5s ease',
      opacity: loaded ? 1 : 0
    }}>
      {/* ── HEADER ── */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '5rem' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
          fontWeight: 800, 
          letterSpacing: '-0.04em', 
          color: '#000000', 
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: '"Helvetica Neue", Arial, sans-serif'
        }}>
          PACKAGES
        </h1>
        <p style={{ 
          fontSize: '0.82rem', 
          fontWeight: 600, 
          color: '#666666', 
          letterSpacing: '0.12em', 
          lineHeight: 1.6, 
          margin: '1.2rem 0 0 0',
          maxWidth: '650px',
          textTransform: 'uppercase'
        }}>
          Curated experiences tailored for every scale. Competitive entry-level pricing for premium production value.
        </p>
      </div>

      {/* ── ROW 1 GRID: STARTER, DUO, PRO ── */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              title: 'The Starter Snap',
              subtitle: 'BUDGET',
              price: 'LKR 25,000',
              crew: '1 Photographer',
              preproduction: ['Phone consultation to discuss key moments.'],
              production: ['Coverage: Up to 5 Hours.'],
              postproduction: ['150+ Color-corrected high-res images.', 'Delivered via Google Drive/Cloud Link within 7 days.'],
              addon: 'Add Drone for +LKR 10,000'
            },
            {
              title: 'The Duo Coverage',
              subtitle: 'STANDARD',
              price: 'LKR 45,000',
              crew: '1 Photographer + 1 Videographer',
              preproduction: ['Shot list creation.', 'Coordination with event agenda.'],
              production: ['Coverage: Up to 8 Hours.', 'Full HD (1080p) Video recording.'],
              postproduction: ['150+ Edited Photos.', '3-minute Cinematic Highlight Video.', 'Raw footage provided on request.'],
              addon: 'Add Drone for +LKR 10,000'
            },
            {
              title: 'The Pro Storyteller',
              subtitle: 'PREMIUM',
              price: 'LKR 65,000',
              crew: '2 Photographers + 1 Videographer',
              preproduction: ['Site visit.', 'Mood board planning.'],
              production: ['Coverage: Up to 8 Hours.', '4K Video Setup (Sony Mirrorless).'],
              postproduction: ['300+ Signature Edited Photos.', '5-minute Highlight Film + Reels.'],
              addon: 'Add Drone for +LKR 10,000'
            }
          ].map((pkg, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #dddddd',
                borderRadius: '4px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem',
                minHeight: '520px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: '#000000' }}>{pkg.title}</h3>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#888888', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginTop: '0.2rem' }}>{pkg.subtitle}</span>
              </div>

              <div style={{ borderBottom: '1px solid #111111', paddingBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#000000' }}>{pkg.price}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flexGrow: 1 }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Crew</span>
                  <span style={{ fontSize: '0.88rem', color: '#111111', fontWeight: 600 }}>{pkg.crew}</span>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Pre-Production</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#555555', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.preproduction.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Production</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#555555', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.production.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Post-Production</span>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#555555', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {pkg.postproduction.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                  </ul>
                </div>
              </div>

              {pkg.addon && (
                <div style={{ borderTop: '1px solid #eeeeee', paddingTop: '1rem', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#888888', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.2rem' }}>Optional Add-On</span>
                  <span style={{ fontSize: '0.88rem', color: '#000000', fontWeight: 700 }}>{pkg.addon}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── ROW 2 GRID: ULTIMATE, ELITE ── */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* The Ultimate Coverage */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #dddddd',
            borderRadius: '4px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
            minHeight: '560px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: '#000000' }}>The Ultimate Coverage</h3>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#888888', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginTop: '0.2rem' }}>PREMIUM PLUS</span>
            </div>

            <div style={{ borderBottom: '1px solid #111111', paddingBottom: '1.2rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#000000' }}>LKR 125,000</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flexGrow: 1 }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Crew</span>
                <span style={{ fontSize: '0.88rem', color: '#111111', fontWeight: 600 }}>3 Photographers + 1 Videographer + 1 Drone Operator</span>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Pre-Production</span>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#555555', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Site visit.</li>
                  <li>Event Plan.</li>
                </ul>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Production</span>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#555555', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Coverage: Full event.</li>
                  <li>Main Camera: Sony FX3 Rig (Cinema Grade 4K Quality).</li>
                  <li>Aerial: Professional Drone Pilot included (4K Aerials).</li>
                </ul>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Post-Production</span>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#555555', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>400-500 Edited Retouched Photos.</li>
                  <li>4 Aerial focused 30-sec Reels (9:16 Ratio - Instagram & TikTok Optimized).</li>
                  <li>5-10 minute Cinematic After movie.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The "Hyper" Cinema (Elite Card) */}
          <div style={{
            background: '#000000',
            border: '2px solid #000000',
            borderRadius: '4px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
            minHeight: '560px',
            color: '#ffffff',
            boxShadow: '0 15px 45px rgba(0,0,0,0.18)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>The &quot;Hyper&quot; Cinema</h3>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#90eb00', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginTop: '0.2rem' }}>ELITE - RED COMBO PACK</span>
            </div>

            <div style={{ borderBottom: '1px solid #ffffff', paddingBottom: '1.2rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>LKR 260,000</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flexGrow: 1 }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaaaaa', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Crew</span>
                <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>3 Photographers + 3 Videographers (2 Cinematographers) + 2 Drone Operators (Steady + FPV)</span>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaaaaa', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Pre-Production</span>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#cccccc', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Cinematic Storyboarding.</li>
                  <li>Detailed Lighting and Event Plan.</li>
                </ul>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaaaaa', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Production</span>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#cccccc', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Coverage: Full Day.</li>
                  <li>Main Camera: RED Komodo (Cinema Grade 8K Quality).</li>
                  <li>Aerial: Professional Drone Pilot included (4K Aerials) + FPV Drone Coverage in 4K.</li>
                </ul>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaaaaa', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.3rem' }}>Post-Production</span>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.85rem', color: '#cccccc', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>600+ Edited Retouched Photos + 50 &quot;Fine Art&quot; retouched portraits.</li>
                  <li>Movie-grade Color Grading (DaVinci Resolve).</li>
                  <li>1-minute Teaser (Instagram Ready) + 10-15 minute Cinematic Short Film.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── OPTIONAL ADD-ONS TABLE ── */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #dddddd',
          borderRadius: '4px',
          padding: '2.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
        }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            color: '#000000', 
            marginBottom: '2rem', 
            textAlign: 'center', 
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            OPTIONAL ADD-ONS
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #111111' }}>
                  <th style={{ padding: '1rem', fontSize: '0.72rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Item</th>
                  <th style={{ padding: '1rem', fontSize: '0.72rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Price</th>
                  <th style={{ padding: '1rem', fontSize: '0.72rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eeeeee' }}>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: '#000000', fontWeight: 700 }}>Aerial (Drone) Coverage</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.92rem', color: '#000000', fontWeight: 700 }}>LKR 25,000</td>
                  <td style={{ padding: '1.2rem 1rem', fontSize: '0.88rem', color: '#666666' }}>Adds 20-30 mins of flight time for establishing shots. (Included in Premium Plus & Elite Packages).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: '#000000',
            color: '#ffffff',
            padding: '1rem 2.5rem',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '0.95rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
          >
            Start a Project with Us
          </Link>
        </div>
      </div>
    </div>
  );
}
