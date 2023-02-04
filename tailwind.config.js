/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#8248E5",
        
          "secondary": "#8250F6",
        
          "accent": "#F471B5",
        
          "neutral": "#f3f4f6",
        
          "base-100": "#e7e5e4",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}