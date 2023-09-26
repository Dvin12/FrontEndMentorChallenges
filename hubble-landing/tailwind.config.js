/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
      OpenSans: ["Open Sans"],
    },
    colors: {
      pink: "hsl(322,100%,66%)",
      lPink: "hsl(321,100%,78%)",
      lRed: "hsl(0,100%,63%)",
      cyan: "hsl(192,100%,9%)",
      blue: "hsl(207,100%,98%)",
    },
    extend: {},
  },
  plugins: [],
};
