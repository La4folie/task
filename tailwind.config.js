/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        beace: "rgba(190, 172, 226)",
        "cus-purple": "#1C1529",
        "cus-black": "#0B0810",
      },
    },
  },
  plugins: [],
}

