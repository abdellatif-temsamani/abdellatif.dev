import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                primary: "4px 6px 0px 0px rgba(8,47,73,1)",
                card: "6px 8px 0px 0px rgba(8,47,73,1)",
            },
            boxShadow: {
                primary: "4px 6px 0px 0px rgba(8,47,73,1)",
                card: "6px 8px 0px 0px rgba(8,47,73,1)",
            },
        },
    },
    plugins: [],
};
export default config;
