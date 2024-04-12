/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
      },
      colors: {
        brand: {
          orange: '#F04623',
          gray: {
            50: "#949494",
          },
          green: {
            100: "#C5E884"
          },
          blue: '#50ADE6',
          purple: {
            600: '#5F69E2'
          },
          yellow: {
            100: "#DACE00"
          },
        },
      },
    },
  },
  plugins: [],
}
