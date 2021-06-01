module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'notosans': ['Noto Sans JP', 'sans-serif']
    },
    backgroundColor: theme => ({
      'base': '#4C2C59',
      'secondary': '#25ccbf',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000'
    }),
    textColor: {
      'basic': '#4C2C59',
      'secondary': '#25ccbf',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#4E4E4E',
      'gray': '#949698'
    },
    borderColor: {
      'base': '#4C2C59',
      'secondary': '#25ccbf',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#4E4E4E'
    },
    // boxShadow: {
    //   xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    //   'base': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 20px -12px rgba(178,57,71, 0.70);',
    //   'icon': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 20px -12px rgba(252,160,120, 0.70);'
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
  important: true
}
