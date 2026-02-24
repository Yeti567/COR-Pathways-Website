import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Certifications & Training — COR Pathways',
  description: 'Track every employee certification, training record, and competency assessment — and get alerted before anything lapses.',
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

export default function CertificationsTrainingPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, rgba(74,144,196,0.08) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(74,144,196,0.15)', border: '1px solid rgba(74,144,196,0.3)', color: '#7BB8E0', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', marginBottom: '28px' }}>
            Platform — Certifications &amp; Training
          </span>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, maxWidth: '800px', marginBottom: '24px' }}>
            Every certification. Every employee.<br />
            <span style={{ color: '#34D399' }}>Never expired.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '660px', marginBottom: '40px' }}>
            COR Pathways tracks every employee certification, training record, and competency assessment across your entire company — and alerts you before anything lapses so you are never caught off guard in an audit.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}>
            <FilledBtn href="/contact">Book a Free Consultation</FilledBtn>
            <OutlineBtn href="/platform">See All Platform Features</OutlineBtn>
          </div>
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <SiteImage src="/images/Hero image page 3.webp" alt="Certification tracker dashboard showing employee list with certification status badges — green, amber, and red expiry indicators" height={400} rounded="16px" />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              One expired certification can fail your entire audit. Most companies find out too late.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              Element 4 of the COR 2020 standard — Competency &amp; Training — carries a 1.1x weight multiplier. It is one of the most heavily scrutinized elements in any audit. Auditors will ask to see training records, orientation checklists, and certification documents for your workers. If anything is missing, expired, or unverifiable, your score drops.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75 }}>
              For most companies, tracking certifications means a spreadsheet someone updates when they remember to — or a filing cabinet full of paper certificates that nobody has looked at in months. COR Pathways replaces all of that with a live, automated certification tracker that tells you exactly where you stand at all times.
            </p>
          </div>
          <div style={{ background: '#0D1F3C', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { text: 'John M. — First Aid certification expired 47 days ago', color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' },
              { text: 'Site crew — WHMIS training — 3 workers not on record', color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' },
              { text: 'Equipment operator certification — expiring in 14 days', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
            ].map((item) => (
              <div key={item.text} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>⚠️</span>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: item.color, lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
              <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>✅</span>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#34D399', lineHeight: 1.5 }}>COR Pathways flags every issue like this automatically — weeks before it becomes a problem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DASHBOARD FEATURES ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>The Certification Tracker</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.2, marginBottom: '16px' }}>
              A complete picture of your team's compliance — at a glance.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#4B5563', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
              The certification dashboard gives admins instant visibility into the compliance status of every worker, every certification type, and every upcoming expiry.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {/* Card 1 */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>📊</span>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '19px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px', lineHeight: 1.3 }}>Live Compliance Overview</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7, marginBottom: '20px' }}>At the top of every dashboard view — total workers, active certifications, expiring within 30 days, expired certifications, and your overall company compliance rate. One number tells you how you're doing.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                {[{ n: '24', l: 'Workers' }, { n: '98', l: 'Active' }, { n: '4', l: 'Expiring' }, { n: '1', l: 'Expired' }, { n: '94%', l: 'Compliant' }].map((s) => (
                  <div key={s.l} style={{ background: '#F3F4F6', borderRadius: '8px', padding: '8px 4px', textAlign: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '16px', fontWeight: 700, color: '#0D1F3C', lineHeight: 1 }}>{s.n}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#6B7280', marginTop: '3px' }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>🔔</span>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '19px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px', lineHeight: 1.3 }}>Automated Expiry Notifications</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7 }}>COR Pathways sends automatic alerts when certifications are approaching expiry — to the admin, the supervisor, and optionally the worker themselves. Set your own notification window: 90 days, 60 days, 30 days, or custom. Never be surprised by an expired certificate again.</p>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>🧩</span>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '19px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px', lineHeight: 1.3 }}>Training Matrix by Role</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7 }}>See which certifications are required for each role in your company, and which workers are missing them. The training matrix shows you every competency gap at a glance — so you can schedule training proactively instead of reactively.</p>
            </div>

            {/* Card 4 */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>📋</span>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '19px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px', lineHeight: 1.3 }}>Competency Gap Analysis</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#374151', lineHeight: 1.7 }}>The gap report identifies every worker who is missing a required certification for their role. Filter by department, jobsite, or certification type. Export the report for your audit package or use it to plan your next round of training sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CERTIFICATION TYPES ── */}
      <section style={{ background: '#ffffff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <SectionLabel>What Gets Tracked</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '20px' }}>
              Every type of certification your company needs — in one place.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '28px' }}>
              COR Pathways supports four certification categories, covering everything from mandatory regulatory certifications to company-specific competency requirements. Each category can be customized to match your company's specific roles and trades.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { dot: '#34D399', title: 'Safety Certifications', body: 'First Aid, WHMIS, Fall Protection, Confined Space, H2S Alive, and all mandatory safety training' },
                { dot: '#4A90C4', title: 'Operational Certifications', body: 'Equipment operator tickets, trade certifications, and role-specific competency requirements' },
                { dot: '#F59E0B', title: 'Regulatory Certifications', body: 'Government-mandated certifications and licenses required by provincial OH&S regulations' },
                { dot: '#9CA3AF', title: 'Company-Specific Certifications', body: 'Internal training completions, orientation sign-offs, and custom competency requirements unique to your company' },
              ].map((cat) => (
                <div key={cat.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px', background: '#F9FAFB', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.dot, flexShrink: 0, marginTop: '5px' }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, color: '#0D1F3C', marginBottom: '3px' }}>{cat.title}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', lineHeight: 1.55 }}>{cat.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Certification management.webp" alt="Close-up of certification management screen showing certification categories, expiry dates, and worker assignment table" height={300} />
            <div style={{ background: '#0D1F3C', borderRadius: '10px', padding: '14px 18px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Fully customizable to match your trades, roles, and provincial requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: UPLOADING & RECORDS ── */}
      <section style={{ background: '#0D1F3C', padding: SECTION_PAD, position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left — visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SiteImage src="/images/Mobile certification photo upload.webp" alt="Worker using a smartphone camera to photograph a paper training certificate for upload into the app" height={280} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#34D399', fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '999px' }}>
                Upload from anywhere — office or job site
              </span>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <SectionLabel>Certificate Uploads &amp; Records</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.25, marginBottom: '24px' }}>
              Upload certificates from anywhere. Access them forever.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
              Every certification in COR Pathways can have the actual certificate document attached — uploaded from a desktop, a tablet, or directly from a smartphone camera on the job site. Workers can upload their own certificates from the mobile app. Admins can bulk upload entire batches at once.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '32px' }}>
              Every uploaded certificate is stored permanently, linked to the worker's profile, and accessible instantly. When an auditor asks to see a worker's First Aid certificate, you have it in seconds — not after digging through a filing cabinet.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Bulk certificate upload for large teams',
                'Mobile photo capture — workers upload their own certs',
                'Certificates linked to worker profiles permanently',
                'Admin verification and approval workflow included',
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

      {/* ── SECTION 6: TRAINING SESSIONS ── */}
      <section style={{ background: '#F3F4F6', padding: SECTION_PAD }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left — copy */}
          <div>
            <SectionLabel>Training Records</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '24px' }}>
              Record training sessions. Prove competency. Pass your audit.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '20px' }}>
              Every training session your company runs — toolbox talks, orientation sessions, equipment training, safety courses — can be recorded directly in COR Pathways. Log the date, the trainer, the topics covered, and every worker who attended.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '32px' }}>
              Training records are linked directly to Element 8 of your COR audit — Training &amp; Communication. When your auditor asks for your training program evidence, every session is documented, searchable, and exportable in your audit package.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: '📅', text: 'Record any training session with date, trainer, attendees, and topics' },
                { icon: '🔗', text: 'Training records auto-link to Element 4 and Element 8 audit evidence' },
                { icon: '📤', text: 'Export complete training history for your AuditSoft submission' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', background: '#ffffff', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div>
            <SiteImage src="/images/Safety Training Session.webp" alt="Safety trainer standing in front of a small group of construction workers in a site office delivering a toolbox talk" height={360} />
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #163258 50%, #0D1F3C 100%)', padding: '96px 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>
            Know your team is qualified. Prove it to your auditor.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '40px' }}>
            Start your free trial and get your entire team's certification status tracked, organized, and audit-ready from day one.
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
