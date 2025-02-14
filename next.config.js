const withNextIntl = require("next-intl/plugin")();
const path = require("path");

/** @type {import('next').NextConfig} */
const config = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "src"), // Alias for `src/`
        };
        return config;
    },
};

module.exports = withNextIntl(config);
