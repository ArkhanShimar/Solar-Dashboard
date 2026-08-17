/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bone: {
          50: "#F7F5F0",
          100: "#EDEAE3",
          200: "#D6D1C7",
          300: "#C2BDB2",
        },
        pitch: {
          600: "#3A413C",
          700: "#2A2F2B",
          800: "#1E2320",
          900: "#141714",
        },
        brass: {
          400: "#D4B04A",
          500: "#C4962A",
          600: "#9A7518",
        },
        signal: {
          400: "#5A9A6C",
          500: "#2F7A4A",
          600: "#24613A",
        },
        ink: {
          400: "#6F746E",
          500: "#4E534E",
          700: "#2A2F2B",
          900: "#141714",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        numbers: ["Big Shoulders Display", "Arial Narrow", "sans-serif"],
        sans: ["Atkinson Hyperlegible", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 20px -16px rgba(20, 23, 20, 0.45)",
        lift: "0 10px 22px -14px rgba(20, 23, 20, 0.55)",
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
