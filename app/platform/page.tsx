import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

const SITE_URL = 'https://corpathways.com';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'COR Pathways Platform',
  serviceType: 'Health and safety management software',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Ontario' },
    { '@type': 'AdministrativeArea', name: 'Alberta' },
  ],
  description:
    'Digital safety management platform covering COR 2020 compliance tracking, safety forms, training records, equipment management, and audit preparation for construction companies.',
  url: `${SITE_URL}/platform`,
};

export const metadata: Metadata = {
  title: 'Platform Overview',
  description:
    'COR Pathways is the digital safety management platform for Ontario and Alberta construction companies. Compliance tracking, safety forms, training records, and audit prep in one system.',
  alternates: { canonical: '/platform' },
  openGraph: {
    title: 'Platform Overview | COR Pathways',
    description:
      'One platform for all 14 COR 2020 elements, 70+ safety forms, training records, and audit prep. Built for Ontario and Alberta construction.',
    url: '/platform',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Overview | COR Pathways',
    description:
      'Compliance tracking, safety forms, training records, and audit prep — one platform for the full COR 2020 program.',
  },
};

const pillars = [
  {
    href: '/compliance',
    title: 'Compliance Tracking',
    description:
      'Real-time scoring across all 14 COR 2020 elements. See gaps before your auditor does.',
  },
  {
    href: '/features#forms',
    title: 'Safety Forms',
    description:
      '70+ pre-built forms — daily hazard assessments, toolbox talks, inspections, incident reports — usable on any device, online or offline.',
  },
  {
    href: '/features#training',
    title: 'Training & Certifications',
    description:
      'Track every worker certification with automatic 60/30/7-day renewal alerts via email and SMS.',
  },
  {
    href: '/features#audit',
    title: 'Mock Audit Simulator',
    description:
      'Practice the real interview questions and observation prompts before your COR auditor walks the site.',
  },
  {
    href: '/features#equipment',
    title: 'Equipment & Maintenance',
    description:
      'Inventory, preventive maintenance schedules, and full service history in one place.',
  },
  {
    href: '/secor-program-management',
    title: 'SECOR Program Management',
    description:
      'A focused workflow for Alberta small employers (under 10 workers) pursuing SECOR certification.',
  },
];

export default function PlatformPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Platform', path: '/platform' },
        ])}
      />
      <JsonLd data={serviceJsonLd} />
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Platform Overview
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
            One platform for your entire COR 2020 program.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Compliance tracking, safety forms, training records, equipment, and audit prep — all built for the realities of Ontario and Alberta construction work.
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
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              What&apos;s in the platform
            </h2>
            <p className="text-xl text-gray-600">
              Six pillars that cover the full COR 2020 program — from daily field forms to audit-day evidence packages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <span className="text-orange font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to see it in action?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial or see pricing. No credit card required.
          </p>
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
