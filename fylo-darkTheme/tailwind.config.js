/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway"],
      openSans: ["Open Sans"],
    },
    colors: {
      introEmail: "hsl(217,28%,15%)",
      background: "hsl(218,28%,13%)",
      footer: "hsl(216,53%,9%)",
      testimonials: "hsl(219,30%,18%)",
      cyan: "hsl(176,68%,64%)",
      blue: "hsl(198,60%,50%)",
      lRed: "hsl(0,100%,63%)",
    },
    extend: {},
  },
  plugins: [],
};
