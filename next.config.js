/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper host configuration for browser access
  // This allows the dev server to be accessible
  async rewrites() {
    return [];
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/about#contact',
        permanent: true,
      },
      {
        source: '/compliance-portals',
        destination: '/compliance',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
