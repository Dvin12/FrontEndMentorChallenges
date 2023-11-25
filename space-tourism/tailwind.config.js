/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      bellefair: ["Bellefair"],
      barlowCondensed: ["Barlow Condensed"],
      serif: ["sans-serif"],
    },
    colors: {
      darkBlue: "#0B0D17",
      skyBlue: "#D0D6F9",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
};
