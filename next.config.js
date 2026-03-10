/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
