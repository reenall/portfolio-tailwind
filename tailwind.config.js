/** @type {import('tailwindcss').Config} */
module.exports = {
  // prettier.config.js
  plugins: ["prettier-plugin-tailwindcss"],
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    /* di luar extend, jadi 'menimpa' value default containernya */
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      colors: {
        primary: "#232e35",
        secondary: "#656d72",
        primaryIconColor: "#7e74f1",
        bgPrimary: "#fff",
        bgSecondary: "#fbfbfb",
        bgThird: "#f5f3fe",
        // dark mode
        darkPrimary: "#cbd5e1",
        darkSecondary: "#94a3b8",
        bgDarkPrimary: "#0f172a",
        bgDarkSecondary: "rgba(15,23,42,0.99)",
      },
      letterSpacing: {
        titleSpacing: "6px",
      },
      screens: {
        /* ganti size utilities '2xl'nya */
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
