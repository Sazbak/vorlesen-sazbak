const plugin = require("tailwindcss/plugin")

const typographyPlugin = plugin(
  ({ addUtilities, e, theme }) => {
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
  },
  {
    theme: {
      typography: {
        "headline-xl-500": [58, 66.7 / 58, 500, "Poppins"],
        "headline-xl-400": [58, 66.7 / 58, 400, "Poppins"],
        "headline-l-600": [46, 52.9 / 46, 600, "Poppins"],
        "headline-l-400": [46, 52.9 / 46, 400, "Poppins"],
        "headline-m-600": [33, 37.95 / 33, 600, "Poppins"],
        "headline-m-500": [33, 37.95 / 33, 500, "Poppins"],
        "headline-m-400": [33, 37.95 / 33, 400, "Poppins"],
        "headline-s-600": [23, 26.45 / 23, 600, "Poppins"],
        "headline-s-500": [23, 26.45 / 23, 500, "Poppins"],
        "headline-s-400": [23, 26.45 / 23, 400, "Poppins"],
        "headline-xs-600": [19, 21.85 / 19, 600, "Poppins"],
        "headline-xs-500": [19, 21.85 / 19, 500, "Poppins"],

        "paragraph-l-500": [19, 25.65 / 19, 500, "Poppins"],
        "paragraph-l-400": [19, 25.65 / 19, 400, "Poppins"],
        "paragraph-m-700": [15, 20.25 / 15, 700, "Poppins"],
        "paragraph-m-500": [15, 20.25 / 15, 500, "Poppins"],
        "paragraph-m-400": [15, 20.25 / 15, 400, "Poppins"],
        "paragraph-s-700": [13, 17.55 / 13, 700, "Poppins"],
        "paragraph-s-500": [13, 17.55 / 13, 500, "Poppins"],
        "paragraph-s-400": [13, 17.55 / 13, 400, "Poppins"],
        "paragraph-xs-500": [11, 14.85 / 11, 500, "Poppins"]
      }
    }
  }
)

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
      "headline-s-600": ["6.1333vw", { fontWeight: "600" }],
      "headline-m-600": ["3.6666vw", { fontWeight: "600" }],
      "headline-l-600": ["3.1944vw", { fontWeight: "600" }],
      "paragraph-s-500": ["13px", { fontWeight: "500" }],
      "paragraph-m-500": ["15px", { fontWeight: "500" }],
      "paragraph-l-500": ["19px", { fontWeight: "500" }]
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    screens: {
      tablet: "900px",
      desktop: "1440px"
    }
  },
  plugins: [typographyPlugin]
}
