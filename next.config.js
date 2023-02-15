/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = [
  nextConfig,
  {
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ["en", "ka", "ru"],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: "en",
      localeDetection: false,
    },
  },
];
