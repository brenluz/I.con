/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#FEC400",
        "cinza": "#222629",
      },
      backgroundImage: {
        "waves": "url('/public/wave.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}