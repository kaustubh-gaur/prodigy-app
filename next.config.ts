/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["zlxrjljduncisrpyitpf.supabase.co"],
  },
  webpack: (config: import("webpack").Configuration) => {
    config.externals = [...(config.externals || []), "zlib"];
    return config;
  },
};

module.exports = nextConfig;
