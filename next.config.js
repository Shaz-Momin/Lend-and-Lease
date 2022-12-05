/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  source: "/_next/:path*",
  headers: [
    { key: "Access-Control-Allow-Origin", value: '*' },
  ]
}

module.exports = nextConfig
