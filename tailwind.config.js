/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  thedarkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        oswald: ["Oswald"],
      },
      colors: {
        ams: "#bada55",
        kopi: "#c0fee",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  me: {
    extend: {},
  },
  plugins: [],
};
