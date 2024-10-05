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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ourwhite: "#D9D9D9",
        ourgray: "#4A4947",
        ourbrown: "#B17457",
      },
      fontFamily: {
        Ubuntu: ["var(--font-Ubuntu)"],
      },
    },
  },
  plugins: [],
};
export default config;
