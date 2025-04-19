/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1ABC9C",
      },
      fontFamily: {
        playfair: ["Merriweather", "serif"],
        nunito: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
