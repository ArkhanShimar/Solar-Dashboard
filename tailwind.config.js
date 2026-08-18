/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brass: {
          400: "#D4B04A",
          500: "#C4962A",
          600: "#9A7518",
        },
        signal: {
          500: "#2F7A4A",
          600: "#24613A",
        },
        ink: {
          900: "rgb(var(--ink) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        numbers: ["Big Shoulders Display", "Arial Narrow", "sans-serif"],
        sans: ["Atkinson Hyperlegible", "system-ui", "sans-serif"],
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
