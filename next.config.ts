/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["zlxrjljduncisrpyitpf.supabase.co"],
  },
};

module.exports = nextConfig;
