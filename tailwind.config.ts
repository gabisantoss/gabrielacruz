import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    theme: {
        fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config;
