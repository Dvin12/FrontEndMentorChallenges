/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Raleway: ["Raleway"],
      openSans: ["Open Sans"],
    },
    colors: {
      dBlue: "hsl(243,87%,12%)",
      desBlue: "hsl(238,22%,44%)",
      blue: "hsl(224,93%,58%)",
      cyan: "hsl(170,45%,43%)",
      gBlue: "hsl(240,75%,98%)",
      gray: "hsl(0,0%,75%)",
    },
  },
  plugins: [],
};
