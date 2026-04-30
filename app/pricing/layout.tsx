import { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Choose the perfect plan for your construction company. Flexible pricing options to suit businesses of all sizes. All plans include a 14-day free trial.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | COR Pathways',
    description:
      'Starter, Professional, and Enterprise plans. 14-day free trial, no credit card required.',
    url: '/pricing',
    type: 'website',
    siteName: 'COR Pathways',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | COR Pathways',
    description:
      'Starter, Professional, and Enterprise plans. 14-day free trial, no credit card required.',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I change plans later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. Upgrades take effect immediately, while downgrades take effect at the start of your next billing period.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free trial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all plans include a 14-day free trial with full access to all features. No credit card required to start your trial. You can cancel anytime during the trial period with no charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise plans can also be paid via bank transfer or invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer discounts for annual plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Annual plans save you up to 17% compared to monthly billing. This is automatically applied when you select the annual billing option.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I exceed my worker limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If you exceed your plan's worker limit, we'll notify you and give you the option to upgrade to a higher tier. You won't be charged extra fees automatically; we'll work with you to find the right plan.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a refund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied within the first 30 days, contact us for a full refund, no questions asked.",
      },
    },
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />
      <JsonLd data={faqJsonLd} />
      {children}
    </>
  );
}
