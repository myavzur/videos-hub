/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false, // * Hide "X-Powered-By: NEXT" header 
  env: { 
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
  },
  images: { // * Allows images from this domains
    domains: [process.env.SERVER_URL, "picsum.photos"]
  },

  // * Redirects requests from "www.videoshub.com" to "api.videoshub.com" 
  async rewrites() {
    return [
      {
        source: '/api/:path*', 
        destination: `${process.env.SERVER_URL}/api/:path*`
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.SERVER_URL}/uploads/:path*`
      }
    ]
  }
}

module.exports = nextConfig