import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const SITE_URL = 'https://corpathway.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'COR Pathways: COR Certification & Health and Safety Management',
    template: '%s | COR Pathways',
  },
  description:
    'COR Pathways helps Canadian construction companies get COR certified, manage contractor compliance, and run their safety programs with purpose-built software.',
  applicationName: 'COR Pathways',
  authors: [{ name: 'COR Pathways' }],
  creator: 'COR Pathways',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: 'COR Pathways',
    title: 'COR Pathways: COR Certification & Health and Safety Management',
    description:
      'COR certification consulting in Ontario, H&S program management across Alberta, BC, and Saskatchewan, plus ISNetworld, Avetta, and ComplyWorks setup and management. Built and run by an NCSO with two decades of field experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COR Pathways: COR Certification & Health and Safety Management',
    description:
      'COR certification, H&S program management, and contractor compliance, run by an NCSO. Ontario, Alberta, BC, Saskatchewan.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'COR Pathways',
  url: SITE_URL,
  logo: `${SITE_URL}/images/cor pathway logo trans.png`,
  email: 'blake.safetyconsultant@gmail.com',
  telephone: '+1-780-832-5158',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4702 Birch Lane',
    addressLocality: 'Barriere',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Ontario' },
    { '@type': 'AdministrativeArea', name: 'Alberta' },
    { '@type': 'AdministrativeArea', name: 'British Columbia' },
    { '@type': 'AdministrativeArea', name: 'Saskatchewan' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Blake Cowan',
    jobTitle: 'National Construction Safety Officer (NCSO)',
  },
}

const corConsultingService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'COR 2020 Certification Consulting',
  provider: { '@type': 'Organization', name: 'COR Pathways', url: SITE_URL },
  areaServed: { '@type': 'AdministrativeArea', name: 'Ontario' },
  description:
    'Full COR 2020 certification consulting for Ontario construction companies: program build, gap analysis, mock audit, and AuditSoft export.',
}

const safetyManagementService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Health and Safety Program Management (SE-COR)',
  provider: { '@type': 'Organization', name: 'COR Pathways', url: SITE_URL },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Alberta' },
    { '@type': 'AdministrativeArea', name: 'British Columbia' },
    { '@type': 'AdministrativeArea', name: 'Saskatchewan' },
  ],
  description:
    'Managed health and safety programs for small contractors on SE-COR programs across western Canada.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corConsultingService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(safetyManagementService) }}
        />
        <Nav />
        <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
