module.exports = {
  corePlugins: {
    ringWidth: false,
    ringColor: false,
    ringOpacity: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      left :{
        "-5.5": "-5.5"
      }
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/custom-forms")],
}
