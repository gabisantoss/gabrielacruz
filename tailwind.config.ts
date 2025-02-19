import defaultTheme from "tailwindcss/defaultTheme";

const config = {
    theme: {
        fontFamily: {
            sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config;
