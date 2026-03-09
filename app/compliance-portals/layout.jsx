export const metadata = {
  title: 'ISNetworld, Avetta & ComplyWorks Setup & Management | COR Pathways',
  description: 'COR Pathways handles your ISNetworld, Avetta, and ComplyWorks compliance portal setup and monthly management. Get to green status fast. Done-for-you service for contractors across Canada and the USA.',
  keywords: [
    'ISNetworld setup Canada',
    'ISNetworld setup USA',
    'Avetta setup Canada',
    'Avetta setup USA',
    'ComplyWorks setup Alberta',
    'ISNetworld management service',
    'Avetta management service',
    'contractor compliance portal management',
    'ISNetworld green status',
    'Avetta prequalification',
    'ISNetworld RAVS program',
    'WCB compliance portal',
    'OSHA compliance portal',
    'ISNetworld Alberta',
    'Avetta contractor Canada',
    'compliance portal done for you',
    'COR Pathways',
  ].join(', '),
  authors: [{ name: 'COR Pathways', url: 'https://corpathway.com' }],
  creator: 'COR Pathways',
  metadataBase: new URL('https://corpathway.com'),
  alternates: {
    canonical: '/compliance-portals',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ISNetworld, Avetta & ComplyWorks Setup & Management | COR Pathways',
    description: 'Done-for-you compliance portal setup and monthly management for contractors. ISNetworld, Avetta, ComplyWorks. Canada and USA. Get green fast.',
    url: 'https://corpathway.com/compliance-portals',
    siteName: 'COR Pathways',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/Canadian Hero Regional Visual ISN Landing.webp',
        width: 1200,
        height: 630,
        alt: 'ISNetworld and Avetta compliance portal management for contractors — COR Pathways',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISNetworld, Avetta & ComplyWorks Setup & Management | COR Pathways',
    description: 'Done-for-you compliance portal setup and monthly management. Get green status fast. Canada and USA.',
    images: ['/images/Canadian Hero Regional Visual ISN Landing.webp'],
  },
}

export default function CompliancePortalsLayout({ children }) {
  return children
}
