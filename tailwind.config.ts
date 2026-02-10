import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#CAAA82",
          light: "#FFEBC3",
          dark: "#A88A6A",
        },
        cream: "#FFEBC3",
        dark: {
          DEFAULT: "#1A1A1A",
          deep: "#0F0F0F",
          deeper: "#000000",
        },
        neutral: "#F5F5F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-termina)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(202, 170, 130, 0.3)',
        'gold-inset': 'inset 0 2px 40px rgba(202, 170, 130, 0.1)',
        'dark-inset': 'inset 0 40px 80px -10px rgba(26, 26, 26, 0.8)',
        'dramatic': '0 20px 60px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
