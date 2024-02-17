/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cream: '#fff8f0',
      pink: '#F8B3B3',
      blueish: {
        50: '#d8efec',
        100: '#A2D7D1',
        150: '#59A8A4',
        200: '#203152'
      },
    },
    extend: {},
  },
  plugins: [],
}

