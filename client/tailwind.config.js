/** @type {import('tailwindcss').Config} */

const colorPalete = {
  'dark-mode': '#ffffff',
  'light-mode': '#000000',
  'active-dark-mode': '#00FBff',
  'active-light-mode': '#ff7300',
  'hover-dark-mode': '#93B3B4',
  'hover-light-mode': '#69A6E8',
  'link-color': '#9D4BE0',
  gray: '#444444',
  A: {
    100: '#fae8e6',
    '100-50': 'rgba(250,232,230,0.5)',
    200: '#f6d5d2',
    '200-70': 'rgba(246,213,210,0.7)',
    300: '#efb7b2',
    400: '#e48d85',
    500: '#d6675d',
    '500-50': 'rgba(214,103,93,0.5)'
  },

  B: {
    100: '#fee5f0',
    '100-50': 'rgba(254,229,240,0.5)',
    200: '#ffcae4',
    '200-70': 'rgba(255,202,228,0.7)',
    300: '#ff9fcb',
    400: '#ff63a7',
    500: '#ff247a',
    '500-50': 'rgba(255,36,122,0.5)'
  },
  C: {
    100: '#e1e1fe',
    '100-50': 'rgba(225,225,254,0.5)',
    200: '#c8c8fd',
    '200-70': 'rgba(200,200,253,0.7)',
    300: '#aaa7fa',
    400: '#9284f5',
    500: '#8167ed',
    '500-50': 'rgba(129,103,237,0.5)'
  },
  D: {
    100: '#d5f3f8',
    '100-50': 'rgba(213,243,248,0.5)',
    200: '#b0e7f1',
    '200-70': 'rgba(176,231,241,0.7)',
    300: '#7ad5e6',
    400: '#3cb9d4',
    500: '#219ebc',
    '500-50': 'rgba(33,158,188,0.5)'
  },
  E: {
    100: '#e7edff',
    '100-50': 'rgba(231,237,255,0.5)',
    200: '#d2deff',
    '200-70': 'rgba(210,222,255,0.7)',
    300: '#aec0ff',
    400: '#8097ff',
    500: '#4d63ff',
    '500-50': 'rgba(77,99,255,0.5)'
  }
}
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
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
        },
        'puff-out-center': {
          '0%': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)',
            '-webkit-filter': 'blur(0px)',
            filter: ' blur(0px)',
            opacity: 1
          },
          '100%': {
            '-webkit-transform': 'scale(2)',
            transform: 'scale(2)',
            '-webkit-filter': 'blur(4px)',
            filter: 'blur(4px)',
            opacity: 0
          }
        },
        'ping-out': {
          '0%': {
            opacity: 0
          },
          '50%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 0
          }
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-5': 'spin 5s linear infinite reverse',
        'spin-4': 'spin 4s infinite',
        'spin-3': 'spin 3s linear infinite reverse',
        'spin-2': 'spin 2s infinite',
        'slide-top': 'slide-top 1s linear 0s 1 normal forwards',
        'slide-bottom': 'slide-bottom 1s linear 0s 1 normal forwards',
        'slide-left': 'slide-left 1s ease 0s 1 normal forwards',
        'slide-list-right': 'slide-list-right 1s ease 0s 1 normal forwards',
        'slide-list-left': 'slide-list-left 1s ease 0s 1 normal forwards',
        'rotate-360': 'rotate-360 5s linear 0s 1 normal forwards',
        'puff-out-center': 'puff-out-center 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) both',
        'ping-out': 'ping-out 1s linear forwards'
      },
      spacing: {
        'main-padding': 'var(--main-padding)',
        'header-margin': 'var(--header-margin)',
        'main-margin': 'var(--margin-main)',
        'margin-main-sm': 'var(--margin-main-sm)',
        'player-height': 'var(--player-height)',
        'player-height-sm': 'var(--player-height-sm)',
        'header-height': 'var(--header-height)',
        'search-input-width': 'var(--search-input-width)',
        'playlist-right-width': 'var(--playlist-right-width)',
        'sidebar-width-sm': 'var(--sidebar-width-sm)',
        'sidebar-width': 'var(--sidebar-width)'
      },
      boxShadow: {
        card: '5px 5px -7px rgb(0,0,0), -5px -5px 7px rgb(255,255,255)'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow')
  ]
}
