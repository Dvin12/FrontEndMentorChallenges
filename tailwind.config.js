/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Raleway: ["Raleway"],
    },
    extend: {
      backgroundImage: {
        "bg-desktop": "url('./public/assets/images/bg-desktop.png')",
        "bg-mobile": "url('./public/assets/images/bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
