'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MAX_W = '1200px'
const NAVY      = '#0D1F3C'
const SURFACE   = '#132238'
const SURFACE2  = '#1C3252'
const GREEN     = '#22C55E'
const BLUE      = '#3B82F6'
const ORANGE    = '#F97316'
const ORANGE_DK = '#ea6c0f'
const TEXT      = '#F0F4FF'
const MUTED     = '#8A9BBF'
const BORDER    = 'rgba(255,255,255,0.08)'

/* ─── Shared UI ─── */
function SectionLabel({ children, color = BLUE }) {
  return (
    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color, marginBottom: '12px' }}>
      {children}
    </p>
  )
}

function OrangeBtn({ href, children, fullWidth = false, external = false }) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} {...props} style={{ display: fullWidth ? 'block' : 'inline-block', textAlign: 'center', background: ORANGE, color: '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.background = ORANGE_DK}
      onMouseLeave={e => e.currentTarget.style.background = ORANGE}
    >
      {children}
    </a>
  )
}

function GhostBtn({ href, children }) {
  return (
    <Link href={href} style={{ display: 'inline-block', background: 'transparent', color: TEXT, border: '1.5px solid rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      {children}
    </Link>
  )
}

function CheckLi({ children, color = GREEN }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: TEXT, lineHeight: 1.6 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
        <circle cx="9" cy="9" r="8.5" stroke={color} strokeWidth="1" />
        <path d="M5.5 9l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </li>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 600, color: open ? ORANGE : TEXT, lineHeight: 1.4, transition: 'color 0.2s' }}>{question}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: ORANGE }}>
          <path d="M5 7.5l5 5 5-5" stroke={ORANGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div style={{ paddingBottom: '22px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.8 }}>{answer}</p>
        </div>
      )}
    </div>
  )
}

/* ─── Data ─── */
const PAIN_POINTS = [
  {
    title: '"I don\'t even know where to start."',
    body: 'The most common thing we hear. There are 10 Certifying Partners in Alberta, multiple training requirements, audit instruments that differ by industry, and a process that can take 6–12 months if you don\'t build your program right from day one.',
    fix: 'Book a free 30-minute consultation and we map out exactly what you need, which Certifying Partner fits your industry, and what your realistic timeline looks like. The app then guides you through every step.',
  },
  {
    title: '"I built a safety program but I failed the audit."',
    body: 'Studies show that 70% of companies fail their first COR audit due to inadequate preparation. The most common reason? A safety manual that exists on paper but isn\'t being implemented in the field. Auditors interview workers, walk your site, and check whether your system is actually in use, not just filed away.',
    fix: 'Our consulting team conducts a gap assessment and mock audit before your real one. The app tracks field evidence in real time (inspections, toolbox talks, hazard assessments) so you can prove your system is live, not theoretical.',
  },
  {
    title: '"My COR expired and now I can\'t bid on jobs."',
    body: 'COR is valid for 3 years, but only if you complete annual maintenance audits in years 2 and 3. Miss one, and your COR lapses. With an expired certificate, you\'re invisible to clients who require active COR. Getting back to compliant status takes time your business can\'t afford to lose.',
    fix: 'We manage your annual maintenance schedule and alert you before deadlines. If your COR has already lapsed, we help you recover it as fast as possible. The app tracks your certificate status and maintenance requirements year-round.',
  },
  {
    title: '"I don\'t have time to run a safety program. I\'m too busy running my business."',
    body: 'Small contractors wear every hat: project manager, estimator, HR, site supervisor, and now safety officer? Most small companies in Alberta don\'t have a dedicated safety person. But COR requires consistent evidence: regular inspections, toolbox talks, hazard assessments, incident reports, and more.',
    fix: 'The CorPathway app is built for people in the field. Mobile-first, quick-entry forms, and automatic record-keeping. For SE-COR clients, we manage the entire program remotely: you just do the work, we handle the compliance.',
  },
  {
    title: '"I have no idea which Certifying Partner to use."',
    body: 'There are 10 authorized Certifying Partners in Alberta, each serving different industries. Some are levy-funded (free for eligible companies), others are fee-for-service. Choosing the wrong one can mean paying for a membership you didn\'t need, or working through a partner whose audit instrument doesn\'t align with your work scope.',
    fix: 'We know all 10 Certifying Partners. In your free consultation, we tell you exactly which one fits your industry, whether you qualify for a levy-funded partner, and what to expect from their process.',
  },
  {
    title: '"I keep documents everywhere: email, paper, phone photos. It\'s a mess."',
    body: 'When audit day arrives, you need evidence. Inspections from the past year. Training records. Toolbox talk sign-off sheets. Hazard assessments. Incident reports. Corrective actions. Companies that scramble to find this documentation, or recreate it from memory, fail audits or get poor scores.',
    fix: 'The app centralizes everything. Six document libraries, a digital form system for every COR element, and a training matrix that tracks every certification and expiry date, all in one place, accessible from the field.',
  },
  {
    title: '"I don\'t know if my WCB PIR refund is being maximized."',
    body: 'Alberta\'s WCB PIR program refunds up to 20% of your WCB premiums to COR-certified employers. But the refund amount is tied to your audit score and your injury history. Many companies hold a COR but never optimize their program to maximize the refund.',
    fix: 'As part of our consulting engagement, we review your WCB account standing, help you understand your PIR eligibility, and structure your safety program to document the evidence needed for the strongest possible refund claim.',
  },
]

const CERTIFYING_PARTNERS = [
  { name: 'AASP', full: 'Alberta Association for Safety Partnerships', industries: 'All industries', type: 'Fee-for-service', note: 'Best for companies that don\'t fall under a specific industry association', contact: 'Jodi Stoddart', phone: '403-223-9008', url: 'https://aasp.ca', badge: null },
  { name: 'ACSA', full: 'Alberta Construction Safety Association', industries: 'All construction industries', type: 'Levy-funded', note: 'General contractors, trades, civil construction', contact: 'Mark Hoosein', phone: '780-453-3311', url: 'https://acsa-safety.org', badge: 'MOST COMMON FOR CONTRACTORS', levy: true },
  { name: 'AFPA', full: 'Alberta Food Processors Association', industries: 'Bakeries, meat packers, breweries, retail and food services', type: 'Fee-for-service', note: null, contact: 'Melody Pashko', phone: '403-201-3657', url: 'https://afpa.com', badge: null },
  { name: 'AFPA (Forest)', full: 'Alberta Forest Products Association', industries: 'Forest products, logging, log trucking, timber management', type: 'Fee-for-service', note: null, contact: 'Carola von Sass', phone: '780-452-2841', url: 'https://albertaforestproducts.ca', badge: null },
  { name: 'AMTA', full: 'Alberta Motor Transport Association', industries: 'General trucking, specialized trucking, garbage hauling', type: 'Levy-funded', note: null, contact: 'Agnes Rozanska', phone: '403-214-3442', url: 'https://amta.ca', badge: null, levy: true },
  { name: 'AMHSA', full: 'Alberta Municipal Health and Safety Association', industries: 'Cities, towns, villages, counties, municipal districts', type: 'Levy-funded', note: null, contact: 'Shannon Thomas', phone: '1-800-267-9764', url: 'https://amhsa.net', badge: null, levy: true },
  { name: 'ASC', full: 'Alberta Safety Council', industries: 'All industries', type: 'Fee-for-service', note: 'Currently not accepting new members. Contact for status updates.', contact: 'Linda Knowles', phone: '780-462-7300', url: 'https://safetycouncil.ab.ca', badge: null },
  { name: 'CCSA', full: 'Continuing Care Safety Association', industries: 'Private and public long-term care facilities', type: 'Levy-funded', note: null, contact: 'Dana Loeppky', phone: '780-433-5330', url: 'https://continuingcaresafety.ca', badge: null, levy: true },
  { name: 'Energy Safety Canada', full: 'Energy Safety Canada', industries: 'All oil and gas industries', type: 'Levy-funded', note: null, contact: 'Andy Reimer', phone: '403-516-8110', url: 'https://energysafetycanada.com', badge: 'OIL & GAS STANDARD', levy: true },
  { name: 'MHSA', full: "Manufacturers' Health & Safety Association", industries: 'Manufacturing shops, machine shops, hydraulic shops, metal fabricating', type: 'Levy-funded', note: null, contact: 'Jim Hedrick', phone: '403-279-5555', url: 'https://mhsa.ab.ca', badge: null, levy: true },
]

const SECOR_STEPS = [
  { num: '01', title: 'Choose Your Certifying Partner', body: 'We help you identify the right partner for your industry in your free consultation. You register with them and confirm your SE-COR eligibility (10 or fewer WCB employees).' },
  { num: '02', title: 'Build Your Health & Safety Management System', body: "Your Certifying Partner sets the requirements. CorPathway builds your program: policies, procedures, hazard assessments, and all required documentation, tailored to your scope of work and your partner's audit instrument." },
  { num: '03', title: 'Implement the Program', body: 'A safety program that only exists on paper will not pass. You need 3+ months of real evidence: toolbox talks, inspections, hazard assessments, training records. The CorPathway app makes collecting this evidence simple, fast, and field-ready.' },
  { num: '04', title: 'Complete Your Self-Assessment', body: 'For SE-COR, you conduct a self-assessment of your health and safety system. We walk you through every section, help you score your own program honestly, and identify any gaps before you submit.' },
  { num: '05', title: 'Certifying Partner Review & Certification', body: 'Your Certifying Partner reviews your self-assessment. If it meets standards, they jointly issue your SE-COR with the Government of Alberta. Valid for 3 years. Annual maintenance self-assessments required.' },
  { num: '06', title: 'Annual Maintenance & WCB PIR Refund', body: 'Every year, we manage your annual maintenance submission and help you maximize your WCB-Alberta PIR premium refund (up to 20%).' },
]

const COR_STEPS = [
  { num: '01', title: 'Choose Your Certifying Partner & Complete Required Training', body: 'At least one employee must complete all required COR courses through your Certifying Partner. These typically include: Principles of Health & Safety Management (PHSM), Leadership in Safety Excellence (LSE), OHS Legislation (LEG), and Audit Training (ATP).' },
  { num: '02', title: 'Build Your Health & Safety Management System', body: "CorPathway builds or updates your complete OHSMS: written programs, policies, procedures, and all documentation to match your Certifying Partner's audit instrument and your hiring client requirements." },
  { num: '03', title: 'Implement with Consistent Field Evidence (6–12 Months)', body: 'The most important step. You need 3–6+ months of documented evidence that your system is working in the field. CorPathway tracks all of this through the app: inspections, hazard assessments, toolbox talks, training verification, corrective actions.' },
  { num: '04', title: 'Mock Audit (CorPathway)', body: 'Before you face a real auditor, we conduct a full internal mock audit. We interview your team, review your documentation, and walk your site, just like a real auditor would. We identify gaps and fix them before they cost you.' },
  { num: '05', title: 'External Audit by a Certified Auditor', body: 'You hire a certified external auditor (your Certifying Partner provides a list). They conduct document review, worker interviews, and site observation. You need 80% overall, 50%+ on each element. We prepare you to exceed that. Note: the consultant who builds your program cannot conduct your external audit.' },
  { num: '06', title: 'Certification & Annual Maintenance', body: '3-year COR issued by the Government of Alberta and your Certifying Partner. Annual maintenance audits required (years 2 and 3). CorPathway manages your schedule, reminders, and documentation year-round.' },
]

const FAQS = [
  { q: "What's the difference between COR and SE-COR?", a: "SE-COR (Small Employer COR) is for businesses with 10 or fewer employees under their WCB-Alberta account, including owners, managers, part-time staff, and family members. SE-COR uses a self-assessment instead of a full external audit. Full COR is for companies with more than 10 employees and requires an external auditor. Both qualify for WCB PIR refunds and provide the same certification status with most hiring clients." },
  { q: 'How long does it take to get COR or SE-COR certified?', a: "It depends on where you're starting. If you already run consistent safety practices (weekly inspections, toolbox talks, training records), you may be ready in 6–10 weeks of building your documentation. If you're starting from scratch, most companies take 6–12 months. The biggest variable is how consistently you implement the program after it's built. We help you get there as quickly as your situation allows." },
  { q: 'Which Certifying Partner should I use?', a: "It depends entirely on your industry. ACSA is by far the most common for construction and trades. Energy Safety Canada is the standard for oil and gas. We'll tell you in your free consultation, including whether you qualify for a levy-funded partner (which can significantly reduce your cost to participate)." },
  { q: 'How much is the WCB PIR refund?', a: "Up to 20% of your WCB-Alberta annual premiums. For a company paying $50,000 per year in WCB premiums, that's up to $10,000 back annually. The actual amount depends on your audit score and your injury history. CorPathway helps you structure your program to maximize the refund you qualify for." },
  { q: 'What if my COR has already expired?', a: "You're not alone. It happens more than you'd think. Contact us immediately. We'll assess how far lapsed your certification is, what documentation you still have, and map out the fastest possible path back to active certification. Every month without active COR is a month you're not qualifying for contracts or WCB refunds." },
  { q: 'Can you build my safety program if I have nothing in place?', a: "Yes. That's one of the most common situations we start with. We build your entire health and safety management system from scratch, customized to your scope of work, your Certifying Partner's requirements, and your company size. The CorPathway app then becomes the system you use to keep it running daily." },
  { q: 'Do I need to hire a full-time safety officer?', a: "No. Most small Alberta contractors don't have one, and SE-COR was specifically designed for that reality. For SE-COR clients, CorPathway manages your program remotely on a flat monthly fee, acting as your outsourced safety function at a fraction of the cost of a full-time hire." },
  { q: 'Can CorPathway conduct my external COR audit?', a: "No. By law, the consultant who helps you build your program cannot conduct your external audit. We help you prepare for and find a certified external auditor through your Certifying Partner's list. We do, however, conduct a full internal mock audit before your real one so you're completely prepared." },
  { q: "Does the CorPathway app work with my Certifying Partner's requirements?", a: "Yes. The app is built around the core elements of the Alberta COR audit standard, which all 10 Certifying Partners follow with minor variations. During your consulting engagement, we configure the app to align specifically with your Certifying Partner's audit instrument." },
  { q: 'Is CorPathway based in Alberta?', a: "Yes. We're Alberta-based and serve Alberta, BC, and Saskatchewan. Our phone number is 780-832-5158. Book a free consultation or call us directly." },
]

/* ─── Contact Form ─── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', company: '', phone: '', email: '', program: '', size: '', stage: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'form_submission', form_name: 'alberta_cor_assessment', program: form.program })
    }
    setSubmitted(true)
  }

  const inputStyle = { width: '100%', background: SURFACE2, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '13px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: TEXT, outline: 'none' }
  const labelStyle = { fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: MUTED, display: 'block', marginBottom: '6px' }
  const selectStyle = { ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A9BBF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '44px', appearance: 'none', WebkitAppearance: 'none' }

  if (submitted) {
    return (
      <div style={{ background: SURFACE, border: `1px solid ${GREEN}`, borderRadius: '16px', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '24px', fontWeight: 700, color: TEXT, marginBottom: '12px' }}>We Got Your Request!</h3>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.7 }}>A CorPathway consultant will reach out within 2 business hours to schedule your free COR/SE-COR assessment.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '48px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div><label style={labelStyle}>First Name *</label><input name="firstName" type="text" required placeholder="First Name" value={form.firstName} onChange={handleChange} style={inputStyle} /></div>
        <div><label style={labelStyle}>Last Name *</label><input name="lastName" type="text" required placeholder="Last Name" value={form.lastName} onChange={handleChange} style={inputStyle} /></div>
      </div>
      <div style={{ marginBottom: '16px' }}><label style={labelStyle}>Company Name *</label><input name="company" type="text" required placeholder="Company Name" value={form.company} onChange={handleChange} style={inputStyle} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div><label style={labelStyle}>Phone Number</label><input name="phone" type="tel" placeholder="780-000-0000" value={form.phone} onChange={handleChange} style={inputStyle} /></div>
        <div><label style={labelStyle}>Email Address *</label><input name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handleChange} style={inputStyle} /></div>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Which program do you need? *</label>
        <select name="program" required value={form.program} onChange={handleChange} style={selectStyle}>
          <option value="" disabled>Select...</option>
          <option value="se-cor">SE-COR (1–10 employees)</option>
          <option value="cor">COR (10+ employees)</option>
          <option value="not-sure">Not Sure</option>
          <option value="expired">Expired / Lapsed COR</option>
        </select>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Company size?</label>
        <select name="size" value={form.size} onChange={handleChange} style={selectStyle}>
          <option value="" disabled>Select...</option>
          <option value="1-5">1–5 employees</option>
          <option value="6-10">6–10 employees</option>
          <option value="11-20">11–20 employees</option>
          <option value="20+">20+ employees</option>
        </select>
      </div>
      <div style={{ marginBottom: '28px' }}>
        <label style={labelStyle}>Where are you in the process? *</label>
        <select name="stage" required value={form.stage} onChange={handleChange} style={selectStyle}>
          <option value="" disabled>Select...</option>
          <option value="fresh">Starting fresh</option>
          <option value="some-docs">Have some documentation</option>
          <option value="failed">Failed an audit</option>
          <option value="lapsed">COR lapsed</option>
          <option value="maintenance">Annual maintenance overdue</option>
        </select>
      </div>
      <button type="submit" style={{ width: '100%', background: ORANGE, color: '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '17px', fontWeight: 600, padding: '18px 36px', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background = ORANGE_DK}
        onMouseLeave={e => e.currentTarget.style.background = ORANGE}
      >
        Book My Free Consultation →
      </button>
      <div style={{ textAlign: 'center', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <a href="tel:+17808325158" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textDecoration: 'none' }}>📞 Prefer to call? <span style={{ color: TEXT }}>780-832-5158</span></a>
        <a href="mailto:blake.safetyconsultant@gmail.com" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textDecoration: 'none' }}>📧 blake.safetyconsultant@gmail.com</a>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED }}>🔒 Your information is never shared.</span>
      </div>
    </form>
  )
}

/* ─── Page ─── */
export default function AlbertaCORPage() {
  const [activeTab, setActiveTab] = useState('secor')

  return (
    <>
      <style>{`
        .acor-grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .acor-grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .acor-grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
        .acor-partner-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }
        .acor-tab { transition: color 0.2s, background 0.2s; cursor: pointer; }
        .acor-tab:hover { color: ${TEXT}; }
        @media (max-width: 640px) {
          .acor-hero-btns { flex-direction: column !important; }
          .acor-trust-bar { flex-direction: column !important; gap: 16px !important; }
          .acor-stats-row { flex-direction: column !important; }
          .acor-stat-div { width: 80% !important; height: 1px !important; margin: 0 auto !important; }
          .acor-form-inner { padding: 32px 20px !important; }
        }
      `}</style>

      {/* ══ S1: HERO ══ */}
      <section style={{ background: NAVY, padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Hero background photo */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/Western Canada Construction Site.webp" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }} priority />
        </div>
        {/* Overlay + grid */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(13,31,60,0.97) 40%, rgba(13,31,60,0.7) 100%)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '20px' }}>Alberta · COR &amp; SE-COR Certification</p>
            <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.05, color: TEXT, marginBottom: '24px', letterSpacing: '-0.01em' }}>
              Your COR or SE-COR Certification,<br />
              <span style={{ color: ORANGE }}>Handled.</span> App, Consulting,<br />and Everything In Between.
            </h1>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: MUTED, lineHeight: 1.75, marginBottom: '36px', maxWidth: '540px' }}>
              CorPathway is the only platform that combines purpose-built Alberta COR software with real safety consulting, so you can stop drowning in paperwork and start winning the contracts your certification was meant to unlock.
            </p>
            <div className="acor-hero-btns" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <OrangeBtn href="https://calendly.com/blake-safetyconsultant/30min" external>Book a Free Consultation →</OrangeBtn>
              <GhostBtn href="/platform/cor-audit">Explore the App</GhostBtn>
            </div>
            {/* Trust bar */}
            <div className="acor-trust-bar" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {['10 Certifying Partners', 'SE-COR & COR', 'Alberta-Based', 'App + Consulting'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: GREEN, flexShrink: 0, display: 'inline-block' }} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: `1px solid ${BORDER}`, background: SURFACE }}>
            <Image src="/images/Certification management.webp" alt="CorPathway COR Audit Dashboard" width={600} height={420} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
          </div>
        </div>
      </section>

      {/* ══ S2: WHAT IS COR / SE-COR ══ */}
      <section style={{ background: SURFACE, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel>THE BASICS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '24px', lineHeight: 1.1 }}>
            COR and SE-COR: Alberta's Gold Standard for Workplace Safety.<br />Here's What You Actually Need to Know.
          </h2>
          <div style={{ maxWidth: '760px', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: MUTED, lineHeight: 1.85, marginBottom: '20px' }}>
              The Certificate of Recognition (COR) is Alberta's government-approved health and safety certification program. It's run through the Partnerships in Injury Reduction (PIR) program, a joint initiative between the Government of Alberta, industry groups, and WCB-Alberta.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <CheckLi>COR proves your health and safety management system has been independently audited and meets provincial standards. It is not just policies on paper: auditors check whether your system is actually working in the field.</CheckLi>
              <CheckLi>Many Alberta general contractors, oil and gas companies, and public-sector clients now require COR or SE-COR before they'll even consider a bid. It's not a nice-to-have. It's a price of entry.</CheckLi>
              <CheckLi>COR certification qualifies your company for WCB-Alberta PIR premium refunds of <strong style={{ color: GREEN }}>up to 20%</strong> on your annual WCB premiums. For many companies, that refund alone pays for the entire certification process, and then some.</CheckLi>
            </ul>
          </div>

          {/* COR vs SE-COR comparison */}
          <div className="acor-grid-2" style={{ marginBottom: '32px' }}>
            {/* SE-COR */}
            <div style={{ background: NAVY, border: `1px solid ${BLUE}33`, borderTop: `3px solid ${BLUE}`, borderRadius: '16px', padding: '36px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '22px', color: TEXT }}>SE-COR</h3>
                <span style={{ background: `${BLUE}22`, border: `1px solid ${BLUE}44`, color: BLUE, fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>1–10 Employees</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.8, marginBottom: '20px' }}>
                For businesses with 10 or fewer employees under your WCB-Alberta account (including owners, managers, admin, part-time, temporary, and family members). Instead of a full external audit, you complete a self-assessment reviewed by your Certifying Partner.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Designed specifically for small businesses', 'Self-assessment process (no external auditor required)', 'Same WCB-Alberta PIR refunds as full COR', 'Can transition to full COR as you grow', 'Valid for 3 years with annual maintenance'].map(i => <CheckLi key={i} color={BLUE}>{i}</CheckLi>)}
              </ul>
            </div>
            {/* Full COR */}
            <div style={{ background: NAVY, border: `1px solid ${GREEN}33`, borderTop: `3px solid ${GREEN}`, borderRadius: '16px', padding: '36px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '22px', color: TEXT }}>COR</h3>
                <span style={{ background: `${GREEN}22`, border: `1px solid ${GREEN}44`, color: GREEN, fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>10+ Employees</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.8, marginBottom: '20px' }}>
                For businesses with more than 10 employees under your WCB-Alberta account. You must hire a certified external auditor to conduct a full audit of your health and safety management system. You need a minimum score of 80% overall and at least 50% in every individual audit element.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Required by most major Alberta GCs and oil & gas companies', 'External audit conducted by a certified auditor', 'Must score 80%+ overall, 50%+ in each element', 'Valid for 3 years with annual maintenance audits', 'WCB-Alberta PIR refunds up to 20%'].map(i => <CheckLi key={i}>{i}</CheckLi>)}
              </ul>
            </div>
          </div>

          {/* Note box */}
          <div style={{ background: `${ORANGE}14`, border: `1px solid ${ORANGE}44`, borderLeft: `4px solid ${ORANGE}`, borderRadius: '12px', padding: '20px 24px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: TEXT, lineHeight: 1.75 }}>
              <strong>⚠️ Important:</strong> The 10-employee count under WCB-Alberta includes everyone on your WCB account: owners, managers, office staff, part-time workers, temporary staff, and family members. Not sure which program you qualify for? That's what we're here for.
            </p>
          </div>
        </div>
      </section>

      {/* ══ S3: PAIN POINTS ══ */}
      <section style={{ background: NAVY, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            COR and SE-COR Certification Is Not Hard.<br />Until It Is.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '600px', lineHeight: 1.7 }}>
            Here are the seven things that derail Alberta companies most often,and how CorPathway addresses each one.
          </p>
          <div className="acor-grid-2">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '32px 28px' }}>
                <div style={{ width: '36px', height: '36px', marginBottom: '14px' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '16px', color: TEXT, marginBottom: '10px', lineHeight: 1.35 }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75, marginBottom: '16px' }}>{p.body}</p>
                <div style={{ background: NAVY, borderLeft: `3px solid ${ORANGE}`, borderRadius: '0 8px 8px 0', padding: '16px 18px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ORANGE, marginBottom: '6px' }}>→ How CorPathway Fixes It</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, lineHeight: 1.7 }}>{p.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S4: THE APP ══ */}
      <section style={{ background: SURFACE, padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/Safety Audit Review Panel.webp" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.06 }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel color={ORANGE}>THE APP</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            One App. Every Element.<br />Built Specifically for Alberta COR Certification.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '600px', lineHeight: 1.7 }}>
            Most safety apps are built for large enterprises. CorPathway was built for Alberta contractors,small enough to actually use, powerful enough to pass a COR audit.
          </p>
          <div className="acor-grid-4" style={{ marginBottom: '28px' }}>
            {[
              { icon: '🎯', title: 'COR Audit Dashboard', href: '/platform/cor-audit', body: 'See your compliance score for all COR audit elements in real time. Know exactly what\'s complete, what\'s missing, and what needs attention before your audit day arrives. No surprises. No scrambling.' },
              { icon: '🏅', title: 'Certifications & Training Matrix', href: '/platform/certifications-training', body: 'Track every employee certification, course completion, and expiry date. Get automatic alerts before anything lapses. Generate a complete training record for your audit package with one click.' },
              { icon: '📋', title: 'Forms & Inspections', href: '/platform/forms-inspections', body: 'Digital toolbox talks, site inspections, hazard assessments, incident reports, and corrective action logs,all tied to the correct COR audit element. Workers complete them from their phone in under 2 minutes.' },
              { icon: '📁', title: 'Documents & Libraries', href: '/platform/documents-libraries', body: 'Six master document libraries that organize every policy, procedure, and record your Certifying Partner will look for. Version-controlled, searchable, and always up to date.' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ textDecoration: 'none', display: 'block', background: NAVY, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '28px 24px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${BLUE}66`}
                onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '16px', color: TEXT, marginBottom: '10px', lineHeight: 1.3 }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, lineHeight: 1.7 }}>{f.body}</p>
              </Link>
            ))}
          </div>
          {/* AI callout */}
          <div style={{ background: NAVY, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${BLUE}`, borderRadius: '0 16px 16px 0', padding: '28px 32px', marginBottom: '36px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '15px', color: TEXT, marginBottom: '8px' }}>🤖 AI-Powered Mock Audit Practice</p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75 }}>Practice your COR audit interview before the real one. Our AI auditor asks the questions your Certifying Partner's auditor will ask,so you walk in prepared, confident, and ready to score 80%+.</p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <OrangeBtn href="/platform/cor-audit">Explore the Full Platform →</OrangeBtn>
            <GhostBtn href="/pricing">Included Free with Consulting</GhostBtn>
          </div>
        </div>
      </section>

      {/* ══ S5: CERTIFYING PARTNERS ══ */}
      <section style={{ background: NAVY, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel>CERTIFYING PARTNERS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            All 10 Alberta Certifying Partners.<br />We Know Them All,And We'll Help You Choose the Right One.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '700px', lineHeight: 1.7 }}>
            The Government of Alberta authorizes 10 Certifying Partners to administer the COR program. Each serves specific industries and operates differently. During your free consultation, we'll tell you exactly which partner fits your operation,and what to expect from their specific audit instrument.
          </p>
          <div className="acor-partner-grid" style={{ marginBottom: '32px' }}>
            {CERTIFYING_PARTNERS.map(p => (
              <div key={p.name} style={{ background: SURFACE, border: `1px solid ${p.badge ? ORANGE + '44' : BORDER}`, borderRadius: '16px', padding: '28px 24px', position: 'relative' }}>
                {p.badge && (
                  <div style={{ position: 'absolute', top: '-12px', left: '24px', background: ORANGE, color: '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '999px' }}>{p.badge}</div>
                )}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '10px' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '15px', color: TEXT }}>{p.name}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, marginTop: '2px' }}>{p.full}</p>
                  </div>
                  {p.levy && <span style={{ background: `${GREEN}22`, border: `1px solid ${GREEN}44`, color: GREEN, fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', flexShrink: 0, whiteSpace: 'nowrap' }}>★ Levy-Funded</span>}
                </div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, marginBottom: '6px' }}><strong style={{ color: TEXT }}>Industries:</strong> {p.industries}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, marginBottom: p.note ? '6px' : '14px' }}><strong style={{ color: TEXT }}>Type:</strong> {p.type}</p>
                {p.note && <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: ORANGE, marginBottom: '14px', fontStyle: 'italic' }}>{p.note}</p>}
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: MUTED }}>{p.contact}</span>
                  <a href={`tel:${p.phone.replace(/\D/g, '')}`} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: BLUE, textDecoration: 'none' }}>{p.phone}</a>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: BLUE, textDecoration: 'none', marginLeft: 'auto' }}>Website →</a>
                </div>
              </div>
            ))}
          </div>
          {/* Levy callout */}
          <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ORANGE}`, borderRadius: '0 16px 16px 0', padding: '28px 32px', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75, maxWidth: '680px' }}>
              <strong style={{ color: TEXT }}>★ Levy-funded partners</strong> are supported by a levy on WCB premiums,meaning eligible companies may access their programs at low or no direct cost. Fee-for-service partners charge membership fees. Not sure which applies to you? We'll tell you in your free consultation.
            </p>
            <OrangeBtn href="https://calendly.com/blake-safetyconsultant/30min" external>Book a Free Consultation →</OrangeBtn>
          </div>
        </div>
      </section>

      {/* ══ S6: THE PROCESS ══ */}
      <section style={{ background: SURFACE, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel>THE PROCESS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '48px', lineHeight: 1.1 }}>
            From "Where Do I Start?" to Certified.<br />Here's the Exact Path.
          </h2>
          {/* Tabs */}
          <div role="tablist" style={{ display: 'flex', gap: '8px', borderBottom: `1px solid ${BORDER}`, marginBottom: '44px', flexWrap: 'wrap' }}>
            {[['secor', 'SE-COR Pathway (1–10 employees)'], ['cor', 'COR Pathway (10+ employees)']].map(([id, label]) => (
              <button key={id} role="tab" aria-selected={activeTab === id} onClick={() => setActiveTab(id)} className="acor-tab"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, padding: '14px 28px', background: activeTab === id ? NAVY : 'transparent', color: activeTab === id ? TEXT : MUTED, border: `1px solid ${activeTab === id ? BORDER : 'transparent'}`, borderBottom: activeTab === id ? `1px solid ${NAVY}` : '1px solid transparent', borderRadius: '8px 8px 0 0', position: 'relative', bottom: '-1px' }}>
                {label}
              </button>
            ))}
          </div>
          <div style={{ maxWidth: '760px' }}>
            {(activeTab === 'secor' ? SECOR_STEPS : COR_STEPS).map((step, i, arr) => (
              <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '52px 2px 1fr', gap: '0 20px', paddingBottom: i < arr.length - 1 ? '0' : '0' }}>
                <div style={{ width: '52px', height: '52px', background: NAVY, border: `1px solid ${BORDER}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, gridRow: 1 }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '13px', color: ORANGE }}>{step.num}</span>
                </div>
                {i < arr.length - 1 && <div style={{ gridColumn: 2, gridRow: '1 / 3', width: '2px', background: `linear-gradient(to bottom, ${BLUE}, transparent)`, margin: '52px auto 0', alignSelf: 'stretch' }} />}
                <div style={{ gridColumn: 3, gridRow: 1, paddingTop: '10px', paddingBottom: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '15px', color: TEXT, marginBottom: '8px', lineHeight: 1.35 }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.75 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S7: PRICING ══ */}
      <section style={{ background: NAVY, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <SectionLabel color={ORANGE}>TRANSPARENT PRICING</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '16px', lineHeight: 1.1 }}>
            One Flat Fee. No Surprises.<br />The WCB Refund Often Covers the Entire Cost.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '56px', maxWidth: '680px', lineHeight: 1.7 }}>
            Alberta's WCB PIR program refunds up to 20% of your annual WCB premiums to COR holders. For most companies, that refund pays for consulting and the app,and then puts money back in your pocket every year you stay certified.
          </p>
          <div className="acor-grid-2" style={{ marginBottom: '32px' }}>
            {[
              {
                tag: 'Small Employer · 1–10 Employees', title: 'SE-COR Program Management', priceNote: 'Flat monthly fee,contact for exact quote',
                features: ['Complete SE-COR health & safety program build-out', "Tailored to your Certifying Partner's requirements", 'Remote monthly program management,we handle it', 'CorPathway app included (all 4 modules)', 'Annual self-assessment preparation and review', 'WCB insurance certificate submissions handled', 'WCB premium rate statement filings included', 'Document renewals at no extra charge', 'Ongoing consultation,call or email anytime'],
                note: 'Available for SE-COR programs · Alberta · BC · Saskatchewan', cta: 'Book a Free Consultation →', ctaHref: 'https://calendly.com/blake-safetyconsultant/30min', highlighted: false,
              },
              {
                tag: 'Standard COR · 10+ Employees', badge: 'MOST POPULAR', title: 'COR Certification Consulting', priceNote: 'Project-based fee,contact for exact quote',
                features: ['Full Certifying Partner selection consultation', 'Complete OHSMS build (written programs, policies, procedures)', 'Gap analysis of existing safety systems', 'Pre-audit documentation review', 'Mock audit with written feedback report', 'External audit coordination support', 'CorPathway app included for duration of engagement', 'Ongoing consultation through certification'],
                cta: 'Book a Free Consultation →', ctaHref: 'https://calendly.com/blake-safetyconsultant/30min', highlighted: true,
              },
              {
                tag: 'For Active COR Holders', title: 'COR Annual Maintenance', priceNote: 'Flat annual fee,contact for exact quote',
                features: ['Annual maintenance audit preparation', 'Internal audit coordination support', 'Documentation updates and renewals', 'CorPathway app year-round monitoring', 'WCB PIR submission support', 'New client requirement management', 'Expiry alerts,never fall out of compliance'],
                cta: 'Protect My COR →', ctaHref: 'https://calendly.com/blake-safetyconsultant/30min', highlighted: false,
              },
              {
                tag: 'Emergency,COR Has Lapsed', title: 'Lapsed or Expired COR Recovery', priceNote: 'Custom quote,contact immediately',
                desc: "Your COR has expired or lapsed. You're losing bids right now. We've recovered expired CORs and helped companies regain certification as efficiently as the program allows.",
                features: ['Immediate gap assessment', 'Program rebuild or update', 'Accelerated audit preparation', 'CorPathway app to collect evidence quickly', 'Direct Certifying Partner coordination'],
                cta: 'Get Help Now →', ctaHref: '/contact', highlighted: false, urgent: true,
              },
            ].map((card, i) => (
              <div key={i} style={{ background: SURFACE, border: `1px solid ${card.highlighted ? ORANGE + '66' : card.urgent ? '#EF444466' : BORDER}`, boxShadow: card.highlighted ? `0 0 0 1px ${ORANGE}44, 0 8px 32px rgba(0,0,0,0.3)` : 'none', borderRadius: '16px', padding: '36px 32px', position: 'relative' }}>
                {card.badge && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: ORANGE, color: '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', padding: '5px 16px', borderRadius: '100px', whiteSpace: 'nowrap' }}>{card.badge}</div>}
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: '8px' }}>{card.tag}</p>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '20px', color: TEXT, marginBottom: '16px' }}>{card.title}</h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: ORANGE, fontWeight: 600, marginBottom: '20px' }}>{card.priceNote}</p>
                {card.desc && <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.7, marginBottom: '20px' }}>{card.desc}</p>}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {card.features.map(f => <CheckLi key={f}>{f}</CheckLi>)}
                </ul>
                {card.note && <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: MUTED, marginBottom: '20px', fontStyle: 'italic' }}>{card.note}</p>}
                <OrangeBtn href={card.ctaHref} external={card.ctaHref.startsWith('http')} fullWidth>{card.cta}</OrangeBtn>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, textAlign: 'center', maxWidth: '700px', margin: '0 auto', lineHeight: 1.75 }}>
            Pricing varies based on your company size, Certifying Partner, scope of work, and whether you're starting from scratch or maintaining an existing program. Contact us for a free, no-obligation assessment,we'll tell you exactly what you need and what it costs before you commit to anything.
          </p>
        </div>
      </section>

      {/* ══ S8: WHY CORPATHWAY ══ */}
      <section style={{ background: SURFACE, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: TEXT, marginBottom: '48px', lineHeight: 1.1 }}>
            Expert Consulting + Purpose-Built Software.<br />No Other Alberta COR Service Offers Both.
          </h2>
          <div className="acor-grid-3" style={{ marginBottom: '56px' }}>
            {[
              { icon: '🧑‍💼', title: 'Real Safety Professionals', body: "Not a software company that dabbles in consulting, and not a consulting firm that uses generic spreadsheets. CorPathway is built and operated by Alberta safety professionals with direct, field-level COR and SE-COR experience." },
              { icon: '📱', title: 'App Built for the Field', body: "The CorPathway app was designed for contractors and tradespeople,not safety officers at desks. Mobile-first forms, quick-entry inspections, and automatic record-keeping so your crew can stay compliant without being buried in paperwork." },
              { icon: '🤝', title: 'We Work With Your Certifying Partner', body: "We don't try to replace your Certifying Partner. We work alongside all 10 of them. We know their audit instruments, their expectations, and their timelines,and we prepare you to exceed their standards." },
            ].map(c => (
              <div key={c.title} style={{ background: NAVY, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '32px 28px' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '17px', color: TEXT, marginBottom: '12px' }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED, lineHeight: 1.8 }}>{c.body}</p>
              </div>
            ))}
          </div>
          {/* Stats row */}
          <div className="acor-stats-row" style={{ display: 'flex', background: NAVY, border: `1px solid ${BORDER}`, borderRadius: '16px', overflow: 'hidden' }}>
            {[['10+', 'All 10 Certifying Partners Supported'], ['3', 'Provinces Served (AB, BC, SK)'], ['100%', 'Done-for-you program management'], ['20%', 'Max WCB PIR refund available']].map(([num, label], i, arr) => (
              <>
                <div key={num} style={{ flex: 1, padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '2.5rem', color: ORANGE, lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: MUTED, marginTop: '6px', lineHeight: 1.4 }}>{label}</div>
                </div>
                {i < arr.length - 1 && <div className="acor-stat-div" key={`div-${i}`} style={{ width: '1px', background: BORDER, flexShrink: 0 }} />}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S10: FAQ ══ */}
      <section style={{ background: SURFACE, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: TEXT, marginBottom: '48px', lineHeight: 1.1 }}>
            Questions We Get from Alberta Contractors Every Day
          </h2>
          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {FAQS.map(({ q, a }) => <FaqItem key={q} question={q} answer={a} />)}
          </div>
        </div>
      </section>

      {/* ══ S11: FINAL CTA + FORM ══ */}
      <section id="contact-form" style={{ background: NAVY, padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.4rem)', color: TEXT, marginBottom: '24px', lineHeight: 1.05 }}>
              The Contracts You Want Require COR.<br /><span style={{ color: ORANGE }}>Let's Get You There.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: MUTED, marginBottom: '32px', lineHeight: 1.8 }}>
              Whether you're starting from zero, recovering a lapsed certificate, or trying to maintain the certification you already have,CorPathway is the team and the tool built for exactly this situation.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '15px', color: TEXT, marginBottom: '32px' }}>
              One free consultation. No jargon. No obligation. Just a clear path forward.
            </p>
            {/* Trust items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[`✅ We build your complete ${`COR`} or SE-COR program`, '✅ We work with all 10 Alberta Certifying Partners', '✅ App included,every element tracked', '✅ WCB PIR refund support included', '✅ Alberta-based. 780-832-5158.'].map(t => (
                <p key={t} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: MUTED }}>{t}</p>
              ))}
            </div>
          </div>
          <div className="acor-form-inner">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
