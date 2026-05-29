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
        // Aliases semánticos (usados en componentes existentes)
        ink:   '#1A1A1A',
        paper: '#F5F2EA',

        // Colores institucionales eTrib / LK
        etrib: {
          teal:  '#0F4C5C',
          deep:  '#0A3845',
          mint:  '#2EC4B6',
          paper: '#F5F2EA',
          ink:   '#1A1A1A',
          dark:  '#1e293b',
          nav:   '#0f172a',
        },

        // Escala primaria
        primary: {
          50:  '#f0f9fa',
          100: '#d6eef2',
          200: '#a8d9e7',
          300: '#6bbdd5',
          400: '#2EC4B6',
          500: '#1a8fa0',
          600: '#0F4C5C',
          700: '#0A3845',
          800: '#072d38',
          900: '#04212a',
          950: '#021518',
        },
      },
    },
  },
  plugins: [],
}
