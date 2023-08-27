/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      barlow: ["Barlow"],
      fraunces: ["Fraunces"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      softRed: "hsl(7,99%,70%)",
      yellow: "hsl(51,100%,49%)",
      dCyan: "hsl(167,40%,24%)",
      dBlue: "hsl(198,62%,26%)",
      mCyan: "hsl(168,34%,41%)",
      vDBlue: "hsl(212,27%,19%)",
      vDGrayBlue: "hsl(213,9%,39%)",
      dGrayBlue: "hsl(232,10%,55%)",
      grayBlue: "hsl(210,4%,67%)",
      white: "hsl(0,0%,100%)",
    },
  },
  plugins: [],
};
