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
    plugins: [],
    darkMode: "class"
}

