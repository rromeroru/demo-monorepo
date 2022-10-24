module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#2eB",
      // },
    },
  },
  presets: 
    [require(`./tailwind/default.js`)]
  ,
  plugins: [],
}
