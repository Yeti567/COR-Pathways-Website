const MAX_W = '1200px'
const PROSE_W = '760px'

export const metadata = {
  title: 'Terms of Use | COR Pathways',
  description: 'COR Pathways Terms of Use. Read the terms governing your use of our website, platform, and consulting services.',
}

export default function TermsOfUsePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#0D1F3C', padding: '96px 1.5rem 80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,144,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,196,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.07) 0%, rgba(74,144,196,0.05) 40%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: MAX_W, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34D399', marginBottom: '16px' }}>Legal</p>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Terms of Use
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
            Last updated: June 1, 2026
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: '#ffffff', padding: '80px 1.5rem 96px' }}>
        <div style={{ maxWidth: PROSE_W, margin: '0 auto' }}>

          {/* Acceptance */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px', marginTop: '0' }}>
            Acceptance of Terms
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            By accessing or using the COR Pathways website and platform (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, you must not use the Service.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            These terms apply to all visitors, users, and clients of COR Pathways.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Description */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Description of Service
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            COR Pathways provides COR certification consulting, Health &amp; Safety program management, contractor compliance services, and a purpose-built software platform for Canadian construction companies.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Services are subject to the specific terms outlined in any consulting agreement, service contract, or subscription agreement entered into separately.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Use of Platform */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Use of the Platform
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '12px' }}>
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:
          </p>
          <ul style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Use the Service in any way that violates applicable federal, provincial, or local law</li>
            <li>Attempt to gain unauthorized access to any part of the platform</li>
            <li>Reproduce, duplicate, or resell any part of the Service without written permission</li>
            <li>Upload or transmit any material that is harmful, offensive, or infringes on third-party rights</li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Accounts */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Accounts and Access
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            You are responsible for maintaining the confidentiality of your account credentials.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            You are responsible for all activity that occurs under your account.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Notify us immediately at <a href="mailto:blake.safetyconsultant@gmail.com" style={{ color: '#059669', textDecoration: 'none' }}>blake.safetyconsultant@gmail.com</a> if you suspect unauthorized access to your account.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* IP */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Intellectual Property
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            All content on the COR Pathways website and platform,including text, graphics, logos, software, and documentation,is the property of COR Pathways and is protected by Canadian copyright law.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Nothing in these Terms grants you any right to use our trademarks, trade names, or branding without our prior written consent.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Consulting */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Consulting and Professional Services
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            COR Pathways provides consulting and compliance advisory services based on our professional knowledge and experience. Our guidance is not a substitute for legal advice.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Results from consulting engagements (including COR audit outcomes) depend on client cooperation and factors outside our control. We make no guarantees of certification success.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Payment */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Payment and Subscriptions
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            Fees for consulting services and platform subscriptions are outlined in your service agreement or as published on our pricing page.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            All fees are in Canadian dollars unless otherwise stated.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Subscription fees are billed on a monthly basis. Cancellations must be submitted in writing and take effect at the end of the current billing cycle.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Limitation of Liability */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Limitation of Liability
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            To the maximum extent permitted by applicable law, COR Pathways shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the Service.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Our total liability to you for any claim arising from these Terms shall not exceed the amount paid by you to COR Pathways in the three months preceding the claim.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Disclaimer */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Disclaimer of Warranties
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Third-Party Links */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Third-Party Links
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of any third-party site. Inclusion of a link does not imply endorsement.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Governing Law */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Governing Law
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '16px' }}>
            These Terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict of law principles.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Alberta.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Changes */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Changes to These Terms
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '48px' }}>
            We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Your continued use of the Service after changes are posted constitutes your acceptance of the new Terms.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '48px' }} />

          {/* Contact */}
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.25, marginBottom: '16px' }}>
            Contact Us
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#4B5563', lineHeight: 1.8, marginBottom: '12px' }}>
            For questions about these Terms of Use:
          </p>
          <div style={{ background: '#F3F4F6', borderRadius: '12px', padding: '24px 28px', border: '1px solid rgba(0,0,0,0.07)' }}>
            <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '18px', fontWeight: 700, color: '#0D1F3C', marginBottom: '12px' }}>COR Pathways</p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.8, marginBottom: '4px' }}>
              Email: <a href="mailto:blake.safetyconsultant@gmail.com" style={{ color: '#059669', textDecoration: 'none' }}>blake.safetyconsultant@gmail.com</a>
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: 1.8, marginBottom: '4px' }}>
              Phone: <a href="tel:+17808325158" style={{ color: '#059669', textDecoration: 'none' }}>780-832-5158</a>
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
