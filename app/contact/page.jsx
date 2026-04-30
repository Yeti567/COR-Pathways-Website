'use client'

import Link from 'next/link'
import { useState } from 'react'

const MAX_W = '1200px'

function FilledBtn({ href, children, fullWidth = false, bg = '#059669', onClick }) {
  if (href) {
    return (
      <Link href={href} style={{ display: fullWidth ? 'block' : 'inline-block', textAlign: 'center', background: bg, color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
        {children}
      </Link>
    )
  }
  return (
    <button onClick={onClick} style={{ display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : 'auto', textAlign: 'center', background: bg, color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
      {children}
    </button>
  )
}

function OutlineBtn({ href, children }) {
  return (
    <Link href={href} style={{ display: 'inline-block', background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      {children}
    </Link>
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

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '15px',
  color: '#111827',
  background: '#ffffff',
  border: '1.5px solid #D1D5DB',
  borderRadius: '8px',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '13px',
  fontWeight: 600,
  color: '#374151',
  marginBottom: '6px',
}

const fieldErrorStyle = {
  marginTop: '6px',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '13px',
  color: '#B91C1C',
}

// Mirrors the server-side caps in app/api/contact/route.js
const MAX_NAME = 200
const MAX_COMPANY = 200
const MAX_EMAIL = 320
const MAX_PHONE = 50
const MAX_MESSAGE = 5000

const FAQS = [
  { q: 'How quickly do you respond to inquiries?', a: 'Within one business day, usually faster. Blake personally responds to every message. You will not get an automated reply or be handed off to someone else.' },
  { q: 'Is the consultation call really free?', a: 'Yes, completely free and with no obligation. The consultation exists so both of us can figure out whether we are a good fit before anyone commits to anything.' },
  { q: 'Do I need to be in Ottawa to get COR consulting?', a: 'No. We work with Ontario construction companies across the province, not just Ottawa. The Ottawa deadline is the most urgent reason to act now but COR certification is valuable for any Ontario contractor bidding on municipal or institutional work anywhere in the province.' },
  { q: 'Can I get a quote before the consultation call?', a: 'Consulting pricing is fixed and published on our pricing page: $2,500/month for up to 30 employees and $5,000/month for 31 to 150 employees. Compliance setup fees are also fixed. The consultation call is about understanding your specific situation and timeline, not negotiating price.' },
]

function ContactForm() {
  const [form, setForm] = useState({ fullName: '', companyName: '', email: '', phone: '', province: '', service: '', employees: '', message: '', website: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitError, setSubmitError] = useState(null)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setFieldErrors({})
    setSubmitError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        return
      }

      if (res.status === 422) {
        const data = await res.json().catch(() => ({}))
        setFieldErrors(data.errors || {})
        setSubmitError('Please fix the highlighted fields and try again.')
      } else if (res.status === 429) {
        setSubmitError('You have sent a few messages recently. Please wait a few minutes before trying again.')
      } else {
        setSubmitError('Something went wrong on our end. Please try again, or email blake.safetyconsultant@gmail.com directly.')
      }
      setStatus('error')
    } catch {
      setSubmitError('We could not reach the server. Check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.3)', borderLeft: '4px solid #34D399', borderRadius: '12px', padding: '40px 32px', textAlign: 'center' }}>
        <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }} aria-hidden="true">✅</span>
        <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '24px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px' }}>Thanks. We received your message.</p>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto' }}>
          Blake will get back to you within one business day. If it&apos;s urgent, call 780-832-5158.
        </p>
      </div>
    )
  }

  const errorInputStyle = { ...inputStyle, border: '1.5px solid #EF4444' }
  const styleFor = (key) => (fieldErrors[key] ? errorInputStyle : inputStyle)
  const errorIdFor = (key) => (fieldErrors[key] ? `${key}-error` : undefined)

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} noValidate>
      {/* Honeypot: hidden from real users, bots fill it and get silently dropped server-side. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, width: 0, overflow: 'hidden' }}>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>
      {submitError && (
        <div role="alert" style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.3)', borderLeft: '4px solid #EF4444', borderRadius: '8px', padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#7F1D1D' }}>
          {submitError}
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div>
          <label htmlFor="fullName" style={labelStyle}>Full Name <span style={{ color: '#EF4444' }}>*</span></label>
          <input id="fullName" name="fullName" type="text" required aria-required="true" aria-invalid={!!fieldErrors.fullName} aria-describedby={errorIdFor('fullName')} maxLength={MAX_NAME} placeholder="Your full name" value={form.fullName} onChange={handleChange} style={styleFor('fullName')} />
          {fieldErrors.fullName && <p id="fullName-error" style={fieldErrorStyle}>{fieldErrors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="companyName" style={labelStyle}>Company Name <span style={{ color: '#EF4444' }}>*</span></label>
          <input id="companyName" name="companyName" type="text" required aria-required="true" aria-invalid={!!fieldErrors.companyName} aria-describedby={errorIdFor('companyName')} maxLength={MAX_COMPANY} placeholder="Your company name" value={form.companyName} onChange={handleChange} style={styleFor('companyName')} />
          {fieldErrors.companyName && <p id="companyName-error" style={fieldErrorStyle}>{fieldErrors.companyName}</p>}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div>
          <label htmlFor="email" style={labelStyle}>Email Address <span style={{ color: '#EF4444' }}>*</span></label>
          <input id="email" name="email" type="email" required aria-required="true" aria-invalid={!!fieldErrors.email} aria-describedby={errorIdFor('email')} maxLength={MAX_EMAIL} autoComplete="email" placeholder="your@email.com" value={form.email} onChange={handleChange} style={styleFor('email')} />
          {fieldErrors.email && <p id="email-error" style={fieldErrorStyle}>{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone Number <span style={{ color: '#EF4444' }}>*</span></label>
          <input id="phone" name="phone" type="tel" required aria-required="true" aria-invalid={!!fieldErrors.phone} aria-describedby={errorIdFor('phone')} maxLength={MAX_PHONE} autoComplete="tel" placeholder="Your phone number" value={form.phone} onChange={handleChange} style={styleFor('phone')} />
          {fieldErrors.phone && <p id="phone-error" style={fieldErrorStyle}>{fieldErrors.phone}</p>}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div>
          <label htmlFor="province" style={labelStyle}>Province <span style={{ color: '#EF4444' }}>*</span></label>
          <select id="province" name="province" required aria-required="true" aria-invalid={!!fieldErrors.province} aria-describedby={errorIdFor('province')} value={form.province} onChange={handleChange} style={{ ...styleFor('province'), color: form.province ? '#111827' : '#9CA3AF' }}>
            <option value="" disabled>Select your province</option>
            {['Ontario', 'Alberta', 'British Columbia', 'Saskatchewan', 'Other'].map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {fieldErrors.province && <p id="province-error" style={fieldErrorStyle}>{fieldErrors.province}</p>}
        </div>
        <div>
          <label htmlFor="service" style={labelStyle}>What can we help you with? <span style={{ color: '#EF4444' }}>*</span></label>
          <select id="service" name="service" required aria-required="true" aria-invalid={!!fieldErrors.service} aria-describedby={errorIdFor('service')} value={form.service} onChange={handleChange} style={{ ...styleFor('service'), color: form.service ? '#111827' : '#9CA3AF' }}>
            <option value="" disabled>Select a service</option>
            {[
              'COR Certification Consulting: Ontario',
              'Health & Safety Program Management: AB, BC, SK',
              'ISNetworld Setup & Management',
              'Avetta Setup & Management',
              'ComplyWorks Setup & Management',
              'Multiple compliance platforms',
              'General inquiry',
            ].map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {fieldErrors.service && <p id="service-error" style={fieldErrorStyle}>{fieldErrors.service}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="employees" style={labelStyle}>Number of employees <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span></label>
        <select id="employees" name="employees" value={form.employees} onChange={handleChange} style={{ ...inputStyle, color: form.employees ? '#111827' : '#9CA3AF', maxWidth: '100%' }}>
          <option value="">Select range</option>
          {['1 to 10 employees', '11 to 30 employees', '31 to 75 employees', '76 to 150 employees', '150+ employees'].map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" style={labelStyle}>Message <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span></label>
        <textarea id="message" name="message" rows={5} maxLength={MAX_MESSAGE} placeholder="Tell us a bit about your company and what you are looking for. The more detail you share the better we can prepare for our conversation." value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
      </div>
      <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', background: status === 'submitting' ? '#6B7280' : '#059669', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 600, padding: '15px 28px', borderRadius: '8px', border: 'none', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }}>
        {status === 'submitting' ? 'Sending…' : 'Send Message →'}
      </button>
      <p role="status" aria-live="polite" style={{ position: 'absolute', left: '-9999px' }}>
        {status === 'submitting' ? 'Sending your message.' : ''}
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', fontStyle: 'italic', textAlign: 'center', lineHeight: 1.6 }}>
        We respond to all inquiries within one business day. Your information is never shared with third parties.
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .contact-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .contact-cta-btns a { text-align: center !important; white-space: normal !important; }
          .contact-step-grid { grid-template-columns: 1fr !important; }
          .contact-service-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      {/* ══ S1: HERO ══ */}
      <section style={{ background: '#0D1F3C', padding: '72px 1.5rem 64px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.1) 0%, rgba(74,144,196,0.06) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', padding: '6px 16px', borderRadius: '999px', marginBottom: '28px' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399' }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.02em', maxWidth: '760px' }}>
            Let&apos;s talk about <span style={{ color: '#34D399' }}>your safety program.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '720px' }}>
            Whether you are looking to get COR certified in Ontario, need your health and safety program managed in western Canada, or want your ISNetworld, Avetta, or ComplyWorks account set up and managed: reach out and we will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* ══ S2: CONTACT MAIN ══ */}
      <section id="contact-form" style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'flex-start' }}>
          {/* Left, Form */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '20px' }}>Send Us a Message</p>
            <ContactForm />
          </div>

          {/* Right, Contact Details */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '20px' }}>Contact Information</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Phone */}
              <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '24px', border: '1px solid rgba(74,144,196,0.2)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>📞</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399', marginBottom: '8px' }}>Call or Text</p>
                <a href="tel:+17808325158" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '28px', fontWeight: 700, color: '#ffffff', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>Call now</a>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>780-832-5158</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Available Monday to Friday, 8am to 6pm Mountain Time</p>
              </div>
              {/* Email */}
              <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '24px', border: '1px solid rgba(74,144,196,0.2)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>✉️</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399', marginBottom: '8px' }}>Email Us</p>
                <a href="mailto:blake.safetyconsultant@gmail.com" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, color: '#ffffff', textDecoration: 'none', wordBreak: 'break-all', display: 'block', marginBottom: '8px' }}>blake.safetyconsultant@gmail.com</a>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>We respond within one business day</p>
              </div>
              {/* Service Area */}
              <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '24px', border: '1px solid rgba(74,144,196,0.2)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>🗺️</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Where We Work</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  {[
                    { dot: '#34D399', province: 'Ontario', desc: 'COR Certification Consulting' },
                    { dot: '#7BB8E0', province: 'Alberta', desc: 'Health & Safety Program Management (SE-COR)' },
                    { dot: '#7BB8E0', province: 'British Columbia', desc: 'Health & Safety Program Management (SE-COR)' },
                    { dot: '#7BB8E0', province: 'Saskatchewan', desc: 'Health & Safety Program Management (SE-COR)' },
                  ].map((row) => (
                    <div key={row.province} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: row.dot, flexShrink: 0, marginTop: '5px' }} />
                      <div>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>{row.province}</span>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginLeft: '6px' }}>{row.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  Compliance management: ISNetworld, Avetta, ComplyWorks, available to contractors across all of Canada
                </p>
              </div>
              {/* Calendly */}
              <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '24px', border: '1px solid rgba(52,211,153,0.3)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>📅</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399', marginBottom: '8px' }}>Book a Time Directly</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '16px' }}>Pick a time that works for you and we will have a free 30-minute consultation call, no back-and-forth required.</p>
                <a href="https://calendly.com/blake-safetyconsultant/30min" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#34D399', color: '#0D1F3C', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 700, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>Book a Free Consultation →</a>
              </div>
              {/* Free consultation note */}
              <div style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)', borderLeft: '4px solid #34D399', borderRadius: '12px', padding: '20px 24px' }}>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '17px', fontWeight: 700, color: '#0D1F3C', marginBottom: '8px' }}>Free consultation, no obligation</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151', lineHeight: 1.75 }}>
                  Every engagement starts with a free consultation call. We learn about your company, explain exactly what is involved, and give you a clear picture of what working with COR Pathways looks like, before you commit to anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S3: WHAT HAPPENS NEXT ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>What to Expect</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2 }}>
              Here is what happens after you reach out.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { num: '01', title: 'You send us a message', body: 'Fill out the form or call us directly. Give us as much detail as you can about your company, your province, and what you are looking for.' },
              { num: '02', title: 'We get back to you within one business day', body: 'Blake personally responds to every inquiry. No automated responses, no sales team handoffs: a direct reply from the person who will be working with you.' },
              { num: '03', title: 'We schedule a free consultation call', body: 'A 30 to 60 minute call to learn about your company, assess your current situation, and explain exactly what COR certification or compliance management looks like for you.' },
              { num: '04', title: 'You get a clear plan, no obligation', body: 'After the call you will have a clear picture of what is involved, what it costs, and what the timeline looks like. No pressure, no obligation; just the information you need to make a good decision.' },
            ].map((step) => (
              <div key={step.num} style={{ background: '#ffffff', borderRadius: '14px', padding: '28px 24px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', background: '#059669', borderRadius: '999px', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>{step.num}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '10px', lineHeight: 1.3 }}>{step.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.75 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S4: SERVICE QUICK REFERENCE ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Not Sure What You Need?</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '56px' }}>
            Tell us where you are. We will tell you what fits.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Card 1,Ontario */}
            <div style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#059669', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', alignSelf: 'flex-start' }}>Ontario</span>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px', lineHeight: 1.3 }}>Need COR certification?</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.75, marginBottom: '20px', flex: 1 }}>
                If you are an Ontario contractor who needs to get COR certified, especially before the January 1, 2027 City of Ottawa deadline, COR consulting is what you need.
              </p>
              <Link href="/consulting" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#059669', textDecoration: 'none' }}>Learn about COR consulting →</Link>
            </div>
            {/* Card 2,Western Canada */}
            <div style={{ background: 'rgba(123,184,224,0.06)', border: '1px solid rgba(123,184,224,0.3)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-block', background: 'rgba(123,184,224,0.15)', border: '1px solid rgba(123,184,224,0.3)', color: '#4A90C4', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', alignSelf: 'flex-start' }}>Alberta · BC · Saskatchewan</span>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px', lineHeight: 1.3 }}>Need your safety program managed?</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.75, marginBottom: '20px', flex: 1 }}>
                If you are a smaller company in western Canada on a SE-COR program and you need a professionally built and managed health and safety program, we can help.
              </p>
              <Link href="/consulting#western-canada" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#4A90C4', textDecoration: 'none' }}>Learn about H&amp;S management →</Link>
            </div>
            {/* Card 3,All Provinces */}
            <div style={{ background: '#0D1F3C', border: '1px solid rgba(74,144,196,0.2)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#34D399', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', alignSelf: 'flex-start' }}>All Provinces</span>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>Need ISNetworld, Avetta, or ComplyWorks?</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '20px', flex: 1 }}>
                If you need a compliance account set up from scratch or managed ongoing, no matter where you are in Canada, compliance management is a standalone service.
              </p>
              <Link href="/compliance" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#34D399', textDecoration: 'none' }}>Learn about compliance services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S5: FAQ ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Quick Answers</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2 }}>
              A few things people usually ask before reaching out.
            </h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ S6: CTA ══ */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            The best time to start was six months ago. The next best time is today.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '40px' }}>
            Every month you wait is a month off your certification timeline. Reach out today and let&apos;s figure out what it takes to get your company where it needs to be.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            <a href="https://calendly.com/blake-safetyconsultant/30min" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#34D399', color: '#0D1F3C', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 700, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>Book a Free Consultation →</a>
            <a href="tel:+17808325158" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>Call now,780-832-5158</a>
            <a href="#contact-form" style={{ display: 'inline-block', background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>Send a Message</a>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.03em' }}>
            Free consultation · No obligation · One business day response
          </p>
        </div>
      </section>
    </>
  )
}
