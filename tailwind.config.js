/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: ['Lato']
      },
      colors: {
        'c1': '#0D1B2A',
        'c2': '#1B263B',
        'c3': '#415A77',
        'c4': '#778DA9',
        'c5': '#E0E1DD'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1.3deg)' },
          '50%': { transform: 'rotate(1.3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        shake: 'shake 0.2s ease-in-out infinite',
        rotate: 'rotate 2s linear infinite'
      }
    },
  },
  plugins: [],
}

