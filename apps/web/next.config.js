/** @type {import('next').NextConfig} */
const nextConfigs = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui'],
  optimizeFonts: true,
  experimental: {
    adjustFontFallbacks: true,
  },
  compiler: {
    styledComponents: {
      displayName: true,
      namespace: 'kamity',
    },
  },
}

module.exports = nextConfigs
