/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* --- Newspaper / Lab Theme Colors --- */
        paper: {
          DEFAULT: "#6ec3c9", // ovarian-cancer cyan (main background)
          ink: "#1a1a1a",     // dark ink for body text
          faded: "#334155"    // subtle gray-blue ink
        },
        accent: {
          DEFAULT: "#2b49c2", // dark blue ink (used in links)
          50:  "#f0f3fa",
          100: "#d9e1f5",
          200: "#b5c3eb",
          300: "#8fa4e1",
          400: "#6a84d6",
          500: "#4965cc",
          600: "#2b49c2",
          700: "#213a9a",
          800: "#1a2e78",
          900: "#14245d"
        }
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)", // very light print shadow
      },
      fontFamily: {
        serif: ["Lora", "EB Garamond", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
    },
  },
  plugins: [],
}
