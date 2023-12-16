const { postcss } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  purge: {
    enabled: true,
    content: ["./**/*.{html,js}",
    "/JS/**/*..js"],
  },
  content: ["./**/*.{html,js}",
  "/JS/**/*..js"],
  theme: {
    extend: {},
  },
  plugins: [postcss],
}

