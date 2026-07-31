/** @type {import('next').NextConfig} */
const useStaticExport = process.env.STATIC_EXPORT === 'true';

const formsBackend = (
  process.env.FORMS_BACKEND_URL ||
  process.env.BACKEND_URL ||
  'http://185.8.131.94:8091/api'
).replace(/\/$/, '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(useStaticExport
    ? {
        output: 'export',
        images: { unoptimized: true },
      }
    : {
        async rewrites() {
          if (!formsBackend) return [];
          // FORMS_BACKEND_URL=http://host:8091/api  →  /api/:path* proxies to that host
          const base = formsBackend.replace(/\/api$/, '');
          return [
            {
              source: '/api/:path*',
              destination: `${base}/api/:path*`,
            },
          ];
        },
      }),
};

module.exports = nextConfig;
