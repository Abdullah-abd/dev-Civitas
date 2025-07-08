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
        secondary: "#CD535E",
        accent: "#F65353",
        background: "#FDF5F6",
        mutedGreen: "#CDE3D3",
        darkText: "#202020",
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
