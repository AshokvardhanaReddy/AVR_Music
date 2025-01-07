/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm" : {max : "700px"},
        'md': {min : "701px", max : "900px"},      
        'lg': {min : "901px"},  
      },
    },
  },
  plugins: [],
}