/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      xs: '0.7rem',
      base: '1rem',
      xl: '1.875rem',
      xl_8:'7rem'
    },
    extend: {
      colors: {
        'overlay': 'rgba(0, 0, 0, 0.25)',
        'carrot': '#af5353'
      }
    },
  },
  plugins: [],
}