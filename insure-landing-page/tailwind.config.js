/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dmSerifDisplay: ["DM Serif Display"],
      Karla: ["Karla"],
    },
    colors: {
      darkViolet: "hsl(256,26%,20%)",
      vDarkViolet: "hsl(270,9%,17%)",
      darkGrayViolet: "hsl(273,4%,51%)",
      grayBLue: "hsl(216,30%,68%)",
      vLightGray: "hsl(0,0%,98%)",
    },
    extend: {},
  },
  plugins: [],
};
