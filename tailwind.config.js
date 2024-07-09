/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(240, 38%, 20%)',
        grayishBlue: 'hsl(240, 18%, 77%)'

      },

      backgroundImage:{
        mainBg: "url('/pattern-bg.svg')",
        curve: "url('/pattern-curve.svg')",
        quotes: "url('/patteern-quotes.svg')"
      }
    },
  },
  plugins: [],
}