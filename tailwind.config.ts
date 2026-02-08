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
          light: "#D7A360",
          dark: "#C4A053",
        },
        cream: "#FFEBC3",
        dark: {
          DEFAULT: "#191919",
          deep: "#101010",
          deeper: "#160606",
        },
        neutral: "#F5F5F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        display: ["var(--font-bebas)", "cursive"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(202, 170, 130, 0.3)',
        'gold-inset': 'inset 0 2px 40px rgba(202, 170, 130, 0.1)',
        'dark-inset': 'inset 0 40px 80px -10px rgba(16, 16, 16, 0.8)',
        'dramatic': '0 20px 60px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
