import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'COR Pathways: COR Certification & Health and Safety Management',
  description: 'COR Pathways delivers COR certification consulting in Ontario and H&S program management across Alberta, BC, and Saskatchewan. Beat the 2027 deadline.',
}

const MAX_W = '1200px'

function SectionLabel({ children, dark = false }) {
  return (
    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>
      {children}
    </p>
  )
}

function ImagePlaceholder({ label, height = 200, dark = false }) {
  return (
    <div style={{ width: '100%', height: `${height}px`, border: '1.5px dashed rgba(74,144,196,0.3)', background: dark ? 'rgba(74,144,196,0.08)' : 'rgba(74,144,196,0.06)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'rgba(74,144,196,0.7)', textAlign: 'center', lineHeight: 1.6, maxWidth: '400px' }}>{label}</p>
    </div>
  )
}

function FilledBtn({ href, children, fullWidth = false }) {
  return (
    <Link href={href} style={{ display: fullWidth ? 'block' : 'inline-block', textAlign: 'center', background: '#059669', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      {children}
    </Link>
  )
}

function OutlineBtn({ href, children, dark = true }) {
  return (
    <Link href={href} style={{ display: 'inline-block', background: 'transparent', color: dark ? '#ffffff' : '#0D1F3C', border: `1.5px solid ${dark ? 'rgba(255,255,255,0.35)' : 'rgba(13,31,60,0.35)'}`, fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      {children}
    </Link>
  )
}

function ProvincePill({ children }) {
  return (
    <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.15)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px' }}>
      {children}
    </span>
  )
}

function CheckItem({ children, color = '#34D399' }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.6 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
        <circle cx="9" cy="9" r="8.5" stroke={color} strokeWidth="1" />
        <path d="M5.5 9l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </li>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ══ SECTION 1: HERO ══ */}
      <section style={{ background: '#0D1F3C', minHeight: '100vh', padding: '80px 1.5rem', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Grid overlay */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        {/* Radial glow */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '20%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.1) 0%, rgba(74,144,196,0.07) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(74,144,196,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* LEFT, copy */}
          <div>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', padding: '6px 14px', borderRadius: '999px', marginBottom: '28px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', display: 'inline-block', boxShadow: '0 0 0 3px rgba(52,211,153,0.3)', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399' }}>Ottawa Deadline: January 1, 2027</span>
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Your Path to{' '}
              <em style={{ fontStyle: 'italic', color: '#7BB8E0', fontFamily: 'var(--font-fraunces)' }}>COR Certification</em>{' '}
              Starts{' '}
              <span style={{ color: '#34D399' }}>Here.</span>
            </h1>

            {/* Subheading */}
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '520px' }}>
              COR Pathways helps Ontario construction companies get COR certified before the 2027 deadline, and manages complete Health &amp; Safety programs for companies across Alberta, BC, and Saskatchewan. Expert consulting, purpose-built software, all in one place.
            </p>

            {/* Buttons */}
            <div className="hero-btn-row" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
              <OutlineBtn href="tel:+17808325158">Call 780-832-5158</OutlineBtn>
            </div>

            {/* Trust signals */}
            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {['IHSA-Aligned Platform', 'COR 2020 Standard', '4 Provinces Served', 'No Setup Fees'].map((t) => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6.5" stroke="#34D399" strokeWidth="1" /><path d="M4 7l2 2 4-4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT, cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Top card */}
            <div style={{ background: '#163258', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <div style={{ height: '3px', background: 'linear-gradient(90deg, #34D399, #4A90C4)' }} />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                  <Image src="/images/Certification management.webp" alt="COR Pathways certification management dashboard" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ marginTop: '16px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7BB8E0', marginBottom: '6px' }}>Ontario, COR Certification</p>
                  <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px', lineHeight: 1.3 }}>All 14 COR Elements. One Platform.</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '12px' }}>Track every element, every document, and every certification: all in one place, updated in real time.</p>
                  <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#34D399', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>Deadline: Jan 1, 2027</span>
                </div>
              </div>
            </div>

            {/* Bottom row,3 province cards */}
            <div className="hero-province-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[{ province: 'Alberta' }, { province: 'BC' }, { province: 'Saskatchewan' }].map((p) => (
                <div key={p.province} style={{ background: '#163258', borderRadius: '12px', padding: '14px', border: '1px solid rgba(74,144,196,0.2)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>{p.province}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', lineHeight: 1.4 }}>H&amp;S Program Management</p>
                  <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.15)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px' }}>SE-COR</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse { 0%,100%{box-shadow:0 0 0 3px rgba(52,211,153,0.3)} 50%{box-shadow:0 0 0 6px rgba(52,211,153,0.1)} }
          @media (max-width: 640px) {
            .hero-province-grid { grid-template-columns: 1fr !important; }
            .hero-btn-row { flex-direction: column !important; width: 100% !important; }
            .hero-btn-row a { text-align: center !important; white-space: normal !important; }
            .trust-bar { gap: 12px !important; justify-content: flex-start !important; }
          }
        `}</style>
      </section>

      {/* ══ SECTION 2: TRUST BAR ══ */}
      <section style={{ background: '#F3F4F6', padding: '20px 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="trust-bar" style={{ maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
          {['IHSA COR 2020 Aligned', 'ISNetworld Setup & Management', 'Avetta Compliance', 'ComplyWorks Compliance', 'Ontario · Alberta · BC · Saskatchewan'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#34D399" strokeWidth="1" /><path d="M5 8l2.5 2.5 4.5-5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: '#374151', whiteSpace: 'nowrap' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 3: WHAT WE DO ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'flex-start', marginBottom: '56px' }}>
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.15 }}>
                One company.<br />
                <em style={{ fontStyle: 'italic', color: '#7BB8E0' }}>Every province.</em>
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.75, paddingTop: '8px' }}>
              We help construction companies get certified, stay compliant, and manage their safety programs, whether you're chasing COR in Ontario or running SE-COR programs across Western Canada: one team, two service areas, four provinces.
            </p>
          </div>

          {/* Three cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Card 1,COR Consulting */}
            <div style={{ background: '#ECFDF5', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>🏆</span>
              <div>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#0D1F3C', marginBottom: '10px', lineHeight: 1.3 }}>COR Certification Consulting</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7, marginBottom: '16px' }}>We guide Ontario construction companies through the full COR 2020 certification process, building your safety program, preparing your documentation, and getting you audit-ready. The January 2027 Ottawa deadline is approaching. Do not wait.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <ProvincePill>Ontario</ProvincePill>
                <Link href="/consulting" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: '#059669', textDecoration: 'none' }}>Learn about COR consulting →</Link>
              </div>
            </div>

            {/* Card 2,H&S Management */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>🛡️</span>
              <div>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#0D1F3C', marginBottom: '10px', lineHeight: 1.3 }}>Health &amp; Safety Program Management</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7, marginBottom: '16px' }}>For smaller companies in Alberta, BC, and Saskatchewan on SE-COR safety programs, we build and manage your entire health and safety program, remotely, affordably, and properly. You run your business. We handle your safety compliance.</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#9CA3AF', marginBottom: '12px' }}>Available for SE-COR programs only</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                {['Alberta', 'BC', 'Saskatchewan'].map((p) => <ProvincePill key={p}>{p}</ProvincePill>)}
              </div>
              <Link href="/consulting#western-canada" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: '#4A90C4', textDecoration: 'none', marginTop: 'auto' }}>Learn about H&amp;S management →</Link>
            </div>

            {/* Card 3,Compliance */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>✅</span>
              <div>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#0D1F3C', marginBottom: '10px', lineHeight: 1.3 }}>Contractor Compliance Management</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7, marginBottom: '16px' }}>We set up and manage your ISNetworld, Avetta, and ComplyWorks accounts from scratch, handling every requirement, document submission, and renewal so you stay green and keep working.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                {['ISNetworld', 'Avetta', 'ComplyWorks'].map((b) => (
                  <span key={b} style={{ display: 'inline-block', background: 'rgba(13,31,60,0.06)', color: '#374151', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px' }}>{b}</span>
                ))}
              </div>
              <Link href="/compliance" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: '#059669', textDecoration: 'none', marginTop: 'auto' }}>See compliance services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: PLATFORM PREVIEW ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left, copy */}
          <div>
            <SectionLabel>The Platform</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
              Purpose-built for{' '}
              <span style={{ color: '#7BB8E0' }}>COR certification.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '36px' }}>
              Every feature in COR Pathways was designed around the COR 2020 standard. Not a generic safety tool; a purpose-built platform that maps directly to what IHSA auditors look for.
            </p>

            {/* Numbered features */}
            <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {[
                { n: '1', title: 'Track All 14 COR Elements', body: 'See your compliance score for every element in real time. Know exactly what is complete, what is missing, and what needs attention before your audit.' },
                { n: '2', title: 'Certifications & Training Matrix', body: 'Track every employee certification, get expiry alerts before they lapse, and maintain a complete training record for your audit package.' },
                { n: '3', title: 'Forms, Inspections & Hazard Assessments', body: 'Digital forms for every COR requirement, toolbox talks, inspections, incident reports, hazard assessments: all linked to the right audit element automatically.' },
                { n: '4', title: 'AI-Powered Mock Audit Practice', body: 'Practice your audit interview with our AI auditor before the real thing. Build confidence and identify gaps before IHSA walks through your door.' },
              ].map((f) => (
                <li key={f.n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '22px', fontWeight: 700, color: '#34D399', flexShrink: 0, lineHeight: 1, marginTop: '2px', minWidth: '24px' }}>{f.n}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>{f.title}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{f.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <FilledBtn href="/platform">Explore the full platform →</FilledBtn>
          </div>

          {/* Right, platform card */}
          <div style={{ background: '#163258', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
            <div style={{ height: '3px', background: 'linear-gradient(90deg, #34D399, #4A90C4)' }} />
            <div style={{ padding: '1.5rem' }}>
              <div style={{ width: '100%', height: '220px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                <Image src="/images/Safety Audit Review Panel.webp" alt="COR audit readiness dashboard" fill style={{ objectFit: 'cover' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7BB8E0', margin: '16px 0 12px' }}>COR Audit Readiness, Sample Company</p>

              {/* Progress bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Element 01: H&S Management System', pct: 92 },
                  { label: 'Element 02: Hazard Identification', pct: 85 },
                  { label: 'Element 04: Competency & Training', pct: 78 },
                  { label: 'Element 09: Workplace Inspections', pct: 95 },
                  { label: 'Element 10: Incident Investigation', pct: 70 },
                  { label: 'Element 11: Emergency Preparedness', pct: 88 },
                ].map((el) => (
                  <div key={el.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{el.label}</span>
                      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#34D399' }}>{el.pct}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${el.pct}%`, background: 'linear-gradient(90deg, #34D399, #4A90C4)', borderRadius: '999px' }} />
                    </div>
                  </div>
                ))}
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>+ 8 more elements tracked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: WESTERN CANADA ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left, visual grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Top full-width card */}
            <div style={{ background: '#0D1F3C', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)' }}>
              <div style={{ width: '100%', height: '160px', position: 'relative' }}>
                <Image src="/images/Western Canada Construction Site.webp" alt="Western Canada construction site" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7BB8E0', marginBottom: '4px' }}>Western Canada</p>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', lineHeight: 1.3 }}>Health &amp; Safety Program Management</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>For SE-COR companies in AB, BC &amp; SK</p>
              </div>
            </div>

            {/* 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { icon: '📋', title: 'We build your safety program', body: 'Policies, procedures, hazard assessments, all set up properly from day one.' },
                { icon: '👁️', title: 'We monitor your compliance', body: 'See every location\'s safety status from one dashboard, remotely.' },
                { icon: '🔄', title: 'We handle renewals', body: 'Insurance submissions, WCB statements, document updates, all done for you.' },
                { icon: '💬', title: 'Flat monthly fee', body: 'No surprise charges. One price covers everything.' },
              ].map((c) => (
                <div key={c.title} style={{ background: '#F9FAFB', borderRadius: '12px', padding: '16px', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontSize: '20px', display: 'block', marginBottom: '8px' }}>{c.icon}</span>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: '#0D1F3C', marginBottom: '4px', lineHeight: 1.3 }}>{c.title}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#6B7280', lineHeight: 1.5 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right, copy */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Alberta · BC · Saskatchewan</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '24px' }}>
              Your safety program,{' '}
              <span style={{ color: '#7BB8E0', fontStyle: 'italic' }}>managed for you.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              Running a small construction company in Western Canada means wearing every hat, project manager, estimator, HR, and now safety officer. We take the safety hat off your head entirely.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '32px' }}>
              COR Pathways builds your complete SE-COR safety program from scratch, then manages it every month: remotely, affordably, and properly. You focus on your work. We keep you compliant.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                'Complete safety program build-out included',
                'Remote monitoring via the COR Pathways app',
                'Insurance certificate submissions handled',
                'WCB premium rate statement filings included',
                'Document updates at no extra charge',
                'Available for SE-COR programs only',
              ].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {['Alberta', 'British Columbia', 'Saskatchewan'].map((p) => (
                <span key={p} style={{ display: 'inline-block', background: '#0D1F3C', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px' }}>{p}</span>
              ))}
            </div>
            <FilledBtn href="/consulting#western-canada">Learn more about H&amp;S Program Management →</FilledBtn>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: COMPLIANCE SERVICES ══ */}
      <section style={{ background: '#E8F4FC', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>Contractor Compliance</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2 }}>
              Green light.{' '}
              <span style={{ color: '#4A90C4', fontStyle: 'italic' }}>Ready to work.</span>
            </h2>
          </div>

          {/* Three platform cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {[
              {
                name: 'ISNetworld',
                setup: '$1,500 full setup',
                features: ['Full account creation and configuration', 'Safety program and policy uploads', 'Insurance and WCB certificate submission', 'Safety statistics entry', 'Approval tracking until green status', 'Ongoing management after approval'],
              },
              {
                name: 'Avetta',
                setup: '$1,500 full setup',
                features: ['Full profile setup and completion', 'Document and certificate uploads', 'Safety program submission', 'Insurance and WCB verification', 'Compliance gap resolution', 'Ongoing management after approval'],
              },
              {
                name: 'ComplyWorks',
                setup: '$400 full setup',
                features: ['Full profile and company setup', 'All required document uploads', 'Insurance and WCB submission', 'Completion to green/approved status', 'Ongoing management after approval', 'Included in 3-account bundle option'],
              },
            ].map((platform) => (
              <div key={platform.name} style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '22px', fontWeight: 700, color: '#0D1F3C', marginBottom: '6px' }}>{platform.name}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: '#059669', marginBottom: '20px' }}>{platform.setup}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {platform.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151', lineHeight: 1.5 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="7" cy="7" r="6.5" stroke="#34D399" strokeWidth="1" /><path d="M4 7l2 2 4-4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Navy banner */}
          <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Ongoing Account Management</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>After setup, we manage your account every month. Insurance renewals submitted. WCB statements filed. Documents updated at no extra charge. You send us the paperwork when we ask, we handle everything else.</p>
            </div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[{ price: '$200/month', label: '1 account' }, { price: '$300/month', label: 'up to 3 accounts' }].map((p) => (
                <div key={p.label} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '28px', fontWeight: 700, color: '#34D399', lineHeight: 1 }}>{p.price}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{p.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <FilledBtn href="/compliance">See Full Compliance Services →</FilledBtn>
          </div>
        </div>
      </section>

      {/* ══ SECTION 7: SOCIAL PROOF ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>Why Companies Choose Us</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
              Built for contractors.{' '}
              <span style={{ color: '#7BB8E0', fontStyle: 'italic' }}>By safety professionals.</span>
            </h2>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', marginBottom: '64px' }}>
            {[
              { stat: '14', label: 'COR Elements tracked in the platform' },
              { stat: '4', label: 'Provinces served across Canada' },
              { stat: '100%', label: 'Done-for-you compliance setup' },
              { stat: '1', label: 'Flat monthly fee. No hidden costs.' },
            ].map((s) => (
              <div key={s.stat} style={{ textAlign: 'center', padding: '24px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(74,144,196,0.15)' }}>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '48px', fontWeight: 700, color: '#34D399', lineHeight: 1, marginBottom: '8px' }}>{s.stat}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 8: FINAL CTA ══ */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Get Started Today</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Ready to get certified?
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            Book a free consultation and find out exactly what it takes to get your company COR certified or compliant, with no obligation and no jargon.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="tel:+17808325158">Call 780-832-5158</OutlineBtn>
          </div>
        </div>
      </section>
    </>
  )
}
