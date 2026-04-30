'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ── Constants ── */
const MAX_W   = '1160px'
const BG      = '#07090f'
const BG2     = '#0d1120'
const SURFACE = '#161d2e'
const BORDER  = 'rgba(201,168,76,0.15)'
const GOLD    = '#c9a84c'
const GOLD_LT = '#e2c47a'
const TEXT    = '#e8e4d9'
const MUTED   = '#9a9589'
const RED     = '#e05252'
const GREEN   = '#4caf82'

/* ── Shared UI Components ── */
function SectionLabel({ children }) {
  return (
    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '14px' }}>
      {children}
    </p>
  )
}

function GoldBtn({ href, children, large = false, external = false }) {
  const [hov, setHov] = useState(false)
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link href={href} {...props}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: hov ? GOLD_LT : GOLD,
        color: '#07090f',
        fontFamily: 'var(--font-dm-sans)', fontSize: large ? '17px' : '15px', fontWeight: 700,
        padding: large ? '18px 36px' : '13px 26px',
        borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap',
        transition: 'all 0.2s',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hov ? '0 6px 24px rgba(201,168,76,0.4)' : 'none',
      }}
    >
      {children}
    </Link>
  )
}

function GhostBtn({ href, children, large = false, external = false }) {
  const [hov, setHov] = useState(false)
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link href={href} {...props}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: 'transparent',
        color: hov ? GOLD_LT : TEXT,
        border: `2px solid ${hov ? GOLD : 'rgba(232,228,217,0.3)'}`,
        fontFamily: 'var(--font-dm-sans)', fontSize: large ? '17px' : '15px', fontWeight: 600,
        padding: large ? '18px 36px' : '13px 26px',
        borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap',
        transition: 'all 0.2s',
      }}
    >
      {children}
    </Link>
  )
}

function CheckRow({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: TEXT, lineHeight: 1.6 }}>
      <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
      <span>{children}</span>
    </div>
  )
}

function StatusRow({ label, badge, color = GREEN }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${BORDER}` }}>
      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, color, background: `${color}18`, border: `1px solid ${color}44`, padding: '3px 10px', borderRadius: '100px' }}>{badge}</span>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="cp-faq-q"
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', textAlign: 'left', gap: '16px' }}
      >
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{question}</span>
        <span style={{ color: GOLD, fontSize: '22px', flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'rotate(0)', minWidth: '28px', textAlign: 'center' }}>+</span>
      </button>
      {open && (
        <div className="cp-faq-a" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.8, paddingBottom: '22px' }}>
          {answer}
        </div>
      )}
    </div>
  )
}

/* ── CA Content Data ── */
const CA_PAIN = [
  { icon: '🚫', heading: '"We got pulled from the approved vendor list."', body: 'An expired insurance certificate or missed WCB submission quietly triggered a red status, and your GC removed you from the job before you even knew.' },
  { icon: '📋', heading: '"We can\'t figure out what they\'re asking for."', body: 'ISNetworld and Avetta requirements are complex, constantly changing, and written for corporate safety teams, not for a roofing company or electrical contractor trying to get back to work.' },
  { icon: '⏱️', heading: '"We\'ve been waiting weeks for approval."', body: "You submitted documents weeks ago and your status is still yellow. You don't know what's missing, and nobody at the portal answers your calls." },
  { icon: '💸', heading: '"We\'re paying for accounts we barely use."', body: "You set up ISNetworld three years ago for one client, but now you're registered on three portals across multiple clients, and managing them is a part-time job you didn't sign up for." },
  { icon: '📁', heading: '"We don\'t have a proper safety program to upload."', body: "The portal asks for a full health and safety program, written procedures, and hazard assessments, documents you've never needed to produce before, and have no idea how to write." },
  { icon: '🔁', heading: '"This happens every year, every renewal."', body: "Every January, the scramble starts again: new insurance certs, WCB clearance letters, updated stats. It's a recurring fire drill that costs you hours you don't have." },
]

const CA_FAQS = [
  { q: "What if I don't have a safety program or any documents yet?", a: "We build them from scratch. Most small contractors don't have formal written safety programs, that's completely normal. We write the policies, procedures, and hazard assessments your portals require and ensure everything meets the standard. You don't need to bring anything except your insurance certificate and WCB account number." },
  { q: 'How long does it take to get from setup to green status?', a: 'Most clients reach approved/green status within two to four weeks. Some portals review faster than others. ComplyWorks is typically the quickest. ISNetworld and Avetta can take two to three weeks depending on review queues. We track every submission and respond to review comments immediately to keep things moving.' },
  { q: 'What does monthly management actually include?', a: "Everything. When your insurance certificate renews, we submit the new one. When your WCB clearance letter expires, we chase it down and upload the new one. When annual safety statistics need to be entered, we enter them. When a document lapses and triggers a yellow status, we resolve it before it becomes a problem. You send us the updated paperwork when we ask for it, we handle everything else. No surprises, flat monthly rate." },
  { q: "We're already registered on ISNetworld but our account is a mess. Can you fix it?", a: "Yes, this is actually one of our most common engagements. We audit your existing account, identify every gap and expiry, and bring everything up to current standard. The setup fee still applies because we're essentially rebuilding the account, but we'll give you a realistic picture of the work needed during your free consultation call before you commit." },
  { q: 'Do I need all three portals, or just one?', a: "It depends entirely on who your clients are and what they require. During your free consultation, we'll review which portals your current and prospective clients use and recommend exactly what you need, nothing more. We'll never push you to set up a portal you don't actually need." },
  { q: 'Do you serve contractors outside Alberta?', a: 'Yes. We serve contractors across Canada including Alberta, BC, Saskatchewan, Ontario, Manitoba, and beyond. ISNetworld, Avetta, and ComplyWorks are national platforms, and we manage accounts regardless of where you are based. WCB requirements vary by province and we navigate all of them.' },
]

/* ── US Content Data ── */
const US_PAIN = [
  { icon: '🚫', heading: '"We just got removed from the approved vendor list."', body: 'An expired OSHA log, missed EMR submission, or lapsed certificate quietly flipped you to red, and your client removed you from active jobs before anyone called to warn you.' },
  { icon: '📋', heading: '"We can\'t figure out what they\'re even asking for."', body: 'ISNetworld requires TRIR, LTIR, hours worked, OSHA 300 logs, EMR rates, written programs, and more, all formatted to their standards. It is a full-time job for someone who does not know the system.' },
  { icon: '⏱️', heading: '"We\'ve been yellow for three months."', body: "You submitted everything you thought they needed. Your status is still yellow. You don't know what's missing, nobody at the portal is answering, and your GC is asking questions." },
  { icon: '�', heading: '"We don\'t know our EMR or TRIR numbers."', body: 'ISNetworld and Avetta require your Experience Modification Rate, Total Recordable Incident Rate, and hours worked, numbers most small contractors have never tracked before.' },
  { icon: '📁', heading: '"We don\'t have a written safety program."', body: "The portal requires a full written health and safety program, OSHA-aligned procedures, and hazard assessments. You've run a safe company for years. You just never wrote it down formally." },
  { icon: '🔁', heading: '"Every renewal is a fire drill."', body: "Every year, new OSHA logs, updated EMRs, fresh certificates of insurance, and you're scrambling to remember how you submitted them last time. It costs days you don't have." },
]

const US_FAQS = [
  { q: "What if we don't have a written safety program?", a: "We build it from scratch. Most small and mid-size contractors have never needed a formal written safety program, but ISNetworld and Avetta require one. We write OSHA-aligned policies, procedures, and hazard assessments tailored to your trade and operations. You don't need to bring anything except your COI, OSHA 300 logs, and insurance information." },
  { q: "We don't know our TRIR or EMR. Can you still help?", a: "Yes, this is extremely common. We calculate your Total Recordable Incident Rate, Lost Time Incident Rate, and hours worked from your records. For EMR, we work with what your insurance carrier provides. If you don't have clean records, we help you reconstruct them accurately and compliantly. We have done this for hundreds of contractors starting from scratch." },
  { q: 'How long does it take to get approved?', a: 'Most clients reach green or prequalified status within two to four weeks. ISNetworld and Avetta review timelines vary, but we submit complete, properly formatted packages that reduce back-and-forth. We monitor every submission and respond immediately to any review comments to keep things moving as fast as possible.' },
  { q: 'What does monthly management actually include?', a: "Everything. When your COI renews, we submit the updated certificate. When annual stats need to be entered, we enter them. When a document lapses and triggers a yellow status, we catch it and resolve it before it becomes a red. You send us updated paperwork when we ask for it, we handle every submission, tracking, and re-verification. Flat monthly rate, no surprises." },
  { q: "We're already on ISNetworld but can't get out of yellow. Can you fix it?", a: "Yes, this is one of our most common requests. We conduct a full audit of your account, identify every outstanding item, and resolve each gap systematically until you reach green. The setup fee applies because we are effectively rebuilding the account, but we will give you a complete picture of what is needed during your free consultation before you commit." },
  { q: 'Do you serve contractors across the entire US?', a: 'Yes. ISNetworld and Avetta are national platforms and we manage accounts for contractors in every US state. Our process is remote, we work via phone, email, and secure document sharing. We have worked with contractors in Texas, Colorado, Ohio, Louisiana, Arizona, Pennsylvania, and beyond. Location does not matter.' },
]

/* ── Page Component ── */
export default function CompliancePortalsPage() {
  const [region, setRegion] = useState(null) // null = loading, 'CA' or 'US'
  const [navScrolled, setNavScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    async function detect() {
      try {
        const res = await fetch('https://ipapi.co/json/')
        const data = await res.json()
        setRegion(data.country_code === 'US' ? 'US' : 'CA')
      } catch {
        setRegion('CA')
      }
    }
    detect()
  }, [])

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isCA = region !== 'US'
  const CALENDLY = 'https://calendly.com/blake-safetyconsultant/30min'
  const PHONE_DISPLAY = '780-832-5158'
  const PHONE_TEL = 'tel:+17808325158'

  if (region === null) {
    return (
      <div style={{ minHeight: '100vh', background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-dm-sans)', color: MUTED, fontSize: '16px' }}>Detecting your region…</p>
      </div>
    )
  }

  const pain = isCA ? CA_PAIN : US_PAIN
  const faqs = isCA ? CA_FAQS : US_FAQS

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .cp-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .cp-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .cp-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .cp-stats  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .cp-price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .cp-section-pad { padding: 96px 1.5rem; }
        .cp-hero-pad { padding: 80px 1.5rem 72px; }
        .cp-mobile-cta { display: none; }
        .cp-tags-scroll { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .cp-footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 48px; }

        /* Tablet */
        @media (max-width: 900px) {
          .cp-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
          .cp-grid-2 { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cp-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .cp-stats  { grid-template-columns: repeat(2, 1fr) !important; }
          .cp-price-grid { grid-template-columns: 1fr !important; }
          .cp-hero-btns { flex-direction: column !important; align-items: flex-start !important; }
          .cp-nav-links { display: none !important; }
          .cp-hero-img { display: none !important; }
          .cp-section-pad { padding: 72px 1.25rem !important; }
          .cp-mobile-cta { display: flex !important; align-items: center; gap: 12px; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .cp-grid-3 { grid-template-columns: 1fr !important; }
          .cp-grid-4 { grid-template-columns: 1fr !important; }
          .cp-stats  { grid-template-columns: repeat(2, 1fr) !important; }
          .cp-price-grid { grid-template-columns: 1fr !important; }
          .cp-section-pad { padding: 56px 1rem !important; }
          .cp-hero-pad { padding: 56px 1rem 48px !important; }
          .cp-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .cp-footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .cp-tags-scroll { gap: 10px !important; }
          .cp-mobile-cta { display: flex !important; }
          .cp-faq-q { font-size: 15px !important; padding: 18px 16px !important; }
          .cp-faq-a { font-size: 14px !important; padding: 0 16px 18px !important; }
          .cp-stat-num { font-size: 2rem !important; }
          .cp-price-card { padding: 32px 24px !important; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.7s ease both; animation-delay: 0.1s; }
        .fade-up-2 { animation: fadeUp 0.7s ease both; animation-delay: 0.25s; }
        .fade-up-3 { animation: fadeUp 0.7s ease both; animation-delay: 0.4s; }
        .fade-up-4 { animation: fadeUp 0.7s ease both; animation-delay: 0.55s; }
      `}</style>

      {/* ── TOP BANNER ── */}
      {isCA && (
        <div style={{ background: 'linear-gradient(90deg, #1a1200, #241a00, #1a1200)', borderBottom: '1px solid rgba(201,168,76,0.3)', padding: '10px 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: GOLD_LT }}>
            🇨🇦 Serving contractors across Alberta · BC · Saskatchewan · Ontario · Manitoba: ISNetworld, Avetta &amp; ComplyWorks experts
          </p>
        </div>
      )}
      {!isCA && (
        <div style={{ background: 'linear-gradient(90deg, #00111a, #001a25, #00111a)', borderBottom: '1px solid rgba(76,130,201,0.3)', padding: '10px 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#7aaef0' }}>
            🇺🇸 Serving contractors across the United States: ISNetworld &amp; Avetta compliance experts
          </p>
        </div>
      )}

      {/* ── NAVIGATION ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: navScrolled ? 'rgba(7,9,15,0.92)' : 'transparent',
        backdropFilter: navScrolled ? 'blur(12px)' : 'none',
        borderBottom: navScrolled ? `1px solid ${BORDER}` : '1px solid transparent',
        transition: 'all 0.3s', padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: TEXT }}>COR Pathways</span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, color: '#07090f', background: isCA ? GOLD : '#4c82c9', padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>
              {isCA ? 'Canada' : 'USA'}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="cp-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#services" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textDecoration: 'none' }}>Services</a>
            <a href="#pricing" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textDecoration: 'none' }}>Pricing</a>
            <a href="#faq" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textDecoration: 'none' }}>FAQ</a>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, color: isCA ? GOLD : '#4c82c9', border: `1px solid ${isCA ? GOLD : '#4c82c9'}`, padding: '4px 12px', borderRadius: '100px' }}>
              {isCA ? '🇨🇦 Canada' : '🇺🇸 United States'}
            </span>
            <a href={PHONE_TEL} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: TEXT, textDecoration: 'none' }}>📞 {PHONE_DISPLAY}</a>
            <GoldBtn href={CALENDLY} external>Book Free Consultation</GoldBtn>
          </div>

          {/* Mobile nav: phone + CTA only */}
          <div className="cp-mobile-cta" style={{ display: 'none' }}>
            <a href={PHONE_TEL} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: TEXT, textDecoration: 'none', whiteSpace: 'nowrap' }}>📞 {PHONE_DISPLAY}</a>
            <GoldBtn href={CALENDLY} external>Book Now</GoldBtn>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="cp-hero-pad" style={{ background: BG, padding: '100px 1.5rem 88px', position: 'relative', overflow: 'hidden' }}>
        {/* Hero background texture */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/hero background texture isn landing.webp" alt="" fill style={{ objectFit: 'cover', opacity: 0.12 }} priority />
        </div>
        {/* Grid texture */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        {/* Radial glow */}
        <div aria-hidden="true" style={{ position: 'absolute', zIndex: 1, top: '20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center' }}>
          <div>
          {/* Eyebrow */}
          <div className="fade-up-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${GOLD}14`, border: `1px solid ${BORDER}`, borderRadius: '100px', padding: '6px 16px', marginBottom: '32px' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: GOLD_LT }}>
              {isCA ? '🇨🇦 Canadian Contractors: ISNetworld · Avetta · ComplyWorks' : '🇺🇸 US Contractors: ISNetworld · Avetta'}
            </span>
          </div>

          {isCA ? (
            <h1 className="fade-up-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05, color: TEXT, marginBottom: '28px', maxWidth: '820px' }}>
              Stop Losing Contracts<br />
              Because Your Compliance<br />
              Portal is <em style={{ color: GOLD, fontStyle: 'italic' }}>Out of Date.</em>
            </h1>
          ) : (
            <h1 className="fade-up-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05, color: TEXT, marginBottom: '28px', maxWidth: '820px' }}>
              A Red Light on ISNetworld<br />
              or Avetta Means You Can't Work.<br />
              <em style={{ color: GOLD, fontStyle: 'italic' }}>We Fix That.</em>
            </h1>
          )}

          <p className="fade-up-3" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: MUTED, lineHeight: 1.75, marginBottom: '44px', maxWidth: '600px' }}>
            {isCA
              ? 'A yellow or red status on ISNetworld, Avetta, or ComplyWorks means you cannot work. COR Pathways handles your full setup and monthly management, so you stay green, stay approved, and keep winning bids.'
              : 'Compliance portals are built for corporate safety departments, not for contractors in the field. COR Pathways handles your full ISNetworld and Avetta setup and ongoing management, so you stay approved, stay on vendor lists, and keep winning contracts.'}
          </p>

          <div className="fade-up-4 cp-hero-btns" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <GoldBtn href={CALENDLY} large external>📅 Book a Free Consultation</GoldBtn>
            <GhostBtn href={PHONE_TEL} large>📞 Call {PHONE_DISPLAY}</GhostBtn>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {['Done-for-you setup', 'Monthly management included', isCA ? 'All provinces served' : 'Nationwide service', 'Green status guaranteed', 'No hidden fees'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED }}>
                <span style={{ color: GREEN, fontWeight: 700 }}>✓</span> {t}
              </div>
            ))}
          </div>
          </div>
          {/* Hero right column image — regional */}
          <div className="cp-hero-img" style={{ position: 'relative', width: '420px', height: '480px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
            <Image
              src={isCA ? '/images/Canadian Hero Regional Visual ISN Landing.webp' : '/images/USA Hero Regional Visual ISN Landing.webp'}
              alt={isCA ? 'Canadian contractor compliance portal management' : 'US contractor compliance portal management'}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── INDUSTRY TAGS BAR (US only) ── */}
      {!isCA && (
        <div style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: '16px 1rem', overflowX: 'auto' }}>
          <div className="cp-tags-scroll" style={{ maxWidth: MAX_W, margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED, whiteSpace: 'nowrap' }}>Industries:</span>
            {['⚡ Electrical', '🔧 Mechanical', '🛢️ Oil & Gas', '🏗️ General Contracting', '🏭 Industrial', '🔌 Utilities', '🛣️ Civil & Infrastructure', '🏠 Roofing & Specialty'].map(tag => (
              <span key={tag} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: MUTED, whiteSpace: 'nowrap' }}>{tag}</span>
            ))}
          </div>
        </div>
      )}

      {/* ── PAIN POINTS ── */}
      <section className="cp-section-pad" style={{ background: BG2, padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Pain section background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/Pain point section ISN landing.webp"
            alt=""
            fill
            loading="lazy"
            style={{ objectFit: 'cover', opacity: 0.08 }}
          />
        </div>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <SectionLabel>The Problem</SectionLabel>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            {isCA ? "Sound familiar? You're not alone." : 'If this is you, we need to talk.'}
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '660px', lineHeight: 1.7 }}>
            {isCA
              ? 'Contractor compliance portals are built for large corporations with dedicated safety departments, not for contractors running crews in the field. These are the problems we hear every week.'
              : 'ISNetworld and Avetta are the gatekeepers to major contracts in oil & gas, utilities, and industrial sectors. These are the problems contractors tell us about every single week.'}
          </p>
          <div className="cp-grid-3" style={{ background: BORDER }}>
            {pain.map(p => (
              <div key={p.heading} style={{ background: SURFACE, padding: '32px 28px' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '16px', color: RED, marginBottom: '12px', lineHeight: 1.4 }}>{p.heading}</h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="cp-section-pad" style={{ background: BG, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel>Our Services</SectionLabel>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            {isCA ? 'One team. All three portals.' : 'We handle the portals. You handle the work.'}
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '80px', maxWidth: '660px', lineHeight: 1.7 }}>
            {isCA
              ? 'We handle the portals so you can handle your business. Full setup from scratch, then ongoing management every month, done for you, always current, always green.'
              : 'Full setup from scratch, tracked to green status, then managed every month. You send us your documents when we ask. We handle everything else.'}
          </p>

          {/* ISNetworld */}
          <div className="cp-grid-2" style={{ marginBottom: '80px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${GOLD}14`, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '6px 14px', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, color: GOLD }}>🏗️ ISNetworld</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.9rem', color: TEXT, marginBottom: '16px', lineHeight: 1.15 }}>
                ISNetworld Setup &amp; Monthly Management
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.8, marginBottom: '24px' }}>
                {isCA
                  ? 'ISNetworld (ISN) is the most widely required compliance portal in the oil & gas, construction, and utilities sectors across Canada. Requirements are rigorous: safety statistics, written programs, certificates, WCB clearances, and annual renewals. One missed item triggers a red light that can pull you from active contracts.'
                  : 'ISNetworld (ISN) is the dominant contractor compliance platform in oil & gas, petrochemical, utilities, and industrial construction across the US. Requirements are rigorous and exacting: OSHA 300 logs, EMR rates, written safety programs, certificates of insurance, and annual stat entries. One lapse means a red light and potential removal from client vendor lists. We know the system inside and out.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {(isCA
                  ? ['Full account creation and configuration from scratch', 'Safety program, policy, and procedure uploads', 'Insurance and WCB certificate submission and tracking', 'Safety statistics entry (TRIR, LTIR, hours worked)', 'Approval tracking and gap resolution until green status', 'Monthly renewals, document updates, and re-submissions', "Direct liaison with your client's ISN requirements"]
                  : ['Full ISNetworld account creation and configuration', 'Safety program, policy, and procedure build-out and upload', 'OSHA 300 log entry and safety statistics (TRIR, LTIR, hours worked)', 'EMR documentation and submission', 'Certificate of insurance and liability submission', 'Approval tracking and gap resolution until green status', 'Monthly management: renewals, re-submissions, document updates']
                ).map(f => <CheckRow key={f}>{f}</CheckRow>)}
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: GOLD, fontWeight: 600, marginBottom: '20px' }}>$1,500 full setup · then $200/mo management</p>
              <GoldBtn href={CALENDLY} external>Get Started with ISNetworld →</GoldBtn>
            </div>
            {/* ISNetworld visual — image on CA, status card on US */}
            <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image src="/images/ISNetWorld compliance.webp" alt="ISNetworld compliance dashboard" fill loading="lazy" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '28px' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: '20px' }}>ISNetworld Account Status</p>
              <StatusRow label="Safety Program Uploaded" badge="✓ Complete" />
              <StatusRow label="Insurance Certificate" badge="✓ Current" />
              <StatusRow label={isCA ? 'WCB Clearance Letter' : 'OSHA 300 Log'} badge={isCA ? '✓ Submitted' : '✓ Entered'} />
              <StatusRow label={isCA ? 'Safety Statistics (TRIR)' : 'TRIR / LTIR Stats'} badge="✓ Submitted" />
              <StatusRow label={isCA ? 'Written Procedures' : 'EMR Rate'} badge={isCA ? '✓ Uploaded' : '✓ Documented'} />
              <StatusRow label="Overall Compliance Status" badge="🟢 APPROVED" />
              <div style={{ marginTop: '20px', background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: '8px', padding: '14px 16px' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: GREEN }}>✓ You are approved to work. Next renewal managed automatically.</p>
              </div>
              </div>
            </div>
          </div>

          {/* Avetta — flipped layout */}
          <div className="cp-grid-2" style={{ marginBottom: isCA ? '80px' : '0', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${GOLD}14`, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '6px 14px', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, color: GOLD }}>🛡️ Avetta</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.9rem', color: TEXT, marginBottom: '16px', lineHeight: 1.15 }}>
                Avetta Setup &amp; Monthly Management
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.8, marginBottom: '24px' }}>
                {isCA
                  ? "Avetta is increasingly required by large general contractors, utilities, and municipalities. Like ISNetworld, a failed or lapsed Avetta profile can remove you from bidder lists overnight. We navigate the scoring system, document requirements, and prequalification questionnaires so you score high and stay approved."
                  : 'Avetta is used by hundreds of large operators, utilities, municipalities, and general contractors across the US to prequalify their contractor base. A failed or outdated Avetta profile can remove you from bidder consideration lists before you even submit a quote. We navigate the scoring system, prequalification questionnaires, and document requirements so you score high and stay approved.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {(isCA
                  ? ['Full Avetta profile setup and company configuration', 'Document, certificate, and safety program uploads', 'Insurance and WCB verification management', 'Prequalification questionnaire completion', 'Compliance gap identification and resolution', 'Score optimization: we know what Avetta weighs heavily', 'Ongoing monthly management and renewal tracking']
                  : ['Full Avetta profile creation and company setup', 'Written safety program submission and document uploads', 'Insurance certificate and OSHA documentation', 'EMR and incident rate submission', 'Prequalification questionnaire completion', 'Score optimization: we know what Avetta weights heavily', 'Ongoing monthly management, renewals, and re-submissions']
                ).map(f => <CheckRow key={f}>{f}</CheckRow>)}
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: GOLD, fontWeight: 600, marginBottom: '20px' }}>$1,500 full setup · then $200/mo management</p>
              <GoldBtn href={CALENDLY} external>Get Started with Avetta →</GoldBtn>
            </div>
            {/* Avetta visual card */}
            <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', overflow: 'hidden', direction: 'ltr' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image src="/images/Avetta Service Section ISN Landing.webp" alt="Avetta compliance management" fill loading="lazy" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '28px' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: '16px' }}>Avetta Compliance Score</p>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED }}>Overall Score</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, color: GREEN }}>{isCA ? '94/100' : '96/100'}</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: isCA ? '94%' : '96%', background: GREEN, borderRadius: '100px' }} />
                </div>
              </div>
              <StatusRow label="Safety Program" badge="✓ Verified" />
              <StatusRow label="Insurance Verification" badge="✓ Verified" />
              <StatusRow label={isCA ? 'WCB Standing' : 'OSHA Recordables'} badge={isCA ? '✓ Good Standing' : '✓ Entered'} />
              <StatusRow label={isCA ? 'Prequalification' : 'EMR Documentation'} badge={isCA ? '✓ Complete' : '✓ Submitted'} />
              {!isCA && <StatusRow label="Prequalification Status" badge="🟢 PREQUALIFIED" />}
              {isCA && <StatusRow label="Profile Status" badge="🟢 PREQUALIFIED" />}
              </div>
            </div>
          </div>

          {/* ComplyWorks — CA only */}
          {isCA && (
            <div className="cp-grid-2">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${GOLD}14`, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '6px 14px', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, color: GOLD }}>✅ ComplyWorks</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.9rem', color: TEXT, marginBottom: '16px', lineHeight: 1.15 }}>
                  ComplyWorks Setup &amp; Monthly Management
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.8, marginBottom: '24px' }}>
                  ComplyWorks is widely used in Alberta, BC, and Saskatchewan, especially by oil &amp; gas operators and municipal clients. It's a simpler platform than ISNetworld but still requires accurate submissions. We handle the full setup quickly and keep it maintained, or bundle it with your other portal management for maximum savings.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {['Full company profile creation and setup', 'All required document and certificate uploads', 'Insurance and WCB submission', 'Completed to green/approved status', 'Ongoing monthly management included', 'Best value when bundled with ISN or Avetta management'].map(f => <CheckRow key={f}>{f}</CheckRow>)}
                </div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: GOLD, fontWeight: 600, marginBottom: '20px' }}>$400 full setup · included in 3-account bundle</p>
                <GoldBtn href={CALENDLY} external>Get Started with ComplyWorks →</GoldBtn>
              </div>
              {/* ComplyWorks visual card */}
              <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image src="/images/Comply Works section support isn landing.webp" alt="ComplyWorks compliance management" fill loading="lazy" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: '20px' }}>ComplyWorks Account: Quick View</p>
                <StatusRow label="Company Profile" badge="✓ Complete" />
                <StatusRow label="Safety Documents" badge="✓ Uploaded" />
                <StatusRow label="Insurance Certificate" badge="✓ Current" />
                <StatusRow label="WCB Certificate" badge="✓ Submitted" />
                <StatusRow label="Account Status" badge="🟢 APPROVED" />
                <div style={{ marginTop: '20px', background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: '8px', padding: '14px 16px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: GOLD_LT }}>
                    💡 Bundle tip: Add ComplyWorks to your ISNetworld or Avetta management for just $100/mo more.
                  </p>
                </div>
                </div>
              </div>
            </div>
          )}

          {/* US Industrial crew photo */}
          {!isCA && (
            <div style={{ marginTop: '64px', position: 'relative', width: '100%', height: '320px', borderRadius: '16px', overflow: 'hidden' }}>
              <Image src="/images/USA Industrial Crew Photo ISN Landing.webp" alt="US industrial contractor crew" fill loading="lazy" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,9,15,0.7) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '32px', left: '40px' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.6rem', color: TEXT, lineHeight: 1.2 }}>Trusted by contractors<br />across all 50 states.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="cp-section-pad" style={{ background: BG2, padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        {/* How it works background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/How it works section ISN landing.webp"
            alt=""
            fill
            loading="lazy"
            style={{ objectFit: 'cover', opacity: 0.07 }}
          />
        </div>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <SectionLabel>How It Works</SectionLabel>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            From red to green in weeks, <em style={{ color: GOLD, fontStyle: 'italic' }}>not months.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '600px', lineHeight: 1.7 }}>
            {isCA
              ? 'Our process is built to move fast. Most clients reach green status within two to four weeks of our first call.'
              : "We've done this hundreds of times. Our intake process is efficient, our submissions are clean, and we track everything to approval."}
          </p>
          <div className="cp-grid-4" style={{ background: BORDER, marginBottom: '2px' }}>
            {(isCA ? [
              { num: '01', title: 'Free Consultation Call', body: 'We audit your current portal status, identify every gap, and tell you exactly what it will take to get approved. No jargon, no obligation.' },
              { num: '02', title: 'We Gather Your Documents', body: 'We send you a simple checklist. You provide your insurance certificates, WCB account number, and any safety documents you have. We handle the rest.' },
              { num: '03', title: 'We Build & Submit Everything', body: 'Our team builds or completes your safety program, uploads all documents, enters your stats, and submits everything to the portal, properly formatted and compliant.' },
              { num: '04', title: "Green Status: You're Approved", body: 'We track your submission and resolve any review comments until you receive full approval. Then we manage your account monthly so you never fall out again.' },
            ] : [
              { num: '01', title: 'Free Consultation Call', body: 'We audit your current portal status, identify every gap, and give you a plain-English picture of exactly what it will take to get approved. No obligation.' },
              { num: '02', title: 'We Gather Your Info', body: "We send you a clear checklist. You provide your insurance certificate, OSHA logs, hours worked, and any safety documents you have. We'll tell you exactly what's needed." },
              { num: '03', title: 'We Build & Submit Everything', body: 'We build your safety program if needed, calculate your incident rates, enter your stats, and submit all documents, properly formatted for portal approval.' },
              { num: '04', title: "Green. You're Back to Work.", body: 'We track your submission, respond to review comments immediately, and stay on it until you are fully approved. Then we manage your account monthly so you never lapse again.' },
            ]).map(s => (
              <div key={s.num} style={{ background: SURFACE, padding: '32px 28px' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '3rem', color: `${GOLD}30`, lineHeight: 1, marginBottom: '16px' }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '16px', color: TEXT, marginBottom: '12px', lineHeight: 1.35 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
          </div>
          {/* Stats */}
          <div className="cp-stats" style={{ background: BORDER }}>
            {[
              { num: '2–4', label: 'Weeks to green status' },
              { num: '100%', label: 'Done-for-you setup' },
              { num: isCA ? '3' : '2', label: isCA ? 'Portals managed' : 'Portals managed' },
              { num: '$0', label: 'Hidden fees or surprises' },
            ].map(s => (
              <div key={s.num} style={{ background: SURFACE, padding: '32px 20px', textAlign: 'center' }}>
                <div className="cp-stat-num" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '2.6rem', color: GOLD, lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="cp-section-pad" style={{ background: BG, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel>Transparent Pricing</SectionLabel>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            {isCA ? <>Flat fees. <em style={{ color: GOLD, fontStyle: 'italic' }}>No surprises.</em></> : <>Flat fees. <em style={{ color: GOLD, fontStyle: 'italic' }}>No hourly billing.</em></>}
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '600px', lineHeight: 1.7 }}>
            {isCA
              ? 'Setup pricing is one-time. Monthly management is flat-rate. No hourly billing, no hidden charges, no surprise invoices.'
              : 'One-time setup fee to get you to green. Flat monthly rate to keep you there. No surprises.'}
          </p>
          <div className="cp-price-grid">
            {/* Single Portal */}
            <div className="cp-price-card" style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED, marginBottom: '12px' }}>Single Portal</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '3rem', color: TEXT }}>$1,500</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, marginBottom: '28px' }}>one-time setup: ISNetworld or Avetta</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
                {['Full portal setup from scratch', 'Safety program build or upload', isCA ? 'Insurance & WCB submission' : 'Insurance & OSHA submission', 'Approval tracking to green status'].map(f => <CheckRow key={f}>{f}</CheckRow>)}
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '16px', marginTop: '8px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: GOLD }}>$200/month ongoing management</p>
                </div>
              </div>
              <GoldBtn href={CALENDLY} external fullWidth>Book a Consultation</GoldBtn>
            </div>

            {/* All Portals Featured */}
            <div className="cp-price-card" style={{ background: SURFACE, border: `2px solid ${GOLD}`, borderRadius: '16px', padding: '40px 32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: GOLD, color: '#07090f', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '5px 18px', borderRadius: '100px', whiteSpace: 'nowrap' }}>
                {isCA ? 'Most Popular' : 'Best Value'}
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: '12px' }}>{isCA ? 'All Three Portals' : 'Both Portals'}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '3rem', color: TEXT }}>{isCA ? '$3,400' : '$2,800'}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, marginBottom: '28px' }}>
                {isCA ? 'one-time setup: ISN + Avetta + ComplyWorks' : 'one-time setup: ISNetworld + Avetta'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
                {(isCA
                  ? ['All three portals set up simultaneously', 'Single safety program builds all three', 'Maximum savings vs. individual setup', 'All portals managed monthly together']
                  : ['Both portals set up simultaneously', 'One safety program serves both portals', 'Maximum savings vs. individual setup', 'Both accounts managed monthly', 'Single point of contact']
                ).map(f => <CheckRow key={f}>{f}</CheckRow>)}
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '16px', marginTop: '8px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: GOLD }}>{isCA ? '$300/month for all three accounts' : '$300/month for both accounts'}</p>
                </div>
              </div>
              <GoldBtn href={CALENDLY} external>Book a Consultation</GoldBtn>
            </div>

            {/* ComplyWorks / Single Add-on */}
            <div className="cp-price-card" style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED, marginBottom: '12px' }}>
                {isCA ? 'ComplyWorks Only' : 'Avetta'}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '3rem', color: TEXT }}>{isCA ? '$400' : '$1,500'}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, marginBottom: '28px' }}>
                {isCA ? 'one-time setup' : 'one-time full setup'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
                {(isCA
                  ? ['Full ComplyWorks profile setup', 'All document and certificate uploads', 'Completed to approved status', 'Ongoing management available']
                  : ['Full Avetta profile setup', 'All document uploads and safety program', 'Prequalification questionnaire completed', 'Score optimization included', 'Completed to prequalified status']
                ).map(f => <CheckRow key={f}>{f}</CheckRow>)}
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '16px', marginTop: '8px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: GOLD }}>{isCA ? '$100/month ongoing (or bundle)' : '$200/month ongoing'}</p>
                </div>
              </div>
              <GoldBtn href={CALENDLY} external>Book a Consultation</GoldBtn>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="cp-section-pad" style={{ background: BG2, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <SectionLabel>Common Questions</SectionLabel>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            Questions we hear every week.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '48px', lineHeight: 1.7 }}>
            If you're wondering about any of these, you're not alone.
          </p>
          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {faqs.map(f => <FaqItem key={f.q} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cp-section-pad" style={{ background: BG, padding: '96px 1.5rem', borderTop: `1px solid ${BORDER}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/Final CTA Section Background ISN Landing.webp" alt="" fill loading="lazy" style={{ objectFit: 'cover', opacity: 0.1 }} />
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <SectionLabel>Get Started Today</SectionLabel>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: TEXT, marginBottom: '20px', lineHeight: 1.1 }}>
            {isCA
              ? <>Ready to stay green and <em style={{ color: GOLD, fontStyle: 'italic' }}>keep working?</em></>
              : <>Ready to get green and <em style={{ color: GOLD, fontStyle: 'italic' }}>get back to work?</em></>}
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: MUTED, lineHeight: 1.75, marginBottom: '40px', maxWidth: '580px', margin: '0 auto 40px' }}>
            {isCA
              ? "Book a free 30-minute consultation. We'll review your current portal status, tell you exactly what's needed, and give you a clear plan, with no obligation and no jargon."
              : "Book a free 30-minute consultation. We'll review your current portal status, identify every gap, and give you a clear plan. No obligation. No jargon."}
          </p>
          <div className="cp-hero-btns" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
            <GoldBtn href={CALENDLY} large external>📅 Book a Free Consultation</GoldBtn>
            <GhostBtn href={PHONE_TEL} large>📞 Call {PHONE_DISPLAY}</GhostBtn>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
            {['No obligation', 'Free 30-minute call', 'Same-week start available', isCA ? 'All provinces served' : 'Nationwide service'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED }}>
                <span style={{ color: GREEN, fontWeight: 700 }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: BG2, borderTop: `1px solid ${BORDER}`, padding: 'clamp(40px, 8vw, 64px) 1rem 32px' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div className="cp-footer-grid" style={{ marginBottom: '48px' }}>
            {/* Brand */}
            <div>
              <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: TEXT, marginBottom: '12px' }}>COR Pathways</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75, marginBottom: '20px' }}>
                {isCA
                  ? 'ISNetworld, Avetta, and ComplyWorks setup and management for Canadian contractors. We keep you green so you keep working.'
                  : 'ISNetworld and Avetta setup and management for US contractors. We keep you green and on approved vendor lists, coast to coast.'}
              </p>
              {isCA ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Alberta', 'BC', 'Saskatchewan', 'Ontario', 'Manitoba'].map(p => (
                    <span key={p} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: GOLD, border: `1px solid ${GOLD}40`, padding: '3px 10px', borderRadius: '100px' }}>{p}</span>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Texas', 'Colorado', 'Louisiana', 'Ohio', 'Arizona', 'All 50 States'].map(p => (
                    <span key={p} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#4c82c9', border: '1px solid rgba(76,130,201,0.3)', padding: '3px 10px', borderRadius: '100px' }}>{p}</span>
                  ))}
                </div>
              )}
            </div>
            {/* Services */}
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '16px' }}>Services</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {(isCA
                  ? ['ISNetworld Setup & Management', 'Avetta Setup & Management', 'ComplyWorks Setup & Management', 'COR Certification Consulting', 'H&S Program Management']
                  : ['ISNetworld Setup & Management', 'Avetta Setup & Management', 'Safety Program Development', 'OSHA Compliance Documentation', 'Monthly Account Management']
                ).map(s => (
                  <span key={s} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED }}>{s}</span>
                ))}
              </div>
            </div>
            {/* Company */}
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '16px' }}>Company</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'About', href: '//about' },
                  { label: 'Pricing', href: '//pricing' },
                  { label: 'Contact', href: '//contact' },
                  { label: 'Book a Consultation', href: CALENDLY },
                ].map(l => (
                  <Link key={l.label} href={l.href} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textDecoration: 'none' }}>{l.label}</Link>
                ))}
                <a href={PHONE_TEL} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textDecoration: 'none' }}>📞 {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED }}>© 2026 COR Pathways. All rights reserved.</p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED }}>
              {isCA ? 'Alberta · BC · Saskatchewan · Ontario · Manitoba' : 'Serving contractors nationwide across all 50 states.'}
            </p>
          </div>
        </div>
      </footer>

      {/* ── FAQ SCHEMA (JSON-LD) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          }),
        }}
      />
    </>
  )
}
