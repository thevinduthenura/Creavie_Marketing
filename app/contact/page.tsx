'use client';

import React, { useEffect, useState } from 'react';
import { IconMail, IconPhone, IconMapPin, IconSend, IconCheck } from '../components/Icons';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', scope: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', scope: '', message: '' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const contactInfo = [
    { label: 'Email Us', value: 'hello@creaviemarketing.com', href: 'mailto:hello@creaviemarketing.com', icon: <IconMail size={20} color="var(--secondary)" strokeWidth={1.8} /> },
    { label: 'Head Office', value: 'Dublin, Ireland', href: '#', icon: <IconMapPin size={20} color="var(--secondary)" strokeWidth={1.8} /> },
    { label: 'Global Offices', value: 'CA · AU · US · NZ', href: '/about', icon: <IconPhone size={20} color="var(--secondary)" strokeWidth={1.8} /> },
  ];

  const serviceOptions = [
    'Select a Service',
    'Brand Strategy',
    'UI/UX Design',
    'Web Development',
    'Motion Design',
    'Digital Campaign',
    'Other',
  ];

  return (
    <section id="contact" style={{ paddingTop: '120px', paddingBottom: '0' }}>
      {/* ── HEADER ── */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <span className="section-label">Let&apos;s Connect</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h1 className="section-title" style={{ marginBottom: 0 }}>
              Ready to<br />launch?
            </h1>
            <p className="section-desc">
              Whether you are a startup just getting started or an established brand ready for something new, we are here to help.
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: '3.5rem',
          alignItems: 'start',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
        }}>
          {/* Left: contact info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="white-card"
                style={{
                  padding: '1.8rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(0,0,0,0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'rgba(144,235,0,0.1)', border: '1px solid rgba(144,235,0,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', color: 'var(--secondary)', flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-title)', fontWeight: 600, marginBottom: '0.2rem' }}>{info.label}</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>{info.value}</div>
                </div>
              </a>
            ))}

            {/* Dark CTA card */}
            <div style={{
              background: 'var(--bg-dark)', borderRadius: '24px', padding: '2.5rem',
              color: '#fff', marginTop: '0.5rem',
            }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.78rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Response Time</div>
              <div style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '2rem', lineHeight: 1, marginBottom: '0.5rem' }}>
                &lt; 24hrs
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                We respond to every inquiry within one business day. Urgent? Mark your message priority.
              </p>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="white-card" style={{ padding: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
              Fill in your details and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                {['name', 'email'].map((field) => (
                  <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                      {field === 'name' ? 'Your Name' : 'Email Address'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      placeholder={field === 'name' ? 'Alex Mercer' : 'alex@company.io'}
                      required
                      style={{
                        padding: '0.9rem 1.2rem', borderRadius: '12px',
                        border: '1px solid rgba(12,12,20,0.1)', background: 'var(--bg-light)',
                        fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-dark)',
                        outline: 'none', transition: 'border-color 0.3s ease',
                      }}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--secondary)'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(12,12,20,0.1)'}
                    />
                  </div>
                ))}
              </div>

              {/* Service select */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                  Service Needed
                </label>
                <select
                  name="scope"
                  value={formData.scope}
                  onChange={handleChange}
                  style={{
                    padding: '0.9rem 1.2rem', borderRadius: '12px',
                    border: '1px solid rgba(12,12,20,0.1)', background: 'var(--bg-light)',
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-dark)',
                    outline: 'none', cursor: 'pointer', appearance: 'none',
                  }}
                >
                  {serviceOptions.map(o => <option key={o} value={o === 'Select a Service' ? '' : o}>{o}</option>)}
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals and timeline..."
                  style={{
                    padding: '0.9rem 1.2rem', borderRadius: '12px',
                    border: '1px solid rgba(12,12,20,0.1)', background: 'var(--bg-light)',
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-dark)',
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.3s ease',
                  }}
                  onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--secondary)'}
                  onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(12,12,20,0.1)'}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: '1.1rem 2rem', borderRadius: '100px',
                  border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  background: success ? '#90eb00' : 'var(--bg-dark)',
                  color: success ? '#0c0c14' : '#fff',
                  opacity: submitting ? 0.7 : 1,
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: success ? '0 8px 25px rgba(144,235,0,0.35)' : '0 8px 25px rgba(0,0,0,0.12)',
                }}
              >
                {success ? (
                  <><IconCheck size={16} color="#0c0c14" /> Message Sent Successfully</>
                ) : submitting ? (
                  <>Sending...</>
                ) : (
                  <>Send Message <IconSend size={16} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
