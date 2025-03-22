/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.[jt]sx?$/] },
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;

/* If you want to add remote images later, use remotePatterns instead of deprecated domains
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '', // No custom port
      pathname: '/**', // Allow all paths
    },
  ],
  formats: ["image/avif", "image/webp"],
},
*/
