/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "hsl(0, 0%, 0%)",
      dGray: "hsl(0, 0%, 48%)",
      dCyan: "hsl(176, 72%, 28%)",
      cyan: "hsl(176, 50%, 47%)",
    },
    fontFamily: {
      commissioner: ["Commissioner"],
    },
    extend: {},
  },
  plugins: [],
};
