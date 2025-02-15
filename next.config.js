const withNextIntl = require("next-intl/plugin")();
const path = require("path");

/** @type {import('next').NextConfig} */
const config = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "src"),
        };
        return config;
    },
    env: {
        BASE_URL: process.env.NODE_ENV === 'production' ? 'https://gabrielacruz.fly.dev' : 'http://localhost:3000',
    }
};

module.exports = withNextIntl(config);
