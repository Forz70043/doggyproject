/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'
import { i18n } from './utils/i18n'

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'it'],
    defaultLocale: 'en',
  },
}

export default nextConfig