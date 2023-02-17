/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "ka", "ru"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    localeDetection: false,
  },
};

module.exports = nextConfig;
