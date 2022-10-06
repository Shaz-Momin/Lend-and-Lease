/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burntOrange: {
          50: '#FFFFFF',
          100: '#FFF3EB',
          200: '#FFDBC2',
          300: '#FFC499',
          400: '#FFAC70',
          500: '#FF9447',
          600: '#FF7C1F',
          700: '#F56600',
          800: '#CC5500',
          900: '#943E00'
        },
      }
    },
  },
  plugins: [],
}