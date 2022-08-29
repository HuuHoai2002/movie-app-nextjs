/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["image.tmdb.org", "themoviedb.org"],
  },
};

module.exports = nextConfig;
