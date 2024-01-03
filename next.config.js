/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
    env: {
        THEME: process.env.THEME,
        API_URL: process.env.API_URL,
        SSO_URL: process.env.SSO_URL,
        MANAGER_URL: process.env.MANAGER_URL,
        PROFILE_URL: process.env.PROFILE_URL,
        // FIREBASE
        ID: process.env.ID,
        API_KEY: process.env.API_KEY,
        PROJECT_ID: process.env.PROJECT_ID,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MEASUREMENT_ID: process.env.MEASUREMENT_ID,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    }
};

module.exports = nextConfig;
