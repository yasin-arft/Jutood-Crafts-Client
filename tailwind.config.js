/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pacifico': 'Pacifico, cursive',
      'roboto': 'Roboto, sans-serif'
    },
    extend: {
      colors: {
        
      }
    },
  },
  plugins: [require("daisyui")],
}

