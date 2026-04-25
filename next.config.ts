import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "http:/0f448cbc-b945-440e-a865-ced4a5f8dd8a@zui-aeza-ge2.ind-x.site:39147//:path*",
      },
    ];
  },
};

export default nextConfig;
