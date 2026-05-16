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
        soft: "0 22px 70px rgba(19, 24, 35, 0.14)",
        glow: "0 0 0 1px rgba(255,255,255,0.12), 0 18px 60px rgba(24,194,156,0.18)",
      },
      colors: {
        accent: {
          mint: "#18c29c",
          cyan: "#4ea3f1",
          amber: "#d7a84f",
          rose: "#df6f82",
        },
      },
    },
  },
  plugins: [],
};
export default config;
