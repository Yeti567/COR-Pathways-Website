import type { Metadata } from 'next';

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
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
