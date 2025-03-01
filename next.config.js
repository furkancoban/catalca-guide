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
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
    turbotrace: {
      logLevel: 'error',
      logDetail: true,
      memoryLimit: 4096,
    },
    optimizeCss: {
      enabled: true,
      cssModules: true,
    },
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
    // Enable persistent caching with absolute path
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: path.resolve(__dirname, '.next/cache/webpack'),
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      name: isServer ? 'server' : 'client',
      version: '1.0.0'
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
              priority: 20,
            },
            shared: {
              name(module, chunks) {
                return `shared-${chunks.map(c => c.name).join('-')}`
              },
              minChunks: 2,
              reuseExistingChunk: true,
              priority: 10,
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
  // Optimize build performance
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
  // Error page handling
  errorBoundary: {
    errorComponent: true,
    onError: (error, errorInfo) => {
      console.error('Page Error:', error);
      console.error('Error Info:', errorInfo);
    }
  },
};

module.exports = nextConfig; 