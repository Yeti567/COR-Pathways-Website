const MAX_W = '1200px'
const PROSE_W = '760px'

export const metadata = {
  title: 'Privacy Policy | COR Pathways',
  description: 'COR Pathways Privacy Policy. Learn how we collect, use, and protect your personal information in accordance with PIPEDA and applicable Canadian privacy legislation.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.07) 0%, rgba(74,144,196,0.05) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Legal</p>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
            Last updated: June 1, 2026
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: '#ffffff', padding: '80px 1.5rem 96px' }}>
        <div style={{ maxWidth: PROSE_W, margin: '0 auto' }}>

          {/* Introduction */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px', marginTop: '0' }}>
            Introduction
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            COR Pathways (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Information We Collect */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Information We Collect
          </h2>
          <ul style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong style={{ color: '#0D1F3C' }}>Contact information:</strong> name, email address, phone number, company name — collected when you contact us, book a consultation, or sign up for our platform.</li>
            <li><strong style={{ color: '#0D1F3C' }}>Account information:</strong> login credentials, subscription details, and usage data when you access the COR Pathways platform.</li>
            <li><strong style={{ color: '#0D1F3C' }}>Payment information:</strong> billing details processed securely through our third-party payment processor. We do not store credit card numbers.</li>
            <li><strong style={{ color: '#0D1F3C' }}>Technical data:</strong> IP address, browser type, device information, and cookies collected automatically when you visit our website.</li>
            <li><strong style={{ color: '#0D1F3C' }}>Communications:</strong> emails, form submissions, and messages you send to us.</li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* How We Use Your Information */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            How We Use Your Information
          </h2>
          <ul style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>To provide, operate, and improve our consulting services and platform</li>
            <li>To communicate with you about your account, services, or inquiries</li>
            <li>To send service-related notifications and updates</li>
            <li>To process payments and manage billing</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            We do not sell, rent, or trade your personal information to third parties.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Cookies */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Cookies and Tracking
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand how visitors use our platform.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            You may disable cookies in your browser settings, though some features may not function properly as a result.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Third-Party Services */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Third-Party Services
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            We use trusted third-party services to operate our platform, including payment processors, analytics tools, and scheduling software (such as Calendly). These providers are bound by their own privacy policies.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            We are not responsible for the privacy practices of external websites linked from our site.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Data Retention */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Data Retention
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            We retain personal information for as long as necessary to fulfill the purposes described in this policy, or as required by law. When information is no longer needed, we securely delete or anonymize it.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Your Rights */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Your Rights
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '12px' }}>
            Under PIPEDA, you have the right to:
          </p>
          <ul style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Access the personal information we hold about you</li>
            <li>Request corrections to inaccurate information</li>
            <li>Withdraw consent for certain uses of your information</li>
            <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
          </ul>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            To exercise your rights, contact us at: <a href="mailto:blake.safetyconsultant@gmail.com" style={{ color: '#059669', textDecoration: 'none' }}>blake.safetyconsultant@gmail.com</a>
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Security */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Security
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Children's Privacy */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Children&apos;s Privacy
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Changes */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Changes to This Policy
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a new effective date. Your continued use of our services after changes are posted constitutes acceptance of the revised policy.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Contact */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Contact Us
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '12px' }}>
            If you have questions about this Privacy Policy or how we handle your personal information:
          </p>
          <div style={{ background: '#F3F4F6', borderRadius: '12px', padding: '24px 28px', border: '1px solid rgba(0,0,0,0.07)' }}>
            <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px' }}>COR Pathways</p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.8, marginBottom: '4px' }}>
              Email: <a href="mailto:blake.safetyconsultant@gmail.com" style={{ color: '#059669', textDecoration: 'none' }}>blake.safetyconsultant@gmail.com</a>
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.8, marginBottom: '4px' }}>
              Phone: <a href="tel:7808325158" style={{ color: '#059669', textDecoration: 'none' }}>780-832-5158</a>
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.8 }}>
              Serving Ontario, Alberta, British Columbia, and Saskatchewan
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
