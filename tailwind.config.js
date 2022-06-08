module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
    sans: ['Outfit', 'sans-serif'],
  },
    container: {
      center: true,
      padding: '2rem'
  },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}