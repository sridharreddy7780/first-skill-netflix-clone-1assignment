/** next.config.js */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ia.media-imdb.com',
        pathname: '/**',
      },
    ],
  },
  turbopack: { root: "." },
  allowedDevOrigins: ["http://localhost:3000"],
};

module.exports = nextConfig;
