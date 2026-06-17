/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Unsplash — for development placeholder images
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Supabase Storage — for production food photos
      // Replace <YOUR_PROJECT_REF> with your actual Supabase project ref
      // {
      //   protocol: 'https',
      //   hostname: '<YOUR_PROJECT_REF>.supabase.co',
      //   pathname: '/storage/v1/object/public/**',
      // },
    ],
  },
}

module.exports = nextConfig
