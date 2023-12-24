/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "stpaulsapothek.dk"
            },
            {
                protocol: "https",
                hostname: "images.squarespace-cdn.com"
            }
        ]
    }
};

module.exports = nextConfig;
