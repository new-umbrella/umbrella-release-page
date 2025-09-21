import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Do not block production builds on ESLint errors
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
