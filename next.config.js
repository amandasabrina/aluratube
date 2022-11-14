/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // trailingSlash: true,
  images: {
    // domains: ['avatars.githubusercontent.com'],
    domains: ['github.com'],
  },
  // images: {
  //   formats: ['image/png'],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'assets.github.com',
  //       port: '',
  //       pathname: '',
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
