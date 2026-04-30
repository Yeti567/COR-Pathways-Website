import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
            404
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We couldn&apos;t find that page.
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            The link may be out of date, or the page may have moved. Try one of these instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Back to home
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

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">
            Or jump to a section
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/features" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="font-semibold text-navy mb-1">Features</div>
              <div className="text-sm text-gray-600">14-element tracking, 70+ forms, mock audit simulator.</div>
            </Link>
            <Link href="/pricing" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="font-semibold text-navy mb-1">Pricing</div>
              <div className="text-sm text-gray-600">Starter, Professional, and Enterprise plans.</div>
            </Link>
            <Link href="/about" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="font-semibold text-navy mb-1">About</div>
              <div className="text-sm text-gray-600">Who builds COR Pathways and how to reach us.</div>
            </Link>
            <Link href="/about#contact" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="font-semibold text-navy mb-1">Contact</div>
              <div className="text-sm text-gray-600">Email Blake or call 780-832-5158.</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
