import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

const SITE_URL = 'https://corpathways.com';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'COR 2020 Compliance Tracking',
  serviceType: 'COR 2020 compliance tracking software',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Ontario' },
    { '@type': 'AdministrativeArea', name: 'Alberta' },
  ],
  description:
    'Real-time scoring across all 14 COR 2020 elements with automatic evidence mapping and audit-ready reports.',
  url: `${SITE_URL}/compliance`,
};

export const metadata: Metadata = {
  title: 'COR 2020 Compliance Tracking',
  description:
    'Track all 14 COR 2020 elements in real time. Live compliance scoring, gap identification, and audit-ready evidence packages for Ontario and Alberta construction companies.',
  alternates: { canonical: '/compliance' },
  openGraph: {
    title: 'COR 2020 Compliance Tracking | COR Pathways',
    description:
      'Live scoring across all 14 COR 2020 elements. See gaps, fix them, and walk into your audit prepared.',
    url: '/compliance',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COR 2020 Compliance Tracking | COR Pathways',
    description:
      'Live scoring across all 14 COR 2020 elements. See gaps before your auditor does.',
  },
};

const elements = [
  'Management leadership and organizational commitment',
  'Hazard identification, assessment, and control',
  'Safe work practices and procedures',
  'Company rules',
  'Personal protective equipment',
  'Preventive maintenance',
  'Training and communication',
  'Inspections',
  'Investigations and reporting',
  'Emergency preparedness and response',
  'Statistics and records',
  'Legislation',
  'Joint health and safety committee',
  'Program administration and review',
];

export default function CompliancePage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Compliance Tracking', path: '/compliance' },
        ])}
      />
      <JsonLd data={serviceJsonLd} />
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Compliance Tracking
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
            Know exactly where you stand on all 14 COR 2020 elements.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Live scoring, automatic evidence mapping, and one-click reports for your auditor. No spreadsheets, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Start 14-day free trial →
            </Link>
            <Link
              href="/platform"
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center transition-colors"
            >
              See the full platform
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              What gets tracked
            </h2>
            <p className="text-xl text-gray-600">
              Every form, document, training record, and inspection is automatically mapped to the COR 2020 elements they support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {elements.map((el, i) => (
              <div key={el} className="flex items-start gap-3 bg-gray-50 rounded-lg p-5">
                <div className="flex-shrink-0 w-8 h-8 bg-orange/10 text-orange rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div className="text-gray-700 font-medium pt-1">{el}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Real-time scoring</h3>
              <p className="text-gray-600">
                Element-by-element completion percentages update as your team uploads policies, completes forms, and logs training.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Gap identification</h3>
              <p className="text-gray-600">
                See what&apos;s missing and what needs attention before your auditor flags it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Audit-ready reports</h3>
              <p className="text-gray-600">
                Generate evidence packages auditors expect — one click, one PDF, one trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop guessing where you stand.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Start 14-day free trial
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
