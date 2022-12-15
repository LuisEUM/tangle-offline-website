/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{jpeg,png,svg}'
  ],
  theme: {
    extend: {
      colors: {
        'tangle-oxford-blue': '#181F31',
        'tangle-rich-black-FOGBRA-29': '#0D111B',
        'tangle-cyan-process': '#00ADE4'
      },
      fontFamily: {
        title: ['Righteous'],
        body: ['Source Sans Pro']
      },
      backgroundImage: {
        'hero-desktop': "url('/backgrounds/girlWalkingPhone.jpeg')",
        'hero-mobile': "url('/backgrounds/girlWalkingPhoneCentered.jpeg')"
      }
    }
  },
  plugins: []
}
