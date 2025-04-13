/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
