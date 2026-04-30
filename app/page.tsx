import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'COR 2020 Certification Software for Ontario & Alberta',
  description:
    'COR Pathways is the digital safety management platform built for Ontario and Alberta construction companies. Track all 14 COR 2020 elements, manage 70+ safety forms, and pass your audit in 3 to 9 months.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'COR Pathways: COR 2020 Certification Software for Ontario & Alberta',
    description:
      'Track all 14 COR 2020 elements, manage 70+ safety forms, and pass your audit in 3 to 9 months. Built for Ontario and Alberta construction companies.',
    url: '/',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COR Pathways: COR 2020 Certification Software for Ontario & Alberta',
    description:
      'Track all 14 COR 2020 elements, manage 70+ safety forms, and pass your audit in 3 to 9 months.',
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbJsonLd([{ name: 'Home', path: '/' }])}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Built for COR 2020 · Ontario & Alberta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 tracking-tight">
            COR 2020 certification, in{' '}
            <span className="text-orange">3 to 9 months.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Three months in Alberta, nine in Ontario. The digital safety management platform built for the realities of construction work, not the convenience of a software vendor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/signup"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Start 14-day free trial →
            </a>
            <a
              href="/how-it-works"
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center transition-colors"
            >
              See how it works
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-300 flex-wrap">
            <div>✓ No credit card required</div>
            <div>✓ Cancel anytime</div>
            <div>✓ Free setup assistance</div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="container mx-auto px-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">3-9</div>
              <div className="text-gray-600">Months to certify</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">14</div>
              <div className="text-gray-600">COR 2020 elements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">70+</div>
              <div className="text-gray-600">Pre-built forms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">100%</div>
              <div className="text-gray-600">Offline-capable</div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
              COMPLETE SOLUTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Everything You Need for COR Certification
            </h2>
            <p className="text-xl text-gray-600">
              Manage all 14 COR elements in one powerful platform. Built specifically for Ontario and Alberta construction companies.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-6">
                <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">14-Element Compliance Tracking</h3>
              <p className="text-gray-600 mb-4">
                Track progress across all COR 2020 elements with real-time dashboards. Know exactly where you stand at any moment.
              </p>
              <a href="/features#compliance" className="text-orange font-semibold hover:underline">
                Learn more →
              </a>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-6">
                <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">70+ Pre-Built Safety Forms</h3>
              <p className="text-gray-600 mb-4">
                Daily inspections, toolbox talks, hazard assessments, and incident reports. All ready to use on any device.
              </p>
              <a href="/features#forms" className="text-orange font-semibold hover:underline">
                Learn more →
              </a>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-6">
                <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Worker Training & Certifications</h3>
              <p className="text-gray-600 mb-4">
                Track all worker certifications, set expiry reminders, and never miss a renewal deadline again.
              </p>
              <a href="/features#training" className="text-orange font-semibold hover:underline">
                Learn more →
              </a>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-6">
                <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Mock COR Audit Simulator</h3>
              <p className="text-gray-600 mb-4">
                Practice with AI-powered interview questions and observations before your real audit. Know what to expect.
              </p>
              <a href="/features#audit" className="text-orange font-semibold hover:underline">
                Learn more →
              </a>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-6">
                <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Works Offline</h3>
              <p className="text-gray-600 mb-4">
                Field crews can complete forms offline. Data syncs automatically when back online. Never lose data.
              </p>
              <a href="/features#offline" className="text-orange font-semibold hover:underline">
                Learn more →
              </a>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-6">
                <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Equipment & Maintenance Tracking</h3>
              <p className="text-gray-600 mb-4">
                Manage equipment inventory, schedule preventive maintenance, and track all service records in one place.
              </p>
              <a href="/features#equipment" className="text-orange font-semibold hover:underline">
                Learn more →
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              From Signup to Certification in 4 Steps
            </h2>
            <p className="text-xl text-gray-600">
              A practical 4-phase pathway built around the standard 9-month COR 2020 program timeline.
            </p>
          </div>
          
          {/* Timeline Steps */}
          <div className="max-w-4xl mx-auto">
            
            {/* Step 1 */}
            <div className="relative flex items-start gap-8 mb-12">
              {/* Timeline Line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-orange/30"></div>
              
              {/* Step Number */}
              <div className="relative z-10 w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              
              {/* Step Content */}
              <div className="flex-1 pt-1">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold text-navy mb-3">Phase 1 · Sign Up & Setup</h3>
                  <p className="text-gray-600 mb-4">
                    Create your account, add your company info, and invite your team. Our onboarding wizard guides you through initial setup in under 30 minutes.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Free setup assistance from our team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Import existing worker and equipment data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Access 70+ pre-built templates immediately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex items-start gap-8 mb-12">
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-orange/30"></div>
              <div className="relative z-10 w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1 pt-1">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold text-navy mb-3">Phase 2 · Build Your Program</h3>
                  <p className="text-gray-600 mb-4">
                    Work through the 14 COR elements at your own pace. Upload policies, create procedures, train workers, and build your safety culture.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Daily operations: toolbox talks, inspections, forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Real-time compliance tracking shows your progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Identify gaps early with our compliance scoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex items-start gap-8 mb-12">
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-orange/30"></div>
              <div className="relative z-10 w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1 pt-1">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold text-navy mb-3">Phase 3 · Audit Preparation</h3>
                  <p className="text-gray-600 mb-4">
                    Practice with our Mock Audit Simulator. Get AI-powered feedback on your documentation, interview responses, and site observations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Practice actual COR 2020 audit questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Generate evidence packages for auditors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Identify and fix gaps before the real audit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative flex items-start gap-8">
              <div className="relative z-10 w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1 pt-1">
                <div className="bg-white rounded-lg p-6 shadow-md border-2 border-green-500">
                  <h3 className="text-2xl font-bold text-navy mb-3">Phase 4 · Pass Your Audit</h3>
                  <p className="text-gray-600 mb-4">
                    Schedule your COR audit with confidence. Our platform provides all the documentation and evidence auditors need to see.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Export audit-ready evidence packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Mock audit prep removes audit-day surprises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Continue using COR Pathways for maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <a 
              href="/signup" 
              className="inline-block bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors"
            >
              Start Your COR Journey Today →
            </a>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-block bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What&apos;s different
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            We fit your business. Not the other way around.
          </h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Most safety platforms force you to redo your program in their format. Forms get translated into their templates. Procedures get squeezed into their workflow. Whatever you&apos;ve already built either gets thrown out or warped to fit.
          </p>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            We don&apos;t believe a software vendor should dictate how your business runs. The forms you&apos;ve refined over years, the procedures your crews actually follow, the way your supervisors track training, all of that comes with you. The platform adapts around your program, not the reverse.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            And we&apos;re priced to match the market, not above it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start your COR 2020 pathway.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Built for Ontario and Alberta contractors. Manage compliance, track worker certifications, and walk into your COR 2020 audit prepared.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Start 14-day free trial
            </a>
            <a
              href="/pricing"
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center transition-colors"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
