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

function OutlineBtn({ href, children }) {
  return (
    <Link href={href} style={{ display: 'inline-block', background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
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

function PlatformCard({ name, setupPrice, accentColor, btnBg, mgmtItems }) {
  return (
    <div style={{ background: '#0D1F3C', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)` }} />
      <div style={{ padding: '2rem' }}>
        <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '26px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>{name}</p>
        <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '44px', fontWeight: 700, color: accentColor, lineHeight: 1 }}>{setupPrice}</span>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', marginBottom: '20px' }}>one-time setup fee</p>
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }} />
        <div style={{ marginBottom: '4px' }}>
          <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '28px', fontWeight: 700, color: '#ffffff' }}>$200</span>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginLeft: '6px' }}>/month</span>
        </div>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '8px' }}>ongoing account management</p>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
          Or <strong style={{ color: accentColor }}>$300/month</strong> — manage up to 3 compliance accounts combined
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {mgmtItems.map((item) => <CheckItem key={item} color={accentColor} textColor="rgba(255,255,255,0.8)">{item}</CheckItem>)}
        </ul>
        <FilledBtn href="/contact" fullWidth bg={btnBg}>Get Started</FilledBtn>
      </div>
    </div>
  )
}

const FAQS = [
  { q: 'Do I need all three platforms?', a: 'Not necessarily. Which platforms you need depends entirely on who your clients are. Some clients require ISNetworld, others use Avetta, and some use ComplyWorks. We can help you figure out which ones you need on your free consultation call. Many contractors end up needing two or all three as they grow their client base.' },
  { q: 'How long does setup take?', a: 'Setup time varies by platform and how quickly we receive your documents. ISNetworld and Avetta typically take two to four weeks from when we have everything we need. ComplyWorks is usually faster. We track every account actively and follow up on anything outstanding so the process moves as quickly as possible.' },
  { q: 'What if my account gets flagged or suspended?', a: 'If your account is flagged, suspended, or downgraded for any reason while we are managing it, we address it immediately at no additional charge. Keeping your account in good standing is part of what your monthly fee covers.' },
  { q: 'Can you manage accounts for multiple companies?', a: 'Yes. If you have multiple related companies or entities that each need their own compliance accounts, we can manage them. Contact us to discuss pricing for multiple company setups.' },
  { q: 'What happens if I need to add a new platform later?', a: 'No problem. You can add a new platform setup at any time. The setup fee applies for each new platform and your monthly management fee adjusts to the bundle pricing if you are managing three or more accounts.' },
  { q: 'Do you work with contractors across all of Canada?', a: 'Yes. ISNetworld, Avetta, and ComplyWorks compliance management is available to contractors anywhere in Canada. You do not need to be in Ontario or western Canada to use this service.' },
]

export default function CompliancePage() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .compliance-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .compliance-cta-btns a { text-align: center !important; white-space: normal !important; }
          .compliance-mgmt-prices { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
        }
      `}</style>
      {/* ══ S1: HERO ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-5%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.09) 0%, rgba(74,144,196,0.06) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '5%', left: '-8%', width: '500px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(74,144,196,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', padding: '6px 16px', borderRadius: '999px', marginBottom: '32px' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399' }}>Contractor Compliance Services</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '28px', letterSpacing: '-0.02em', maxWidth: '820px' }}>
            Get your green light.<br /><span style={{ color: '#34D399' }}>Stay compliant. Keep working.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '760px' }}>
            ISNetworld, Avetta, and ComplyWorks can be the difference between winning a contract and getting turned away at the gate. COR Pathways sets up your account from scratch and manages it ongoing — so you are always approved, always current, and always ready to work.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
            <FilledBtn href="/contact">Get Started Today</FilledBtn>
            <OutlineBtn href="#pricing">See Pricing Below</OutlineBtn>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}>
            {['ISNetworld', 'Avetta', 'ComplyWorks'].map((p) => (
              <span key={p} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(13,31,60,0.7)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, padding: '7px 16px', borderRadius: '999px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5.5" stroke="#34D399" strokeWidth="1" /><path d="M3.5 6l2 2 3-3.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {p}
              </span>
            ))}
          </div>
          <div style={{ width: '100%', maxWidth: '900px', height: '380px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', position: 'relative' }}>
            <Image src="/images/Hero section page 6.webp" alt="Contractor on a job site holding a tablet showing a green approved compliance status screen" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      {/* ══ S2: THE PROBLEM ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>The Challenge</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '24px' }}>
              One incomplete form. One expired certificate. And you are off the job site.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.75, marginBottom: '20px' }}>
              Large general contractors, municipalities, and oil and gas companies use third-party compliance platforms to pre-qualify the subcontractors they hire. If your ISNetworld, Avetta, or ComplyWorks account is incomplete, expired, or showing a red status — you do not get the call. It is that simple.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.75 }}>
              The problem is that these platforms are time-consuming, confusing, and relentless about renewals. Insurance certificates expire. WCB statements come due. Safety statistics need updating. Most contractors either let their accounts lapse or spend hours every month keeping them current. COR Pathways takes all of that off your plate.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: '#0D1F3C', borderRadius: '14px', padding: '24px', border: '1px solid rgba(74,144,196,0.2)' }}>
              {[
                { dot: '#EF4444', text: 'ISNetworld account — insurance certificate expired 12 days ago' },
                { dot: '#EF4444', text: 'Avetta profile — safety statistics section incomplete' },
                { dot: '#F59E0B', text: 'ComplyWorks — WCB statement due in 8 days' },
                { dot: '#EF4444', text: 'Result — contractor flagged as non-compliant, removed from approved vendor list' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.dot, flexShrink: 0, marginTop: '5px' }} />
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.3)', borderLeft: '4px solid #34D399', borderRadius: '10px', padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>✅</span>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, color: '#1F4D3A', lineHeight: 1.6 }}>
                COR Pathways monitors every account, submits every renewal, and keeps you green — automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S3: HOW IT WORKS ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Our Process</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              We handle everything. From first login to ongoing green status.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, maxWidth: '700px', margin: '0 auto' }}>
              Every compliance engagement follows the same process — complete setup, full approval, then ongoing management so nothing ever lapses.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { num: '01', title: 'You connect with us', body: 'We start with a quick call to understand which platforms you need, who your clients are, and what documentation you currently have. We tell you exactly what we need from you to get started.' },
              { num: '02', title: 'We build your account', body: 'We set up your account from scratch — company information, safety program upload, insurance certificates, WCB records, safety statistics, and every other required section — completed fully and correctly.' },
              { num: '03', title: 'You get approved', body: 'We track your account through the approval process and resolve any issues or requests for additional information until your account shows a full green approved status. You are ready to work.' },
              { num: '04', title: 'We manage it ongoing', body: 'After approval we monitor your account every month. When your insurance renews, we submit it. When WCB statements are due, we file them. When anything needs updating, we handle it. You just keep us in the loop.' },
            ].map((step) => (
              <div key={step.num} style={{ background: '#ffffff', borderRadius: '14px', padding: '28px 24px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-fraunces)', fontSize: '32px', fontWeight: 700, color: '#34D399', lineHeight: 1, marginBottom: '16px' }}>{step.num}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '10px', lineHeight: 1.3 }}>{step.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S4: ISNETWORLD ══ */}
      <section id="isnetworld" style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ paddingLeft: '16px', borderLeft: '3px solid #059669', marginBottom: '20px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', color: '#059669', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>ISNetworld</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            ISNetworld — Complete setup and ongoing management.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            ISNetworld is one of the most widely used contractor prequalification platforms in North America. It is required by major general contractors, municipalities, and resource companies across Canada. Getting your account fully approved — and keeping it that way — is what we do.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#0D1F3C', marginBottom: '16px' }}>What&apos;s included in the $1,500 setup:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {[
                  'Full account creation and company profile setup',
                  'Safety program and policy document uploads',
                  'Insurance certificate submission and verification',
                  'WCB clearance letter and premium rate submission',
                  'Safety statistics entry — TRIR, LTIR, and all required metrics',
                  'Company questionnaire completion — all sections',
                  'Employee count and trade classification setup',
                  'Safety manual and procedure uploads',
                  'Tracking through review and approval process',
                  'Resolution of any requests for additional information',
                  'Continued support until full green approved status is achieved',
                ].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', fontStyle: 'italic', lineHeight: 1.6 }}>
                Setup includes everything required to get your account from zero to fully approved. We do not consider the job done until you have your green light.
              </p>
            </div>
            <PlatformCard
              name="ISNetworld"
              setupPrice="$1,500"
              accentColor="#34D399"
              btnBg="#059669"
              mgmtItems={['Insurance certificate renewals submitted', 'WCB premium rate statements filed', 'Safety statistics updated as required', 'Document updates at no extra charge']}
            />
          </div>
          <div style={{ marginTop: '56px', width: '100%', height: '280px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(74,144,196,0.15)' }}>
            <Image src="/images/ISNetWorld compliance.webp" alt="Close-up of a laptop screen showing an ISNetworld-style contractor compliance dashboard with a green approved status badge" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ══ S5: AVETTA ══ */}
      <section id="avetta" style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ paddingLeft: '16px', borderLeft: '3px solid #4A90C4', marginBottom: '20px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.1)', border: '1px solid rgba(74,144,196,0.3)', color: '#4A90C4', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Avetta</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            Avetta — End-to-end compliance setup and management.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            Avetta is used by large enterprise clients across construction, oil and gas, utilities, and manufacturing to manage their contractor supply chains. If your client uses Avetta, your account needs to be complete and current — or you are not on their approved list.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#0D1F3C', marginBottom: '16px' }}>What&apos;s included in the $1,500 setup:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {[
                  'Full Avetta profile creation and company setup',
                  'All profile sections completed — no gaps',
                  'Safety program documentation upload',
                  'Insurance certificate and WCB submission',
                  'Safety performance data entry',
                  'Prequalification questionnaire completion',
                  'Compliance gap identification and resolution',
                  'Communication with Avetta support if issues arise',
                  'Tracking through review and approval stages',
                  'Continued support until full approved status achieved',
                ].map((item) => <CheckItem key={item} color="#4A90C4">{item}</CheckItem>)}
              </ul>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', fontStyle: 'italic', lineHeight: 1.6 }}>
                Every section of your Avetta profile completed correctly. We stay with it until you are fully approved.
              </p>
            </div>
            <PlatformCard
              name="Avetta"
              setupPrice="$1,500"
              accentColor="#7BB8E0"
              btnBg="#4A90C4"
              mgmtItems={['Insurance renewals submitted on time', 'WCB statements and clearance letters filed', 'Profile updates handled at no extra charge', 'Compliance status monitored monthly']}
            />
          </div>
          <div style={{ marginTop: '56px', width: '100%', height: '280px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(74,144,196,0.15)' }}>
            <Image src="/images/Contractor Reviewing Compliance.webp" alt="Construction contractor in hard hat reviewing a tablet showing contractor prequalification status — green approved indicators visible" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ══ S6: COMPLYWORKS ══ */}
      <section id="complyworks" style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ paddingLeft: '16px', borderLeft: '3px solid #163258', marginBottom: '20px' }}>
            <span style={{ display: 'inline-block', background: '#163258', border: '1px solid rgba(22,50,88,0.6)', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>ComplyWorks</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            ComplyWorks — Full compliance setup at the lowest price.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            ComplyWorks is a contractor management platform used across western Canada and beyond. If your clients require ComplyWorks compliance, COR Pathways gets your account fully set up and approved — completely — for a flat $400 setup fee.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#0D1F3C', marginBottom: '16px' }}>What&apos;s included in the $400 setup:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {[
                  'Full company profile creation and setup',
                  'All required sections completed',
                  'Insurance and WCB document submission',
                  'Safety program and policy uploads',
                  'Completion tracking until green approved status',
                  'Resolution of any outstanding requirements',
                ].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', fontStyle: 'italic', lineHeight: 1.6 }}>
                ComplyWorks has a simpler profile structure than ISNetworld or Avetta — which is reflected in the lower setup price. The commitment is the same: we do not stop until you are approved.
              </p>
            </div>
            <div style={{ background: '#0D1F3C', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(52,211,153,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
              <div style={{ height: '3px', background: 'linear-gradient(90deg, #34D399, #059669)' }} />
              <div style={{ padding: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '26px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>ComplyWorks</p>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '44px', fontWeight: 700, color: '#34D399', lineHeight: 1 }}>$400</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', marginBottom: '8px' }}>one-time setup fee</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontStyle: 'italic' }}>The most affordable setup of the three platforms</p>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }} />
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '28px', fontWeight: 700, color: '#ffffff' }}>$200</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginLeft: '6px' }}>/month</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', marginBottom: '8px' }}>ongoing account management</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
                  Or <strong style={{ color: '#34D399' }}>$300/month</strong> — manage up to 3 compliance accounts combined
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {['Insurance renewals submitted', 'WCB statements filed when due', 'Document updates at no extra charge', 'Monthly compliance monitoring'].map((item) => (
                    <CheckItem key={item} textColor="rgba(255,255,255,0.8)">{item}</CheckItem>
                  ))}
                </ul>
                <FilledBtn href="/contact" fullWidth>Get Started</FilledBtn>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '56px', width: '100%', height: '280px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(74,144,196,0.15)' }}>
            <Image src="/images/Safety Manager at Compliance Desk.webp" alt="Safety manager at a desk reviewing compliance documents on a computer — organized desk, professional office or site trailer setting" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ══ S7: PRICING SUMMARY ══ */}
      <section id="pricing" style={{ background: '#0D1F3C', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Pricing at a Glance</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
              Simple, flat pricing. No surprises.
            </h2>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', width: '30%' }}></th>
                  {['ISNetworld', 'Avetta', 'ComplyWorks'].map((col) => (
                    <th key={col} style={{ padding: '14px 20px', textAlign: 'center', color: '#ffffff', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Setup Fee', vals: ['$1,500', '$1,500', '$400'] },
                  { label: 'Monthly Management (1 account)', vals: ['$200/month', '$200/month', '$200/month'] },
                  { label: 'Monthly Management (up to 3 accounts)', vals: ['$300/month combined', '$300/month combined', '$300/month combined'] },
                  { label: 'Insurance renewals submitted', vals: ['✓', '✓', '✓'] },
                  { label: 'WCB statements filed', vals: ['✓', '✓', '✓'] },
                  { label: 'Document updates included', vals: ['✓', '✓', '✓'] },
                  { label: 'Support until fully approved', vals: ['✓', '✓', '✓'] },
                ].map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                    <td style={{ padding: '14px 20px', color: 'rgba(255,255,255,0.65)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{row.label}</td>
                    {row.vals.map((v) => (
                      <td key={v + row.label} style={{ padding: '14px 20px', textAlign: 'center', color: v === '✓' ? '#34D399' : '#ffffff', fontWeight: v === '✓' ? 700 : 500, borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: v === '✓' ? '18px' : '14px' }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Two callout boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#163258', borderRadius: '14px', padding: '28px', border: '1px solid rgba(74,144,196,0.2)' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>$300/month Bundle</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                Manage up to 3 compliance accounts — any combination of ISNetworld, Avetta, and ComplyWorks — for one flat monthly fee of $300.
              </p>
            </div>
            <div style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)', borderLeft: '4px solid #34D399', borderRadius: '14px', padding: '28px' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>What&apos;s always included</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                Every monthly management plan includes: insurance certificate submissions when they renew, WCB premium rate statement filings when they are due, document and profile updates at no extra charge, and monthly compliance status monitoring. You send us the paperwork when we ask — we handle everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S8: WHAT YOU NEED TO PROVIDE ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Your Role</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              Here is all we need from you.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, maxWidth: '660px', margin: '0 auto' }}>
              We handle the complexity. Your role is simple — connect us with the right people and send us documents when we ask for them.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: '🏢',
                title: 'Company Information',
                body: 'Your company name, address, WSIB or WCB account number, trade classifications, and employee count. Most of this you already know off the top of your head.',
              },
              {
                icon: '📄',
                title: 'Insurance Documents',
                body: 'Connect us with your insurance broker or forward us your certificate of insurance when it renews. We take it from there — submission, verification, and follow-up handled completely.',
              },
              {
                icon: '📊',
                title: 'WCB & Safety Records',
                body: 'Your WCB clearance letter and premium rate statement when they are issued. We file them in your compliance accounts as required. If you are not sure what you need, we will walk you through it on our first call.',
              },
            ].map((card) => (
              <div key={card.title} style={{ background: '#ffffff', borderRadius: '14px', padding: '28px 24px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '16px' }}>{card.icon}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '19px', fontWeight: 700, color: '#0D1F3C', marginBottom: '10px', lineHeight: 1.3 }}>{card.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.75 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S9: FAQ ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Common Questions</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2 }}>
              Questions about compliance management.
            </h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ S10: CTA ══ */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Stop losing contracts over compliance.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            Get in touch today and we will tell you exactly what it takes to get your ISNetworld, Avetta, or ComplyWorks account fully approved — and keep it that way.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            <FilledBtn href="/contact">Get Started Today</FilledBtn>
            <OutlineBtn href="/contact">Book a Free Consultation</OutlineBtn>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.03em' }}>
            Flat setup fee · No hidden charges · Any combination of platforms
          </p>
        </div>
      </section>
    </>
  )
}
