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
        saturn: {
          blue: "#8fb8ed",
          blueDark: "#5a8bc2",
          pink: "#f2a7ca",
          pinkDark: "#d17b9f",
          space: "#0a0a1a",
        }
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a1a 100%)',
      }
    },
  },
  plugins: [],
};
export default config;

