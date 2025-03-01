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
    unoptimized: true, // This is important for Netlify deployment
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
    turbotrace: {
      logLevel: 'error',
      logDetail: true,
      memoryLimit: 4096,
    },
    optimizeCss: true,
    forceSwcTransforms: true,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true,
  // Enable compression for better performance
  swcMinify: true,
  // Enable webpack caching
  webpack: (config, { dev, isServer }) => {
    // Enable persistent caching
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: '.next/cache',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    }

    // Optimize production builds
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        mergeDuplicateChunks: true,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            shared: {
              name(module, chunks) {
                return `shared-${chunks.map(c => c.name).join('-')}`
              },
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    return config
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configure Netlify-specific settings
  target: 'serverless',
  // Optimize build performance
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig; 