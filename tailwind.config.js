/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': '450px',
        
      'tablet': '760px',
      // => @media (min-width: 760px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lgdesk' : '1600px',
    },
    extend: {
      backgroundImage: {
        'main' : "url('./assets/main.jpg')"
      }
    },
  },
  plugins: [],
}

