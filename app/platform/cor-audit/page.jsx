import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'COR Audit Dashboard: COR Pathways',
  description: 'Track all 14 COR 2020 elements in real time, know your weighted score before your auditor arrives, and export a complete evidence package with one click.',
}

const MAX_W = '1200px'
const SECTION_PAD = '96px 1.5rem'

function SectionLabel({ children }) {
  return (
    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>
      {children}
    </p>
  )
}

function SiteImage({ src, alt, height = 420, rounded = '16px' }) {
  return (
    <div style={{ width: '100%', height: `${height}px`, position: 'relative', borderRadius: rounded, overflow: 'hidden' }}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  )
}

function FilledBtn({ href, children }) {
  return (
    <Link href={href} style={{ display: 'inline-block', background: '#059669', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
      {children}
    </Link>
  )
}

function OutlineBtn({ href, children, onDark = true }) {
  return (
    <Link href={href} style={{ display: 'inline-block', background: 'transparent', color: onDark ? '#ffffff' : '#0D1F3C', border: `1.5px solid ${onDark ? 'rgba(255,255,255,0.35)' : 'rgba(13,31,60,0.35)'}`, fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
      {children}
    </Link>
  )
}

function GridOverlay() {
  return <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
}

const ELEMENTS = [
  { num: '01', name: 'Health & Safety Management System', weight: '1.2x', evidence: ['H&S Policy', 'Roles & Responsibilities', 'Management Review Records'] },
  { num: '02', name: 'Hazard Identification & Assessment', weight: '1.2x', evidence: ['Daily Hazard Assessments', 'Hazard Reports', 'Monthly Review Log'] },
  { num: '03', name: 'Hazard Control', weight: '1.2x', evidence: ['Control Implementation Records', 'Safe Work Practices', 'Control Verification'] },
  { num: '04', name: 'Competency & Training', weight: '1.1x', evidence: ['Orientation Checklists', 'Training Matrix', 'Competency Assessments'] },
  { num: '05', name: 'Workplace Behavior', weight: '1.0x', evidence: ['Safety Rules Documentation', 'Rule Acknowledgments', 'Progressive Discipline Records'] },
  { num: '06', name: 'Personal Protective Equipment', weight: '1.0x', evidence: ['PPE Assessment', 'Issuance Records', 'PPE Inspections'] },
  { num: '07', name: 'Preventative Maintenance', weight: '1.0x', evidence: ['Maintenance Program', 'Equipment Inspection Records', 'Deficiency Reports'] },
  { num: '08', name: 'Training & Communication', weight: '1.0x', evidence: ['Training Program', 'Toolbox Talk Records', 'Training Evaluations'] },
  { num: '09', name: 'Workplace Inspections', weight: '1.0x', evidence: ['Inspection Schedule', 'Weekly Inspection Records', 'Corrective Actions'] },
  { num: '10', name: 'Incident Investigation', weight: '1.1x', evidence: ['Investigation Procedure', 'Incident Reports', 'Root Cause Analysis'] },
  { num: '11', name: 'Emergency Preparedness', weight: '1.1x', evidence: ['Emergency Plan', 'Drill Records', 'Emergency Equipment Inspections'] },
  { num: '12', name: 'Statistics & Records', weight: '1.0x', evidence: ['Safety Statistics', 'Injury Log', 'Trend Analysis'] },
  { num: '13', name: 'Regulatory Awareness', weight: '1.0x', evidence: ['Compliance Checklist', 'Legislation Reference', 'Regulatory Change Log'] },
  { num: '14', name: 'Management System Review', weight: '1.0x', evidence: ['Annual Review Records', 'Safety Meeting Minutes', 'Improvement Plans'] },
]

function weightBadge(w) {
  if (w === '1.2x') return { background: 'rgba(52,211,153,0.12)', color: '#059669' }
  if (w === '1.1x') return { background: 'rgba(74,144,196,0.12)', color: '#4A90C4' }
  return { background: 'rgba(0,0,0,0.06)', color: '#6B7280' }
}

export default function CorAuditPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <GridOverlay />
        <div aria-hidden="true" style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, rgba(74,144,196,0.08) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.15)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', marginBottom: '28px' }}>
            Platform: COR Audit Management
          </span>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, maxWidth: '780px', marginBottom: '24px' }}>
            Know exactly where you stand.<br />
            <span style={{ color: '#7BB8E0' }}>Every element. Every day.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '640px', marginBottom: '40px' }}>
            The COR Pathways audit dashboard tracks all 14 elements of the COR 2020 standard in real time, so you always know what's complete, what's missing, and how close you are to certification.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="/platform">See All Platform Features</OutlineBtn>
          </div>
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <SiteImage src="/images/Safety Audit Review Panel.webp" alt="COR Pathways audit dashboard showing all 14 COR elements with progress bars and compliance scores" height={420} />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              COR certification is complex. Most companies don't know where the gaps are until it's too late.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              The COR 2020 standard has 14 elements, each with weighted scoring. Miss a requirement in a high-weight element and your entire audit score drops, even if everything else is perfect. Most companies going into their first audit have no idea which elements are weak until an auditor tells them.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75 }}>
              COR Pathways eliminates that uncertainty. Every element is tracked continuously, scored in real time, and linked to the actual forms and documents that prove compliance. You walk into your audit knowing exactly what your score will be.
            </p>
          </div>
          <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { text: 'Element 10: Incident Investigation, 3 forms missing', color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' },
              { text: 'Element 04: Competency & Training, 2 certifications expired', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
              { text: 'Element 02: Hazard Identification, monthly review overdue', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
            ].map((item) => (
              <div key={item.text} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>⚠️</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: item.color, lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
              <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>✅</span>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#34D399', lineHeight: 1.5 }}>COR Pathways identifies these gaps automatically, before your auditor does.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ALL 14 ELEMENTS ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>COR 2020 Standard</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              All 14 elements. Tracked and scored.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
              Every COR audit element is built into the platform. Each one maps directly to the forms, documents, certifications, and records you need to prove compliance.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
            {ELEMENTS.map((el) => {
              const badge = weightBadge(el.weight)
              return (
                <div key={el.num} style={{ background: '#ffffff', borderRadius: '12px', padding: '20px 22px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '28px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1, flexShrink: 0, opacity: 0.18, minWidth: '36px' }}>{el.num}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: '#0D1F3C', lineHeight: 1.4 }}>{el.name}</p>
                      <span style={{ display: 'inline-block', flexShrink: 0, fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', ...badge }}>{el.weight}</span>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {el.evidence.map((e) => (
                        <li key={e} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#6B7280' }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                            <rect x="1" y="1" width="10" height="10" rx="2" stroke="#9CA3AF" strokeWidth="1" />
                            <path d="M3 4h6M3 6h6M3 8h4" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WEIGHTED SCORING ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>How COR Scoring Works</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              Not all elements are equal. The platform knows the difference.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              The COR 2020 standard uses weighted scoring. Elements 1, 2, and 3 (your management system, hazard identification, and hazard control) carry a 1.2x weight multiplier. Elements 4, 10, and 11 carry 1.1x. Getting these right matters more than anything else in your audit.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '36px' }}>
              COR Pathways shows you your weighted compliance score at all times, not just a raw count of completed items. You always see the number that actually matters: the score your auditor will calculate.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: '1.2x Elements', sub: 'Elements 1, 2, 3', tag: 'Critical weight', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', color: '#059669' },
                { label: '1.1x Elements', sub: 'Elements 4, 10, 11', tag: 'High weight', bg: 'rgba(74,144,196,0.08)', border: 'rgba(74,144,196,0.2)', color: '#4A90C4' },
                { label: '1.0x Elements', sub: 'Elements 5–9, 12–14', tag: 'Standard weight', bg: 'rgba(0,0,0,0.04)', border: 'rgba(0,0,0,0.1)', color: '#6B7280' },
              ].map((box) => (
                <div key={box.label} style={{ background: box.bg, border: `1px solid ${box.border}`, borderRadius: '10px', padding: '14px 12px', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, color: box.color, marginBottom: '4px' }}>{box.label}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#6B7280', marginBottom: '2px' }}>{box.sub}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#9CA3AF' }}>{box.tag}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Weighted scoring.webp" alt="COR audit scoring dashboard showing weighted element scores and an overall compliance percentage gauge" height={280} />
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>Your projected audit score, updated in real time</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: AUDITSOFT INTEGRATION ── */}
      <section style={{ background: '#0D1F3C', padding: SECTION_PAD, position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>AuditSoft Integration</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.25, marginBottom: '24px' }}>
              One click. Your entire evidence package, exported.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
              AuditSoft is the audit documentation platform used by IHSA-certified auditors across Ontario. When your audit date arrives, COR Pathways exports your entire evidence package, all forms, documents, certifications, and records, directly into AuditSoft format with one click.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '32px' }}>
              No scrambling to find documents. No last-minute printing. No gaps. Just a clean, complete audit submission ready to go.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'One-click export to AuditSoft format',
                'All 14 elements exported with evidence chains',
                'Document version control maintained',
                'Audit trail preserved automatically',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <circle cx="9" cy="9" r="8.5" stroke="#34D399" strokeWidth="1" />
                    <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#163258', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '20px', border: '1px solid rgba(74,144,196,0.2)' }}>
            <SiteImage src="/images/Auditsoft export.webp" alt="AuditSoft export screen showing document package export confirmation" height={260} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#34D399', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '999px' }}>
                AuditSoft Compatible
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MOCK AUDIT ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Mock audit.webp" alt="AI mock audit interface showing COR audit interview questions and responses" height={320} />
            <div style={{ background: '#0D1F3C', borderRadius: '10px', padding: '16px 20px' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 1.6 }}>
                Practice makes perfect. Know the answers before the auditor asks.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>AI Mock Audit</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              Practice your audit interview before the real thing.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              One of the most stressful parts of COR certification is the auditor interview. You know your safety program, but can you answer questions about it under pressure, on the spot, the way an IHSA auditor will ask them?
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '32px' }}>
              COR Pathways includes an AI-powered mock audit interview. It asks you the same types of questions a real auditor would ask, scores your answers, identifies gaps in your knowledge, and helps you prepare so there are no surprises on audit day.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Simulates real IHSA auditor questioning style',
                'Covers all 14 COR elements',
                'Identifies knowledge gaps before your real audit',
                'Available any time; practice as often as you need',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151' }}>
                  <span style={{ color: '#34D399', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Stop guessing. Start knowing.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '40px' }}>
            Start your free trial and see your COR compliance score in real time, for every element, weighted correctly, updated automatically.
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
