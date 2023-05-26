/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue-light": "#AEE2FF",
        "main-blue-dark": "#93C6E7"
      }
    },
  },
  plugins: [],
}