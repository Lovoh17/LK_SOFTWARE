/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        ink:   '#0a0a0a',
        paper: '#f7f5f0',
      },
    },
  },
  plugins: [],
}
