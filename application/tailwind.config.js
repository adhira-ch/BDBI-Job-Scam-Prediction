const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx,css}',
],
  theme: {
    extend: {
      colors: {
        one: '#3c3744',
        two: '#090c9b',
        three: '#3066be',
        four: '#b4c5e4',
        five: '#fbfff1',
      },
  },
  fontFamily: {
    vango: ['vango'],
  },
  plugins: [],
}
});