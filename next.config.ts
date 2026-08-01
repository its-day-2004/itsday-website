import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/work/**", "**/node_modules/**", "**/.next/**"]
    };
    return config;
  }
};

export default nextConfig;
