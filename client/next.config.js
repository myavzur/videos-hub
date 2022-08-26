/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false, // *  Не будет видно что приложение на Next
  env: { 
    NEXT_CLIENT_URL: process.env.NEXT_CLIENT_URL
  },
  images: { // * Разрешить картинки с этого домена
    domains: ['localhost']
  },

  // * Redirect from {NextS/api/path} to {NestJS/api/path}
  async rewrites() {
    return [
      {
        source: '/api/:path*', 
        destination: `${process.env.NEST_SERVER_URL}/api/:path*`
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEST_SERVER_URL}/uploads/:path*`
      }
    ]
  }
}
// TODO: Translate

module.exports = nextConfig
