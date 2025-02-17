/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        accent: "#FFC80D",
        dark: "#242321",
      },
      fontFamily: {
        roboto: ["Roboto", "sanss-serif"],
      },
    },
  },
  plugins: [],
};
