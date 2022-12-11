const plugin = require("tailwindcss/plugin")

const typographyPlugin = plugin(
  ({ addUtilities, e, theme }) => {
    const typography = theme("typography", {})

    addUtilities(
      Object.entries(typography).map(
        ([className, [fontSize, lineHeight, fontWeight]]) => ({
          [`.${e(className)}`]: {
            fontSize,
            lineHeight,
            fontWeight
          }
        })
      )
    )
  },
  {
    theme: {
      typography: {
        "headline-xl-500": [58, 66.7 / 58, 500],
        "headline-xl-400": [58, 66.7 / 58, 400],
        "headline-l-600": [46, 52.9 / 46, 600],
        "headline-l-400": [46, 52.9 / 46, 400],
        "headline-m-600": [33, 37.95 / 33, 600],
        "headline-m-500": [33, 37.95 / 33, 500],
        "headline-m-400": [33, 37.95 / 33, 400],
        "headline-s-600": [23, 26.45 / 23, 600],
        "headline-s-500": [23, 26.45 / 23, 500],
        "headline-s-400": [23, 26.45 / 23, 400],
        "headline-xs-600": [19, 21.85 / 19, 600],
        "headline-xs-500": [19, 21.85 / 19, 500],

        "paragraph-l-500": [19, 25.65 / 19, 500],
        "paragraph-l-400": [19, 25.65 / 19, 400],
        "paragraph-m-700": [15, 20.25 / 15, 700],
        "paragraph-m-500": [15, 20.25 / 15, 500],
        "paragraph-m-400": [15, 20.25 / 15, 400],
        "paragraph-s-700": [13, 17.55 / 13, 700],
        "paragraph-s-500": [13, 17.55 / 13, 500],
        "paragraph-s-400": [13, 17.55 / 13, 400],
        "paragraph-xs-500": [11, 14.85 / 11, 500]
      }
    }
  }
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: [typographyPlugin]
}
