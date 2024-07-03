import type { Config } from "tailwindcss";
import { meshbg } from "./lib/utils";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        primary: "#0F0F0F",
        darkGray: "#393939",
        mediumGray: "#757575",
        darkBrown: "#473A10",
        darkBrown2: "#262626",
        lightGray: "#727272",
        veryLightCyan: "#F0FDFA",
        veryDarkBrown: "#1D1806",
        coolGray: "#7F839C",
        darkGray2: "#3A3A3A",
        veryDarkGray: "#0A0A0A",
        veryDarkBlueGray: "#090B19",
        darkSlateGray: "#515966",
        borderDarkColor: "#31280C",
      },
      fontSize: {
        normal: "1rem",
      },
      lineHeight: {
        normal: "1.5rem",
      },
      screens: {
        xxs: "280px",
        xs: "350px", 
        xsm: "400px", 
        sm: "640px", 
        md: "768px", 
        lg: "1024px", 
        xl: "1280px", 
        "2xl": "1536px",
      },
      transitionDuration: {
        200: "200ms",
      },
      transitionDelay: {
        100: "100ms",
      },
     
      keyframes: {
        infinite_scroll: {
          "100%": { transform: "translate(calc(-50% + 5rem))" },
        },
      },
      animation: {
        infinite_scroll: "infinite_scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
