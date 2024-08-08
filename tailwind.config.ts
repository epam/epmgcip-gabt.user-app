import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "white-text": "#FEFEFE",
      "dark-red": "#A80403",
      "footer-bg": " #160807",
      "light-gold": "#F2D7A2",
      "light-almond": "#F9EED7",
      "gold-fusion": "#E7B24C",
      "golden-yellow": "#E7B24C",
    },
  },
  plugins: [],
};
export default config;


