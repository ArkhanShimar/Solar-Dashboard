/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FBF6EE",
          100: "#F3E8D4",
          200: "#E6D2B5",
          300: "#D4B896",
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
        sans: ["Atkinson Hyperlegible", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(44, 38, 33, 0.05), 0 14px 28px -18px rgba(44, 38, 33, 0.3)",
        lift: "0 10px 28px -12px rgba(196, 92, 42, 0.38)",
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
