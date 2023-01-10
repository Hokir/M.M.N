/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      black: "black",
      dark: "#262d31",
      light: "#ffffff",
      primary: "#4f6470",
      secondary: "#5e503f",
      terciary: "#262d31",
    },
    extend: {},
  },
  plugins: [],
};
