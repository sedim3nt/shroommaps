import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // Type-check runs separately via `npm run type-check`
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

export default nextConfig
