import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color (ensure CSS variable is defined)
        foreground: "var(--foreground)", // Custom foreground color (ensure CSS variable is defined)
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
      },
      backgroundImage: {
        hero: "url('/Image1.jpeg')", // Background image (must be in public folder)
        hero2: "url('/shophero.jpeg')", // Background image (must be in public folder)
      },
    },
  },
  plugins: [],
};

export default config;
