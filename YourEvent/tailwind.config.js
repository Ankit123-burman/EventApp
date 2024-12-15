/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple1: 'rgba(100, 20, 100, 0.8)',
        darkPurple2: 'rgba(50, 0, 50, 0.8)',
      },
    },
  },
  plugins: [],
}

