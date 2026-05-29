/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:          '#E8001D',
          'red-lt':     '#FF2D44',
          'red-dk':     '#C2001A',
          dark:         '#1d1d1f',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropSaturate: {
        180: '180%',
      },
    },
  },
  plugins: [],
}
