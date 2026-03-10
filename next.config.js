/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  // Prevent source maps in production
  productionBrowserSourceMaps: false,
  // Disable x-powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;
