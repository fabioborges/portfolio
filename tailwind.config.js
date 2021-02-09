const colors = require('tailwindcss/colors')

module.exports = {
  // corePlugins: {
  //   appearance: false
  // },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Rubik', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Chalkduster Regular', 'Oswald'],
      body: ['Poppins', 'Rubik', 'Open Sans']
    },
    fontSize: {
      xxs: '.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        primary: colors.violet,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        lightBlue: colors.lightBlue,
        teal: colors.teal,
        green: colors.green,
        lime: colors.lime,
        emerald: colors.emerald,
        yellow: colors.yellow,
        orange: colors.orange,
        amber: colors.amber,
        gray: colors.blueGray
        // warmGray: colors.warmGray,
        // trueGray: colors.trueGray,
        // coolGray: colors.coolGray,
        // blueGray: colors.blueGray,
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: []
}
