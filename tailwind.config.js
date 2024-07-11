/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#28CB8B",
        secondaryColor: "#263238",
        info: "#2194f3",
        black: "#263238",
        darkGrey: "#4D4D4D",
        grey: "#717171",
        greyBlue: "#ABBED1",
        silver: "#F5F7FA",
        white: "#FFFFFF",
        lightGrey: "#89939E",
        mainColorShadeOne: "#43A046",
        mainColorShadeTwo: "#388E3B",
        mainColorShadeThree: "#237D31",
        mainColorShadeFour: "#1B5E1F",
        mainColorShadeFive: "#103E13",
        mainColorTintOne: "#66BB69",
        mainColorTintTwo: "#81C784",
        mainColorTintThree: "#A5D6A7",
        mainColorTintFour: "#C8E6C9",
        mainColorTintFive: "#E8F5E9",
        warning: "#FBC02D",
        error: "#E53835",
        success: "#2E7D31",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "1xl": "0.5rem",
        "2xl": "1.5rem",
        "3xl": "2.0rem",
        "4xl": "2.5rem",
        "5xl": "3.0rem",
        "6xl": "3.5rem",
        "7xl": "4.0rem",
        "8xl": "4.5rem",
        "9xl": "5.0rem",
        "10xl": "5.5rem",
        "11xl": "6.0rem",
        "12xl": "6.5rem",
      },
      screens: {
        xsm: "320px",
        sm: "480px",
        xmd: "640px",
        md: "768px",
        xlg: "1024px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};