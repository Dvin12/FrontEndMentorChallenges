/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      vLGrayishBlue: "hsl(240,78%,98%)",
      lGrayishBlue: "hsl(234,14%,74%)",
      grayishBlue: "hsl(233,13%,49%)",
      dGrayishBlue: "hsl(232,13%,33%)",
      gradient1: "hsl(236,72%,79%)",
      gradient2: "hsl(237,63%,64%)",
      transparent: "hsl(0,0%,0%,0)",
    },
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [],
};
