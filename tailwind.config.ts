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
        primary: {
          DEFAULT: "#2C2C2C",
          light: "#3D3D3D",
        },
        accent: {
          DEFAULT: "#B08D57",
          light: "#C9A66B",
          dark: "#8F6F3F",
        },
        background: "#FAF9F6",
        surface: "#EFEBE3",
        "text-main": "#1A1A1A",
        "text-muted": "#6B6B6B",
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
