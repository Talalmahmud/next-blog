import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add the external domain here
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
