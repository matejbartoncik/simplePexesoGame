

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "/JS/**/*..js"],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/images/pexesoBG.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} 

