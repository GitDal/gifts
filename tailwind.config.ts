import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      "wiggle": {
        "0%, 100%": { transform: "rotate(-2.5deg)" },
        "50%": { transform: "rotate(2.5deg)" },
      },
      "-wiggle": {
        "0%, 100%": { transform: "rotate(-2.5deg) scaleX(-1)", },
        "50%": { transform: "rotate(2.5deg) scaleX(-1)" },
      }
    },
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "nogen-restaurant": "url('https://usercontent.one/wp/www.restaurantnoegen.dk/wp-content/uploads/2023/04/Restaurant_Nogen_aftensmad-anretninger.webp')",
        "nordsminde-restaurant": "url('https://www.fiskehusetnorsminde.dk/img/fiskehus.png')",
        "stamp-card": "url('https://img.freepik.com/premium-photo/old-brown-paper-texture-background_52701-43.jpg')",
      },
      animation: {
        "wiggle-slow": "wiggle 1s ease-in-out infinite",
        "wiggle-medium": "wiggle .5s ease-in-out infinite",
        "wiggle-fast": "wiggle .25s ease-in-out infinite",
        "-wiggle-slow": "-wiggle 1s ease-in-out infinite",
        "-wiggle-medium": "-wiggle .5s ease-in-out infinite",
        "-wiggle-fast": "-wiggle .25s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
