/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      PublicSans: ["Public Sans"],
    },
    colors: {
      transparent: "transparent",
      dBlue: "hsl(233, 26%, 24%)",
      lGreen: "hsl(136, 65%, 51%)",
      bCyan: "hsl(192, 70%, 51%)",
      gBlue: "hsl(233, 8%, 62%)",
      lightGB: "hsl(220, 16%, 96%)",
      veryLighG: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
