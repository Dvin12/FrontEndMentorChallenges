/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      baiJamjuree: ["Bai Jamjuree"],
    },
    colors: {
      transparent: "transparent",
      cyan: "hsl(171, 66%, 44%)",
      lBlue: "hsl(233, 100%, 69%)",
      dBlue: "hsl(210, 10%, 33%)",
      grayBlue: "hsl(201, 11%, 66%)",
    },
    extend: {},
  },
  plugins: [],
};
