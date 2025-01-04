/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: '1128px',
        staysVisible: { min: '744px', max: '949px' },
        goDown: { min: '744px', max: '949px' },
        headerHidden: { max: '743px' }, 
        showsr: { min: '744px' },
        srsm: { min:'744px',max:'1127px'},
        srmdBtn: { min:'1128px'},


      },
    },
  },
  plugins: [],
}