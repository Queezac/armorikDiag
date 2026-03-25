import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'directus.armorik-diagnostics',
        port: '',
        pathname: '/assets/**'
      }
    ]
  },
};

export default nextConfig;
