import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

const SITE_URL = 'https://corpathway.com';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Blake',
  jobTitle: 'Founder and Safety Consultant',
  description:
    'Working safety consultant and founder of COR Pathways. Builds the platform around the realities of small and mid-sized contractors in Ontario, Alberta, and British Columbia.',
  email: 'blake.safetyconsultant@gmail.com',
  telephone: '+1-780-832-5158',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  knowsAbout: [
    'COR 2020 certification',
    'SECOR certification',
    'Construction health and safety',
    'Audit preparation',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4702 Birch Lane',
    addressLocality: 'Barriere',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
};

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about COR Pathways and get in touch with our team.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | COR Pathways',
    description:
      'The digital safety management platform for construction companies in Ontario and Alberta. Built by a working safety consultant.',
    url: '/about',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | COR Pathways',
    description:
      'Built by a working safety consultant for Ontario and Alberta construction companies.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <JsonLd data={personJsonLd} />
      {children}
    </>
  );
}
