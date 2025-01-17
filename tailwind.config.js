/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        md: "16px",
        lg: "100px",
      },
    },
    colors: {
      lightyellow: "#F8F6E3",
      slightlylighter: "#97E7E1",
      turquoise: "#69d4dc",
      cornflowerblue: "#7aa1e2",
      white: "#FFFFFF",
      black: "#000",
    },
  },
  plugins: [],
};
