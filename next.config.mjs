/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath:'/danielle-landing-page',
    transpilePackages: ['lucide-react'], // add this
    output: 'export',
    distDir: 'dist',
    images: {
      unoptimized: true,
    }
  }

export default nextConfig;
