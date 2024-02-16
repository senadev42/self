/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cream: '#fff8f0',
      pink: '#fedcd3',
      blueish: {
        50: '#e9e6f7',
        100: '#c7d8fa',
        200: '#203152'
      },
    },
    extend: {},
  },
  plugins: [],
}

