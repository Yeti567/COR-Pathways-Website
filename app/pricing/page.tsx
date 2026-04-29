'use client';

import { useState } from 'react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 299,
      annualPrice: 2870,
      description: 'Perfect for small companies starting their COR journey',
      features: [
        { text: 'Up to 25 workers', included: true, bold: true },
        { text: 'All 70+ safety forms', included: true },
        { text: '14-element compliance tracking', included: true },
        { text: 'Training & certification tracking', included: true },
        { text: 'Document management', included: true },
        { text: 'Mobile & offline access', included: true },
        { text: 'Email support', included: true },
        { text: 'Mock Audit Simulator', included: false },
        { text: 'Priority support', included: false },
      ],
      popular: false,
    },
    {
      name: 'Professional',
      monthlyPrice: 499,
      annualPrice: 4790,
      description: 'For growing companies serious about COR certification',
      features: [
        { text: 'Up to 75 workers', included: true, bold: true },
        { text: 'Everything in Starter, plus:', included: true, bold: true, separator: true },
        { text: 'Mock Audit Simulator', included: true, highlight: true },
        { text: 'Equipment management', included: true },
        { text: 'Custom form builder', included: true },
        { text: 'Advanced analytics & reporting', included: true },
        { text: 'Priority email & phone support', included: true },
        { text: 'Free onboarding call', included: true },
        { text: 'Dedicated success manager', included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      description: 'For large organizations with complex safety management needs',
      features: [
        { text: 'Unlimited workers', included: true, bold: true },
        { text: 'Everything in Professional, plus:', included: true, bold: true, separator: true },
        { text: 'Dedicated success manager', included: true, highlight: true },
        { text: 'Multi-location management', included: true },
        { text: 'Custom integrations (API access)', included: true },
        { text: 'White-label options', included: true },
        { text: 'SLA guarantees', included: true },
        { text: 'Onsite training available', included: true },
        { text: 'Direct line to Blake', included: true },
      ],
      popular: false,
    },
  ];

  const comparisonFeatures = [
    { feature: 'Workers', starter: 'Up to 25', professional: 'Up to 75', enterprise: 'Unlimited' },
    { feature: 'Safety Forms', starter: 'All 70+', professional: 'All 70+', enterprise: 'All 70+' },
    { feature: 'Compliance Tracking', starter: 'Basic', professional: 'Advanced', enterprise: 'Advanced' },
    { feature: 'Mock COR Audit Simulator', starter: false, professional: true, enterprise: true },
    { feature: 'Training & Certification Tracking', starter: true, professional: true, enterprise: true },
    { feature: 'Equipment Management', starter: false, professional: true, enterprise: true },
    { feature: 'Offline Capability', starter: false, professional: true, enterprise: true },
    { feature: 'Custom Reporting', starter: false, professional: 'Standard', enterprise: 'Advanced' },
    { feature: 'Support', starter: 'Email', professional: 'Email & Phone', enterprise: 'Direct line to Blake' },
    { feature: 'Success Manager', starter: false, professional: false, enterprise: true },
    { feature: 'API Access', starter: false, professional: false, enterprise: true },
    { feature: 'Custom Integrations', starter: false, professional: false, enterprise: true },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SIMPLE PRICING
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent Pricing for Every Size Company
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Start free, scale as you grow. All plans include full access to COR Pathways features. No hidden fees.
            </p>
            
            {/* Quick Value Prop */}
            <div className="inline-block bg-white/10 px-6 py-3 rounded-lg">
              <div className="text-sm text-gray-300 mb-1">14-day free trial on every plan.</div>
              <div className="text-2xl font-bold text-orange">No credit card required.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-gray-700 font-semibold">Monthly</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-orange"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-gray-700 font-semibold">
              Annual 
              <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full ml-2">
                Save 20%
              </span>
            </span>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const monthlyTotal = typeof plan.monthlyPrice === 'number' ? plan.monthlyPrice * 12 : 0;
              const annualTotal = typeof plan.annualPrice === 'number' ? plan.annualPrice : 0;
              const savings = monthlyTotal - annualTotal;
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 relative transition-all ${
                    plan.popular
                      ? 'border-4 border-orange shadow-xl transform scale-105'
                      : 'border-2 border-gray-200 hover:border-orange hover:shadow-lg'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange text-white text-sm font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-navy mb-2">{plan.name}</h2>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-navy mb-2">
                      {plan.monthlyPrice === 'Custom' 
                        ? 'Custom'
                        : billingPeriod === 'monthly' 
                          ? `$${plan.monthlyPrice.toLocaleString()}`
                          : `$${plan.annualPrice.toLocaleString()}`
                      }
                      {plan.monthlyPrice !== 'Custom' && (
                        <span className="text-xl text-gray-500">/mo</span>
                      )}
                    </div>
                    {plan.monthlyPrice === 'Custom' ? (
                      <div className="text-sm text-gray-500">Contact us for pricing</div>
                    ) : (
                      <div className="text-sm text-gray-500">
                        {billingPeriod === 'monthly' 
                          ? `or $${plan.annualPrice.toLocaleString()}/year (save $${savings.toLocaleString()})`
                          : `or $${plan.monthlyPrice.toLocaleString()}/month`
                        }
                      </div>
                    )}
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => {
                      const isIncluded = feature.included;
                      const isHighlighted = feature.highlight;
                      const isBold = feature.bold;
                      const isSeparator = feature.separator;
                      
                      return (
                        <li key={featureIndex} className="flex items-start gap-2">
                          {isIncluded ? (
                            <svg
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                isHighlighted ? 'text-orange' : 'text-green-500'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          <span
                            className={`text-sm ${
                              isIncluded
                                ? isBold
                                  ? 'text-gray-700 font-bold'
                                  : 'text-gray-700'
                                : 'text-gray-400 line-through'
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  {/* CTA */}
                  <a
                    href={plan.name === 'Enterprise' 
                      ? '/about#contact'
                      : `/signup?plan=${plan.name.toLowerCase()}`
                    }
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-orange text-white hover:bg-orange-700'
                        : 'bg-white border-2 border-orange text-orange hover:bg-orange hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </a>
                </div>
              );
            })}
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Compare Plans
              </h2>
              <p className="text-xl text-gray-600">
                See what&apos;s included in each plan
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-gray-200">
                      <th className="py-4 px-6 text-left text-gray-700 font-semibold">Feature</th>
                      <th className="py-4 px-6 text-center text-gray-700 font-semibold">Starter</th>
                      <th className="py-4 px-6 text-center text-gray-700 font-semibold">Professional</th>
                      <th className="py-4 px-6 text-center text-gray-700 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 text-gray-700 font-medium">{item.feature}</td>
                        <td className="py-4 px-6 text-center">
                          {typeof item.starter === 'boolean' ? (
                            item.starter ? (
                              <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg aria-hidden="true" className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )
                          ) : (
                            <span className="text-gray-700">{item.starter}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof item.professional === 'boolean' ? (
                            item.professional ? (
                              <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg aria-hidden="true" className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )
                          ) : (
                            <span className="text-gray-700">{item.professional}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof item.enterprise === 'boolean' ? (
                            item.enterprise ? (
                              <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg aria-hidden="true" className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )
                          ) : (
                            <span className="text-gray-700">{item.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Pricing Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our pricing plans
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Can I change plans later?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. Upgrades take effect immediately, while downgrades take effect at the start of your next billing period.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  Yes, all plans include a 14-day free trial with full access to all features. No credit card required to start your trial. You can cancel anytime during the trial period with no charges.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise plans can also be paid via bank transfer or invoice.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Do you offer discounts for annual plans?
                </h3>
                <p className="text-gray-600">
                  Yes! Annual plans save you up to 17% compared to monthly billing. This is automatically applied when you select the annual billing option.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  What happens if I exceed my worker limit?
                </h3>
                <p className="text-gray-600">
                  If you exceed your plan&apos;s worker limit, we&apos;ll notify you and give you the option to upgrade to a higher tier. You won&apos;t be charged extra fees automatically; we&apos;ll work with you to find the right plan.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Can I get a refund?
                </h3>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee on all paid plans. If you&apos;re not satisfied within the first 30 days, contact us for a full refund, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your COR Journey?
            </h2>
            <p className="text-xl mb-8 text-white">
              Built for Ontario and Alberta contractors. Walk into your COR 2020 audit prepared.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/signup" className="bg-white text-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 text-center">
                Start 14-Day Free Trial →
              </a>
              <a href="/about#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 text-center">
                Schedule a Demo
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-white/90">
              <div>✓ No credit card required</div>
              <div>✓ Full feature access</div>
              <div>✓ Free setup assistance</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
