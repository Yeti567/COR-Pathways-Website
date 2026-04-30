import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const SITE_URL = 'https://corpathway.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'COR Pathways: COR 2020 Certification Software for Ontario & Alberta',
    template: '%s | COR Pathways',
  },
  description:
    'The complete digital safety management system for construction companies in Ontario and Alberta. Streamline compliance, track certifications, and pass your COR audit with confidence.',
  applicationName: 'COR Pathways',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: 'COR Pathways',
    title: 'COR Pathways: COR 2020 Certification Software for Ontario & Alberta',
    description:
      'The complete digital safety management system for construction companies in Ontario and Alberta. Pass your COR audit with confidence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COR Pathways: COR 2020 Certification Software for Ontario & Alberta',
    description:
      'The complete digital safety management system for construction companies in Ontario and Alberta.',
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
};

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'COR Pathways',
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  image: `${SITE_URL}/opengraph-image`,
  email: 'blake.safetyconsultant@gmail.com',
  telephone: '+1-780-832-5158',
  priceRange: 'CA$299–CA$499 per month',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4702 Birch Lane',
    addressLocality: 'Barriere',
    addressRegion: 'BC',
    postalCode: 'V0E 1E0',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Ontario' },
    { '@type': 'AdministrativeArea', name: 'Alberta' },
    { '@type': 'AdministrativeArea', name: 'British Columbia' },
  ],
  knowsAbout: [
    'COR 2020 certification',
    'SECOR certification',
    'Construction health and safety',
    'Occupational health and safety management',
  ],
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'COR Pathways',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-CA',
};

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'COR Pathways',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Safety Management Software',
  operatingSystem: 'Web, iOS, Android',
  url: SITE_URL,
  description:
    'Digital safety management and COR 2020 certification platform for construction companies in Ontario and Alberta.',
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'CAD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '299',
      priceCurrency: 'CAD',
      unitText: 'MONTH',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
