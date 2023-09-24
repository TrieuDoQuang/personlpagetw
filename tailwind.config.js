/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

