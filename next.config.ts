import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos"
      },
      {
        protocol: "https",
        hostname: "aiproject.liara.run"
      },
      {
        protocol: "https",
        hostname: "storage.c2.liara.space"
      }
    ]
  }
}

export default nextConfig