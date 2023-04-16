/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts(x)}'],
  theme: {
    extend: {
      boxShadow: {
        selectShadow:
          'box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
