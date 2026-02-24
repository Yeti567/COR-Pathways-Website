import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Forms & Inspections — COR Pathways',
  description: 'Every COR 2020 form your audit needs — digital, organized by element, and ready for your team from day one.',
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

function ImagePlaceholder({ label, height = 300, dark = false }) {
  return (
    <div style={{ width: '100%', height: `${height}px`, border: '1.5px dashed rgba(74,144,196,0.3)', background: dark ? 'rgba(74,144,196,0.08)' : 'rgba(74,144,196,0.06)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'rgba(74,144,196,0.7)', textAlign: 'center', lineHeight: 1.6, maxWidth: '400px' }}>{label}</p>
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

const FORM_GROUPS = [
  { el: '02', name: 'Hazard Identification', forms: ['Hazard Assessment Review Log', 'Daily Hazard Assessment', 'Hazard Reporting Form'] },
  { el: '03', name: 'Hazard Control', forms: ['Control Implementation Record', 'Control Communication Record', 'Control Review & Approval'] },
  { el: '04', name: 'Competency', forms: ['Contractor Prequalification Form', 'Contractor Evaluation Form', 'Change Notification Form'] },
  { el: '05', name: 'Workplace Behavior', forms: ['Progressive Discipline Form', 'Safety Rule Communication Record'] },
  { el: '06', name: 'PPE', forms: ['PPE Fit Test Record', 'PPE Maintenance Log', 'PPE Training Signoff'] },
  { el: '07', name: 'Maintenance', forms: ['Maintenance Schedule Checklist', 'Corrective Action Form'] },
  { el: '08', name: 'Training & Communication', forms: ['Training Evaluation Form', 'Competency Assessment Form', 'Toolbox Talk Record'] },
  { el: '09', name: 'Inspections', forms: ['Joint Health & Safety Inspection', 'Weekly Workplace Inspection', 'Corrective Action Log'] },
  { el: '10', name: 'Incidents', forms: ['Incident Investigation Form', 'Corrective Action Log', 'Post-Incident Training Record'] },
  { el: '11', name: 'Emergency', forms: ['Emergency Equipment Inspection', 'Emergency Drill Record'] },
  { el: '12', name: 'Statistics', forms: ['Injury & Illness Statistics Form', 'Safety Performance Summary', 'Trend Analysis Report'] },
  { el: '13', name: 'Regulatory', forms: ['Regulatory Compliance Checklist', 'Legal Posting Checklist', 'Regulatory Change Log'] },
  { el: '14', name: 'Management Review', forms: ['Management Review Minutes', 'KPI Review Form', 'Management Action Plan'] },
]

export default function FormsInspectionsPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, rgba(74,144,196,0.08) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.15)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', marginBottom: '28px' }}>
            Platform — Forms &amp; Inspections
          </span>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, maxWidth: '820px', marginBottom: '24px' }}>
            Every form your audit needs.<br />
            <span style={{ color: '#7BB8E0' }}>Digital, organized, and linked to the right element.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '640px', marginBottom: '40px' }}>
            COR Pathways replaces paper forms, scattered spreadsheets, and mismatched Word documents with a complete digital forms system — built around the COR 2020 standard from the ground up.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="/platform">See All Platform Features</OutlineBtn>
          </div>
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <SiteImage src="/images/Hero Image, Page 2.webp" alt="Mobile phone and tablet showing digital safety inspection forms being filled out on a job site" height={400} rounded="16px" />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              Paper forms get lost. Spreadsheets get out of date. And auditors notice.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              When an IHSA auditor asks to see your workplace inspection records, your toolbox talk sign-in sheets, or your hazard assessment forms — they need to be complete, consistent, and traceable. A folder of photocopied forms with missing dates and illegible signatures won't cut it.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75 }}>
              COR Pathways digitizes every form required by the COR 2020 standard. Every submission is timestamped, linked to the right employee, mapped to the correct audit element, and stored permanently. Your records are always complete, always findable, and always audit-ready.
            </p>
          </div>
          <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { text: 'Toolbox talk sign-in sheet — handwriting illegible, date missing', color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' },
              { text: 'Weekly inspection form — last submitted 6 weeks ago', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
              { text: 'Hazard assessment — not linked to any jobsite record', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
            ].map((item) => (
              <div key={item.text} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>📄</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: item.color, lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
              <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>✅</span>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#34D399', lineHeight: 1.5 }}>COR Pathways digitizes, timestamps, and auto-links every form to the right audit element.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FORM TYPES ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>What's Included</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              Every form the COR 2020 standard requires.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Forms are organized by COR element so you always know which forms support which part of your audit.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {FORM_GROUPS.map((group) => (
              <div key={group.el} style={{ background: '#ffffff', borderRadius: '12px', padding: '20px 22px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', color: '#059669', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', flexShrink: 0 }}>
                    Element {group.el}
                  </span>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: '#0D1F3C' }}>{group.name}</p>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {group.forms.map((form) => (
                    <li key={form} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                        <rect x="1" y="1" width="10" height="10" rx="2" stroke="#9CA3AF" strokeWidth="1" />
                        <path d="M3 4h6M3 6h6M3 8h4" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                      {form}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: LIBRARY INTEGRATED FORMS ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>Smart Forms</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              Forms that pull from your master libraries automatically.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              Four of the most commonly used forms in COR Pathways are integrated directly with your master libraries — hazards, equipment, jobsites, and tasks. When you open a hazard assessment, your library of 120+ construction hazards is already there. When you start an equipment inspection, your equipment inventory auto-populates. No re-entering the same information over and over.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '0' }}>
              {[
                { icon: '🔍', title: 'Equipment Inspection', sub: 'pulls from your equipment inventory library' },
                { icon: '⚠️', title: 'Hazard Assessment', sub: 'integrated with your 120+ construction hazard library' },
                { icon: '🚨', title: 'Incident Report', sub: 'linked to jobsite registry and employee records' },
                { icon: '🗣️', title: 'Toolbox Talk', sub: 'pulls topics from your task and hazard libraries' },
              ].map((item) => (
                <li key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 16px', background: '#F9FAFB', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: '#0D1F3C', marginBottom: '2px' }}>{item.title}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280' }}>{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Library Integrated Hazard Assessment.webp" alt="Digital hazard assessment form on tablet showing a dropdown list of pre-populated hazard types from a library" height={300} />
            <div style={{ background: '#0D1F3C', borderRadius: '10px', padding: '14px 18px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>120+ construction hazards pre-loaded. Ready on day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FORM BUILDER ── */}
      <section style={{ background: '#0D1F3C', padding: SECTION_PAD, position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left — visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Form Template Builder.webp" alt="Form template builder interface showing drag-and-drop fields, field types, and a form preview panel" height={300} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#34D399', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '999px' }}>
                Custom form templates — no coding required
              </span>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <SectionLabel>Form Builder</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.25, marginBottom: '24px' }}>
              Need a custom form? Build it yourself in minutes.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
              Every company has forms unique to their operations — custom checklists, site-specific inspection forms, client-required documentation. COR Pathways includes a full form template builder so admins can create any form they need without touching a line of code.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '32px' }}>
              You can also import existing PDF forms directly into the platform — COR Pathways converts them into digital, submittable forms that feed directly into your audit evidence.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Drag-and-drop form template builder',
                'PDF form import — converts to digital automatically',
                'Custom forms link to COR elements just like standard forms',
                'Forms available to workers on mobile instantly after publishing',
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
        </div>
      </section>

      {/* ── SECTION 6: MOBILE & FIELD USE ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left — copy */}
          <div>
            <SectionLabel>Built for the Field</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              Your crew completes forms from the job site. You see everything from the office.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              COR Pathways is a Progressive Web App — it works on any phone or tablet without downloading anything from an app store. Workers can complete hazard assessments, toolbox talks, inspection forms, and incident reports right from the job site, in real time.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '36px' }}>
              Admins and supervisors see every submission instantly. Forms are timestamped, GPS-optional, and linked to the worker's profile and the relevant jobsite record. When your auditor asks for your last 12 months of workplace inspections, they're all there — complete and organized.
            </p>

            {/* Three stat callouts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { stat: 'PWA', label: 'Works on any device, no app store required' },
                { stat: 'Real-time', label: 'Submissions visible to admins instantly' },
                { stat: 'Offline', label: 'Forms save locally and sync when connected' },
              ].map((s) => (
                <div key={s.stat} style={{ background: '#ffffff', borderRadius: '10px', padding: '16px 12px', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '16px', fontWeight: 700, color: '#059669', marginBottom: '6px' }}>{s.stat}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#6B7280', lineHeight: 1.5 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div>
            <SiteImage src="/images/Field worker filling out form on mobile phone.webp" alt="Construction worker in hard hat and safety vest completing a digital form on a smartphone on an active job site" height={380} />
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Replace paper. Pass your audit.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '40px' }}>
            Start your free trial and get access to every COR 2020 form — pre-built, organized by element, and ready for your team to use from day one.
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
