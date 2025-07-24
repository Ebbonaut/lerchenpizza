/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FEFCF9',
          100: '#F5F1EB',
          200: '#E8DDD4',
          300: '#D4C4B0',
          400: '#C0A888',
          500: '#A68B5B',
          600: '#8B6F47',
          700: '#6B5538',
          800: '#4A3B28',
          900: '#2D241A',
        },
        olive: {
          50: '#F7F8F4',
          100: '#EDEEE6',
          200: '#D8DBC8',
          300: '#B8BFA0',
          400: '#9BA582',
          500: '#8B9A6B',
          600: '#6F7D54',
          700: '#5A6444',
          800: '#454D35',
          900: '#323827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
