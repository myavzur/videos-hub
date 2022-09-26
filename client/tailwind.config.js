const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#9898ad',
          500: '#6B6B7B',
          600: '#5B5B5B',
          800: '#353340',
          900: '#272532'
        },
        secondary:  '#6C5ECF',
        clickable: '#FF7652',
        active: '#32A8E2',
      },

      // transitionDuration: {
      //   DEFAULT: '0.5s'
      // },

      boxShadow: {
        DEFAULT: '0 3px 12px rgba(0, 0, 0, 0.3)',
        md: '0 3px 12px rgba(0, 0, 0, 0.1)'
      },

      // Animations
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 }          
        },

        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },

      animation: {
        fadeIn:  'fadeIn  0.5s ease-in-out',
        scaleIn: 'scaleIn 0.35s ease-in-out'
      },

      
      // Font sizes
      fontSize: {
        xs:    '0.9rem',
        sm:    '1rem',
        tiny:  '1.2rem',
        base:  '1.4rem',
        lg:    '1.5rem',
        xl:    '1.6rem',
        "2xl": '1.75rem',
        "3xl": '1.9rem'
      }
    },
  },
  plugins: [
    plugin(({addComponents}) => {
      addComponents({
        '.block-with-shadow': {
          display: 'block',
          boxShadow: 
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          animation: 'scaleIn .35s ease-in-out',
          backgroundColor: '#272532'
        }
      })
    })
  ],
}
