'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const MAX_W = '1200px'

function FilledBtn({ href, children, fullWidth = false, bg = '#059669' }) {
  return (
    <Link href={href} style={{ display: fullWidth ? 'block' : 'inline-block', textAlign: 'center', background: bg, color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      {children}
    </Link>
  )
}

function OutlineBtn({ href, children, dark = false }) {
  return (
    <Link href={href} style={{ display: 'inline-block', background: 'transparent', color: dark ? '#0D1F3C' : '#ffffff', border: `1.5px solid ${dark ? 'rgba(13,31,60,0.35)' : 'rgba(255,255,255,0.35)'}`, fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
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

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
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

const FAQS = [
  { q: 'Is there a contract for the consulting engagement?', a: 'Yes. COR consulting engagements are structured as 12 to 18 month agreements. The timeline reflects the actual time required to build a compliant safety program and prepare for a COR audit. We discuss the engagement structure in detail on your free consultation call before anything is signed.' },
  { q: 'Is the platform really free during my consulting engagement?', a: 'Yes — completely. Platform access for your entire team is included in your monthly consulting fee for the full duration of your engagement. There are no separate platform charges while you are an active consulting client.' },
  { q: 'Can I get compliance management without consulting?', a: 'Yes. ISNetworld, Avetta, and ComplyWorks compliance setup and management is available as a standalone service — you do not need to be a COR consulting client to use it.' },
  { q: 'What if I need more than 150 employees covered?', a: 'Contact us directly. We can discuss a custom engagement structure for larger companies or companies with complex multi-site operations.' },
  { q: 'Do prices include HST?', a: 'Prices shown are before applicable taxes. HST will be applied to all services provided to Ontario clients. Contact us if you have questions about tax applicability for your province.' },
]

export default function PricingPage() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .pricing-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .pricing-cta-btns a { text-align: center !important; white-space: normal !important; }
          .pricing-management-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
        }
      `}</style>
      {/* ══ S1: HERO ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-5%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.09) 0%, rgba(74,144,196,0.06) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '5%', left: '-8%', width: '500px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(74,144,196,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', padding: '6px 16px', borderRadius: '999px', marginBottom: '32px' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399' }}>Simple, Transparent Pricing</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '28px', letterSpacing: '-0.02em', maxWidth: '820px' }}>
            Everything you need to get certified and <span style={{ color: '#34D399' }}>stay compliant.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '60px', maxWidth: '680px' }}>
            COR consulting, compliance management, and post-certification platform access — all with flat, predictable pricing and no hidden fees.
          </p>
          <div style={{ width: '100%', maxWidth: '800px', height: '320px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', position: 'relative' }}>
            <Image src="/images/hero Section, page 5.webp" alt="Clean overhead shot of a desk with a calculator, contract documents, a hard hat, and a coffee mug — pricing and planning concept" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      {/* ══ S2: CONSULTING PRICING ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>COR Certification Consulting</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '24px' }}>
            Full COR certification consulting — with the platform included free.
          </h2>
          <div style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)', borderLeft: '4px solid #34D399', borderRadius: '10px', padding: '20px 24px', marginBottom: '56px', maxWidth: '820px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#1F4D3A', lineHeight: 1.75 }}>
              The COR Pathways platform is included at no extra charge for all active consulting clients. You get the full platform — audit tracking, certifications, forms, documents, libraries — free for the entire duration of your consulting engagement. After certification, you can continue on a standalone platform plan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '28px' }}>

            {/* Card 1 — Starter $2,500 */}
            <div style={{ background: '#F9FAFB', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(52,211,153,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#059669', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Up to 30 Employees</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '48px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1 }}>$2,500</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF', fontWeight: 500 }}>/month</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', marginBottom: '24px' }}>12 — 18 month engagement</p>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '20px' }} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '16px' }}>What you get each month:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                {[
                  { icon: '🕐', text: '25 — 40 hours of consulting time per month' },
                  { icon: '📹', text: 'Weekly Zoom calls — approximately 3 hours each' },
                  { icon: '📱', text: 'Live app training session for your entire team' },
                  { icon: '👁️', text: 'Daily app monitoring and real-time feedback on form submissions' },
                ].map((f) => (
                  <div key={f.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontSize: '18px', flexShrink: 0, lineHeight: 1.4 }}>{f.icon}</span>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>{f.text}</p>
                  </div>
                ))}
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '20px' }} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '14px' }}>Full package includes:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '28px' }}>
                {[
                  'All COR 2020 required forms — pre-built',
                  'All required health and safety policies',
                  'Safe work practices and job procedures',
                  'Training needs assessment for your workers',
                  'PPE assessment and fitting guidance',
                  'Hazard assessments for your trades and jobsites',
                  'Emergency response plan and H&S manual',
                  'Gap analysis — all 14 COR elements',
                  'Mock audit preparation and practice',
                  'AuditSoft evidence package assembly',
                  'COR Pathways platform — full access, included free',
                ].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <FilledBtn href="/contact" fullWidth>Book a Free Consultation</FilledBtn>
            </div>

            {/* Card 2 — Growth $5,000 */}
            <div style={{ background: '#F9FAFB', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(52,211,153,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                <span style={{ display: 'inline-block', background: '#059669', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Most Popular</span>
              </div>
              <span style={{ display: 'inline-block', background: '#0D1F3C', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>31 — 150 Employees</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '48px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1 }}>$5,000</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF', fontWeight: 500 }}>/month</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', marginBottom: '24px' }}>12 — 18 month engagement</p>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '20px' }} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '16px' }}>What you get each month:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                {[
                  { icon: '🕐', text: '40 — 60 hours of consulting time per month' },
                  { icon: '📹', text: 'Two Zoom calls per week — 6 to 8 hours per week total' },
                  { icon: '📱', text: 'Live app training — multiple sessions by department if needed' },
                  { icon: '👁️', text: 'Daily app monitoring and real-time feedback' },
                ].map((f) => (
                  <div key={f.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontSize: '18px', flexShrink: 0, lineHeight: 1.4 }}>{f.icon}</span>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>{f.text}</p>
                  </div>
                ))}
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '20px' }} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '14px' }}>Everything in Starter, plus:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '28px' }}>
                {[
                  'Everything included in the Starter consulting plan',
                  'Multi-department and multi-supervisor setup',
                  'Multiple team training sessions by department or trade',
                  'Priority support throughout the engagement',
                  'COR Pathways platform — full access, included free',
                ].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <FilledBtn href="/contact" fullWidth>Book a Free Consultation</FilledBtn>
            </div>
          </div>

          {/* Note box */}
          <div style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)', borderLeft: '4px solid #34D399', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#1F4D3A', lineHeight: 1.75 }}>
              The platform is included free for the full duration of your consulting engagement. No separate subscription. No hidden platform fees. After certification you can continue on a standalone post-certification plan.
            </p>
          </div>
        </div>
      </section>

      {/* ══ S3: OTTAWA DEADLINE BANNER ══ */}
      <section style={{ background: '#059669', padding: '72px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px', maxWidth: '760px' }}>
            Ottawa contractors — the January 1, 2027 deadline is approaching.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '700px' }}>
            A 12 to 18 month COR certification engagement means companies that want to be certified before the City of Ottawa deadline need to start now. Every month you wait is a month off the back end of your timeline.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#ffffff', color: '#0D1F3C', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 700, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none' }}>
            Start Your COR Journey Today
          </Link>
        </div>
      </section>

      {/* ══ S4: COMPLIANCE PRICING ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Contractor Compliance Management</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            ISNetworld, Avetta, and ComplyWorks — setup and ongoing management.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            We set up your compliance accounts completely — from scratch to fully approved — and manage them ongoing so nothing ever lapses. Flat fees, no surprises.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {[
              {
                name: 'ISNetworld',
                price: '$1,500',
                body: 'Complete account setup from zero to fully approved green status. Every section completed, every document submitted, every requirement met.',
                items: ['Full account creation and profile setup', 'Insurance and WCB certificate submission', 'Safety statistics and questionnaire completion', 'Support until full green approval achieved'],
              },
              {
                name: 'Avetta',
                price: '$1,500',
                body: 'End-to-end Avetta compliance — every section of your profile completed correctly and tracked through to full approved status.',
                items: ['Full profile setup and completion', 'All documents and certificates submitted', 'Gap resolution and approval tracking', 'Support until full approval achieved'],
              },
              {
                name: 'ComplyWorks',
                price: '$400',
                note: 'Most affordable setup',
                body: 'Complete ComplyWorks setup — all sections filled, all documents submitted, full approval obtained.',
                items: ['Full profile and company setup', 'Insurance and WCB document submission', 'Completion to approved green status', 'Support until full approval achieved'],
              },
            ].map((card) => (
              <div key={card.name} style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '24px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px' }}>{card.name}</p>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '40px', fontWeight: 700, color: '#34D399', lineHeight: 1 }}>{card.price}</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', marginTop: '4px', marginBottom: card.note ? '6px' : '20px' }}>one-time setup fee</p>
                {card.note && <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, color: '#059669', marginBottom: '20px' }}>{card.note}</p>}
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#4B5563', lineHeight: 1.7, marginBottom: '20px' }}>{card.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                  {card.items.map((item) => <CheckItem key={item} color="#34D399">{item}</CheckItem>)}
                </ul>
                <FilledBtn href="/contact" fullWidth>Get Started</FilledBtn>
              </div>
            ))}
          </div>

          {/* Monthly management banner */}
          <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2.5rem', border: '1px solid rgba(74,144,196,0.2)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Ongoing Monthly Management</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0' }}>
                After setup we manage your accounts every month — insurance renewals submitted, WCB statements filed, documents updated at no extra charge. You send us the paperwork when we ask. We handle everything else.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '40px', fontWeight: 700, color: '#34D399', lineHeight: 1 }}>$200</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginLeft: '6px' }}>/month</span>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>1 compliance account</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '40px', fontWeight: 700, color: '#34D399', lineHeight: 1 }}>$300</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginLeft: '6px' }}>/month</span>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>up to 3 accounts</p>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', lineHeight: 1.6 }}>
                The $300/month bundle covers any combination of ISNetworld, Avetta, and ComplyWorks accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S5: WESTERN CANADA ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A90C4', marginBottom: '12px' }}>Health &amp; Safety Program Management</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            Alberta · BC · Saskatchewan — SE-COR program management.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            For smaller companies on SE-COR safety programs in western Canada, we build and manage your complete health and safety program remotely — at a price that makes sense for a smaller operation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(74,144,196,0.2)' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>What&apos;s included</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Complete safety program build-out',
                  'Remote compliance monitoring via the COR Pathways app',
                  'Insurance certificate submissions handled',
                  'WCB premium rate statement filings included',
                  'Document and program updates at no extra charge',
                  'Available for SE-COR programs only — AB, BC, SK',
                ].map((item) => <CheckItem key={item} textColor="rgba(255,255,255,0.75)" color="#4A90C4">{item}</CheckItem>)}
              </ul>
            </div>
            <div style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '16px', padding: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '22px', fontWeight: 700, color: '#0D1F3C', marginBottom: '16px' }}>Contact us for a quote</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.75, marginBottom: '24px' }}>
                Pricing for Health &amp; Safety Program Management depends on the size of your company, your trade, your current safety program, and the level of ongoing support required. We provide a clear fixed monthly quote after our free consultation — no vague estimates.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {['Alberta', 'British Columbia', 'Saskatchewan'].map((p) => (
                  <span key={p} style={{ display: 'inline-block', background: 'rgba(74,144,196,0.1)', border: '1px solid rgba(74,144,196,0.3)', color: '#4A90C4', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px' }}>{p}</span>
                ))}
              </div>
              <FilledBtn href="/contact" fullWidth>Get a Free Quote</FilledBtn>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S6: POST-CERTIFICATION PLATFORM ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Post-Certification Platform</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '24px' }}>
            Stay on the platform after you&apos;re certified.
          </h2>
          <div style={{ background: '#0D1F3C', borderRadius: '12px', padding: '24px 28px', marginBottom: '56px', maxWidth: '820px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
              The COR Pathways platform is free for all active consulting clients during their engagement. Once you are certified and your consulting engagement ends, you can continue using the platform on a standalone subscription to maintain your safety program, track certifications, and stay audit-ready for your surveillance audit.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {/* Starter */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: '12px' }}>Starter</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '44px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1 }}>$149</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF' }}>/month</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', marginBottom: '20px' }}>Up to 10 employees</p>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '18px' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                {['COR audit dashboard — all 14 elements', 'Up to 10 employee profiles', 'Certification and training tracker', 'Core forms and inspections library', 'Document registry', 'Master libraries — hazards, equipment, tasks, jobsites, SDS, legislation', 'Email support'].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <OutlineBtn href="/contact" dark>Get Started — Contact Us</OutlineBtn>
            </div>

            {/* Professional — featured */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '2px solid #34D399', boxShadow: '0 8px 32px rgba(52,211,153,0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }}>
                <span style={{ display: 'inline-block', background: '#059669', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, padding: '4px 14px', borderRadius: '999px', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Most Popular</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '12px' }}>Professional</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '44px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1 }}>$299</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF' }}>/month</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', marginBottom: '20px' }}>Up to 50 employees</p>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '18px' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                {['Everything in Starter', 'Up to 50 employee profiles', 'Advanced certification reports and gap analysis', 'Custom form template builder', 'PDF form import', 'AuditSoft export', 'AI mock audit practice', 'Push notifications for expiry alerts', 'Priority email support'].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <FilledBtn href="/contact" fullWidth>Get Started — Contact Us</FilledBtn>
            </div>

            {/* Enterprise */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: '12px' }}>Enterprise</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '44px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1 }}>$499</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF' }}>/month</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', marginBottom: '20px' }}>Up to 150 employees</p>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '18px' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                {['Everything in Professional', 'Up to 150 employee profiles', 'Multi-department and multi-supervisor management', 'Bulk certificate upload', 'Advanced reporting and trend analysis', 'Dedicated account support', 'Phone support included'].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <OutlineBtn href="/contact" dark>Get Started — Contact Us</OutlineBtn>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', fontStyle: 'italic', textAlign: 'center', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
            Post-certification platform pricing is available to COR Pathways consulting alumni only. Platform access is not offered as a standalone subscription to companies who have not completed a consulting engagement with us.
          </p>
        </div>
      </section>

      {/* ══ S7: PRICING SUMMARY TABLE ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Everything at a Glance</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
              All services. All prices. No surprises.
            </h2>
          </div>
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontFamily: 'var(--font-dm-sans)', fontSize: '15px', minWidth: '480px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '14px 24px', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', width: '60%' }}>Service</th>
                  <th style={{ padding: '14px 24px', textAlign: 'right', color: 'rgba(255,255,255,0.5)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['COR Consulting — up to 30 employees', '$2,500/month'],
                  ['COR Consulting — 31 to 150 employees', '$5,000/month'],
                  ['Platform access during consulting', 'Included free'],
                  ['ISNetworld setup', '$1,500 one-time'],
                  ['Avetta setup', '$1,500 one-time'],
                  ['ComplyWorks setup', '$400 one-time'],
                  ['Compliance management — 1 account', '$200/month'],
                  ['Compliance management — up to 3 accounts', '$300/month'],
                  ['H&S Program Management — AB, BC, SK', 'Contact for quote'],
                  ['Post-certification platform — Starter', '$149/month'],
                  ['Post-certification platform — Professional', '$299/month'],
                  ['Post-certification platform — Enterprise', '$499/month'],
                ].map(([service, price], i) => (
                  <tr key={service} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                    <td style={{ padding: '14px 24px', color: 'rgba(255,255,255,0.75)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{service}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'right', color: price === 'Included free' ? '#34D399' : price === 'Contact for quote' ? '#7BB8E0' : '#ffffff', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'nowrap' }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', textAlign: 'center', lineHeight: 1.7 }}>
            All prices in Canadian dollars. Consulting engagements are 12 to 18 months. No setup fees for consulting. Platform included free during consulting engagement.
          </p>
        </div>
      </section>

      {/* ══ S8: FAQ ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Pricing Questions</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2 }}>
              Common questions about pricing.
            </h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ S9: CTA ══ */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Not sure where to start?
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            Book a free consultation. We will look at your company, tell you exactly what you need, and give you a clear picture of what working with COR Pathways looks like — with no obligation and no pressure.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="tel:7808325158">Call tel. 780-832-5158</OutlineBtn>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.03em' }}>
            Free consultation · No commitment · All provinces
          </p>
        </div>
      </section>
    </>
  )
}
