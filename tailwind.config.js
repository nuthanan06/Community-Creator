/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FFBE0B, #F42B03)',
      },
    },
  },
  plugins: [],
}

