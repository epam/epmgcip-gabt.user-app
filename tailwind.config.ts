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
        "contact-info-contacts-bg": "url('/contact-info/contact-info-bg.png')",
        "contact-info-photo-img": "url('/contact-info/contact-info-img.jpg')",
      },
    },
    colors: {
      "white-text": "#FEFEFE",
      "dark-red": "#A80403",
      "footer-bg": "#160807",
      "light-gold": "#F7D7A2",
      "light-almond": "#F9E7D7",
      "gold-fusion": "#E7D24C",
      "golden-yellow": "#E7B24C",
      "creamy-yellow": "rgba(241, 227, 189, 1)",
      white: "#FFF",
      "light-yellow": "#F9EED7",
      black: "#160807",
      "warm-orange": "#E7B24C",
    },
  },
  plugins: [],
};
export default config;
