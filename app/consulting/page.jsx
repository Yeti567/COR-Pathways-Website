'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const MAX_W = '1200px'

function SectionLabel({ children, color = '#34D399' }) {
  return (
    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color, marginBottom: '12px' }}>
      {children}
    </p>
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

function CheckItem({ children, color = '#34D399', textColor = '#374151' }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: textColor, lineHeight: 1.6 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
        <circle cx="9" cy="9" r="8.5" stroke={color} strokeWidth="1" />
        <path d="M5.5 9l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </li>
  )
}

function ChecklistSection({ title, items }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '14px' }}>{title}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
      </ul>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 600, color: '#0D1F3C', lineHeight: 1.4 }}>{question}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
          <path d="M5 7.5l5 5 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.75, paddingTop: '16px' }}>{answer}</p>
        </div>
      )}
    </div>
  )
}

const TIMELINE_STEPS = [
  { badge: 'Week 1', title: 'Free COR Readiness Assessment', body: 'We start with a free consultation to understand your company: your size, your trades, your current safety program, and how far you are from COR ready. You leave the call with a clear picture of what is needed and a realistic timeline.', color: '#34D399' },
  { badge: 'Weeks 1 to 2', title: 'Platform Setup & Company Onboarding', body: 'We set up your COR Pathways account, enter your company details, import your employee list, and configure your form templates. Your team gets access and a walkthrough of how to use the platform from day one.', color: '#34D399' },
  { badge: 'Weeks 2 to 4', title: 'Gap Analysis Against All 14 Elements', body: 'We conduct a thorough gap analysis of your existing safety program against all 14 COR 2020 elements. Every gap is documented, scored, and added to your action plan with a priority level and target completion date.', color: '#34D399' },
  { badge: 'Months 1 to 9', title: 'Safety Program Development', body: 'This is where the work happens. We build your complete health and safety management system: every policy, procedure, form, and record required by the COR 2020 standard. Your team uses the platform daily and we guide every step.', color: '#34D399' },
  { badge: 'Months 9 to 12', title: 'Audit Preparation & Mock Audit', body: 'As your audit date approaches, we prepare your complete evidence package for AuditSoft, conduct a mock audit to identify any remaining gaps, and prepare you and your team for the auditor interview. You walk in ready.', color: '#34D399' },
  { badge: 'Months 12 to 18', title: 'External Audit & COR Certificate', body: 'Your IHSA-certified external auditor conducts the audit. With COR Pathways behind you, your documentation is complete, your evidence is organized, and your team is prepared. We support you through the audit and beyond.', color: '#34D399' },
]

const FAQS = [
  { q: 'How long does COR certification take?', a: 'For most companies, COR certification takes between 12 and 18 months from the start of the engagement to receiving your certificate. The timeline depends on your current safety program, the size of your company, and how quickly your team can implement the required changes. We build a realistic timeline into your action plan from day one.' },
  { q: 'Do I need to be in Ottawa to work with COR Pathways?', a: 'No. We work with construction companies across Ontario for COR certification and across Alberta, BC, and Saskatchewan for SE-COR Health & Safety Program Management. Everything is managed remotely through the COR Pathways platform, with regular calls and check-ins.' },
  { q: 'What is the difference between COR and SE-COR?', a: 'COR (Certificate of Recognition) is the full safety certification program administered by IHSA in Ontario and by certifying partners in other provinces. It requires a complete 14-element safety management system and an external audit. SE-COR (Safety Essentials COR) is a streamlined version designed for smaller companies. It has fewer requirements and is generally less resource-intensive to achieve and maintain.' },
  { q: 'Is the COR Pathways platform included in the consulting fee?', a: 'Yes. Platform access is included in your monthly consulting fee for the duration of your engagement. There are no separate platform charges while you are an active consulting client.' },
  { q: 'What happens after I get certified?', a: 'After certification you will need to maintain your safety program and complete a surveillance audit periodically to keep your COR status. COR Pathways can continue to support you on a reduced ongoing basis after certification; we can discuss what that looks like at the end of your engagement.' },
  { q: 'Do I need any safety experience to work with you?', a: 'No. Many of our clients have little to no formal safety program when they start working with us. That is completely normal and exactly what we are here for. We build everything from scratch if needed.' },
  { q: 'What is the City of Ottawa COR deadline?', a: 'Starting January 1, 2027, all contractors bidding on City of Ottawa contracts valued over $100,000 must hold a valid COR certificate. If your company bids on municipal work in Ottawa and you are not yet COR certified, you need to start the process now; a 12 to 18 month engagement means time is already tight.' },
  { q: 'Can you manage our ISNetworld or Avetta account as well?', a: 'Yes. COR Pathways offers complete setup and ongoing management for ISNetworld, Avetta, and ComplyWorks accounts. See our Compliance Services page for full details and pricing.' },
]

export default function ConsultingPage() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .consulting-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .consulting-cta-btns a { text-align: center !important; white-space: normal !important; }
          .how-it-works-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
      {/* ══ SECTION 1: HERO ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-5%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.09) 0%, rgba(74,144,196,0.06) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '5%', left: '-8%', width: '500px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(74,144,196,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', padding: '6px 16px', borderRadius: '999px', marginBottom: '32px' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399' }}>Expert Safety Consulting</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '28px', letterSpacing: '-0.02em', maxWidth: '820px' }}>
            We do not just give you software.<br />
            <span style={{ color: '#34D399' }}>We get you certified.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '760px' }}>
            COR Pathways combines hands-on safety consulting expertise with purpose-built software to guide Ontario construction companies through full COR certification, and to manage complete health and safety programs for smaller companies across Alberta, BC, and Saskatchewan.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="tel:+17808325158">Call 780-832-5158</OutlineBtn>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: '#34D399', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, padding: '6px 16px', borderRadius: '999px' }}>Ontario: COR Certification</span>
            <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.1)', border: '1px solid rgba(74,144,196,0.25)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, padding: '6px 16px', borderRadius: '999px' }}>Alberta · BC · Saskatchewan: H&amp;S Program Management</span>
          </div>

          <div style={{ width: '100%', maxWidth: '900px', height: '420px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', position: 'relative' }}>
            <Image src="/images/Consultant talking to client.webp" alt="Safety consultant reviewing documents with a construction company owner at a desk or job site office, professional, approachable" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: ONTARIO COR CONSULTING ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ paddingLeft: '16px', borderLeft: '3px solid #059669', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#059669', margin: 0 }}>Ontario</p>
            <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', color: '#059669', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>ON</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            COR Certification Consulting: from first day to certified.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            The COR 2020 standard requires a fully documented, actively managed health and safety management system. Most construction companies do not have the internal resources or expertise to build one from scratch while running a business at the same time. That is exactly what we are here for.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>
            <div>
              <ChecklistSection title="Program Development" items={['Complete health and safety management system build: all 14 elements', 'Health and safety policy and objectives', 'Roles, responsibilities, and accountabilities documentation', 'Hazard identification and assessment program', 'Safe work practices and safe job procedures', 'Emergency response plan', 'All required COR 2020 forms and templates']} />
              <ChecklistSection title="Audit Preparation" items={['Gap analysis against all 14 COR elements', 'Action plan with prioritized tasks and timelines', 'Internal audit preparation and mock audit practice', 'Evidence package assembly for AuditSoft submission', 'Pre-audit review of all documentation', 'Guidance through the IHSA external audit process']} />
              <ChecklistSection title="Ongoing Support" items={['Monthly check-ins and program reviews', 'Form and document updates as your company grows', 'Certification expiry monitoring via the COR Pathways app', 'Support for all 14 elements throughout the engagement', 'Available by phone and email throughout the engagement']} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* ── Card 1: Up to 30 Employees ── */}
              <div style={{ background: '#F9FAFB', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(52,211,153,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                {/* Header */}
                <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#059669', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Up to 30 Employees</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '44px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1 }}>$2,500</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF', fontWeight: 500 }}>/month</span>
                </div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', marginBottom: '24px' }}>12 to 18 month engagement</p>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '20px' }} />

                {/* Monthly includes */}
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '16px' }}>Your monthly engagement includes:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  {[
                    { icon: '🕐', title: '25 to 40 Hours of Consulting Time Per Month', body: 'Behind-the-scenes work building your safety program, reviewing your forms and submissions, monitoring your app activity, and preparing your audit evidence. You get real work done on your file every single month, not just a check-in call.' },
                    { icon: '📹', title: 'Weekly Zoom Calls, Approximately 3 Hours Each', body: 'One dedicated Zoom call per week to review progress, walk through completed work, address questions, and plan the week ahead. These are working sessions, not status updates.' },
                    { icon: '📱', title: 'Live App Training for Your Entire Team', body: 'We conduct a dedicated Zoom training session with your full team, workers, supervisors, and admins, walking everyone through the COR Pathways app. Forms, inspections, hazard assessments, certification uploads: your crew learns it all live with us on screen.' },
                    { icon: '👁️', title: 'Daily App Monitoring and Real-Time Feedback', body: 'We monitor your COR Pathways account on a daily basis. When workers submit forms, we review them. When something is filled out incorrectly or a gap appears, we flag it immediately. You get active guidance, not a monthly report telling you what went wrong.' },
                  ].map((f) => (
                    <div key={f.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '20px', flexShrink: 0, lineHeight: 1.3 }}>{f.icon}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#0D1F3C', marginBottom: '4px', lineHeight: 1.4 }}>{f.title}</p>
                        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#6B7280', lineHeight: 1.65 }}>{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '20px' }} />

                {/* Full package checklist */}
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '14px' }}>Your complete consulting package includes:</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                  {[
                    'All COR 2020 required forms, pre-built and ready for your team',
                    'All required health and safety policies, written for your company and trades',
                    'Safe work practices and safe job procedures for your specific operations',
                    'Training needs assessment: we identify exactly what training your workers require',
                    'PPE assessment and fitting guidance: we advise on the right equipment for each role',
                    'Hazard assessments for your trades and jobsites',
                    'Emergency response plan',
                    'Complete health and safety manual',
                    'Gap analysis against all 14 COR elements',
                    'Action plan with prioritized tasks and deadlines',
                    'Internal audit preparation',
                    'Mock audit practice: all 14 elements',
                    'AuditSoft evidence package assembly',
                    'COR Pathways platform: full access included free',
                  ].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
                <FilledBtn href="/contact" fullWidth>Book a Free Consultation</FilledBtn>
              </div>

              {/* Card 2: 31–150 Employees ── */}
              <div style={{ background: '#0D1F3C', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', position: 'relative' }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg, #34D399, #4A90C4)' }} />
                <div style={{ padding: '2rem' }}>
                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    <span style={{ display: 'inline-block', background: 'rgba(13,31,60,0.6)', border: '1px solid rgba(52,211,153,0.3)', color: '#34D399', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>'31 to 150 Employees'</span>
                    <span style={{ display: 'inline-block', background: '#059669', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Most Popular</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '44px', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>$5,000</span>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>/month</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>12 to 18 month engagement</p>

                  <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }} />

                  {/* Monthly includes */}
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Your monthly engagement includes:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                    {[
                      { icon: '🕐', title: '40 to 60 Hours of Consulting Time Per Month', body: 'Significantly more behind-the-scenes consulting time to match the complexity of a larger team: more employees, more trades, more supervisors, more documentation, and more daily monitoring. Your file gets the attention it needs.' },
                      { icon: '📹', title: 'Two Zoom Calls Per Week, 6 to 8 Hours Per Week Total', body: 'Two dedicated working Zoom sessions per week to keep a larger engagement moving at the right pace. More frequent touchpoints mean faster progress and fewer bottlenecks as your team builds momentum toward certification.' },
                      { icon: '📱', title: 'Live App Training for Your Entire Team', body: 'A dedicated Zoom training session for your full team: workers, supervisors, department heads, and admins, walking everyone through the COR Pathways platform live. For larger teams we can run multiple sessions by department or trade.' },
                      { icon: '👁️', title: 'Daily App Monitoring and Real-Time Feedback', body: 'We monitor your account daily. With a larger team submitting more forms and inspections, daily monitoring is essential. We catch errors, flag gaps, and give real-time feedback so small issues do not become audit problems.' },
                    ].map((f) => (
                      <div key={f.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '20px', flexShrink: 0, lineHeight: 1.3 }}>{f.icon}</span>
                        <div>
                          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', lineHeight: 1.4 }}>{f.title}</p>
                          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{f.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }} />

                  {/* Upgrade checklist */}
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399', marginBottom: '14px' }}>Everything in the Starter plan, plus:</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                    {[
                      'Everything included in the Up to 30 Employees plan',
                      'Multi-department setup and supervisor management',
                      'Larger team onboarding and role-based training',
                      'Multiple Zoom training sessions by department if needed',
                      'Priority support: faster response times throughout engagement',
                      'COR Pathways platform: full access included free',
                    ].map((item) => <CheckItem key={item} textColor="rgba(255,255,255,0.8)">{item}</CheckItem>)}
                  </ul>
                  <FilledBtn href="/contact" fullWidth>Book a Free Consultation</FilledBtn>
                </div>
              </div>

              {/* ── Note box ── */}
              <div style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)', borderLeft: '4px solid #34D399', borderRadius: '10px', padding: '20px 24px' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#1F4D3A', lineHeight: 1.75 }}>
                  Every consulting engagement, at either price point, is a hands-on working relationship. We are not selling you a template package and wishing you luck. We build your safety program with you, monitor your team&apos;s progress daily through the app, and stay actively involved until you are certified.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: OTTAWA DEADLINE BANNER ══ */}
      <section style={{ background: '#059669', padding: '72px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px', maxWidth: '780px' }}>
            Ottawa contractors: January 1, 2027 is closer than you think.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: '48px', maxWidth: '760px' }}>
            Starting January 1, 2027, all contractors bidding on City of Ottawa contracts valued over $100,000 must hold a valid COR certification. A 12 to 18 month engagement means you need to start now. Companies that wait until 2026 risk not being certified in time.
          </p>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: '48px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1, marginBottom: '8px' }}>12 to 18 months</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>Typical COR certification timeline</p>
            </div>
            <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.25)' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1, marginBottom: '8px' }}>Jan 1, 2027</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>City of Ottawa mandatory deadline</p>
            </div>
          </div>
          <Link href="/contact" style={{ display: 'inline-block', background: '#ffffff', color: '#0D1F3C', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 700, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none' }}>
            Start Your COR Journey Today
          </Link>
        </div>
      </section>

      {/* ══ SECTION 4: HOW IT WORKS ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <SectionLabel>The Process</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              How we take you from zero to certified.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, maxWidth: '720px', margin: '0 auto' }}>
              COR certification is a structured process. Here is exactly what working with COR Pathways looks like from your first conversation to the day you receive your certificate.
            </p>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: '27px', top: '44px', bottom: '44px', width: '2px', background: 'linear-gradient(180deg, #34D399 0%, #4A90C4 50%, #34D399 100%)', opacity: 0.3, borderRadius: '2px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {TIMELINE_STEPS.map((step, i) => (
                <div key={step.title} style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', paddingBottom: i < TIMELINE_STEPS.length - 1 ? '36px' : '0' }}>
                  <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', background: '#ffffff', border: `2px solid ${step.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', zIndex: 1, position: 'relative' }}>
                    <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: step.color, lineHeight: 1 }}>{i + 1}</span>
                  </div>
                  <div style={{ flex: 1, background: '#ffffff', borderRadius: '14px', padding: '24px 28px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', marginTop: '6px' }}>
                    <span style={{ display: 'inline-block', background: step.color === '#34D399' ? 'rgba(52,211,153,0.1)' : 'rgba(74,144,196,0.1)', color: step.color, fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', marginBottom: '10px', letterSpacing: '0.05em' }}>{step.badge}</span>
                    <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '8px', lineHeight: 1.3 }}>{step.title}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.7 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: WESTERN CANADA ══ */}
      <section id="western-canada" style={{ background: '#ffffff', padding: '0 0 96px' }}>
        {/* Region transition */}
        <div style={{ padding: '56px 1.5rem 24px', textAlign: 'center', marginBottom: '48px', borderTop: '4px solid #4A90C4', background: 'linear-gradient(180deg, rgba(74,144,196,0.06) 0%, transparent 100%)' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4A90C4', marginBottom: '8px' }}>Working in western Canada instead?</p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto' }}>
            Below is our Health &amp; Safety Program Management service for smaller contractors in Alberta, BC, and Saskatchewan. Different program, different scope.
          </p>
        </div>

        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ paddingLeft: '16px', borderLeft: '3px solid #4A90C4', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A90C4', margin: 0 }}>Alberta · BC · Saskatchewan</p>
            {['AB', 'BC', 'SK'].map((p) => (
              <span key={p} style={{ display: 'inline-block', background: 'rgba(74,144,196,0.1)', border: '1px solid rgba(74,144,196,0.3)', color: '#4A90C4', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', letterSpacing: '0.08em' }}>{p}</span>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            Health &amp; Safety Program Management for SE-COR companies.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            For smaller construction companies in Alberta, British Columbia, and Saskatchewan operating under SE-COR safety programs, COR Pathways offers a complete remote health and safety program management service. You get a professionally built and actively managed safety program, without hiring a full-time safety officer.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>
            {/* Left, what is included */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A90C4', marginBottom: '14px' }}>We Build Your Safety Program</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Complete health and safety policy and procedures', 'Hazard assessments for your specific trades and tasks', 'Safe work practices and safe job procedures', 'Emergency response plan', 'All required forms and documentation'].map((item) => (
                    <CheckItem key={item} color="#4A90C4">{item}</CheckItem>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A90C4', marginBottom: '14px' }}>We Manage It Ongoing</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Monthly program reviews and updates',
                    'Document revisions at no extra charge; just let us know',
                    'Insurance certificate submissions: you connect us with your broker or send the documents and we handle the submission',
                    'WCB premium rate statement filings; we file them when they are due',
                    'Compliance monitoring via the COR Pathways app',
                    'Workers enter safety information in the app; we review and keep records current',
                  ].map((item) => (
                    <CheckItem key={item} color="#4A90C4">{item}</CheckItem>
                  ))}
                </ul>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A90C4', marginBottom: '14px' }}>The App Makes It Easy</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Your team uses the COR Pathways app to submit forms, report hazards, and log inspections from the field',
                    'You and your supervisors see everything in real time',
                    'We see everything from our end and flag anything that needs attention',
                    'No paperwork. No filing. No chasing your crew for sign-off sheets.',
                  ].map((item) => (
                    <CheckItem key={item} color="#4A90C4">{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right, info card + image */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ background: '#0D1F3C', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg, #4A90C4, #7BB8E0)' }} />
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>Available for SE-COR Programs Only</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '24px' }}>
                    This service is designed specifically for smaller companies in Alberta, BC, and Saskatchewan operating under SE-COR safety programs. SE-COR is a streamlined safety certification designed for companies with fewer employees, separate from the full COR certification required in Ontario.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {['Alberta', 'British Columbia', 'Saskatchewan'].map((p) => (
                      <span key={p} style={{ display: 'inline-block', background: 'rgba(74,144,196,0.15)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>{p}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '24px', fontStyle: 'italic' }}>
                    Not sure if SE-COR is right for your company? We will tell you on your free consultation call.
                  </p>
                  <Link href="/contact" style={{ display: 'block', textAlign: 'center', background: '#4A90C4', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
                    Get a Free Quote
                  </Link>
                </div>
              </div>

              <div style={{ width: '100%', height: '260px', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(74,144,196,0.15)' }}>
                <Image src="/images/Western Canada Construction Site.webp" alt="Wide landscape shot of a construction site in Alberta or BC, mountains or prairie backdrop, heavy equipment, workers in high-vis vests" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: WHY CHOOSE US ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <SectionLabel>Why COR Pathways</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, maxWidth: '760px', margin: '0 auto' }}>
              We are safety professionals who built the software. Not software people who learned safety.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: '🏗️',
                title: 'Deep Construction Industry Expertise',
                body: 'We know the COR 2020 standard inside and out, every element, every weighted score, every piece of evidence an auditor looks for. We have helped construction companies across multiple trades get certified and we bring that experience to every engagement.',
              },
              {
                icon: '📱',
                title: 'Software Built Around the Standard',
                body: 'Every feature in COR Pathways was designed around a specific COR audit requirement. The platform does not just store documents, it tracks compliance, alerts you to gaps, and builds your evidence package automatically.',
              },
              {
                icon: '🤝',
                title: 'A Real Consulting Relationship',
                body: 'You are not buying a subscription and figuring it out yourself. You get a dedicated consultant who knows your company, checks in regularly, and is available when you have questions. We are invested in your certification because your success is our track record.',
              },
            ].map((col) => (
              <div key={col.title} style={{ background: '#163258', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(74,144,196,0.2)' }}>
                <span style={{ fontSize: '32px', display: 'block', marginBottom: '16px' }}>{col.icon}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>{col.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 7: FAQ ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <SectionLabel>Common Questions</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2 }}>
              Questions we hear all the time.
            </h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 8: CTA ══ */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Let&apos;s talk about getting you certified.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            Book a free consultation and find out exactly what it takes: no obligation, no jargon, just a straight conversation about your company and what COR certification looks like for you.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="tel:+17808325158">Call 780-832-5158</OutlineBtn>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.03em' }}>
            Free consultation · No commitment · Ontario and western Canada
          </p>
        </div>
      </section>
    </>
  )
}
