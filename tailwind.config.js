const { colors, fontFamily } = require( 'tailwindcss/defaultTheme' )

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Outfit',
          ...fontFamily.sans
        ]
      },
      colors: {
        lighterBlue: '#8ECAE6',
        lightBlue: '#219EBC',
        darkBlue: '#023047',
        lightOrange: '#FFB703',
        darkOrange: '#FB8500'
      }
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {},
  plugins: [],
}