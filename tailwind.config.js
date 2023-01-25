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
      "headline-s-600": ["23px", { fontWeight: "600" }],
      "headline-m-600": ["33px", { fontWeight: "600" }],
      "headline-l-600": ["46px", { fontWeight: "600" }],
      "paragraph-xs-500": ["11px", { fontWeight: "500" }],
      "paragraph-s-500": ["13px", { fontWeight: "500" }],
      "paragraph-s-700-link": ["13px", { fontWeight: "700" }],
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
