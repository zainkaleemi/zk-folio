/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Media is pre-optimised (WebP, compressed video/GLB) and rendered with plain <img>.
    unoptimized: true,
  },
}

export default nextConfig
