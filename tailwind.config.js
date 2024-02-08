/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#CDFADB',
        secondary: '#F6FDC3',
        button: '#FFCF96',
        border: '#FF8080',
      },
      height: {
        textInput: '2em',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

