'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ClientUser {
  name: string;
  email: string;
  avatar: string;
  company?: string;
  phone?: string;
}

export default function ClientPortal() {
  const router = useRouter();
  const [user, setUser] = useState<ClientUser | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'deliverables' | 'support' | 'profile'>('overview');
  
  // Profile edit states
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editCompany, setEditCompany] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [profileSuccess, setProfileSuccess] = useState(false);
  
  // Custom mock telemetry data
  const [metrics, setMetrics] = useState({
    adSpend: '$14,820',
    roi: '4.2×',
    leads: '1,894',
    impressionGrowth: '+84%'
  });

  // Client deliverables
  const deliverables = [
    { title: 'Social Media Launch Asset Pack', format: 'ZIP / PNG', size: '42.8 MB', date: '2026-05-18', status: 'Completed' },
    { title: 'Alpha Brand Identity & Style Guidelines', format: 'PDF', size: '12.4 MB', date: '2026-05-10', status: 'Completed' },
    { title: 'Q2 Digital Ads Strategy Blueprint', format: 'PDF', size: '6.8 MB', date: '2026-05-24', status: 'Under Review' },
  ];

  useEffect(() => {
    const session = localStorage.getItem('creative_user');
    if (!session) {
      router.push('/login');
    } else {
      const parsedUser = JSON.parse(session);
      setUser(parsedUser);
      setEditName(parsedUser.name || '');
      setEditEmail(parsedUser.email || '');
      setEditCompany(parsedUser.company || 'Alpha Explorer Corp');
      setEditPhone(parsedUser.phone || '+1 (555) 019-2834');
    }
  }, [router]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName || !editEmail) {
      alert('Name and Email are required.');
      return;
    }
    
    const updatedUser = {
      name: editName,
      email: editEmail,
      avatar: editName.slice(0, 2).toUpperCase(),
      company: editCompany,
      phone: editPhone
    };
    
    localStorage.setItem('creative_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    
    // Dispatch storage event so NavBar and other pages update instantly
    window.dispatchEvent(new Event('storage'));
    
    setProfileSuccess(true);
    setTimeout(() => {
      setProfileSuccess(false);
    }, 4000);
  };

  const handleLogout = () => {
    localStorage.removeItem('creative_user');
    window.dispatchEvent(new Event('storage'));
    router.push('/login');
  };

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-light)' }}>
        <div style={{ width: '30px', height: '30px', border: '3px solid rgba(234, 229, 208, 0.1)', borderTopColor: 'var(--secondary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', paddingTop: '120px', paddingBottom: '5rem', fontFamily: 'var(--font-title), sans-serif' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Portal Greeting Banner */}
        <div
          style={{
            background: 'var(--bg-white)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            border: 'var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  width: '45px',
                  height: '45px',
                  background: 'var(--bg-dark)',
                  color: 'var(--secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(144, 235, 0, 0.2)'
                }}
              >
                {user.avatar}
              </span>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '-0.02em', margin: 0 }}>
                Welcome back, {user.name}!
              </h1>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0, paddingLeft: '3.6rem' }}>
              Client ID: <code style={{ color: 'var(--secondary)', fontWeight: 600 }}>CRV-{user.name.slice(0,3).toUpperCase()}-904</code> · Vector: {user.email}
            </p>
          </div>
          
          <button
            onClick={handleLogout}
            style={{
              background: 'transparent',
              color: '#f43f5e',
              border: '1px solid rgba(244, 63, 94, 0.2)',
              padding: '0.7rem 1.4rem',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(244, 63, 94, 0.08)';
              e.currentTarget.style.borderColor = '#f43f5e';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.2)';
            }}
          >
            Sign Out
          </button>
        </div>

        {/* Tab Navigator */}
        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {(['overview', 'deliverables', 'support', 'profile'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--secondary)' : 'rgba(234, 229, 208, 0.02)',
                color: activeTab === tab ? '#030303FF' : 'var(--text-muted)',
                border: activeTab === tab ? '1px solid var(--secondary)' : '1px solid rgba(234, 229, 208, 0.08)',
                padding: '0.75rem 1.6rem',
                borderRadius: '100px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab ? '0 8px 20px var(--secondary-glow)' : 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content Stages */}
        {activeTab === 'overview' && (
          <div>
            {/* Live Campaign Telemetries */}
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.2rem' }}>
              ✦ Live Campaign Metrics
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ background: 'var(--bg-white)', border: 'var(--border-light)', borderRadius: '20px', padding: '1.8rem', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Total Ad Resource Allocation
                </span>
                <h4 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0.5rem 0' }}>
                  {metrics.adSpend}
                </h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', fontWeight: 600 }}>Active Channels: Paid Search / Social</div>
              </div>

              <div style={{ background: 'var(--bg-white)', border: 'var(--border-light)', borderRadius: '20px', padding: '1.8rem', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Marketing ROI Telemetry
                </span>
                <h4 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--secondary)', margin: '0.5rem 0', textShadow: '0 0 15px var(--secondary-glow)' }}>
                  {metrics.roi}
                </h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', fontWeight: 600 }}>Performance: Outstanding ✓</div>
              </div>

              <div style={{ background: 'var(--bg-white)', border: 'var(--border-light)', borderRadius: '20px', padding: '1.8rem', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  High-Impact Leads Generated
                </span>
                <h4 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0.5rem 0' }}>
                  {metrics.leads}
                </h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', fontWeight: 600 }}>CPA Target: Meta-optimized</div>
              </div>

              <div style={{ background: 'var(--bg-white)', border: 'var(--border-light)', borderRadius: '20px', padding: '1.8rem', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Impression Velocity
                </span>
                <h4 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0.5rem 0' }}>
                  {metrics.impressionGrowth}
                </h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', fontWeight: 600 }}>Compared to last cycle</div>
              </div>
            </div>

            {/* Campaign Deliverables Board */}
            <div style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', border: 'var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                  Active Brand Assets & Blueprints
                </h3>
                <button
                  onClick={() => setActiveTab('deliverables')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--secondary)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Manage all files
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {deliverables.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.2rem 1.5rem',
                      borderRadius: '16px',
                      background: 'rgba(234, 229, 208, 0.02)',
                      border: '1px solid rgba(234, 229, 208, 0.06)',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(234, 229, 208, 0.05)', border: '1px solid rgba(234, 229, 208, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {item.format}
                      </div>
                      <div>
                        <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 0.2rem 0' }}>
                          {item.title}
                        </h5>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          Size: {item.size} · Uploaded: {item.date}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => alert(`Initiating secure SSL transfer for ${item.title}...`)}
                      style={{
                        background: 'transparent',
                        color: 'var(--secondary)',
                        border: '1px solid rgba(144, 235, 0, 0.3)',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '50px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--secondary)';
                        e.currentTarget.style.color = '#030303FF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--secondary)';
                      }}
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Full Deliverables */}
        {activeTab === 'deliverables' && (
          <div style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: 'var(--border-light)' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              ✦ Full Client Brand Directory
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.4rem 1.8rem',
                    borderRadius: '16px',
                    background: 'rgba(234, 229, 208, 0.02)',
                    border: '1px solid rgba(234, 229, 208, 0.06)',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <div style={{ width: '45px', height: '45px', background: 'rgba(234, 229, 208, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid rgba(234, 229, 208, 0.08)' }}>
                      {item.format}
                    </div>
                    <div>
                      <h5 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 0.3rem 0' }}>
                        {item.title}
                      </h5>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Size: {item.size}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Uploaded: {item.date}</span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.6rem',
                            borderRadius: '6px',
                            background: item.status === 'Completed' ? 'rgba(144, 235, 0, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                            color: item.status === 'Completed' ? 'var(--secondary)' : '#f59e0b'
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (item.status === 'Under Review') {
                        alert(`${item.title} is currently under design review. Release pending Account Executive signature.`);
                      } else {
                        alert(`Initiating high-speed secure download for ${item.title}...`);
                      }
                    }}
                    style={{
                      background: item.status === 'Completed' ? 'transparent' : 'rgba(234, 229, 208, 0.02)',
                      color: item.status === 'Completed' ? 'var(--secondary)' : 'var(--text-muted)',
                      border: item.status === 'Completed' ? '1px solid rgba(144, 235, 0, 0.3)' : '1px solid rgba(234, 229, 208, 0.05)',
                      padding: '0.7rem 1.5rem',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: item.status === 'Completed' ? 'pointer' : 'default',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (item.status === 'Completed') {
                        e.currentTarget.style.background = 'var(--secondary)';
                        e.currentTarget.style.color = '#030303FF';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (item.status === 'Completed') {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--secondary)';
                      }
                    }}
                  >
                    {item.status === 'Completed' ? 'Download' : 'Pending'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Dedicated Support Link */}
        {activeTab === 'support' && (
          <div style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: 'var(--border-light)', maxWidth: '640px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.8rem', textAlign: 'center' }}>
              ✦ Dispatch Account Strategy Vector
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>
              Direct encrypted transmission to your dedicated Account Manager & Design Directors. Response SLA: &lt; 2 Hours.
            </p>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Strategy request dispatched successfully to Creative Marketing Executives ✦');
                (e.target as HTMLFormElement).reset();
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                  Target Vector / Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Requesting changes in Alpha Brand Pack color variations"
                  style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(234, 229, 208, 0.02)', border: '1px solid rgba(234, 229, 208, 0.15)', color: 'var(--text-dark)', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                  Strategic Message Description
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Detail your request coordinates..."
                  style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(234, 229, 208, 0.02)', border: '1px solid rgba(234, 229, 208, 0.15)', color: 'var(--text-dark)', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--secondary)',
                  color: '#030303FF',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '0.95rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px var(--secondary-glow)'
                }}
              >
                Transmit Query
              </button>
            </form>
          </div>
        )}

        {/* Tab 4: Profile Management */}
        {activeTab === 'profile' && (
          <div style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: 'var(--border-light)', maxWidth: '640px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.8rem', textAlign: 'center' }}>
              ✦ Manage User Profile
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>
              Update your account credentials, contact coordinates, and corporate branding information.
            </p>

            {profileSuccess && (
              <div style={{
                background: 'rgba(144, 235, 0, 0.08)',
                border: '1px solid var(--secondary)',
                color: 'var(--secondary)',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
              }}>
                ✓ Profile Updated Securely! Changes synchronized instantly.
              </div>
            )}
            
            <form
              onSubmit={handleProfileUpdate}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'var(--bg-dark)',
                    color: 'var(--secondary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(144, 235, 0, 0.2)'
                  }}>
                    {editName ? editName.slice(0, 2).toUpperCase() : 'U'}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Avatar Badge</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Enter your name"
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(234, 229, 208, 0.02)', border: '1px solid rgba(234, 229, 208, 0.15)', color: 'var(--text-dark)', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                    Email Vector *
                  </label>
                  <input
                    type="email"
                    required
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(234, 229, 208, 0.02)', border: '1px solid rgba(234, 229, 208, 0.15)', color: 'var(--text-dark)', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={editCompany}
                    onChange={(e) => setEditCompany(e.target.value)}
                    placeholder="e.g., Alpha Explorer Corp"
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(234, 229, 208, 0.02)', border: '1px solid rgba(234, 229, 208, 0.15)', color: 'var(--text-dark)', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                    Contact Phone Number
                  </label>
                  <input
                    type="text"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    placeholder="e.g., +1 (555) 019-2834"
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(234, 229, 208, 0.02)', border: '1px solid rgba(234, 229, 208, 0.15)', color: 'var(--text-dark)', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--secondary)',
                  color: '#030303FF',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '0.95rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 15px var(--secondary-glow)'
                }}
              >
                Save Profile Changes
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
