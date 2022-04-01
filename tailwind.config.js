module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'mobile-small':{'max':'390px'},
      'mobile': {'max': '640px'},
      'tablet':'1024px',
      'desktop':'1280px'
    }
  },
  plugins: [],
}
