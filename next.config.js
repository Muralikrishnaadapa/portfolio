/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // Set basePath to /portfolio
  images: { unoptimized: true }, // Disable image optimization for GitHub Pages
  webpack(config) {
    // Modify Webpack to handle ES modules in node_modules
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules/,
      type: "javascript/auto", // This tells Webpack to treat the files as ES modules
    });
    return config;
  },
};

module.exports = nextConfig;