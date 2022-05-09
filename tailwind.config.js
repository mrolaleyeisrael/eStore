module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
   
    // },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      lg1: '1024px',
      xl: '1440px',
    },
    fontFamily:{
      'manrope':['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}