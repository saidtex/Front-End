/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // Adjust this according to your API route pattern
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
      {
        source: "/static/:path*", // Adjust this according to your static asset path pattern
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600", // Example: cache static assets for 1 hour
          },
        ],
      },
    ];
  },
};

export default nextConfig;

