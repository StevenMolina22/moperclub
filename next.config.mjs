/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "moperclub-bucket.s3.amazonaws.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "marcadegol.com" },
      { hostname: "www.dexter.com.ar" },
    ],
  },
};

export default nextConfig;
