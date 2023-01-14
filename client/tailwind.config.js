/** @type {import('tailwindcss').Config} */

const colorPalete = {
  purpleA84: {
    50: '#fbf6fe',
    100: '#f5eafd',
    200: '#edd8fc',
    300: '#e0b9f9',
    400: '#cd8cf4',
    500: '#b960ec',
    600: '#a845de',
    700: '#8f2ec2',
    800: '#782b9e',
    900: '#62247f'
  },
  ebony170: {
    50: '#f0effe',
    100: '#e6e2fd',
    200: '#d2cbfa',
    300: '#bbacf5',
    400: '#a58aef',
    500: '#976ee6',
    600: '#8b52d9',
    700: '#7a43bf',
    800: '#62399a',
    900: '#170f23'
  }
}
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto']
      },
      colors: {
        gray: '#7B7782',
        light: '#C3C2C4',
        'main-100': '#DADADA',
        'main-200': '#3A3344',
        'main-300': '#2F2739',
        'main-400': '#231B2E',
        'main-500': '#170F23',
        'secondary-100': '#9D4DE0'
      },
      backgroundColor: {
        'main-100': '#DADADA',
        'main-200': '#3A3344',
        'main-300': '#2F2739',
        'main-400': '#231B2E',
        'main-500': '#170F23'
      },

      animation: {
        'spin-slow': 'spin 12s linear infinite'
      },
      spacing: {
        'header-padding': '59px',
        'header-margin': '70px',
        'main-margin': '49px'
      },
      width: {
        'size-bar-width': '240px'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow')
  ]
}
