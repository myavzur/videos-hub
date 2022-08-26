const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx'
  ],
  theme: {
    extend: {
      zIndex: {
        ['search-panel']: 5,
        ['search-result']: 1
      },

      colors: {
        primary: {
          400: '#9898ad',
          500: '#6B6B7B',
          600: '#5B5B5B',
          800: '#353340',
          900: '#272532',
          1000: '#131319', // ? Previous #1c1b26
        },
        brand: {
          primary: '#278BD7'
        },
        secondary: '#f7630c',
        active: '#32A8E2',
        error: 'rgb(255, 89, 89)'
      },

      transitionDuration: {
        DEFAULT: '0.1s'
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
        "2xs": '0.7rem',
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
    plugin(({ addComponents, addUtilities, e, config }) => {
      addUtilities({
        '.inner-shadow': {
          boxShadow: '0px 0px 35px rgb(0, 0, 0, 0.5) inset' // TODO: ? To Be or not to Be
        }
      })

    })
  ]
}
