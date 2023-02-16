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
        main_outline: ['Hiruko Outline'],
        
      },
      backgroundImage: {
        'hero-desktop': "url('/backgrounds/girlWalkingPhone.png')",
        'hero-mobile': "url('/backgrounds/girlWalkingPhoneCentered.png')",
        'img-coffe': "url('/backgrounds/partneringWithOfflineBusinesses.png')",
        'img-merchant': "url('/backgrounds/becomeAMerchant.png')",
        'img-map': "url('/backgrounds/map.png')",
        'activity-basket': "url('/activities/basketCard.png')",
        'collage-1': "url('/collagePeople/pexels-caleb-oquendo-11140378.png')",
        'collage-2': "url('/collagePeople/pexels-sangeet-rao-5775283.png')",
        'collage-3': "url('/collagePeople/pexels-alessandro-kelvin-2376268.png')",
        'collage-4': "url('/collagePeople/top-view-from-colorful-stylish-happy-young-company-friends-lying-grass-park-man-women-having-fun-together.png')",
        'collage-5': "url('/collagePeople/pexels-mathias-pr-reding-4386145.png')",
        'collage-6': "url('/collagePeople/pexels-matheus-bertelli-8533826.png')",
        'collage-7': "url('/collagePeople/pexels-helena-lopes-745045.png')",
        'activity-1': "url('/activities/restaurant.png')",
        'activity-2': "url('/activities/museum.png')",
        'activity-3': "url('/activities/balloons.png')",
        'activity-4': "url('/activities/castle.png')",
        'activity-5': "url('/activities/stadium.png')"
      }
    }
  },
  plugins: []
}
