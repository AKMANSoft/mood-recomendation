/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#0F3A56',
        accent: '#5CBDFA',
        secondary: '#EFF8FF'
      }
    },
  },
  plugins: [],
}