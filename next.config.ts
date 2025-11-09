/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint checks on build
  },
};

module.exports = nextConfig;
