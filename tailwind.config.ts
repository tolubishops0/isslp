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
        xs: "350px", //@media (min-width: 380px) { ... }
        xsm: "400px", //@media (min-width: 380px) { ... }
        sm: "640px", //@media (min-width: 640px) { ... }
        md: "768px", //@media (min-width: 768px) { ... }
        lg: "1024px", //@media (min-width: 1024px) { ... }
        xl: "1280px", //@media (min-width: 1280px) { ... }
        "2xl": "1536px", //@media (min-width: 1536px) { ... }
      },
      transitionDuration: {
        200: "200ms",
      },
      transitionDelay: {
        100: "100ms",
      },
      backgroundImage: {
        // meshbg: meshbg,
        herobg: "rgba(255, 244, 161, 0.1)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
