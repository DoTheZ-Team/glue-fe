/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
    return config;
  },
  images: {
    domains: ['glue-bucket-2024.s3.ap-northeast-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_STICKER_URL,
        port: '',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_URL,
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'www.glueyourday.kro.kr',
        port: '',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
