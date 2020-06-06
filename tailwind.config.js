module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#222429',
        secondary: '#E0E4E4',
        vue: '#4FC08D',
        enfasy: '#41C7C7'
      },
      width: {
        ghost: '1200px'
      },
      height: {
        large: '550px',
        medio: '315px'
      },
      padding: {
        custom: '0 2%'
      },
      zIndex: {
        custom: '-1'
      }
    },
    screens: {
      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' }
    }
  },
  variants: {},
  plugins: []
}
