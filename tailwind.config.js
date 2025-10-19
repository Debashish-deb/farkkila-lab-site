/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#f7f7f2", ink: "#1a1a1a", faded: "#3b3b3b" },
        accent: {
          DEFAULT: "#2b49c2", 50:"#f1f3fb",100:"#dfe5f7",200:"#bcc7ef",300:"#96a6e5",
          400:"#6f83d8",500:"#4c64cd",600:"#2b49c2",700:"#213a9a",800:"#1a2e78",900:"#14245d"
        }
      },
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,0.08)" },
      fontFamily: { serif: ["Lora","EB Garamond","serif"], sans: ["Inter","ui-sans-serif","system-ui"] }
    },
  },
  plugins: [],
}