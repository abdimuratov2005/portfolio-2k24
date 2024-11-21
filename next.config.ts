import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
  compiler: {
      styledComponents: true,
      styledJsx: true,
  },
};

export default nextConfig;
