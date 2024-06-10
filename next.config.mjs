/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
    return config;
  },
  images: {
    domains: [
      process.env.NEXT_PUBLIC_STICKER_URL,
      process.env.NEXT_PUBLIC_IMAGE_URL,
      'www.glueyourday.kro.kr',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_URL,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_STICKER_URL,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'www.glueyourday.kro.kr',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
