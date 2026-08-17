/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FFFcf8",
          100: "#F8F1E7",
          200: "#E8DCC8",
          300: "#D4C4A8",
        },
        clay: {
          400: "#E07B4A",
          500: "#C45C2A",
          600: "#A3481F",
          700: "#7A3418",
        },
        moss: {
          400: "#6B8F71",
          500: "#3F6B4A",
          600: "#2F5238",
        },
        ink: {
          400: "#7A7168",
          500: "#5C534A",
          700: "#2C2621",
          900: "#161310",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        numbers: ["Big Shoulders Display", "Arial Narrow", "sans-serif"],
        sans: ["Atkinson Hyperlegible", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(255, 255, 255, 0.8), 0 10px 24px -14px rgba(44, 38, 33, 0.4)",
        lift: "0 12px 26px -12px rgba(196, 92, 42, 0.45)",
      },
      keyframes: {
        softPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "soft-pulse": "softPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
