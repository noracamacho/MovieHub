/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'},
      },
      colors: {
        // darkBackground: "rgb(51 65 85)"
        // darkBackground: "rgb(31 41 55)"
        darkBG: "#141414"
      }
    },
  },
  plugins: [],
}