/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false, // Не будут видеть что сервак на Next
  env: { 
    CLIENT_HOST: process.env.CLIENT_HOST,
    CLIENT_PORT: process.env.CLIENT_PORT
  },
  images: { // Безопастность с какого домена грузим
    domains: ['localhost']
  },
  async rewrites() {
    return [
      {
        // Перенаправляем с локального api/path на серверный api/path NestJs 
        source: '/api/:path*', 
        destination: 'http://localhost:5000/api/:path'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:5000/uploads/:path'
      }
    ]
  }
}

module.exports = nextConfig
