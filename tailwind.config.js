const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                accent: {
                    50: '#f0f4ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
                surface: {
                    primary: 'rgb(var(--surface-rgb))',
                    secondary: 'rgb(var(--surface-secondary-rgb))',
                },
                border: {
                    primary: 'rgb(var(--border-rgb))',
                },
                text: {
                    primary: 'rgb(var(--foreground-rgb))',
                    secondary: 'rgb(var(--text-secondary-rgb))',
                }
            },
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                        maxWidth: 'none',
                        color: 'rgb(var(--foreground-rgb))',
                        a: {
                            color: 'rgb(var(--accent-rgb))',
                            textDecoration: 'none',
                            fontWeight: '500',
                            '&:hover': {
                                color: 'rgb(var(--accent-light-rgb))',
                                textDecoration: 'underline',
                            },
                        },
                        h1: {
                            color: 'rgb(var(--foreground-rgb))',
                            fontWeight: '700',
                        },
                        h2: {
                            color: 'rgb(var(--foreground-rgb))',
                            fontWeight: '600',
                        },
                        h3: {
                            color: 'rgb(var(--foreground-rgb))',
                            fontWeight: '600',
                        },
                        h4: {
                            color: 'rgb(var(--foreground-rgb))',
                            fontWeight: '600',
                        },
                        strong: {
                            color: 'rgb(var(--foreground-rgb))',
                            fontWeight: '600',
                        },
                        code: {
                            color: 'rgb(var(--accent-rgb))',
                            backgroundColor: 'rgb(var(--surface-secondary-rgb))',
                            padding: '0.25rem 0.375rem',
                            borderRadius: '0.375rem',
                            fontSize: '0.875em',
                            fontWeight: '500',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
                quoteless: {
                    css: {
                        "blockquote p:first-of-type::before": { content: "none" },
                        "blockquote p:first-of-type::after": { content: "none" },
                    },
                },
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
                display: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-accent": "linear-gradient(135deg, rgb(var(--accent-rgb)), rgb(var(--accent-light-rgb)))",
            },
            animation: {
                "fade-in": "fade-in 0.6s ease-out forwards",
                "fade-in-up": "fade-in-up 0.6s ease-out forwards",
                "slide-in-left": "slide-in-left 0.6s ease-out forwards",
                "slide-in-right": "slide-in-right 0.6s ease-out forwards",
                "title": "title 4s ease-out forwards",
                "fade-left": "fade-left 3s ease-in-out forwards",
                "fade-right": "fade-right 3s ease-in-out forwards",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "fade-in-delayed": "fade-in 0.6s ease-out 4.2s forwards",
                "fadeinup-delayed": "fade-in-up 0.6s ease-out 4.4s forwards",
                "fadeleft-delayed": "fade-left 3s ease-in-out 4.6s forwards",
                "faderight-delayed": "fade-right 3s ease-in-out 4.6s forwards",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0%" },
                    "100%": { opacity: "100%" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0%", transform: "translateY(30px)" },
                    "100%": { opacity: "100%", transform: "translateY(0)" },
                },
                "slide-in-left": {
                    "0%": { opacity: "0%", transform: "translateX(-30px)" },
                    "100%": { opacity: "100%", transform: "translateX(0)" },
                },
                "slide-in-right": {
                    "0%": { opacity: "0%", transform: "translateX(30px)" },
                    "100%": { opacity: "100%", transform: "translateX(0)" },
                },
                "fade-left": {
                    "0%": { transform: "translateX(100%)", opacity: "0%" },
                    "30%": { transform: "translateX(0%)", opacity: "100%" },
                    "100%": { opacity: "0%" },
                },
                "fade-right": {
                    "0%": { transform: "translateX(-100%)", opacity: "0%" },
                    "30%": { transform: "translateX(0%)", opacity: "100%" },
                    "100%": { opacity: "0%" },
                },
                "title": {
                    "0%": { "line-height": "0%", "letter-spacing": "0.25em", opacity: "0" },
                    "25%": { "line-height": "0%", opacity: "0%" },
                    "80%": { opacity: "100%" },
                    "100%": { "line-height": "100%", opacity: "100%" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-debug-screens"),
        require('tailwindcss-grid'),
    ],
};