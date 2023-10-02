/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      LeagueSpartan: ["League Spartan"],
    },
    colors: {
      lCyan: "hsl(180, 52%, 96%)",
      Cyan: "hsl(180, 31%, 95%)",
      desaturatedCyan: "hsl(180, 29%, 50%)",
      dCyan: "hsl(180, 8%, 52%)",
      veryDCyan: "hsl(180, 14%, 20%)",
    },
  },
  plugins: [],
};
