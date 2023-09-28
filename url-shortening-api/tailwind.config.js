/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins"],
    },
    colors: {
      transparent: "transparent",
      Cyan: "hsl(180, 66%, 49%)",
      dViolet: "hsl(257, 27%, 26%)",
      Red: "hsl(0, 87%, 67%)",
      Gray: "hsl(0, 0%, 75%)",
      gViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      veryDarkViolet: "hsl(260, 8%, 14%)",
      white: "#FFF",
    },
  },
  plugins: [],
};
