/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Barlow: ["Barlow"],
      BarlowCondense: ["Barlow Condensed"],
    },
    colors: {
      red: "hsl(0,100%,68%)",
      vDarkBlue: "hsl(230,29%,20%)",
      dGrayBlue: "hsl(230,11%,40%)",
      grayBlue: "hsl(231,7%,65%)",
      lGrayBlue: "hsl(207,33%,95%)",
    },
    extend: {},
  },
  plugins: [],
};
