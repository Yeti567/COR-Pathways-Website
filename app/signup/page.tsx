import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Start Your Free Trial',
  description:
    'Sign up for a 14-day free trial of COR Pathways. The COR 2020 certification platform for construction companies in Ontario and Alberta.',
  alternates: { canonical: '/signup' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Start Your Free Trial | COR Pathways',
    description: 'Sign up for a 14-day free trial of COR Pathways.',
    url: '/signup',
    type: 'website',
  },
};

export default function SignupPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Coming soon
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Self-serve signup is on the way.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Until the in-app signup is live, we&apos;re onboarding new accounts by hand. Email Blake and you&apos;ll be set up within one business day, with a free 30-minute walkthrough included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:blake.safetyconsultant@gmail.com?subject=COR%20Pathways%20trial%20signup"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Email Blake to start
            </a>
            <a
              href="tel:+17808325158"
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center transition-colors"
            >
              Call 780-832-5158
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            Prefer to read first? See{' '}
            <Link href="/how-it-works" className="text-orange hover:underline">
              how it works
            </Link>{' '}
            or{' '}
            <Link href="/pricing" className="text-orange hover:underline">
              pricing
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
