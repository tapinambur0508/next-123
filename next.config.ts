import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [5, 10, 20, 75],
    remotePatterns: [
      {
        protocol: "https", hostname: "upload.wikimedia.org"
      },
    ]
  }
};

export default nextConfig;
