/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans]
      },
      colors: {
        primary: "#E0DDD7",
        accent: "#ff9100",
        "accent-secondary": "#e9e8e4",
        dark: "#0C0D0D",
        "text-secondary": "#78705B",
        "off-white": "#E2E0DF"
      }
    },
    container: {
      padding: {
        md: "1rem"
      }
    }
  },
  plugins: []
};
