/** @type {import('tailwindcss').Config} */
const { join } = require('path')

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
          gray: {
            50: '#949494',
          },
          green: {
            100: '#008B44',
          },
          blue: {
            50: '#017CBF',
          },
          purple: {
            600: '#5F69E2',
          },
          yellow: {
            100: '#DACE00',
          },
          orange: {
            500: '#F58634',
          },
        },
      },
    },
  },
  plugins: [],
}
