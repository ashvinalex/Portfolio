/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          profiles: {
              words: ['Data Analyst', 'Data Engineer', 'Ml Engineer'],
              delay:0,
              repeat: -1,
              eraseSpeed:0.1
          }
      }
  })
  ],
}