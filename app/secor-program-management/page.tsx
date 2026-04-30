import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

const SITE_URL = 'https://corpathway.com';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SECOR Program Management',
  serviceType: 'SECOR program management software',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'AdministrativeArea', name: 'Alberta' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Small employers (under 10 workers)',
  },
  description:
    'Software-guided SECOR program management for Alberta small employers. Self-audit support, document templates, and training tracking in one platform.',
  url: `${SITE_URL}/secor-program-management`,
};

export const metadata: Metadata = {
  title: 'SECOR Program Management for Alberta Small Employers',
  description:
    'SECOR program management software for Alberta small employers (under 10 workers). Build your health and safety program, complete your self-audit, and earn the Small Employer Certificate of Recognition.',
  alternates: { canonical: '/secor-program-management' },
  openGraph: {
    title: 'SECOR Program Management | COR Pathways',
    description:
      'Software-guided SECOR program management for Alberta small employers. Self-audit support, document templates, and training tracking in one platform.',
    url: '/secor-program-management',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SECOR Program Management | COR Pathways',
    description:
      'SECOR software for Alberta small employers — self-audit support, templates, and training tracking.',
  },
};

const phases = [
  {
    title: 'Build the program',
    description:
      'Use our pre-built policy and procedure templates, tailored for Alberta small employers, to assemble a SECOR-ready safety program in weeks rather than months.',
  },
  {
    title: 'Train and document',
    description:
      'Track worker orientations, hazard assessments, and toolbox talks. Every record is timestamped and mapped to the SECOR audit instrument.',
  },
  {
    title: 'Run the self-audit',
    description:
      'Walk through the SECOR self-audit instrument inside the platform. We surface the documentation auditors expect to see for each question.',
  },
  {
    title: 'Submit and maintain',
    description:
      'Generate the audit submission package, then keep your program active with annual maintenance audits — same platform, same workflow.',
  },
];

export default function SecorPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'SECOR Program Management', path: '/secor-program-management' },
        ])}
      />
      <JsonLd data={serviceJsonLd} />
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Built for Alberta · Under 10 workers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
            SECOR program management, end to end.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            The Small Employer Certificate of Recognition was built for Alberta companies with under ten workers. We built the software to match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Start 14-day free trial →
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              A four-step pathway to SECOR
            </h2>
            <p className="text-xl text-gray-600">
              The same platform that takes larger Alberta companies through full COR is calibrated for small employers pursuing SECOR.
            </p>
          </div>
          <div className="space-y-6">
            {phases.map((p, i) => (
              <div key={p.title} className="flex items-start gap-6 bg-gray-50 rounded-xl p-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{p.title}</h3>
                  <p className="text-gray-600">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy mb-6">
            What SECOR is, briefly
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            SECOR — the Small Employer Certificate of Recognition — is Alberta&apos;s health and safety certification for employers with fewer than ten workers. It carries the same WCB rebate eligibility as full COR and uses the same Partnerships in Injury Reduction framework, but the audit instrument is sized for small operations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For larger employers, or for Ontario contractors, see <Link href="/compliance" className="text-orange hover:underline">full COR 2020 compliance tracking</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start your SECOR pathway.
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
