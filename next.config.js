/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['example.com'], // keep only if you use external images
  },
};

module.exports = nextConfig;