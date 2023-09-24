/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6e3e2",
        "grayscale-50":'#cfcccb',
        "grayscale-300": "#7b7a79",
        "grayscale-400": "#333",
        "grayscale-500": "#302D2C",
        "secondary": "#ccc8c7",
        "secondary-500": "#b0adac",
        "tertiary": "#d6dbdb",
        "logo-col": "#ff5c41"
      }
    },
  },
  plugins: [],
}