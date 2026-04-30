'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const MAX_W = '1200px'

const NAVY       = '#0D1F3C'
const NAVY_CARD  = '#132238'
const NAVY_LIGHT = '#1C3252'
const ORANGE     = '#FF6B00'
const ORANGE_DK  = '#e05e00'
const BLUE       = '#1E90FF'
const GREEN      = '#22C55E'
const RED        = '#EF4444'
const TEXT       = '#F0F4FF'
const MUTED      = '#8A9BBF'
const BORDER     = 'rgba(255,255,255,0.08)'

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────── */
function SectionLabel({ children, color = ORANGE }) {
  return (
    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color, marginBottom: '14px' }}>
      {children}
    </p>
  )
}

function OrangeBtn({ href, children, large = false, pulse = false }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      href={href}
      data-event="cta_click"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: hov ? ORANGE_DK : ORANGE,
        color: '#fff',
        fontFamily: 'var(--font-dm-sans)', fontSize: large ? '17px' : '15px', fontWeight: 600,
        padding: large ? '18px 36px' : '13px 26px',
        borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap',
        transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hov ? '0 6px 24px rgba(255,107,0,0.45)' : pulse ? '0 0 0 0 rgba(255,107,0,0.5)' : 'none',
        animation: pulse ? 'ctaPulse 6s ease-out infinite' : 'none',
      }}
    >
      {children}
    </Link>
  )
}

function GhostBtn({ href, children, large = false }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: hov ? 'rgba(255,255,255,0.08)' : 'transparent',
        color: TEXT,
        border: `2px solid ${hov ? 'rgba(240,244,255,0.6)' : 'rgba(240,244,255,0.3)'}`,
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

function CheckLi({ children }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: TEXT, lineHeight: 1.6 }}>
      <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
      {children}
    </li>
  )
}

function CrossLi({ children }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.6 }}>
      <span style={{ color: RED, fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✗</span>
      {children}
    </li>
  )
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold, rootMargin: '0px 0px -40px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ─────────────────────────────────────────────
   COUNT-UP HOOK
───────────────────────────────────────────── */
function useCountUp(target, duration = 1800) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setCount(Math.floor(eased * target))
        if (p < 1) requestAnimationFrame(tick)
        else setCount(target)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])
  return [ref, count]
}

/* ─────────────────────────────────────────────
   PAIN CARD
───────────────────────────────────────────── */
function PainCard({ platform, headline, body, quote, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <article
      ref={ref}
      style={{
        background: NAVY, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '36px 32px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div style={{ width: '40px', height: '40px', marginBottom: '16px' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <span style={{ display: 'inline-block', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, background: NAVY_LIGHT, border: `1px solid ${BORDER}`, borderRadius: '4px', padding: '4px 10px', marginBottom: '16px' }}>
        {platform}
      </span>
      <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', fontWeight: 700, color: TEXT, marginBottom: '12px', lineHeight: 1.3 }}>{headline}</h3>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75, marginBottom: '16px' }}>{body}</p>
      <blockquote style={{ fontStyle: 'italic', fontSize: '13px', color: MUTED, borderLeft: `3px solid ${RED}`, paddingLeft: '14px', lineHeight: 1.6 }}>{quote}</blockquote>
    </article>
  )
}

/* ─────────────────────────────────────────────
   TIMELINE STEP
───────────────────────────────────────────── */
function TimelineStep({ num, icon, title, body, last = false, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      style={{
        display: 'grid', gridTemplateColumns: '60px 2px 1fr', gap: '0 24px',
        paddingBottom: last ? 0 : '48px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {/* Icon circle */}
      <div style={{ width: '60px', height: '60px', background: NAVY_CARD, border: `1px solid ${BORDER}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, gridRow: 1 }}>
        <Image src={`/images/${icon}`} alt="" width={28} height={28} />
      </div>
      {/* Connector */}
      {!last && (
        <div style={{ gridColumn: 2, gridRow: '1 / 3', width: '2px', background: `linear-gradient(to bottom, ${BLUE}, transparent)`, margin: '60px auto 0', alignSelf: 'stretch' }} />
      )}
      {/* Content */}
      <div style={{ gridColumn: 3, gridRow: 1, paddingTop: '8px', paddingBottom: '48px' }}>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, color: ORANGE, letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>0{num}</span>
        <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 700, color: TEXT, marginBottom: '10px', lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75 }}>{body}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   TESTIMONIAL CARD
───────────────────────────────────────────── */
function TestimonialCard({ initials, quote, name, company, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <article
      ref={ref}
      style={{
        background: NAVY_CARD, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '36px 32px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div style={{ color: ORANGE, fontSize: '18px', letterSpacing: '3px', marginBottom: '16px' }}>★★★★★</div>
      <blockquote style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: TEXT, fontStyle: 'italic', lineHeight: 1.75, marginBottom: '24px' }}>"{quote}"</blockquote>
      <footer style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: NAVY_LIGHT, border: `2px solid ${ORANGE}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '13px', color: ORANGE, flexShrink: 0 }}>{initials}</div>
        <div>
          <strong style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: TEXT, display: 'block' }}>{name}</strong>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: MUTED }}>{company}</span>
        </div>
      </footer>
    </article>
  )
}

/* ─────────────────────────────────────────────
   PRICING CARD
───────────────────────────────────────────── */
function PricingCard({ tag, badge, badgeGreen, title, priceLabel, priceUnit, features, noFeatures, ctaLabel, ctaHref, highlighted, delay = 0 }) {
  const [ref, visible] = useReveal()
  const [hov, setHov] = useState(false)
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: highlighted ? NAVY_CARD : NAVY,
        border: `1px solid ${highlighted ? (badgeGreen ? GREEN : ORANGE) : BORDER}`,
        boxShadow: highlighted ? `0 0 0 1px ${badgeGreen ? GREEN : ORANGE}, 0 8px 32px rgba(0,0,0,0.4)` : 'none',
        borderRadius: '16px', padding: '40px 32px', position: 'relative',
        transform: hov ? 'scale(1.02)' : 'scale(1)',
        transition: `transform 0.25s ease, opacity 0.6s ease ${delay}ms, box-shadow 0.25s ease`,
        opacity: visible ? 1 : 0,
      }}
    >
      {badge && (
        <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: badgeGreen ? GREEN : ORANGE, color: badgeGreen ? NAVY : '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', padding: '5px 16px', borderRadius: '100px', whiteSpace: 'nowrap' }}>
          {badge}
        </div>
      )}
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: '10px' }}>{tag}</p>
      <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '22px', fontWeight: 700, color: TEXT, marginBottom: '20px', lineHeight: 1.2 }}>{title}</h3>
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: '18px 0', marginBottom: '24px' }}>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>{priceLabel}</span>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '26px', fontWeight: 700, color: ORANGE }}>Custom Quote</span>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, display: 'block', marginTop: '2px' }}>{priceUnit}</span>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
        {features.map((f) => <CheckLi key={f}>{f}</CheckLi>)}
        {(noFeatures || []).map((f) => <CrossLi key={f}>{f}</CrossLi>)}
      </ul>
      <OrangeBtn href={ctaHref || '#contact-form'}>{ctaLabel || 'Get a Quote →'}</OrangeBtn>
    </div>
  )
}

/* ─────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────── */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: open ? ORANGE : TEXT, transition: 'color 0.2s' }}
      >
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 600, lineHeight: 1.4 }}>{question}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: 'inherit' }}>
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div style={{ paddingBottom: '24px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.8 }}>{answer}</p>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   PLATFORM TAB PANEL
───────────────────────────────────────────── */
function PlatformPanel({ whatItIs, whyHard, requirements, howWeHandle, ctaLabel }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: BLUE, marginBottom: '10px' }}>WHAT IT IS</p>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.8, marginBottom: '28px' }}>{whatItIs}</p>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: BLUE, marginBottom: '10px' }}>WHY IT'S HARD</p>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.8 }}>{whyHard}</p>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: BLUE, marginBottom: '10px' }}>WHAT YOU NEED TO COMPLETE</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {requirements.map((r) => (
            <li key={r} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, paddingLeft: '18px', position: 'relative', lineHeight: 1.5 }}>
              <span style={{ position: 'absolute', left: 0, color: BLUE, fontWeight: 700 }}>›</span>
              {r}
            </li>
          ))}
        </ul>
        <div style={{ background: NAVY, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ORANGE}`, borderRadius: '8px', padding: '24px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: ORANGE, marginBottom: '10px' }}>HOW CORPATHWAY HANDLES IT</p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.8, marginBottom: '16px' }}>{howWeHandle}</p>
          <OrangeBtn href="#contact-form">{ctaLabel} →</OrangeBtn>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', company: '', email: '', phone: '', platforms: '', situation: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // Push GTM event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'form_submission', form_name: 'compliance_assessment', platform_selected: form.platforms })
    }
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', background: NAVY_LIGHT, border: `1px solid ${BORDER}`, borderRadius: '8px',
    padding: '14px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: TEXT,
    outline: 'none', appearance: 'none', WebkitAppearance: 'none',
  }

  const labelStyle = {
    fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: MUTED,
    display: 'block', marginBottom: '6px', letterSpacing: '0.04em',
  }

  if (submitted) {
    return (
      <div style={{ background: NAVY_CARD, border: `1px solid ${GREEN}`, borderRadius: '16px', padding: '64px 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
        </svg>
        <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '24px', fontWeight: 700, color: TEXT }}>We Got Your Request!</h3>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.7, maxWidth: '440px' }}>A CorPathway compliance specialist will reach out within 2 business hours to schedule your free assessment.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: NAVY_CARD, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '48px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label htmlFor="gc-firstName" style={labelStyle}>First Name *</label>
          <input id="gc-firstName" name="firstName" type="text" required placeholder="First Name" value={form.firstName} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="gc-lastName" style={labelStyle}>Last Name *</label>
          <input id="gc-lastName" name="lastName" type="text" required placeholder="Last Name" value={form.lastName} onChange={handleChange} style={inputStyle} />
        </div>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="gc-company" style={labelStyle}>Company Name *</label>
        <input id="gc-company" name="company" type="text" required placeholder="Company Name" value={form.company} onChange={handleChange} style={inputStyle} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label htmlFor="gc-email" style={labelStyle}>Email Address *</label>
          <input id="gc-email" name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="gc-phone" style={labelStyle}>Phone Number</label>
          <input id="gc-phone" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} style={inputStyle} />
        </div>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="gc-platforms" style={labelStyle}>Which platforms do you need? *</label>
        <select id="gc-platforms" name="platforms" required value={form.platforms} onChange={handleChange} style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A9BBF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '44px' }}>
          <option value="" disabled>Select platforms...</option>
          <option value="isnetworld">ISNetworld</option>
          <option value="avetta">Avetta</option>
          <option value="complyworks">ComplyWorks</option>
          <option value="all-three">All Three</option>
          <option value="not-sure">Not Sure</option>
        </select>
      </div>
      <div style={{ marginBottom: '28px' }}>
        <label htmlFor="gc-situation" style={labelStyle}>What best describes your situation? *</label>
        <select id="gc-situation" name="situation" required value={form.situation} onChange={handleChange} style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A9BBF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '44px' }}>
          <option value="" disabled>Select your situation...</option>
          <option value="new-setup">New setup</option>
          <option value="existing-fix">Existing account needs fixing</option>
          <option value="annual-maintenance">Annual maintenance</option>
          <option value="overdue-update">Annual update overdue</option>
        </select>
      </div>
      <button
        type="submit"
        data-event="form_submit_click"
        style={{ width: '100%', background: ORANGE, color: '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '17px', fontWeight: 600, padding: '18px 36px', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background = ORANGE_DK}
        onMouseLeave={e => e.currentTarget.style.background = ORANGE}
      >
        Get My Free Compliance Assessment →
      </button>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, textAlign: 'center', marginTop: '16px' }}>
        🔒 Your information is never shared. We'll respond within 2 business hours.
      </p>
    </form>
  )
}

/* ─────────────────────────────────────────────
   PAGE DATA
───────────────────────────────────────────── */
const PLATFORM_DATA = {
  isn: {
    whatItIs: 'ISNetworld (ISN) is the largest contractor management platform in North America, used by over 700 hiring clients including Shell, Suncor, Devon Energy, and major utilities. If you work in oil & gas, energy, construction, or industrial services, you almost certainly need ISNetworld.',
    whyHard: "ISN analysts review every safety program against an exacting standard. Programs that don't contain the precise language they're looking for (even if your policy clearly addresses the hazard) get rejected. Getting a single RAVS® section to 100% can take weeks of back-and-forth for a company doing this for the first time.",
    requirements: ['Company Profile & MSQ® (Management System Questionnaire)', 'RAVS® Written Safety Programs (tailored to your trades and hiring clients)', 'Insurance Documents (COI with specific endorsements per client)', 'OSHA 300 Logs / EMR Letter from your insurance broker', 'Employee training records and certifications', 'Incident rate data (TRIR, DART)', 'Annual renewal questionnaire (Q4 each year)'],
    howWeHandle: 'We access your RAVS® Safety Program Matrix, identify exactly which programs your hiring clients require, write or revise each one to 100% passing standards, and upload directly. We guarantee passing scores. If any program gets less than 100%, we fix it at no additional cost.',
    ctaLabel: 'Get Started with ISNetworld',
  },
  avetta: {
    whatItIs: 'Avetta connects large organizations (including BP, Chevron, Mosaic, and dozens of Fortune 500 companies) with pre-qualified contractors and suppliers. It focuses on insurance verification, safety prequalification, and worker-level compliance.',
    whyHard: "Avetta's forms are rigid and assume a corporate structure that doesn't match most small contractors. Definitions are unclear, requirements vary by client, and the support team is slow to respond. Many contractors get charged per connection, costs that spiral quickly.",
    requirements: ['Company Registration ($199 setup fee paid directly to Avetta)', 'PQF (Prequalification Form): company details, safety history, financials', 'Insurance certificates with client-specific requirements', 'Safety manual review and gap analysis', 'Worker profiles and training records', 'Annual update questionnaire', 'Client-specific questionnaires for each connection'],
    howWeHandle: 'We complete your PQF, write or update your safety manual to close all Avetta audit gaps, upload insurance and WCB rate sheets, and monitor your account. We can also transfer documentation from your ISNetworld or ComplyWorks accounts directly into Avetta, saving time and ensuring consistency.',
    ctaLabel: 'Get Started with Avetta',
  },
  cw: {
    whatItIs: "ComplyWorks is widely used in Western Canada and increasingly across North America. It's popular with mid-size industrial and energy companies who use it to manage contractor prequalification, compliance questionnaires, and document storage.",
    whyHard: "ComplyWorks questionnaires are detailed and can feel overwhelming without a guide. The platform expects familiarity with industry-specific safety standards, and submissions that miss the mark often come back with vague feedback. Many contractors don't realize which questions require documentation support versus a simple yes/no response.",
    requirements: ['Company Registration and profile setup', 'Compliance Questionnaire (industry and client-specific)', 'Safety program documentation', 'Insurance certificates', 'Worker training records', 'Annual questionnaire updates'],
    howWeHandle: 'We guide you through the ComplyWorks submission process, assist with questionnaire completion, and upload all required documentation. We know what each field is really asking, and we make sure your answers are both accurate and strategically complete.',
    ctaLabel: 'Get Started with ComplyWorks',
  },
}

const FAQS = [
  { q: 'Do I need all three platforms?', a: "Not necessarily. It depends entirely on which companies you want to work for. ISNetworld is dominant in oil & gas and energy. Avetta is widely used in utilities and Fortune 500 supply chains. ComplyWorks is common in Western Canada and industrial sectors. We'll help you identify which platforms your target clients actually require and recommend only what makes business sense for your company." },
  { q: 'How can you get us compliant in 48 hours?', a: "Because we've done this hundreds of times. We know exactly what every platform is looking for, what language passes RAVS® review, and how to submit documents correctly the first time. We've eliminated all the trial and error. The 48-hour guarantee applies to account setup and initial submission. Final platform approval depends on the platform's review queue, but we submit everything needed on Day 1." },
  { q: 'What if ISNetworld rejects one of our safety programs?', a: "We fix it at no additional charge. Our service includes unlimited revisions until every section achieves 100% approval. We don't consider the job done until you're green." },
  { q: 'Can you take over an existing ISNetworld / Avetta / ComplyWorks account?', a: "Yes. Many of our clients come to us after struggling with their accounts for months. We take over management of existing accounts, clean up deficiencies, and bring you back to fully approved status. We'll do a free audit of your current account status before you commit to anything." },
  { q: 'Do you write our safety manual from scratch?', a: "If you don't have one, yes. We build it. If you have one, we review it and make the targeted updates needed to pass platform review. We write programs specific to your scope of work and your actual hiring client requirements, not generic boilerplate." },
  { q: "What happens after we're approved? Will we fall out of compliance?", a: "Not with our Annual Maintenance Plan. We monitor your accounts year-round, handle all renewals and updates, respond to new client requirements, and alert you if anything needs attention. Most of our clients have never had a compliance lapse since signing up." },
  { q: 'Is CorPathway affiliated with ISNetworld, Avetta, or ComplyWorks?', a: 'No. CorPathway is an independent consulting firm. We are not endorsed, sponsored, or affiliated with any of the three platforms. We work on your behalf, not theirs.' },
]

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function GetCompliantPage() {
  const [activeTab, setActiveTab] = useState('isn')
  const [statRef, statCount] = useCountUp(500)

  return (
    <>
      <style>{`
        @keyframes ctaPulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,107,0,0.55); }
          70%  { box-shadow: 0 0 0 16px rgba(255,107,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,107,0,0); }
        }
        .gc-tab { transition: color 0.2s, background 0.2s, border-color 0.2s; }
        .gc-tab:hover { color: ${TEXT}; }
        .gc-input:focus { border-color: ${ORANGE} !important; box-shadow: 0 0 0 3px rgba(255,107,0,0.15); }
        @media (max-width: 640px) {
          .gc-hero-btns { flex-direction: column !important; }
          .gc-hero-trust { flex-direction: column !important; gap: 10px !important; }
          .gc-stats-bar { flex-direction: column !important; }
          .gc-stat-divider { width: 80% !important; height: 1px !important; margin: 0 auto !important; }
          .gc-timeline { padding-left: 0 !important; }
        }
      `}</style>

      {/* ══ 1. HERO ══ */}
      <section style={{ background: NAVY, minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/hero image landing page.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.2 }} priority />
        </div>
        {/* Overlay */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(13,31,60,0.95) 45%, rgba(13,31,60,0.6) 100%)' }} />
        {/* Dot grid */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 60L60 0M-5 5L5 -5M55 65L65 55' stroke='white' stroke-width='0.5' opacity='0.03'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: MAX_W, margin: '0 auto', width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ORANGE, marginBottom: '24px' }}>
            ISNetworld · Avetta · ComplyWorks
          </p>
          <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '-0.01em', color: TEXT, marginBottom: '28px' }}>
            STUCK IN<br />
            COMPLIANCE HELL?<br />
            <span style={{ color: ORANGE }}>WE'LL GET YOU</span><br />
            <span style={{ color: ORANGE }}>APPROVED IN 48 HRS.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: MUTED, maxWidth: '600px', marginBottom: '40px', lineHeight: 1.75 }}>
            We handle every document, every questionnaire, every RAVS® section,
            so you can stop fighting the platforms and start winning contracts.
          </p>

          <div className="gc-hero-btns" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <OrangeBtn href="#contact-form" large pulse>Get My Free Compliance Assessment →</OrangeBtn>
            <GhostBtn href="#pricing" large>See Pricing Plans</GhostBtn>
          </div>

          <ul className="gc-hero-trust" style={{ listStyle: 'none', display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '56px' }}>
            {['No long-term contracts', 'Results in 48 hours', '100% Approval Guarantee'].map(t => (
              <li key={t} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: GREEN, fontWeight: 700 }}>✓</span> {t}
              </li>
            ))}
          </ul>

          {/* Stats bar */}
          <div className="gc-stats-bar" style={{ display: 'flex', alignItems: 'stretch', background: NAVY_CARD, border: `1px solid ${BORDER}`, borderRadius: '16px', overflow: 'hidden', maxWidth: '640px' }}>
            <div ref={statRef} style={{ flex: 1, padding: '24px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '2.5rem', color: ORANGE, lineHeight: 1 }}>{statCount}+</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: MUTED, marginTop: '4px' }}>Companies Approved</div>
            </div>
            <div className="gc-stat-divider" style={{ width: '1px', background: BORDER }} />
            <div style={{ flex: 1, padding: '24px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '2rem', color: ORANGE, lineHeight: 1 }}>All 3</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: MUTED, marginTop: '4px' }}>Platforms Covered</div>
            </div>
            <div className="gc-stat-divider" style={{ width: '1px', background: BORDER }} />
            <div style={{ flex: 1, padding: '24px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '2rem', color: ORANGE, lineHeight: 1 }}>48-Hr</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: MUTED, marginTop: '4px' }}>Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. PAIN POINTS ══ */}
      <section style={{ background: NAVY_CARD, padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/pain Point section landing page.png" alt="" fill style={{ objectFit: 'cover', opacity: 0.06 }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel color={ORANGE}>THE PROBLEM</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            These Platforms Were Designed for Hiring Clients.<br />Not for You.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '640px', lineHeight: 1.7 }}>
            If you're a contractor trying to get compliant on ISNetworld, Avetta, or ComplyWorks, you've already discovered what thousands of others have complained about online:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <PainCard platform="ISNetworld" headline={`"It's Like a Second Full-Time Job"`} body={`You paid $875+ to get in. Then you discovered the RAVS® questionnaires, the MSQ®, the written safety programs tailored to each hiring client, each one capable of failing you if a single phrase doesn't match their exact expectations.`} quote={`"I would rather have a root canal than use ISNetworld."`} delay={0} />
            <PainCard platform="Avetta" headline='"Expensive, Confusing, and Nobody Answers the Phone"' body="Avetta is the most expensive platform per connection, and contractors are forced to subscribe because their clients require it. Rigid forms, unclear requirements, auto-pay charges without approval, and AI-powered support that puts you on hold indefinitely." quote='"Painful and frustrating. Customer service has gotten worse."' delay={100} />
            <PainCard platform="ComplyWorks" headline='"Intimidating Questionnaires That Never Seem to End"' body="ComplyWorks questionnaires are detailed, industry-specific, and easy to get wrong. Without someone who knows the platform inside and out, you can spend weeks going back and forth: reuploading, resubmitting, re-explaining, while jobs slip away." quote='"Filling out ComplyWorks questionnaires is intimidating and time-consuming."' delay={200} />
          </div>
          {/* Callout */}
          <div style={{ background: ORANGE, borderRadius: '16px', padding: '36px 40px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#fff', lineHeight: 1.75 }}>
              <strong style={{ fontSize: '18px', display: 'block', marginBottom: '8px' }}>Every day your compliance is incomplete, you are invisible to hiring clients.</strong>
              Contracts are being awarded RIGHT NOW to companies that are approved. Yours isn't one of them.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 3. SOLUTION / TIMELINE ══ */}
      <section style={{ background: NAVY, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel color={BLUE}>THE SOLUTION</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '56px', lineHeight: 1.1 }}>
            We Don't Just Help, We Do It For You.<br />
            Fully Compliant on All Three Platforms in 48 Hours.
          </h2>
          <div className="gc-timeline" style={{ maxWidth: '800px' }}>
            <TimelineStep num={1} icon="icon_clock_check_48hour.svg" title="SAME-DAY ONBOARDING" body="You send us your basic company info, insurance docs, and OSHA logs. That's it. We do the rest. No homework, no platform tutorials, no guesswork." delay={0} />
            <TimelineStep num={2} icon="icon_hard_hat_safety_programs.svg" title="CUSTOM SAFETY PROGRAMS WRITTEN FOR YOUR SCOPE" body="Our compliance specialists build or update your written safety programs to meet RAVS® standards for every hiring client in your account. Programs are tailored to your actual trades, no copy-paste templates that get rejected." delay={150} />
            <TimelineStep num={3} icon="icon_document_upload_submission.svg" title="WE SUBMIT. THEY APPROVE. YOU WIN WORK." body="We upload directly to your ISNetworld, Avetta, and ComplyWorks accounts. We monitor reviews, respond to flags, and don't stop until you hit Green/Approved status." delay={300} />
            <TimelineStep num={4} icon="icon_refresh_calendar_annual_maintenance.svg" title="ONGOING MAINTENANCE, NEVER FALL OUT OF COMPLIANCE AGAIN" body="Annual updates, new client requirements, document renewals, we handle it all on your behalf, all year long, so you never lose your approved status." last delay={450} />
          </div>
        </div>
      </section>

      {/* ══ 4. PLATFORM DEEP DIVE ══ */}
      <section style={{ background: NAVY_CARD, padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/Access documentation section landing page.png" alt="" fill style={{ objectFit: 'cover', opacity: 0.05 }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel color={BLUE}>PLATFORM DEEP DIVE</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '40px', lineHeight: 1.1 }}>
            Understand What You're Dealing With.<br />Then Let Us Handle It.
          </h2>

          {/* Tabs */}
          <div role="tablist" style={{ display: 'flex', gap: '8px', borderBottom: `1px solid ${BORDER}`, marginBottom: '40px', flexWrap: 'wrap' }}>
            {[['isn', 'ISNetworld'], ['avetta', 'Avetta'], ['cw', 'ComplyWorks']].map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => setActiveTab(id)}
                className="gc-tab"
                style={{
                  fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '14px 28px',
                  background: activeTab === id ? NAVY : 'transparent',
                  color: activeTab === id ? TEXT : MUTED,
                  border: `1px solid ${activeTab === id ? BORDER : 'transparent'}`,
                  borderBottom: activeTab === id ? `1px solid ${NAVY}` : '1px solid transparent',
                  borderRadius: '8px 8px 0 0', cursor: 'pointer',
                  position: 'relative', bottom: '-1px',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <PlatformPanel {...PLATFORM_DATA[activeTab]} />
        </div>
      </section>

      {/* ══ 5. SOCIAL PROOF ══ */}
      <section style={{ background: NAVY, padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/Trust Approval Section, landing page.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.07 }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: MAX_W, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '56px', lineHeight: 1.1 }}>
            Real Companies. Real Approvals. Real Fast.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '64px' }}>
            <TestimonialCard initials="OM" quote="We'd been fighting with ISNetworld for three months trying to get our RAVS® approved. CorPathway had us green in less than 48 hours. I wish we'd found them day one." name="Operations Manager" company="Industrial Electrical Contractor, Alberta" delay={0} />
            <TestimonialCard initials="CO" quote="We needed Avetta AND ISNetworld to bid a major pipeline contract. CorPathway handled both simultaneously and had us fully approved before the bid deadline. We got the contract." name="Owner" company="Mechanical Services Company, Texas" delay={100} />
            <TestimonialCard initials="SC" quote="ComplyWorks questionnaires were killing our admin team. Outsourcing to CorPathway was the best decision we made this year. Now it's just handled, every year, automatically." name="Safety Coordinator" company="Civil Construction Firm, Saskatchewan" delay={200} />
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center', background: NAVY_CARD, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '36px 40px' }}>
            {[['ISNetworld', 'Verified Specialist', false], ['Avetta', 'Approved Partner', false], ['ComplyWorks', 'Compliance Expert', false], ['500+', 'Companies Approved', true], ['48-Hr', 'Guarantee', true]].map(([label, sub, orange]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '8px 16px', opacity: 0.7, transition: 'opacity 0.2s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
              >
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '15px', color: '#fff', background: orange ? ORANGE : NAVY_LIGHT, border: `1px solid ${orange ? ORANGE : BORDER}`, borderRadius: '8px', padding: '8px 16px', whiteSpace: 'nowrap' }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: MUTED }}>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. PRICING ══ */}
      <section id="pricing" style={{ background: NAVY_CARD, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel color={ORANGE}>TRANSPARENT PRICING</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            One Platform or All Three.<br />Pick the Plan That Fits Your Business.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '640px', lineHeight: 1.7 }}>
            No hidden fees. No surprise invoices. Just flat-rate compliance support that costs a fraction of what you'd lose missing a single contract.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <PricingCard
              tag="Most Common for New Contractors"
              title="Single Platform Setup"
              priceLabel="Starting at"
              priceUnit="/ platform"
              features={['Full account setup on ONE platform', 'Safety program writing tailored to your trades & hiring clients', 'Insurance document upload & formatting', 'OSHA log / EMR submission', 'RAVS® / questionnaire completion', 'Revisions until 100% approved']}
              noFeatures={['Annual maintenance not included (add-on available)', 'Second/third platform not included']}
              delay={0}
            />
            <PricingCard
              tag="Best Value for Growing Contractors"
              badge="POPULAR"
              title="Dual Platform Setup"
              priceLabel="Starting at"
              priceUnit="/ two platforms"
              features={['Full setup on TWO platforms of your choice', 'Everything in Single Platform, times two', 'Cross-platform document transfer (ISN → Avetta saves hours)', 'Coordinated timelines, both approved simultaneously', '30 days of post-approval support included']}
              noFeatures={['Third platform not included']}
              highlighted
              delay={100}
            />
            <PricingCard
              tag="Complete Compliance Coverage"
              badge="BEST VALUE"
              badgeGreen
              title="All-Three Bundle"
              priceLabel="Starting at"
              priceUnit="/ all three platforms"
              features={['Full setup on ISNetworld + Avetta + ComplyWorks', 'Everything in Dual Platform, plus ComplyWorks', 'Maximum document reuse across platforms', 'Single point of contact for all three', '60 days of post-approval monitoring', 'Annual renewal management included for Year 1']}
              highlighted
              delay={200}
            />
            <PricingCard
              tag="For Already-Compliant Companies"
              title="Annual Maintenance Plan"
              priceLabel="Starting at"
              priceUnit="/ year per platform"
              features={['Annual questionnaire updates (all platforms)', 'Document renewals and re-uploads', 'New hiring client requirement management', 'Grade monitoring, alerts if your score drops', 'Unlimited revision support throughout the year', 'Priority turnaround (48-hour SLA on all requests)']}
              ctaLabel="Protect My Compliance →"
              delay={300}
            />
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textAlign: 'center', maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            Pricing is based on company size, number of trades/services listed, and number of hiring client connections. Contact us for a free, no-obligation assessment. We'll tell you exactly what you need and exactly what it will cost, before you commit to anything.
          </p>
        </div>
      </section>

      {/* ══ 7. FAQ ══ */}
      <section style={{ background: NAVY, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '48px', lineHeight: 1.1 }}>
            Questions We Hear Every Day
          </h2>
          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {FAQS.map(({ q, a }) => <FaqItem key={q} question={q} answer={a} />)}
          </div>
        </div>
      </section>

      {/* ══ 8. FINAL CTA + FORM ══ */}
      <section id="contact-form" style={{ background: NAVY_CARD, padding: '96px 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(2.2rem, 7vw, 5rem)', lineHeight: 0.95, color: TEXT, marginBottom: '24px', letterSpacing: '-0.01em' }}>
            EVERY DAY WITHOUT COMPLIANCE<br />IS A DAY WITHOUT CONTRACTS.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: MUTED, marginBottom: '56px', lineHeight: 1.7 }}>
            The companies winning the bids you want are already approved.<br />
            Let CorPathway get you there, starting today.
          </p>
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'left' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
