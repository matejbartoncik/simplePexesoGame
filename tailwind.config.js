

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/JS/**/*..js"],
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

