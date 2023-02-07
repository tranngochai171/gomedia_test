/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.singmap.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
