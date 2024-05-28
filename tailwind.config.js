/** @type {import('tailwindcss').Config} */
module.exports = {
  // prettier.config.js
  plugins: ["prettier-plugin-tailwindcss"],
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primaryIconColor: "#a9c3b6",
        secondaryIconColor: "#92bba6",
        primary: "#475569",
        secondary: "#656d72",
        // background
        bgPrimary: "#fff",
        bgSecondary: "#fbfbfb",
        bgThird: "#a9c3b619",

        // dark mode
        darkPrimaryIconColor: "#e2e8f0",
        darkPrimary: "#cbd5e1",
        darkSecondary: "#94a3b8",
        bgDarkPrimary: "#0f172a",
        bgDarkSecondary: "rgba(15,23,42,0.99)",
      },
      dropShadow: {
        mdCustom: "0 2px 2px #dbeafe",
      },
      boxShadow: {
        lg: ["0 9px 15px -3px #e2e8f0", "0 4px 6px -4px #e2e8f0"],
        portfolioImg: "7px 8px 4px 0px rgb(0 0 0 / 0.2)",
      },
      letterSpacing: {
        titleSpacing: "6px",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
