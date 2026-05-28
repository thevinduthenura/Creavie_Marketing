'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Lead {
  id: number;
  client: string;
  email: string;
  message: string;
  date: string;
  status: 'New' | 'Reviewed' | 'Contacted';
}

interface Job {
  id: number;
  title: string;
  location: string;
  department: string;
  status: 'Active' | 'Draft';
}

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<'overview' | 'leads' | 'careers' | 'analytics'>('overview');
  const [loaded, setLoaded] = useState(false);

  // Mock states for dynamic operations
  const [leads, setLeads] = useState<Lead[]>([
    { id: 1, client: 'Acura Motors', email: 'marketing@acura.com', message: 'We want to launch a new EV branding campaign next month. Need a complete digital design proposal.', date: 'Today, 10:24 AM', status: 'New' },
    { id: 2, client: 'Dr. Rachel (HealthFirst)', email: 'rachel@healthfirst.org', message: 'Loved your Pulse Health redesign! Can we schedule a consulting call next Tuesday at 2 PM Dublin time?', date: 'Yesterday, 4:15 PM', status: 'Contacted' },
    { id: 3, client: 'John K. (Apex Solutions)', email: 'john@apex.io', message: 'Inquiry about SEO optimization services and annual pricing models for our SaaS suite.', date: '3 days ago', status: 'Reviewed' },
    { id: 4, client: 'Sarah Chen (Vibe Apparel)', email: 'sarah@vibeapparel.co', message: 'Looking for a motion design agency to produce our Summer 2026 campaign launch video.', date: '4 days ago', status: 'New' }
  ]);

  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: 'General Manager', location: 'Australia (Sydney)', department: 'Management', status: 'Active' },
    { id: 2, title: 'Senior Manager HR', location: 'Canada (Toronto)', department: 'Human Resources', status: 'Active' },
    { id: 3, title: 'Senior Marketing Executive', location: 'Global (Remote)', department: 'Marketing', status: 'Active' },
    { id: 4, title: 'Senior Logistic Officer', location: 'Australia (Melbourne)', department: 'Logistics', status: 'Active' },
    { id: 5, title: 'Transport Coordinator', location: 'UK (London)', department: 'Logistics', status: 'Draft' },
    { id: 6, title: 'Senior Software Developer', location: 'Global (Remote)', department: 'Engineering', status: 'Active' }
  ]);

  // Lead modal detail state
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // New job state
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobLocation, setNewJobLocation] = useState('Global (Remote)');
  const [newJobDept, setNewJobDept] = useState('Marketing');
  const [showAddJobModal, setShowAddJobModal] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  // Handlers
  const handleLeadStatusChange = (id: number, newStatus: 'New' | 'Reviewed' | 'Contacted') => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const handleLeadDelete = (id: number) => {
    setLeads(leads.filter(l => l.id !== id));
    setSelectedLead(null);
  };

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobTitle.trim()) return;

    const newJob: Job = {
      id: Date.now(),
      title: newJobTitle,
      location: newJobLocation,
      department: newJobDept,
      status: 'Active'
    };

    setJobs([newJob, ...jobs]);
    setNewJobTitle('');
    setShowAddJobModal(false);
  };

  const handleToggleJobStatus = (id: number) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, status: j.status === 'Active' ? 'Draft' : 'Active' } : j));
  };

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter(j => j.id !== id));
  };

  return (
    <section style={{ minHeight: '100vh', background: '#09090e', color: '#fff', paddingTop: '100px', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Background Orbs for Premium Dark Look */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(144,235,0,0.1) 0%, transparent 75%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(144,235,0,0.06) 0%, transparent 75%)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Title Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div>
            <span style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', fontWeight: 800 }}>Creative HQ Control Hub</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: '2.5rem', fontWeight: 800, marginTop: '0.3rem', color: '#fff' }}>Admin Dashboard</h1>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.03)', border: 'var(--border-dark)', padding: '0.6rem 1.2rem', borderRadius: '100px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', fontFamily: 'var(--font-title)' }}>
              DG
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Dr. Gerald</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Administrator</div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid System */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem', alignItems: 'start', opacity: loaded ? 1 : 0, transition: 'all 0.8s ease 0.2s' }}>
          
          {/* LEFT Sidebar */}
          <div style={{ background: '#111119', border: 'var(--border-dark)', borderRadius: '24px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { id: 'overview', label: 'Overview', icon: '✦' },
              { id: 'leads', label: 'Contact Leads', icon: '✉', badge: leads.filter(l => l.status === 'New').length },
              { id: 'careers', label: 'Careers Hub', icon: '📁' },
              { id: 'analytics', label: 'Agency Analytics', icon: '📊' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as any)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  background: activeSection === item.id ? 'rgba(144, 235, 0, 0.1)' : 'transparent',
                  color: activeSection === item.id ? 'var(--secondary)' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  padding: '0.9rem 1.2rem',
                  borderRadius: '16px',
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  {item.label}
                </div>
                {item.badge ? (
                  <span style={{ background: 'var(--secondary)', color: 'var(--primary)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: 800 }}>
                    {item.badge}
                  </span>
                ) : null}
              </button>
            ))}
            
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '1rem 0' }} />
            
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.4)', padding: '0.8rem 1.2rem', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-title)' }}>
              <span>←</span> Exit Dashboard
            </Link>
          </div>

          {/* RIGHT Content Board */}
          <div style={{ background: '#111119', border: 'var(--border-dark)', borderRadius: '32px', padding: '2.5rem', minHeight: '520px' }}>
            
            {/* OVERVIEW PANEL */}
            {activeSection === 'overview' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Overview Telemetry</h3>
                
                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                  
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: 'var(--border-dark)', padding: '1.8rem', borderRadius: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>New Leads</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginTop: '0.5rem', color: 'var(--secondary)' }}>
                      {leads.filter(l => l.status === 'New').length}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.4rem' }}>Awaiting initial review</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', border: 'var(--border-dark)', padding: '1.8rem', borderRadius: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Open Careers</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginTop: '0.5rem', color: '#fff' }}>
                      {jobs.filter(j => j.status === 'Active').length}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.4rem' }}>Active global postings</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', border: 'var(--border-dark)', padding: '1.8rem', borderRadius: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Inquiries</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginTop: '0.5rem', color: '#fff' }}>
                      {leads.length}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.4rem' }}>Total logged client inquiries</div>
                  </div>
                </div>

                {/* Recent Leads list teaser */}
                <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.2rem' }}>Recent Inquiries</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {leads.slice(0, 2).map(lead => (
                    <div key={lead.id} onClick={() => { setSelectedLead(lead); setActiveSection('leads'); }} style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)', border: 'var(--border-dark)', padding: '1.2rem 1.8rem', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '1rem' }}>{lead.client}</span>
                          <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: 800, background: lead.status === 'New' ? 'var(--secondary)' : lead.status === 'Contacted' ? '#0ea5e9' : '#4b5563', color: lead.status === 'New' ? '#0c0c14' : '#fff' }}>
                            {lead.status}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.4rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '400px' }}>{lead.message}</p>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>{lead.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT LEADS PANEL */}
            {activeSection === 'leads' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', fontWeight: 800 }}>Inbound Client Leads</h3>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>Total Leads: {leads.length}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {leads.map(lead => (
                    <div
                      key={lead.id}
                      style={{
                        background: 'rgba(255,255,255,0.01)',
                        border: 'var(--border-dark)',
                        padding: '1.5rem',
                        borderRadius: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700 }}>{lead.client}</h4>
                            <span style={{ fontSize: '0.72rem', padding: '0.2rem 0.7rem', borderRadius: '100px', fontWeight: 800, background: lead.status === 'New' ? 'var(--secondary)' : lead.status === 'Contacted' ? '#0ea5e9' : '#4b5563', color: lead.status === 'New' ? '#0c0c14' : '#fff' }}>
                              {lead.status}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>{lead.email} · {lead.date}</div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            onClick={() => handleLeadStatusChange(lead.id, 'Contacted')}
                            style={{ background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', border: 'none', padding: '0.4rem 0.9rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-title)', cursor: 'pointer' }}
                          >
                            Mark Contacted
                          </button>
                          <button
                            onClick={() => handleLeadStatusChange(lead.id, 'Reviewed')}
                            style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: 'none', padding: '0.4rem 0.9rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-title)', cursor: 'pointer' }}
                          >
                            Mark Reviewed
                          </button>
                          <button
                            onClick={() => handleLeadDelete(lead.id)}
                            style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', padding: '0.4rem 0.9rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-title)', cursor: 'pointer' }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', lineHeight: 1.6, background: 'rgba(255,255,255,0.01)', padding: '1rem', borderRadius: '16px', border: 'var(--border-dark)' }}>
                        {lead.message}
                      </p>
                    </div>
                  ))}
                  
                  {leads.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '3rem 0', color: 'rgba(255,255,255,0.3)', fontSize: '0.95rem' }}>No client leads logged.</div>
                  )}
                </div>
              </div>
            )}

            {/* CAREERS PANEL */}
            {activeSection === 'careers' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', fontWeight: 800 }}>Careers Hub</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>Manage open corporate vacancies</p>
                  </div>
                  
                  <button
                    onClick={() => setShowAddJobModal(true)}
                    style={{ background: 'var(--secondary)', color: 'var(--primary)', border: 'none', padding: '0.7rem 1.5rem', borderRadius: '100px', fontWeight: 700, fontFamily: 'var(--font-title)', fontSize: '0.85rem', cursor: 'pointer' }}
                  >
                    + Add New Position
                  </button>
                </div>

                {/* Job postings list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {jobs.map(job => (
                    <div key={job.id} style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)', border: 'var(--border-dark)', padding: '1.2rem 1.8rem', borderRadius: '24px', flexWrap: 'wrap', gap: '1.5rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700 }}>{job.title}</h4>
                          <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '100px', fontWeight: 800, background: job.status === 'Active' ? 'rgba(144, 235, 0, 0.15)' : 'rgba(255,255,255,0.05)', color: job.status === 'Active' ? 'var(--secondary)' : 'rgba(255,255,255,0.4)', border: 'var(--border-dark)' }}>
                            {job.status}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.3rem' }}>{job.department} · {job.location}</div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <button
                          onClick={() => handleToggleJobStatus(job.id)}
                          style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-title)', cursor: 'pointer' }}
                        >
                          {job.status === 'Active' ? 'Draft' : 'Publish'}
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-title)', cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ADD JOB MODAL (Front-end only popup) */}
                {showAddJobModal && (
                  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: '#111119', border: 'var(--border-dark)', borderRadius: '32px', padding: '2.5rem', width: '90%', maxWidth: '480px', position: 'relative' }}>
                      <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem' }}>Create Job Position</h4>
                      
                      <form onSubmit={handleAddJob} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', fontFamily: 'var(--font-title)' }}>Job Title</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Senior SEO Strategist"
                            value={newJobTitle}
                            onChange={e => setNewJobTitle(e.target.value)}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: 'var(--border-dark)', color: '#fff', padding: '0.8rem 1.2rem', borderRadius: '14px', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', fontFamily: 'var(--font-title)' }}>Location Office</label>
                          <select
                            value={newJobLocation}
                            onChange={e => setNewJobLocation(e.target.value)}
                            style={{ width: '100%', background: '#111119', border: 'var(--border-dark)', color: '#fff', padding: '0.8rem 1.2rem', borderRadius: '14px', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                          >
                            <option value="Ireland HQ (Dublin)">Ireland HQ (Dublin)</option>
                            <option value="Canada (Toronto)">Canada Office</option>
                            <option value="Australia (Sydney)">Australia Office</option>
                            <option value="USA (New York)">USA Office</option>
                            <option value="New Zealand (Auckland)">New Zealand Office</option>
                            <option value="Global (Remote)">Global / Remote</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', fontFamily: 'var(--font-title)' }}>Department</label>
                          <select
                            value={newJobDept}
                            onChange={e => setNewJobDept(e.target.value)}
                            style={{ width: '100%', background: '#111119', border: 'var(--border-dark)', color: '#fff', padding: '0.8rem 1.2rem', borderRadius: '14px', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                          >
                            <option value="Management">Management</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Marketing">Marketing & Growth</option>
                            <option value="Engineering">Engineering & Software</option>
                            <option value="Logistics">Logistics & Support</option>
                          </select>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                          <button
                            type="submit"
                            style={{ flex: 1, background: 'var(--secondary)', color: 'var(--primary)', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 700, fontFamily: 'var(--font-title)', cursor: 'pointer' }}
                          >
                            Create Posting
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowAddJobModal(false)}
                            style={{ flex: 1, background: 'rgba(255,255,255,0.05)', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 700, fontFamily: 'var(--font-title)', cursor: 'pointer' }}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* AGENCY ANALYTICS PANEL */}
            {activeSection === 'analytics' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Agency Metrics</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '2.5rem' }}>Real-time telemetry showing organic growth and conversion</p>

                {/* Dynamic graph widget */}
                <div style={{ background: 'rgba(255,255,255,0.01)', border: 'var(--border-dark)', padding: '2rem', borderRadius: '28px', marginBottom: '3rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Monthly Operations Traffic</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.2rem' }}>148,240 <span style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600 }}>+12.4%</span></div>
                    </div>
                    
                    {/* Time periods */}
                    <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', border: 'var(--border-dark)', padding: '0.3rem', borderRadius: '100px' }}>
                      {['7D', '30D', '90D'].map((t, idx) => (
                        <span key={t} style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-title)',
                          fontWeight: 700,
                          padding: '0.3rem 0.9rem',
                          borderRadius: '100px',
                          background: idx === 1 ? 'var(--secondary)' : 'transparent',
                          color: idx === 1 ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* SVG Chart Drawing */}
                  <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden', marginTop: '2rem' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                      {/* Gradient fill */}
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Path fill */}
                      <path d="M 0 150 L 0 100 Q 50 110 100 80 T 200 60 T 300 45 T 400 30 T 500 15 L 500 150 Z" fill="url(#chartGradient)" />
                      
                      {/* Line path */}
                      <path d="M 0 100 Q 50 110 100 80 T 200 60 T 300 45 T 400 30 T 500 15" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" />
                      
                      {/* Data indicator circles */}
                      <circle cx="200" cy="60" r="5" fill="var(--secondary)" />
                      <circle cx="400" cy="30" r="5" fill="var(--secondary)" />
                      <circle cx="500" cy="15" r="6" fill="#fff" stroke="var(--secondary)" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  {/* Chart bottom legend */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '1rem', fontFamily: 'var(--font-title)' }}>
                    <span>Mar 2026</span>
                    <span>Apr 2026</span>
                    <span>May 2026 (Live)</span>
                  </div>
                </div>

                {/* Additional stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: 'var(--border-dark)', padding: '1.5rem', borderRadius: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Client Conversion Rate</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '0.3rem' }}>4.82%</div>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Top 1% conversion in agency sector</p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.01)', border: 'var(--border-dark)', padding: '1.5rem', borderRadius: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Operational Office Efficiency</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '0.3rem' }}>98.2%</div>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Calculated across all 5 regional offices</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
