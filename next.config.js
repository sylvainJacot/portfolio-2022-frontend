/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
  },  
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  
}

module.exports = nextConfig

