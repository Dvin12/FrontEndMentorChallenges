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
      darkBg: "hsl(230,17%,14%)",
      lightBgPattern: "hsl(225, 100%, 98%)",
      darkBgPattern: "hsl(232,19%,15%)",
      lightCardBg: "hsl(227,47%,96%)",
      darkCardBg: "hsl(228,28%,20%)",
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
