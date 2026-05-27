'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface CaseStudy {
  title: string;
  category: string;
  tag: string;
  year: string;
  img: string;
  secondaryImg: string;
  galleryImgs: string[];
  desc: string;
  client: string;
  agency: string;
  disciplines: string[];
  metrics: { value: string; label: string }[];
  quote: { text: string; author: string; role: string };
  challenge: string;
  solution: string;
  results: string;
}

const caseStudies: Record<string, CaseStudy> = {
  'dot-pad': {
    title: 'Dot Pad',
    category: 'Digital Branding',
    tag: 'Smart Tech',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200',
    secondaryImg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    galleryImgs: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    ],
    desc: 'Tactile graphics device for visually impaired users. We designed the fluid interactive software, developer tools, and global launch branding.',
    client: 'Dot Inc. Korea',
    agency: 'Creavie Marketing x Plan.Net',
    disciplines: ['UI/UX Software Design', 'Tactile Vector Engine', 'SDK Developer Tools', 'Global Campaign Strategy'],
    metrics: [
      { value: '140+', label: 'Global Patents Registered' },
      { value: '15M+', label: 'Visually Impaired Assisted' },
      { value: 'Gold', label: 'Cannes Lions Grand Prix' }
    ],
    quote: {
      text: "Dot Pad is not just an upgrade; it opens up a whole new world where graphics, tables, and maps are instantly accessible by touch.",
      author: "Ki Kwang Sung",
      role: "Co-Founder, Dot Inc."
    },
    challenge: 'Over 285 million visually impaired individuals globally are locked out of the visual web. Traditional Braille devices only display single lines of text. Graphs, architectural layouts, mathematical shapes, and social media images were entirely inaccessible, limiting educational and professional opportunities.',
    solution: 'We partnered to launch Dot Pad, a revolutionary device with 2,400 dynamic pins that refresh instantly. We built the software vector-to-tactile engine that dynamically translates complex web graphics and shapes into structural dot contours in real-time. We then published the developer SDK, inviting global tech leaders to integrate dynamic tactile access into mobile OS platforms.',
    results: 'The launch was a historic moment for digital accessibility, receiving the prestigious Cannes Lions Grand Prix. Over 15 million visually impaired individuals gained direct, seamless access to classroom tools, interactive maps, and creative applications, permanently redefining global web accessibility standards.'
  },
  'penny-price-packs': {
    title: 'Penny Price Packs',
    category: 'Marketing',
    tag: 'Social Campaign',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    secondaryImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    galleryImgs: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600'
    ],
    desc: 'Rewriting everyday product labels to detail the true social and economic cost of inflation, triggering global media discussions.',
    client: 'PENNY Supermarkets',
    agency: 'Creavie Marketing',
    disciplines: ['Product Packaging Redesign', 'Point-of-Sale Experiential', 'Integrated Media Campaign', 'Social Impact Strategy'],
    metrics: [
      { value: '3.8M', label: 'In-Store Engagements' },
      { value: '+44%', label: 'Positive Brand Sentiment' },
      { value: '€2.4M', label: 'Earned Media Value' }
    ],
    quote: {
      text: "We wanted to show inflation in a way that wasn't just cold statistics, but a physical reality that everyone sees on the supermarket shelf.",
      author: "Stefan Magel",
      role: "COO, PENNY"
    },
    challenge: 'During a time of severe global inflation, supermarket chains faced intense public backlash for price increases. PENNY needed to shift the conversation, explaining that everyday prices are artificially low because they ignore the true environmental and social costs of production, such as carbon impact and soil damage.',
    solution: 'We launched "Price Packs"—a bold in-store campaign where we completely redesigned the packaging of PENNY’s nine best-selling items. The new packaging calculated and printed the "true organic cost" of each product alongside the retail price, forcing customers to face the real ecological impact of discount consumerism.',
    results: 'The campaign went viral, generating massive global coverage and €2.4M in earned media. It was praised for its radical transparency and direct approach to ecological truth, resulting in a 44% boost in brand trust and winning top honors at the European Creative Awards.'
  },
  'animal-alerts': {
    title: 'Animal Alerts',
    category: 'Web Development',
    tag: 'IoT Dashboard',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200',
    secondaryImg: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600',
    galleryImgs: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=600'
    ],
    desc: 'Immersive data platform powered by pet wearable biosensors, automatically broadcasting hyper-local health safety alerts.',
    client: 'PetPace Safety',
    agency: 'Creavie Marketing x Mediaplus',
    disciplines: ['IoT Sensor Integration', 'Real-Time Mapping Dashboard', 'Automatic Ad Broadcast Engine', 'B2B Partner Portal'],
    metrics: [
      { value: '250K', label: 'Active Wearable Nodes' },
      { value: '0.8s', label: 'Alert Broadcast Latency' },
      { value: '35%', label: 'Preventable Illness Reduction' }
    ],
    quote: {
      text: "By listening to what animals are feeling in real time, we can detect environmental hazards and disease outbreaks days before conventional systems.",
      author: "Dr. Asaf Dagan",
      role: "Chief Scientist, PetPace"
    },
    challenge: 'Disease outbreaks, heatwaves, and toxic environmental leaks often harm household pets long before humans realize there is a danger. PetPace needed a system to turn real-time health data from thousands of active pet collars into public safety information.',
    solution: 'We engineered "Animal Alerts"—a sophisticated IoT web platform that aggregates real-time biometric telemetry (heart rate, breathing, activity levels) from thousands of pets. When the system detects a cluster of abnormal health metrics in a specific neighborhood, it automatically broadcasts targeted alerts to local pet owners via digital billboards and social media.',
    results: 'The platform successfully detected three local canine flu outbreaks and a carbon monoxide leak 48 hours before official veterinary clinics caught on. This quick action reduced preventable illnesses by 35% across target metropolitan areas, proving the value of crowdsourced biometric data.'
  },
  'rainbow-wool': {
    title: 'Rainbow Wool',
    category: 'Digital Branding',
    tag: 'Creative Fashion',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1528747045372-3c868202b37a?auto=format&fit=crop&q=80&w=1200',
    secondaryImg: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=600',
    galleryImgs: [
      'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600'
    ],
    desc: 'Creating the world’s first fashion wool line produced by gay sheep, advocating for LGBTQ+ visibility and diversity in agriculture.',
    client: 'Schäferei Stücke Foundation',
    agency: 'Creavie Marketing',
    disciplines: ['Brand Design & Storytelling', 'E-commerce Platform', 'High-Fashion Creative Direction', 'Public Relations Strategy'],
    metrics: [
      { value: '100%', label: 'Wool Inventory Sold Out' },
      { value: '12M+', label: 'Organic Social Reach' },
      { value: '€180K', label: 'LGBTQ+ Charity Funds Raised' }
    ],
    quote: {
      text: "Rainbow Wool challenges stereotypes by showing that diversity is natural and exists everywhere—even in the most traditional industries.",
      author: "Michael Stücke",
      role: "Founder, Schäferei Stücke"
    },
    challenge: 'In traditional agricultural sectors, gay and queer individuals face high rates of discrimination and isolation. To raise awareness and fund support initiatives, the Stücke farm needed a creative way to bring this issue into mainstream fashion and media.',
    solution: 'We created "Rainbow Wool"—the first high-fashion wool line harvested exclusively from gay sheep (who are often excluded from commercial breeding programs). We established a modern brand identity, collaborated with elite designers to create a capsule streetwear collection, and launched an interactive e-commerce platform that shared the story of every individual sheep.',
    results: 'The launch was a huge success, selling out the entire collection in just four days. The campaign reached over 12 million people worldwide, starting crucial conversations about inclusion in traditional industries and raising €180,000 to support LGBTQ+ rural community groups.'
  },
  'lufthansa-centennial': {
    title: 'Lufthansa Centennial',
    category: 'Marketing',
    tag: 'Global Launch',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
    secondaryImg: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600',
    galleryImgs: [
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600'
    ],
    desc: 'A virtual interactive timeline celebrating 100 years of aviation. Users explored classic airplanes in realistic interactive 3D.',
    client: 'Lufthansa Group',
    agency: 'Creavie Marketing x Mediaplus',
    disciplines: ['3D Web Graphics (WebGL)', 'Bespoke UI Soundscapes', 'Historical Archive Digitalization', 'Global Campaign Rollout'],
    metrics: [
      { value: '5.2M', label: 'Interactive Sessions' },
      { value: '6.5m', label: 'Average Time On Site' },
      { value: '+28%', label: 'Frequent Flyer Signups' }
    ],
    quote: {
      text: "The centennial platform allowed millions of people to step inside our history, bringing classic aircraft back to life in a way physical museums never could.",
      author: "Carsten Spohr",
      role: "CEO, Lufthansa Group"
    },
    challenge: 'To celebrate its 100th anniversary, Lufthansa wanted to move beyond traditional advertising and connect with a modern, tech-savvy audience in a meaningful way, showcasing their heritage while highlighting their future innovations.',
    solution: 'We engineered a highly immersive 3D digital museum using WebGL. Visitors could explore realistic, interactive 3D models of iconic historical aircraft, stepping inside highly detailed cockpits, listening to remastered radio chatter, and exploring a centennial timeline.',
    results: 'The virtual museum became a major highlight of their global campaign, recording over 5.2 million sessions. Users spent an average of 6.5 minutes on the site, driving a 28% increase in customer loyalty program signups and setting a new standard for interactive brand storytelling.'
  },
  'lupins-quest': {
    title: 'Lupins Quest',
    category: 'Web Development',
    tag: 'Interactive Game',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=1200',
    secondaryImg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600',
    galleryImgs: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600'
    ],
    desc: 'Interactive online puzzle experience built for Netflix, allowing millions of global fans to crack heists live.',
    client: 'Netflix International',
    agency: 'Creavie Marketing',
    disciplines: ['Interactive Web Game', 'Real-Time Multiplayer Logic', 'Interactive Sound Design', 'Bespoke Cyber Graphics'],
    metrics: [
      { value: '18M', label: 'Active Game Plays' },
      { value: '+92%', label: 'Show Viewership Increase' },
      { value: '45m', label: 'Average Session Duration' }
    ],
    quote: {
      text: "Lupin's Quest gave fans a chance to live the heist, transforming viewership into active, creative participation on a global scale.",
      author: "Bela Bajaria",
      role: "Chief Content Officer, Netflix"
    },
    challenge: 'For the launch of the new Lupin season, Netflix wanted to go beyond typical trailers and create a highly engaging experience that would get fans talking online and build massive anticipation before the first episode aired.',
    solution: 'We engineered "Lupin\'s Quest"—an immersive web-based multiplayer puzzle experience. Players stepped into the role of modern heist planners, cracking security codes and searching through historical archives in real-time, working together with other players online.',
    results: 'The game went viral, racking up over 18 million active plays worldwide. It started trending globally on Twitter and TikTok, driving a 92% increase in premier day viewership and proving the power of interactive marketing for entertainment releases.'
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
      {/* ── Dynamic Header ── */}
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
            <span style={{ background: 'var(--secondary)', color: 'var(--text-dark)', padding: '0.4rem 1.1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-title)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {study.tag}
            </span>
            <span style={{ border: 'var(--border-light)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', padding: '0.4rem 1.1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-title)' }}>
              {study.year}
            </span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            {study.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '850px', lineHeight: 1.7 }}>
            {study.desc}
          </p>
        </div>
      </div>

      {/* ── Main Immersive Hero Image ── */}
      <div className="container" style={{ marginBottom: '6rem' }}>
        <div 
          className="case-study-hero"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(12,12,20,0.1), rgba(12,12,20,0.5)), url(${study.img})`,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1)' : 'scale(0.98)',
            transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1)'
          }} 
        />
      </div>

      {/* ── Case Study Metas, Challenge, Solution & Metrics ── */}
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div className="case-study-details-grid">
          
          {/* Main Content Blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '0.8rem', fontSize: '0.78rem' }}>The Background</span>
              <h2 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.9rem', marginBottom: '1.2rem' }}>The Challenge</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.75 }}>{study.challenge}</p>
            </div>

            <div>
              <span className="section-label" style={{ marginBottom: '0.8rem', fontSize: '0.78rem' }}>The Execution</span>
              <h2 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.9rem', marginBottom: '1.2rem' }}>The Creative Solution</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.75 }}>{study.solution}</p>
            </div>

            {/* Immersive Quote Block */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              borderLeft: '4px solid var(--secondary)',
              padding: '3rem',
              borderRadius: '0 24px 24px 0',
              margin: '1rem 0',
            }}>
              <p style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '1.5rem'
              }}>
                &ldquo;{study.quote.text}&rdquo;
              </p>
              <div>
                <strong style={{ display: 'block', color: 'var(--secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-title)' }}>{study.quote.author}</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{study.quote.role}</span>
              </div>
            </div>

            <div>
              <span className="section-label" style={{ marginBottom: '0.8rem', fontSize: '0.78rem' }}>The Impact</span>
              <h2 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.9rem', marginBottom: '1.2rem' }}>The Results</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.75 }}>{study.results}</p>
            </div>
          </div>

          {/* Dynamic Sidebar Info */}
          <div className="case-study-sidebar">
            
            {/* Metas Card */}
            <div className="white-card" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Campaign Info</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 600, textTransform: 'uppercase' }}>Client</span>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.2rem', color: '#fff' }}>{study.client}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 600, textTransform: 'uppercase' }}>Agency Partners</span>
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.2rem', color: '#fff' }}>{study.agency}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-title)', fontWeight: 600, textTransform: 'uppercase' }}>Integrated Disciplines</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.6rem' }}>
                    {study.disciplines.map(d => (
                      <span key={d} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--secondary)' }} /> {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Statistics / Metrics */}
            <div className="white-card" style={{ padding: '2.5rem', background: 'var(--bg-dark-card)', border: '1px solid rgba(144, 235, 0, 0.2)' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', marginBottom: '2.2rem' }}>Measured KPIs</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
                {study.metrics.map((metric, i) => (
                  <div key={i} style={{ borderBottom: i < study.metrics.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingBottom: i < study.metrics.length - 1 ? '1.8rem' : '0' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{metric.value}</div>
                    <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', fontFamily: 'var(--font-title)', fontWeight: 500 }}>{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Immersive Parallel Images / Creative Assets Gallery ── */}
      <div className="container" style={{ paddingBottom: '8rem' }}>
        <span className="section-label" style={{ marginBottom: '2rem' }}>Creative Assets & Execution</span>
        <div className="case-study-gallery-grid">
          <div 
            className="case-study-gallery-left"
            style={{
              backgroundImage: `url(${study.secondaryImg})`,
            }} 
          />
          <div className="case-study-gallery-right">
            {study.galleryImgs.map((img, i) => (
              <div key={i} style={{
                borderRadius: '24px',
                overflow: 'hidden',
                flex: 1,
                minHeight: '200px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Next Project Navigation Banner ── */}
      <div style={{ borderTop: 'var(--border-light)', background: 'var(--bg-white)', padding: '6.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '0.8rem' }}>Up Next</span>
              <h3 style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.4rem)', color: '#fff' }}>{nextStudy.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.3rem' }}>{nextStudy.category}</p>
            </div>
            <Link href={`/work/${nextSlug}`} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>View Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

