const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
      'sm': '200px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
      height: {
        '1': '28.125rem',
        '100': '100%',
        'inherit': 'inherit',
        'topBillBoardText': '90px',
        'middleBillboardImg': '150px',
        '459px': '459px',
        '115px': '115px',
        '40px': '40px',
      },
      width: {
        '1': '700px',
        'topBillboardText': '291px',
        'middleBillboardImg': '350px',
        'bottomBillboardImg': '300px'
      },
      maxWidth: {
        '1': '43.75rem'
       },
      maxHeight: {
      '1': '43.75rem'
      },
      fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'billboardHeader': '30px',
        'billboardSubHeader': '18px'
      },
      lineHeight: {
        'billboardHeader': '30px'
      },
      colors: {
          'crownRed': '#76150E',
          'distinctionGray': '#F0F0F0'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
