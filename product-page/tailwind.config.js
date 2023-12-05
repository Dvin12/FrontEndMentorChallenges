/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      vDarkBlue: "hsl(220, 13%, 13%)",
      dGrayBlue: "hsl(219, 9%, 45%)",
      lGrayBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      transparent: "transparent",
    },
    fontFamily: {
      kumbhSans: ["Kumbh Sans"],
    },
  },
};
