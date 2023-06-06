/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},

    // External fonts & colors.. needed in this project

    fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },

    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      brightBlue: "#2b84ea",
      greenLight: "#61cea6",
      grayText: "#818597",
      grayShadow: "#E8E8E8",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      lightGray: "#c4c4c4",
      gray2: "#525a76",
      borderGray: "hsla(229, 9.6%, 54.9%, 1)",
      color1: "rgba(74,144,245,0.21) -34.7%",
      color2: "rgba(125, 186, 244, 0.063) 100%",
      color3: "rgba(125, 186, 244, 0.1295) 100%"
    },

    backgroundPosition: {
      "hoverBgPos": "-2px -2px"
    }
  },
  plugins: [],
}

