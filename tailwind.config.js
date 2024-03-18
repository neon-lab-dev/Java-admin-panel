/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#202224",
        primary: "#FD5454",
        grey: "#202224",
      },
    },
  },
  plugins: [],
};
