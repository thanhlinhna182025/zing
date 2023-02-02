/** @type {import('tailwindcss').Config} */

const colorPalete = {
  'dark-mode': '#ffffff',
  'light-mode': '#000000',
  'active-dark-mode': '#00FBff',
  'active-light-mode': '#ff7300',
  'hover-dark-mode': '#93B3B4',
  'hover-light-mode': '#FDCB5D',
  gray: '#444444',
  'A-0': '#ea9daa',
  'A-100': '#d75c77',
  'A-200': '#c13d60',
  'A-300': '#a22e4f',
  'B-0': '#1C4A7C',
  'B-100': '#22354E',
  'B-200': '#172F4F',
  'B-300': '#0C1f40',
  'C-0': '#E7E3E0',
  'C-100': '#95726A',
  'C-200': '#775850',
  'C-300': '#5B4039',
  'D-0': '#F7E3E4',
  'D-100': '#ffd1d1',
  'D-200': '#f9c6c5',
  'D-300': '#fea9f7'
}
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto']
      },
      colors: colorPalete,
      backgroundColor: colorPalete,
      borderColor: colorPalete,
      keyframes: {
        'slide-top': {
          ' 0% ': {
            '-webkit-transform': 'translateY(100%)',
            transform: 'translateY(100%)'
          },
          '100%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)'
          }
        },

        'slide-bottom': {
          '0% ': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)'
          },
          '100%': {
            '-webkit-transform': 'translateY(100%)',
            transform: 'translateY(100%)'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)'
          },
          '100%': {
            '-webkit-transform': 'translateX(-12px)',
            transform: 'translateX(-12px)'
          }
        },
        'slide-list-right': {
          '0%': {
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)'
          }
        },
        'slide-list-left': {
          '0%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)'
          },
          '100%': {
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)'
          }
        },
        'rotate-360': {
          '0%': {
            '-webkit-transform': 'rotate(0%)',
            transform: 'rotate(0%)'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg)',
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'slide-top': 'slide-top 1s linear 0s 1 normal forwards',
        'slide-bottom': 'slide-bottom 1s linear 0s 1 normal forwards',
        'slide-left': 'slide-left 1s ease 0s 1 normal forwards',
        'slide-list-right': 'slide-list-right 1s ease 0s 1 normal forwards',
        'slide-list-left': 'slide-list-left 1s ease 0s 1 normal forwards',
        'rotate-360': 'rotate-360 5s linear 0s 1 normal forwards'
      },
      spacing: {
        'header-padding': '59px',
        'header-margin': '70px',
        'main-margin': '49px',
        'player-height': 'var(--player-height)',
        'header-height': 'var(--header-height)',
        'search-input-width': '440px',
        'playlist-right-width': 'var(--playlist-right-width)'
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
