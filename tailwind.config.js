/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      container:{
        center: true,
        padding: " 1.25rem"
      },
      colors:{
        primary:"#F0F2F3",
        secondary:"#029FAE",
        light:"#FFF",
        black:"#000",
        dark:"#272343",
        danger:"#01AD5A",
      },
      fontFamily:{
        inter:["Inter",'sans-serif']
      }
    },
  },
  plugins: [],
}
