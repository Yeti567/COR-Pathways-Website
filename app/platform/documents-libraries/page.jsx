import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Documents & Libraries: COR Pathways',
  description: 'A complete document control system and six master libraries pre-loaded with construction industry content, built for COR certification.',
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

function SiteImage({ src, alt, height = 300, rounded = '12px' }) {
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

const LIBRARIES = [
  { icon: '⚠️', title: 'Hazards', count: '120+ construction hazards', body: 'A comprehensive library of construction hazards organized by trade and work type, each with recommended controls. Powers your hazard assessments and safe work practices automatically.' },
  { icon: '🚜', title: 'Equipment', count: 'Your full equipment inventory', body: 'Track every piece of equipment your company owns or operates: make, model, serial number, location, and maintenance schedule. Powers equipment inspection forms and maintenance records.' },
  { icon: '📋', title: 'Tasks', count: 'Job and task templates', body: 'A library of construction job tasks and work procedures that power your hazard assessments and toolbox talks. Add your own company-specific tasks at any time.' },
  { icon: '📍', title: 'Jobsites', count: 'Active project registry', body: 'Every active project your company is working on, tracked by location, client, and status. Forms and inspections link to jobsites automatically so your records are always organized by project.' },
  { icon: '🧪', title: 'Safety Data Sheets', count: 'Chemical and material SDS records', body: 'Store and manage Safety Data Sheets for every chemical or hazardous material used on your job sites. Workers can access SDS documents instantly from any device in the field.' },
  { icon: '⚖️', title: 'Legislation', count: 'OH&S regulations reference', body: 'A reference library of occupational health and safety regulations relevant to your province and industry. Supports Element 13 (Regulatory Awareness) and keeps your team informed of applicable legal requirements.' },
]

const DOC_TYPES = [
  'Health & Safety Manual', 'H&S Policies', 'Safe Work Practices (SWP)', 'Safe Job Procedures (SJP)',
  'Emergency Response Plan', 'Hazard Assessments', 'Equipment Inspection Checklists', 'Orientation Program',
  'Disciplinary Procedures', 'Return to Work Program', 'Contractor Management Program', 'Preventative Maintenance Program',
]

export default function DocumentsLibrariesPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, rgba(74,144,196,0.08) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.15)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', marginBottom: '28px' }}>
            Platform: Documents &amp; Libraries
          </span>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, maxWidth: '860px', marginBottom: '24px' }}>
            Every document your safety program needs.<br />
            <span style={{ color: '#7BB8E0' }}>Controlled, versioned, and audit-ready.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '660px', marginBottom: '40px' }}>
            COR Pathways gives you a complete document control system and six master libraries pre-loaded with construction industry content, so you spend less time building your safety program from scratch and more time running your business.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="/platform">See All Platform Features</OutlineBtn>
          </div>
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <SiteImage src="/images/Hero image page 4.webp" alt="Document registry dashboard showing folders, document versions, approval status badges, and COR element mapping" height={400} rounded="16px" />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              A safety program buried in a filing cabinet is not a safety program. It is a liability.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              COR auditors expect to see a living, controlled document system, not a binder that hasn’t been updated since 2019. Your health and safety manual, your safe work practices, your hazard assessments, your policies and procedures: all of it needs to be current, version-controlled, and accessible to the people who need it.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75 }}>
              Ontario is the only province where document control is a formal COR audit requirement. But even in Alberta, BC, and Saskatchewan, having your safety documents organized, current, and accessible makes your program significantly stronger, and makes our job of managing it far easier.
            </p>
          </div>
          <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { text: 'H&S Manual: last updated 2021, no version record', color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' },
              { text: 'Safe Work Practice: two versions in circulation, nobody knows which is current', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
              { text: 'Emergency Response Plan: not linked to any audit element', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
            ].map((item) => (
              <div key={item.text} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>📁</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: item.color, lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
              <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>✅</span>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#34D399', lineHeight: 1.5 }}>COR Pathways version-controls every document, tracks approvals, and maps each one to the right COR element automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DOCUMENT REGISTRY ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>Document Control</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              A proper document control system. Built in.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
              The document registry is your central hub for every safety document in your company, organized, version-controlled, and mapped to your COR audit.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {[
              { icon: '📂', title: 'Centralized Document Hub', body: 'Every safety document your company produces lives in one place, organized by type, folder, and COR element. Policies, procedures, safe work practices, manuals, and forms are all searchable and accessible to the right people based on their role.' },
              { icon: '🔄', title: 'Full Version History', body: 'Every document maintains a complete revision history. When you update a policy or procedure, the previous version is archived automatically. Your auditor can see that documents are actively maintained and improved, not just created once and forgotten.' },
              { icon: '✅', title: 'Document Review & Approval', body: 'Documents go through a structured review and approval process before they are published. Admins approve, internal auditors review, and the system records every step. Your document control process becomes part of your audit evidence automatically.' },
              { icon: '🗂️', title: 'Mapped to Your Audit', body: 'Every document in the registry is linked to the COR element it supports. When you are building your audit evidence package, the platform knows which documents belong to which element, and flags any elements that are missing supporting documentation.' },
            ].map((card) => (
              <div key={card.title} style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>{card.icon}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '19px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px', lineHeight: 1.3 }}>{card.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SIX MASTER LIBRARIES ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>Master Libraries</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              Six libraries. Pre-loaded. Ready on day one.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.7, maxWidth: '660px', margin: '0 auto' }}>
              COR Pathways comes with six master libraries built specifically for the construction industry. Instead of building your safety program content from scratch, you start with a comprehensive foundation and customize it to your company.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {LIBRARIES.map((lib) => (
              <div key={lib.title} style={{ background: '#F9FAFB', borderRadius: '14px', padding: '1.75rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>{lib.icon}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '4px', lineHeight: 1.3 }}>{lib.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, color: '#059669', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>{lib.count}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#6B7280', lineHeight: 1.65 }}>{lib.body}</p>
              </div>
            ))}
          </div>

          {/* Note banner */}
          <div style={{ background: '#0D1F3C', borderRadius: '14px', padding: '1.5rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>📌</span>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              <strong style={{ color: '#ffffff', fontWeight: 600 }}>Note: </strong>
              Ontario is the only province with formal document control requirements under COR. In Alberta, BC, and Saskatchewan, the libraries and document registry are still fully available and are strongly recommended for SE-COR program management — they simply are not a scored audit element in those provinces.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: DOCUMENT TYPES ── */}
      <section style={{ background: '#0D1F3C', padding: SECTION_PAD, position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left — copy */}
          <div>
            <SectionLabel>What Goes in the Registry</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.25, marginBottom: '24px' }}>
              Every type of safety document your company produces.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '32px' }}>
              The document registry handles every category of safety documentation — from your foundational health and safety manual down to individual safe job procedures. Everything is organized, versioned, and linked to the right audit element.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {DOC_TYPES.map((doc) => (
                <div key={doc} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <rect x="1" y="1" width="10" height="10" rx="2" stroke="rgba(74,144,196,0.6)" strokeWidth="1" />
                    <path d="M3 4h6M3 6h6M3 8h4" stroke="rgba(74,144,196,0.6)" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Document registry.webp" alt="Document registry screen showing a folder structure with document names, version numbers, approval status, and last modified dates" height={300} />
            <div style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '10px', padding: '14px 18px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#34D399', fontWeight: 500 }}>Every document linked to a COR element. Nothing falls through the cracks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MAINTENANCE MODULE ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left — visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Equipment Maintenance Dashboard.webp" alt="Equipment maintenance dashboard showing upcoming maintenance schedule, equipment list, and deficiency report status indicators" height={300} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.12)', border: '1px solid rgba(74,144,196,0.25)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '999px' }}>
                Element 07 — Preventative Maintenance
              </span>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <SectionLabel>Equipment &amp; Maintenance</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              Your equipment maintenance program. Tracked and documented.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              Element 7 of the COR 2020 standard requires a documented preventative maintenance program. COR Pathways handles this through the equipment library and maintenance module — every piece of equipment has a maintenance schedule, inspection records, and deficiency reports attached to it.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '32px' }}>
              When a piece of equipment is inspected and a deficiency is found, a corrective action is created automatically and tracked to resolution. Your maintenance program is not just documented — it is actively managed and audit-ready at all times.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Equipment maintenance schedules with automated reminders',
                'Deficiency reports with corrective action tracking',
                'Full maintenance history per equipment item — exportable for audit',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.6 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <circle cx="9" cy="9" r="8.5" stroke="#34D399" strokeWidth="1" />
                    <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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
            Build your safety program on a solid foundation.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '40px' }}>
            Start your free trial and get access to all six master libraries, the full document registry, and everything your COR audit needs — from day one.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="tel:7808325158">Call tel. 780-832-5158</OutlineBtn>
          </div>
        </div>
      </section>
    </>
  )
}
