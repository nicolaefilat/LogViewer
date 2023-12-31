/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
                'gradient-reverse': 'linear-gradient(-30deg, var(--tw-gradient-stops))'
            },
        },
    },
    safelist: [
        {
            pattern: /bg-(red|green|blue)-(500|600|700)/,
            variants: ['hover', 'active'],
        },
    ],
    plugins: [],
    darkMode: "class"
}

