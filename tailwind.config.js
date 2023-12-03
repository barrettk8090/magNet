/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'display': ['WigglyFont'],
      'body': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

