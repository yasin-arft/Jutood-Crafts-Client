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
        'primary': '#B87965',
        'secondary': '#936151',
        'dark': '#2C140B'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

