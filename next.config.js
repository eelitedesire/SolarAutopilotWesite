/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    unoptimized: true,
    domains: ['downloads.yourdomain.com'],
  },
}

module.exports = nextConfig