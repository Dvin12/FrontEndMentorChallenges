/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    colors: {
      lightBg: "hsl(0,0%,100%)",
      lightBgPattern: "hsl(225,100%,98%)",
      toggle: "hsl(230,22%,74%)",
      darkBg: "hsl(230,17%,14%)",
      darkBgPattern: "hsl(232,39%,15%)",
      lightCardBg: "hsl(227,47%,96%)",
      lightCardBgHover: "hsl(227,47%,90%)",
      darkCardBg: "hsl(228,28%,20%)",
      darkCardBgHover: "hsl(228,28%,30%)",
      lightTextSmall: "hsl(228, 12%, 44%)",
      lightTextBig: "hsl(230,17%,14%)",
      growth: "hsl(163,72%,41%)",
      loss: "hsl(356,69%,56%)",
      darkBigText: "hsl(0, 0%, 100%)",
      darkSmallText: "hsl(228,34%,66%)",
    },
    extend: {},
  },
  plugins: [],
};
