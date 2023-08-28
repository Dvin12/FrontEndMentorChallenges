/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      redText: "hsl(356,100%,66%)",
      redHoverBg: "hsl(355,100%,74%)",
      blueHeadings: "hsl(208,49%,24%)",
      white: "hsl(0, 0%, 100%)",
      blueFooterTxt: "hsl(240,2%,79%)",
      blueBody: "hsl(207,13%,34%)",
      blueFooterBg: "hsl(240,10%,16%)",
      navVlRed: "hsl(13,100%,72%)",
      navLRed: "hsl(353,100%,62%)",
      bodyGrayBlue: "hsl(237,17%,21%)",
      bodyDesaturatedBlue: "hsl(237,23%,32%)",
    },
  },
  plugins: [],
};
