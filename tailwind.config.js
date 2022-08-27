const {
  gray,
  blue,
  red,
  green,
  grayDark,
  slate,
  blueDark,
  redDark,
  greenDark,
  slateDark,
} = require('@radix-ui/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        radix: {
          gray: {
            ...gray,
            dark: { ...grayDark },
          },
          blue: {
            ...blue,
            dark: { ...blueDark },
          },
          red: {
            ...red,
            dark: { ...redDark },
          },
          green: {
            ...green,
            dark: { ...greenDark },
          },
          slate: {
            ...slate,
            dark: { ...slateDark },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
