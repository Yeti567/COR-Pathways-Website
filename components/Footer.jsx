import Link from 'next/link'
import Image from 'next/image'

const SERVICES = [
  { label: 'COR Certification Consulting', href: '/consulting' },
  { label: 'H&S Program Management', href: '/consulting#western-canada' },
  { label: 'ISNetworld Setup & Management', href: '/compliance' },
  { label: 'Avetta Setup & Management', href: '/compliance' },
  { label: 'ComplyWorks Setup & Management', href: '/compliance' },
]

const PLATFORM = [
  { label: 'COR Audit Dashboard', href: '/platform/cor-audit' },
  { label: 'Certifications & Training', href: '/platform/certifications-training' },
  { label: 'Forms & Inspections', href: '/platform/forms-inspections' },
  { label: 'Documents & Libraries', href: '/platform/documents-libraries' },
]

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-family: var(--font-dm-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 150ms;
        }
        .footer-link:hover { color: #ffffff; }
        .footer-tel {
          font-family: var(--font-dm-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-weight: 500;
          transition: color 150ms;
        }
        .footer-tel:hover { color: #34D399; }
        .footer-email {
          font-family: var(--font-dm-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          word-break: break-all;
          transition: color 150ms;
        }
        .footer-email:hover { color: #ffffff; }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-brand {
            grid-column: 1 / -1 !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 400px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <footer style={{ background: '#0D1F3C', borderTop: '1px solid rgba(74,144,196,0.2)', padding: '64px 1.5rem 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Top grid */}
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '48px' }}>

            {/* Brand */}
            <div className="footer-brand">
              <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
                <Image src="/images/cor pathways bg removed.png" alt="COR Pathways" width={150} height={40} style={{ objectFit: 'contain' }} />
              </Link>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '20px', maxWidth: '260px' }}>
                COR certification consulting, contractor compliance management, and purpose-built safety software for construction companies across Canada.
              </p>
              <a href="tel:7808325158" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#34D399', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Call now</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>tel. 780-832-5158</span>
              </a>
            </div>

            {/* Services */}
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Services</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {SERVICES.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Platform</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {PLATFORM.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Company</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {COMPANY.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '24px' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px' }}>Email</p>
                <a href="mailto:blake.safetyconsultant@gmail.com" className="footer-email">blake.safetyconsultant@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(74,144,196,0.15)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
              © {new Date().getFullYear()} COR Pathways. All rights reserved. Ontario · Alberta · BC · Saskatchewan
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '13px' }}>📞</span>
              <a href="tel:7808325158" className="footer-tel">tel. 780-832-5158</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
