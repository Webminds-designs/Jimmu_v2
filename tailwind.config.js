/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFAF4",
        secondary: "#2d2d2d",
        assent: "#ffaa29",
      },
      fontFamily: {
        SF_Regular: ["SF_Regular", "sans-serif"],
        SF_Bold: ["SF_Bold", "sans-serif"],
        SF_Medium: ["SF_Medium", "sans-serif"],
        CARMINE:["Carmine","Carmine"]
      },
    },
  },
  plugins: [],
};
