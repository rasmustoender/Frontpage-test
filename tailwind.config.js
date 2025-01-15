/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}', // Include all components
    './layouts/**/*.vue',         // Include all layouts
    './pages/**/*.vue',           // Include all pages
    './plugins/**/*.{js,ts}',     // Include all plugins
    './nuxt.config.{js,ts}',      // Include Nuxt config
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ['Impact', 'sans-serif'], // Add custom 'Impact' font
      },
    },
  },
  plugins: [],
}
