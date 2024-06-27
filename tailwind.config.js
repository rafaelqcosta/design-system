const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // important: true,
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        ...colors.gray,
        brado: "#4C5567",
        COMAR1: "#A2A2A2",
      },
      green: colors.green,
      indigo: colors.indigo,
      red: colors.rose,
      cancel: "#ED5E68",
      yellow: colors.yellow,
      orange: {
        ...colors.orange,
        brado: "#DD6B20",
      },
      blue: colors.blue,
      slate: colors.slate,
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
