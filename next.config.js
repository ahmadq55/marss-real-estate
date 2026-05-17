/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "galaxy-prod.tlcdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
