/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/app',
                destination: '/channels',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
