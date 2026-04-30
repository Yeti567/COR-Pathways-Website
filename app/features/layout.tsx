import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Discover all the powerful features that help construction companies in Ontario and Alberta achieve COR 2020 certification.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features | COR Pathways',
    description:
      '14-element compliance tracking, 70+ safety forms, mock audit simulator, training management, and offline field tools.',
    url: '/features',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features | COR Pathways',
    description:
      '14-element compliance tracking, 70+ safety forms, mock audit simulator, and training management.',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
        ])}
      />
      {children}
    </>
  );
}
