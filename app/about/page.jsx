'use client'

import Link from 'next/link'
import Image from 'next/image'

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

export default function AboutPage() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .about-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .about-cta-btns a { text-align: center !important; white-space: normal !important; }
          .value-num { font-size: 48px !important; }
        }
      `}</style>
      {/* ══ S1: HERO ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-5%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.08) 0%, rgba(74,144,196,0.06) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '5%', left: '-8%', width: '500px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(74,144,196,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '28px', letterSpacing: '-0.02em', maxWidth: '860px' }}>
            Safety expertise you can trust.<br /><span style={{ color: '#7BB8E0' }}>Software built to prove it.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '64px', maxWidth: '760px' }}>
            COR Pathways was built by a safety professional with nearly two decades of hands-on experience across construction, oil and gas, and general industry — because we knew there had to be a better way to get contractors certified and keep them compliant.
          </p>
          <div style={{ width: '100%', maxWidth: '900px', height: '380px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(74,144,196,0.2)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', position: 'relative' }}>
            <Image src="/images/Western Canada Construction Site.webp" alt="Wide shot of a Canadian construction site at golden hour — crane, heavy equipment, workers in high-vis vests, dramatic sky — conveys scale and professionalism" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      {/* ══ S2: OUR STORY ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Our Story</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '28px' }}>
              Built by someone who has done the work.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '20px' }}>
              COR Pathways was founded by Blake Cowan, a National Construction Safety Officer with 15 to 20 years of health and safety experience across construction, oil and gas, and general industry in multiple provinces across Canada. Blake has spent his career on job sites, in site trailers, in boardrooms, and in audit interviews — understanding exactly what it takes to build a safety program that actually works and actually passes.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '20px' }}>
              After years of watching construction companies struggle through COR certification with outdated tools — spreadsheets, paper forms, filing cabinets full of documents nobody could find — Blake built COR Pathways. Not as a generic safety software platform, but as a purpose-built certification tool designed around the COR 2020 standard from the ground up. Every feature exists because a real audit required it.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8 }}>
              Today COR Pathways serves construction companies across Ontario for full COR certification and companies across Alberta, BC, and Saskatchewan for SE-COR Health &amp; Safety Program Management — combining hands-on consulting expertise with a platform that makes the entire process trackable, transparent, and manageable.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '🎓', title: 'National Construction Safety Officer', body: 'Blake holds the NCSO designation — one of the most recognized safety credentials in the Canadian construction industry. The NCSO designation reflects deep knowledge of occupational health and safety legislation, hazard management, and safety program development.' },
              { icon: '🏗️', title: '15 — 20 Years of Field Experience', body: 'Construction, oil and gas, and general industry across multiple Canadian provinces. Real job sites, real audits, real safety programs built from scratch. Not theoretical knowledge — working experience.' },
              { icon: '🗺️', title: 'Multi-Province Safety Expertise', body: 'Experience working across Ontario, Alberta, British Columbia, Saskatchewan, and beyond — with deep knowledge of provincial OH&S legislation, IHSA COR requirements, and SE-COR program standards in western Canada.' },
            ].map((card) => (
              <div key={card.title} style={{ background: '#0D1F3C', borderRadius: '14px', padding: '24px', border: '1px solid rgba(74,144,196,0.2)' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '12px' }}>{card.icon}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '10px', lineHeight: 1.3 }}>{card.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S3: WHY WE BUILT THIS ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Why COR Pathways Exists</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '40px' }}>
            The problem with how most companies approach COR certification.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '20px' }}>
            Most construction companies approaching COR certification for the first time face the same challenges. They are handed a list of 14 elements, a stack of template documents, and told to build a safety management system — while simultaneously running crews, managing projects, and winning new work. The result is a half-built safety program that scrapes through an audit — or fails one.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '20px' }}>
            The tools available to most companies made this worse, not better. Generic safety software not built around COR. Consultants who hand over a binder and disappear. Template packages that get filled in and filed away. None of it reflects how safety programs actually get built and maintained in the real world of construction.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '64px' }}>
            COR Pathways exists because there was a gap between what construction companies needed and what was available to them. A platform built specifically around the COR 2020 standard. A consulting model that stays actively involved — daily monitoring, weekly calls, real feedback on real submissions. And a service that extends beyond Ontario to help smaller western Canadian companies manage their safety programs properly without the cost of a full-time safety officer.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { num: '14', label: 'COR elements built into every feature of the platform' },
              { num: '4', label: 'Provinces served — Ontario, Alberta, BC, Saskatchewan' },
              { num: '1', label: 'Dedicated consultant actively involved in your certification' },
            ].map((stat) => (
              <div key={stat.num} style={{ background: '#0D1F3C', borderRadius: '14px', padding: '32px 24px', textAlign: 'center', border: '1px solid rgba(74,144,196,0.2)' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-fraunces)', fontSize: '56px', fontWeight: 700, color: '#34D399', lineHeight: 1, marginBottom: '12px' }}>{stat.num}</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S4: HOW WE ARE DIFFERENT ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>What Sets Us Apart</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '56px', maxWidth: '760px' }}>
            We are not a software company that learned safety. We are safety professionals who built software.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: '👁️', title: 'Daily Monitoring — Not Monthly Reports', body: 'When your workers submit forms, we review them. When something is wrong, we flag it the same day. Most consultants check in once a month and tell you what went wrong. We catch issues in real time — before they become audit problems.' },
              { icon: '🔧', title: 'Built Around COR — Not Adapted to It', body: 'COR Pathways was designed from the ground up around the COR 2020 standard. Every form, every library, every audit element tracker was built because a specific audit requirement needed it. Nothing is bolted on or approximated.' },
              { icon: '🤝', title: 'A Real Consulting Relationship', body: 'Weekly Zoom calls. Live team training. Hands-on document building. We are actively involved in your certification every week for the duration of your engagement — not available by email if you have a question.' },
              { icon: '🌐', title: 'National Reach With Provincial Depth', body: 'We understand the differences between Ontario COR, SE-COR in western Canada, and the compliance requirements of ISNetworld, Avetta, and ComplyWorks. One company with the expertise to serve contractors across Canada.' },
            ].map((card) => (
              <div key={card.title} style={{ background: '#F9FAFB', borderRadius: '14px', padding: '28px 24px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '16px' }}>{card.icon}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '10px', lineHeight: 1.3 }}>{card.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.75 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S5: OUR APPROACH ══ */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Our Philosophy</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '32px' }}>
              Safety programs should protect workers. Audits should confirm they do.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '20px' }}>
              COR certification is not a box-checking exercise — or at least it should not be. The COR 2020 standard exists because the construction industry has real hazards and workers get hurt. A properly built safety program, actively maintained and genuinely followed, reduces incidents, protects workers, and reduces your liability.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '20px' }}>
              Our approach to consulting reflects that. We do not help companies build safety programs that look good in an audit binder. We help them build safety programs that work on the job site — and that also happen to pass an audit because they are built correctly.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
              The COR Pathways platform supports this philosophy. Daily form submissions, real-time monitoring, certification tracking, hazard assessments linked to actual jobsites — these are not audit theatre. They are the habits and records of a company that takes safety seriously. The audit score follows.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '320px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(74,144,196,0.2)', marginBottom: '20px' }}>
              <Image src="/images/Job Site Safety Inspection.webp" alt="Safety professional in hard hat and vest conducting a job site inspection — reviewing a clipboard or tablet, heavy equipment in background, natural light" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '10px', padding: '18px 20px' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 600, color: '#34D399', lineHeight: 1.6 }}>
                &ldquo;A safety program that works on the job site will pass an audit. We build the real thing.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S6: WHAT WE COVER ══ */}
      <section style={{ background: '#F3F4F6', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>Our Services</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '20px' }}>
            Everything we do. All in one place.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.75, marginBottom: '56px', maxWidth: '820px' }}>
            COR Pathways is not just a platform and not just a consulting service. It is a complete solution for construction companies that need to get certified, stay compliant, and manage their safety programs properly — across every province we serve.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🏆', title: 'COR Certification Consulting', province: 'Ontario', body: 'Full COR 2020 certification consulting — program build, gap analysis, mock audit, AuditSoft export, and active daily monitoring through the platform. App included free.', href: '/consulting', featured: true },
              { icon: '🛡️', title: 'H&S Program Management', province: 'Alberta · BC · Saskatchewan', body: 'Complete remote health and safety program management for SE-COR companies in western Canada. We build it, monitor it, and maintain it — you run your business.', href: '/consulting#western-canada', featured: false },
              { icon: '✅', title: 'Compliance Management', province: 'All provinces', body: 'ISNetworld, Avetta, and ComplyWorks setup and ongoing management. From zero to green — and we keep you there.', href: '/compliance', featured: false },
              { icon: '📱', title: 'The COR Pathways Platform', province: 'All provinces', body: 'Purpose-built safety management software aligned to the COR 2020 standard. Available to consulting clients free — and to certified alumni on standalone plans.', href: '/platform', featured: false },
            ].map((card) => (
              <div key={card.title} style={{ background: card.featured ? 'rgba(52,211,153,0.06)' : '#ffffff', borderRadius: '14px', padding: '28px 24px', border: card.featured ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '26px', display: 'block', marginBottom: '14px' }}>{card.icon}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '6px', lineHeight: 1.3 }}>{card.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, color: '#7BB8E0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>{card.province}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#4B5563', lineHeight: 1.75, marginBottom: '20px', flex: 1 }}>{card.body}</p>
                <Link href={card.href} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 700, color: '#059669', textDecoration: 'none' }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S7: VALUES ══ */}
      <section style={{ background: '#ffffff', padding: '96px 1.5rem' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '12px' }}>What We Believe</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '56px' }}>
            The principles behind everything we do.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              {
                num: '01',
                title: 'Expertise over templates',
                body: 'Anyone can sell you a folder of Word documents and call it a safety program. We build programs based on real field experience, active monitoring, and genuine knowledge of the COR standard — not off-the-shelf templates handed over and forgotten.',
              },
              {
                num: '02',
                title: 'Involvement over availability',
                body: 'Being available to answer questions is not the same as being actively involved. We are in your account daily, on a call with you weekly, and building your program alongside you throughout the engagement. That is a different kind of service.',
              },
              {
                num: '03',
                title: 'Outcomes over activity',
                body: 'Our job is not to keep you busy with safety tasks. Our job is to get you certified — or keep you compliant. Everything we do is measured against that outcome. If it does not move you closer to certification or compliance, we do not waste your time on it.',
              },
            ].map((v) => (
              <div key={v.num} style={{ borderTop: '2px solid rgba(0,0,0,0.08)', paddingTop: '32px' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-fraunces)', fontSize: '72px', fontWeight: 700, color: '#7BB8E0', lineHeight: 1, marginBottom: '20px', opacity: 0.35 }}>{v.num}</span>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '22px', fontWeight: 700, color: '#0D1F3C', marginBottom: '14px', lineHeight: 1.3 }}>{v.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.8 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S8: CTA ══ */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Ready to work with someone who knows this inside and out?
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '580px', marginBottom: '40px' }}>
            Book a free consultation with Blake and find out exactly what COR certification or compliance management looks like for your company — no obligation, no jargon, just a straight conversation.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="/consulting">See Our Services</OutlineBtn>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.03em' }}>
            Ontario · Alberta · BC · Saskatchewan · NCSO Certified
          </p>
        </div>
      </section>
    </>
  )
}
