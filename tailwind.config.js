module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
  ],
}
