/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
