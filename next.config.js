/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper host configuration for browser access
  // This allows the dev server to be accessible
  async rewrites() {
    return [];
  },
}

module.exports = nextConfig
