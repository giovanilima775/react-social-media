/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        'brandPrimary/100': '#cf9bcc',
        'brandPrimary/200': '#be7abb',
        'brandPrimary/300': '#ac58aa',
        'brandPrimary/400': '#ad47ac',
        'brandPrimary/500': '#993399',
        'brandPrimary/600': '#7e2d7e',
        'brandPrimary/700': '#642764',
        'brandPrimary/800': '#4b204b',
        'brandPrimary/900': '#341933',
        'brandSecondary/100': '#fbd9d3',
        'brandSecondary/200': '#f7b3a6',
        'brandSecondary/300': '#f38d7a',
        'brandSecondary/400': '#ef674d',
        'brandSecondary/500': '#eb4121',
        'brandSecondary/600': '#bc341a',
        'brandSecondary/700': '#8d2714',
        'brandSecondary/800': '#5e1a0d',
        'brandSecondary/900': '#2f0d07',

      }
    },
  },
  plugins: [],
}
