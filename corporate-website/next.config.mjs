/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.co'], // Optional: Allow images from specific domains
        // loader: 'cloudinary', // Optional: Use a different loader (e.g., 'akamai')
        // path: 'https://example.com/images', // Optional: Set the path to your image CDN
        // quality: 75, // Optional: Set the image quality (default: 75)
        formats: ['image/webp'], // Optional: Specify supported formats (default: ['image/jpeg'])
      },
};

export default nextConfig;
