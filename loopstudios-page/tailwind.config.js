/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Alata: ["Alata"],
      JosefinSans: ["Josefin Sans"],
    },
    extend: {},
    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      darkGray: "hsl(0, 0%, 55%)",
      vDarkGray: "hsl(0, 0%, 41%)",
    },
  },
  plugins: [],
};
