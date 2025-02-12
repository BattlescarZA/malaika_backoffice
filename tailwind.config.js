/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Gold
          50: '#FFFDF0',
          100: '#FFF8CC',
          200: '#FFF3A3',
          300: '#FFEE7A',
          400: '#FFE952',
          500: '#FFD700',
          600: '#D4B300',
          700: '#A68C00',
          800: '#796600',
          900: '#4C4000',
        },
        secondary: {
          DEFAULT: '#000000', // Black
          50: '#F2F2F2',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}