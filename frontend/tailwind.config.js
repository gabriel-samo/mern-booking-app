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
        "dark-secondary": "#78705B",
        "off-white": "#E2E0DF"
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" }
        },
        slideOut: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(200%)" }
        },
        progress: {
          "0%": { width: "0px" },
          "10%": { width: "0px" },
          "100%": { width: "100%" }
        }
      },
      animation: {
        "slide-in": "slideIn 0.7s cubic-bezier(0.55,0.44,0.43,1.23)",
        "slide-out": "slideOut 0.7s cubic-bezier(0.74,-0.31,0.46,0.72)",
        progress:
          "progress 5s linear, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
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
