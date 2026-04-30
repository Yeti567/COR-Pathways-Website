import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing the use of the COR Pathways website and platform.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | COR Pathways',
    description:
      'Terms governing the use of the COR Pathways website and platform.',
    url: '/terms',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | COR Pathways',
    description:
      'Terms governing the use of the COR Pathways website and platform.',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ])}
      />
      <section className="bg-navy-50 py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-gray-700 leading-relaxed">
          <p>
            These terms cover use of the COR Pathways website. A full agreement governing the platform itself, including subscription terms, data ownership, uptime commitments, and dispute resolution, will be presented at signup once the in-app signup is live.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">Use of this website</h2>
            <p>
              You may browse the public marketing pages of this website for any lawful purpose. You may not attempt to bypass rate limits, abuse the contact form, or scrape content for resale.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">No warranty</h2>
            <p>
              The information on this site is provided as-is. Statistics and outcomes shown reflect our experience with prior clients and are not a guarantee of any specific result on your COR audit. Your audit outcome depends on your safety program, your team, and the auditor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of the Province of British Columbia and the federal laws of Canada applicable therein.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">Contact</h2>
            <p>
              Questions about these terms can go to{' '}
              <a href="mailto:blake.safetyconsultant@gmail.com" className="text-orange hover:underline">
                blake.safetyconsultant@gmail.com
              </a>
              {' '}or 780-832-5158.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
