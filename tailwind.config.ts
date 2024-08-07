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
      backgroundImage: {
        "auth-gradient-bg":
          "linear-gradient(153.86deg, #f3e9ff -33.96%, #f9f9f9 94.15%)",
        "primary-gradient-bg":
          "linear-gradient(180deg, #8661AE 0%, #420C7C 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
