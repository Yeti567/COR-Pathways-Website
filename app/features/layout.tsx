import type { Metadata } from 'next';

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
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
