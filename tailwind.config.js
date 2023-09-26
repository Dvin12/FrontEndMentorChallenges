/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      sBlue: "hsl(231, 69%, 60%)",
      sRed: "hsl(0, 94%, 66%)",
      gBlue: "hsl(229, 8%, 60%)",
      vDarkBlue: "hsl(229, 31%, 21%)",
    },
    fontFamily: {
      rubik: ["Rubik"],
    },
    extend: {},
  },
  plugins: [],
};
