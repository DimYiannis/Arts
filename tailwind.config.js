/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '450px',
        'tablet': '760px',
        'laptop': '1024px',
        'desktop': '1280px',
        'lgdesk': '1600px',
      },
      backgroundImage: {
        'main': "url('./assets/main.jpg')"
      }
    },
  },
  plugins: [],
}

