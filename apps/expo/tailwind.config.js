// @ts-check

const { theme } = require('app/design/tailwind/theme')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./App.tsx', '../../packages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...theme,
    colors: {
      'mid-brown': '#504244',
      white: '#FDFDFD',
    },
  },
  plugins: [],
}
