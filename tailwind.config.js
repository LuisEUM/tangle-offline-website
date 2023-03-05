/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{png,png,svg}'
  ],
  theme: {
    extend: {
      colors: {
        'tangle-oxford-blue': '#181F31',
        'tangle-rich-black-FOGBRA-29': '#0D111B',
        'tangle-cyan-process': '#00ADE4',
        'tangle-green-blue-crayola': '#0086D3'
      },
      fontFamily: {
        title: ['Hiruko Black'],
        titleMain: ['Hiruko Black'],
        body: ['Hiruko Light'],
        main_regular: ['Hiruko Regular'],
        main_bold: ['Hiruko Bold'],
        main_black: ['Hiruko Black'],
        main_light: ['Hiruko Light'],
        main_outline: ['Hiruko Outline']
      },
      backgroundImage: {
        'hero-desktop': "url('/backgrounds/girlWalkingPhone.webp')",
        'hero-mobile': "url('/backgrounds/girlWalkingPhoneCentered.webp')",
        'img-coffe': "url('/backgrounds/partneringWithOfflineBusinesses.webp')",
        'img-merchant': "url('/backgrounds/becomeAMerchant.webp')",
        'img-map': "url('/backgrounds/map.webp')",
        'activity-basket': "url('/activities/basketCard.webp')",
        'collage-1': "url('/collagePeople/pexels-caleb-oquendo-11140378.webp')",
        'collage-2': "url('/collagePeople/pexels-sangeet-rao-5775283.webp')",
        'collage-3': "url('/collagePeople/pexels-alessandro-kelvin-2376268.webp')",
        'collage-4': "url('/collagePeople/top-view-from-colorful-stylish-happy-young-company-friends-lying-grass-park-man-women-having-fun-together.webp')",
        'collage-5': "url('/collagePeople/pexels-mathias-pr-reding-4386145.webp')",
        'collage-6': "url('/collagePeople/pexels-matheus-bertelli-8533826.webp')",
        'collage-7': "url('/collagePeople/pexels-helena-lopes-745045.webp')",
        'activity-1': "url('/activities/restaurant.webp')",
        'activity-2': "url('/activities/museum.webp')",
        'activity-3': "url('/activities/balloons.webp')",
        'activity-4': "url('/activities/castle.webp')",
        'activity-5': "url('/activities/stadium.webp')"
      }
    }
  },
  plugins: []
}
