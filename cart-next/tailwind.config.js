/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts(x)}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
