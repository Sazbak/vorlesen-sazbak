const constants = require("./constants")
const plugin = require("tailwindcss/plugin")

const typographyPlugin = plugin(({ addUtilities, e, theme }) => {
  const typography = theme("typography", {})

  addUtilities(
    Object.entries(typography).map(
      ([className, [fontSize, lineHeight, fontWeight, fontFamily]]) => ({
        [`.${e(className)}`]: {
          fontSize,
          lineHeight,
          fontWeight,
          fontFamily
        }
      })
    )
  )
})

/*TODO correct line height*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      pink: "#ffb39f",
      darkblue: "#30234a",
      blue: "#6c8dff",
      gray1: "#fafafa",
      gray2: "#eee"
    },
    fontSize: {
      "headline-xs-500": ["19px", { fontWeight: "500" }],
      "headline-xs-600": ["19px", { fontWeight: "600" }],
      "headline-s-500": ["23px", { fontWeight: "500" }],
      "headline-s-600": ["23px", { fontWeight: "600" }],
      "headline-m-500": ["33px", { fontWeight: "500" }],
      "headline-m-600": ["33px", { fontWeight: "600" }],
      "headline-l-600": ["46px", { fontWeight: "600" }],
      "paragraph-xs-500": ["11px", { fontWeight: "500" }],
      "paragraph-s-400": ["13px", { fontWeight: "400" }],
      "paragraph-s-500": ["13px", { fontWeight: "500" }],
      "paragraph-s-700-link": ["13px", { fontWeight: "700" }],
      "paragraph-m-500": ["15px", { fontWeight: "500" }],
      "paragraph-l-500": ["19px", { fontWeight: "500" }]
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    screens: {
      tablet: constants.tabletWidth,
      desktop: constants.desktopWidth
    },
    extend: {
      transitionProperty: {
        "max-height": "max-height"
      },
      keyframes: () => ({
        fadeInUp: {
          "0%": { opacity: 0, top: 200 },
          "100%": { opacity: 1, top: 0 }
        }
      }),
      animation: {
        fadeInUp: "fadeInUp 1s linear forwards"
      }
    }
  },
  plugins: [typographyPlugin]
}
