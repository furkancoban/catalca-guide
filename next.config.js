/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion'],
    turbotrace: {
      logLevel: 'error',
      logDetail: true,
    },
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true,
  // Enable compression for better performance
  swcMinify: true,
  // Enable webpack caching
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    };
    return config;
  },
};

module.exports = nextConfig; 