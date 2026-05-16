import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(15, 23, 42, 0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(34,197,221,0.14)",
      },
      colors: {
        accent: {
          mint: "#31d6a0",
          cyan: "#22c7dd",
          amber: "#f6b94b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
