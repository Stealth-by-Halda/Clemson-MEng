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
        'appHeight525': '525px',
        'selectHeight32': '32px'
      },
      width: {
        'appWidth340': '340px',
        'selectWidth230': '230px'
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
        'disclaimer10': '10px',
      },
      lineHeight: {
        'billboardHeader': '30px'
      },
      colors: {
          'selectBorderColor': '#D1D5DB',
          'distinctionGray': '#F0F0F0',
          'disclaimerGray': '#9F9F9F'
      },
      spacing: {
        'border40': '40px',
        'spacing10': '10px',
        'spacing16': '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
