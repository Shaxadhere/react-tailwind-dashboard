/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_mdules/preline/dist/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin')
  ],
}

