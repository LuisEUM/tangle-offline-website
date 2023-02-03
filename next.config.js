/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'nl'],
    defaultLocale: 'en'
  }
}
module.exports = nextConfig
