/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true, // This is important for Netlify deployment
  },
  // Changed for Netlify compatibility
  output: 'export',
  reactStrictMode: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true,
  // Enable compression for better performance
  swcMinify: true,
  // Configure CSS handling
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configure webpack
  webpack: (config) => {
    // Enable persistent caching
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    };

    return config;
  },
  // Optimize build performance
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
  experimental: {
    optimizePackageImports: ['react-icons']
  }
};

module.exports = nextConfig; 