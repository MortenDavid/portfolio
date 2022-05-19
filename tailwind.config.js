const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Open sans', ...defaultTheme.fontFamily.sans],
  },
  },
  plugins: [],
}
