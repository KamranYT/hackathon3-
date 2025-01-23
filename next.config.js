/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Protocol of the image source
          hostname: 'cdn.sanity.io', // Hostname of the image source
          pathname: '/**', // Path pattern to allow all paths from this domain
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  