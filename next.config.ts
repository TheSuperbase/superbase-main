import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services/badminton-calendar", destination: "/work/badminton-calendar", permanent: true },
      { source: "/services", destination: "/#work", permanent: true },
      { source: "/terms", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
