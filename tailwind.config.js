/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightyellow: "#F8F6E3",
        slightlylighter: "#97E7E1",
        turquoise: "#69d4dc",
        cornflowerblue: "#7aa1e2",
      },
      fontSize: {
        sm: "12px",
        md: "18px",
        lg: "24px",
      },
    },
  },
  plugins: [],
};
