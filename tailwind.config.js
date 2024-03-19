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
        lightgray: "#F5F6FA",
        borderColor: "#D5D5D",
        smoke: "#FAFBFD",
        darksmoke: "#F9F9FB",
        red: "#EE3F4C",
        gray1: "#F1F4F9",
        brown: "#565656"
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  daisyui: {
    darkTheme: "light"
  },
  plugins: [require("daisyui")],
};
