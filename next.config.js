/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove this line - static export doesn't support API routes
  // output: 'export',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;