/* eslint-disable @typescript-eslint/no-var-requires */
const nextTranslate = require("next-translate");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: { locales: ["en"], defaultLocale: "en", localeDetection: false },
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => [{ source: "/theme", destination: "/", permanent: true }],
  images: { domains: ["raw.githubusercontent.com"] },
};

module.exports = nextTranslate(nextConfig);
