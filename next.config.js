/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/dano',
                destination: '/',
                permanent: false,
            },
            {
                source: '/login',
                destination: '/auth/login',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
