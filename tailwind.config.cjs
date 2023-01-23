/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#31E3C9",
        "footer": "#1A2125",
        "gray-introduction": "#555555",
        "yellow-custom": "#FCD33F"
      },
      "fontFamily": {
        "quick-sand": "QuickSand",
        "nunito": "NunitoSans"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}