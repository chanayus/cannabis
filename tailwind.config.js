/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#D2E6DC",
          200: "#A4CDB9",
          300: "#77B397",
          400: "#499A74",
          DEFAULT: "#1C8151",
        },
        red: "#ad2b2b",
        black: "#333",
        orange: "#ED744A",
        peach: "#FFE9DF",
        yellow: "#F2B735",
        "yellow-light": "#FCEAC3",
        gray: "#5C5C5C",
        "gray-light": "#999999",
        "gray-white": "#d3d9e2",
        "body-light": "#F6F6F6",
        "body-dark": "#181818",
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
