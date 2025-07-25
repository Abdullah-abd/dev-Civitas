import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A8154",
        secondary: "#E7556E",
        accent: "#F65353",
        background: "#FDF5F6",
        mutedGreen: "#394E4A",
        darkText: "#6D3841",
      },
      screens: {
        nav: "1030px", // your custom screen breakpoint for the nav items
        logo: "240px", // your custom screen breakpoint for the logo 
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
