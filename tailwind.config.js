/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
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
          900: "rgb(var(--ink) / <alpha-value>)",
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
          400: "rgb(var(--ink-muted) / <alpha-value>)",
          500: "rgb(var(--ink-mid) / <alpha-value>)",
          700: "rgb(var(--ink-mid) / <alpha-value>)",
          900: "rgb(var(--ink) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        numbers: ["Big Shoulders Display", "Arial Narrow", "sans-serif"],
        sans: ["Atkinson Hyperlegible", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(20, 23, 20, 0.06), 0 12px 28px -14px rgba(20, 23, 20, 0.35)",
        lift: "0 12px 30px -12px rgba(20, 23, 20, 0.5)",
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
