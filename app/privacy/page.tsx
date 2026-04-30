import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How COR Pathways handles personal information collected through this website.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | COR Pathways',
    description:
      'How COR Pathways handles personal information collected through this website.',
    url: '/privacy',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | COR Pathways',
    description:
      'How COR Pathways handles personal information collected through this website.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])}
      />
      <section className="bg-navy-50 py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-gray-700 leading-relaxed">
          <p>
            COR Pathways is operated by Blake&apos;s safety consulting practice in Barriere, British Columbia. This page describes how we handle the personal information you share with us through this website. A full, lawyer-reviewed privacy policy will replace this notice before the platform leaves private beta.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">What we collect</h2>
            <p>
              When you submit the contact form on the about page, we collect the name, email address, and message you provide. Server logs also record the IP address of the request for rate-limiting and abuse prevention.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">How we use it</h2>
            <p>
              We use this information solely to reply to your inquiry. We do not sell, trade, or share it with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">Cookies and tracking</h2>
            <p>
              This website does not set tracking cookies and does not use third-party analytics that profile individual visitors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">Contact</h2>
            <p>
              Questions about this policy, or requests to access or delete information you&apos;ve sent us, can go to{' '}
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
