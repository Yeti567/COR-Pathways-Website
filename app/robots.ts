import type { MetadataRoute } from 'next';

const SITE_URL = 'https://corpathway.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/app/',
          '/sign-in',
          '/sign-in/',
          '/signin',
          '/signin/',
          '/staging/',
          '/thank-you',
          '/thank-you/',
          '/geo/',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
