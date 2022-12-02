/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#21955d",
        black: "#333",
        orange: "#ED744A",
        peach: "#FFE9DF",
        yellow: "#F2B735",
        "yellow-light": "#FCEAC3",
        gray: "#5C5C5C",
        "gray-light": "#999999",
        "gray-white": "#E2E8F0",
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
};
