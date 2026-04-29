import type { Metadata } from 'next';

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
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
