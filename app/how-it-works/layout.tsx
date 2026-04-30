import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it really take to get COR certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Timeline depends on your province. Alberta's COR program is structured to be completable in about 3 months. Ontario's is a 9-month program. Both assume you're working consistently through the 14 elements and conducting daily operations. Traditional methods (paper and Excel) typically take longer because of the manual work involved in tracking and documentation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be tech-savvy to use COR Pathways?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. COR Pathways is designed for construction companies, not tech companies. If you can use a smartphone or check email, you can use COR Pathways. We also provide free onboarding assistance and training for your team.',
      },
    },
    {
      '@type': 'Question',
      name: "What happens if we don't pass the audit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If you don't pass, the auditor will give you a detailed report of exactly what needs improvement. You can address those gaps in COR Pathways and schedule a follow-up audit (typically 30 to 60 days later). The Mock Audit feature is designed to surface those gaps before the real audit, not after.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can we import our existing safety documents and data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can upload existing policies, procedures, and training certificates. You can also import worker lists, certifications, and equipment data via CSV/Excel. This saves significant time during setup. Our team can help you with bulk imports during onboarding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does COR Pathways work offline in the field?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. COR Pathways is a Progressive Web App (PWA) that works completely offline. Your site supervisors can complete toolbox talks, inspections, and incident reports without internet. All data syncs automatically when they're back online. This is perfect for remote job sites with poor connectivity.",
      },
    },
    {
      '@type': 'Question',
      name: "What's included in the free trial?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 14-day free trial includes full access to all features: all 70+ forms, Mock Audit Simulator, document management, training tracking, equipment management, and unlimited users. No credit card required. You can import your data, invite your team, and start working through the 14 COR elements immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is COR Pathways only for companies pursuing initial certification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. COR Pathways is also useful for companies maintaining their COR certification — daily operations, annual maintenance audits, and 3-year recertification. Many companies continue using COR Pathways after certification because it makes safety management easier than spreadsheets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much support do we get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All plans include email support (response within 24 hours). Premium and Enterprise plans include phone support and dedicated success managers. We also offer optional onboarding packages where our team helps you import data, configure settings, and train your staff. Our support team has extensive COR and construction safety experience.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how COR Pathways helps construction companies in Ontario and Alberta achieve COR 2020 certification in 9 months.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How It Works | COR Pathways',
    description:
      'A practical 4-phase approach to COR 2020 certification. Three months in Alberta, nine in Ontario.',
    url: '/how-it-works',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works | COR Pathways',
    description:
      'A practical 4-phase pathway to COR 2020 — three months in Alberta, nine in Ontario.',
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'How It Works', path: '/how-it-works' },
        ])}
      />
      <JsonLd data={faqJsonLd} />
      {children}
    </>
  );
}
