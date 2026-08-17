/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFCF7",
          100: "#F7EFE3",
          200: "#E8D7C0",
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
        card: "0 1px 0 rgba(22, 19, 16, 0.04), 0 12px 28px -14px rgba(22, 19, 16, 0.35)",
        lift: "0 10px 24px -12px rgba(164, 72, 31, 0.45)",
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
