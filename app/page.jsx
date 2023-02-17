'use client'
import SectionFour from './components/sections/SectionFour'
import SectionOne from './components/sections/sectionOne'
import SectionThree from './components/sections/SectionThree'
import SectionAnimation from './components/ui/animation/sectionsAnimation'
import SectionSix from './components/sections/SectionSix'
import SectionSeven from './components/sections/SectionSeven'
import SectionEight from './components/sections/SectionEight'
import StarsBackground from './components/particles/startsBackground'
import SectionNine from './components/sections/SectionNine'
import SectionTen from './components/sections/SectionTen'
import SectionEleven from './components/sections/SectionEleven'
import SectionTwelve from './components/sections/SectionTwelve'
import SectionThirteen from './components/sections/SectionThirteen'
import SectionFifteen from './components/sections/SectionFifteen'
import { useContext } from 'react'
import { LanguageContext } from './context/languageContext'
import SectionFourteen from './components/sections/SectionFourteen'

export default function Page () {
  const { text } = useContext(LanguageContext)
  return (
    <>
      <div className='max-w-full'>
        <div className='grid grid-cols-1'>
          <div className='z-50'>
            {/* <NavBar /> */}
          </div>
          <SectionAnimation>
            {/* Hero section and section with the words changing */}
            <SectionOne text={[text.home[0], text.home[1]]} />
          </SectionAnimation>
          <SectionAnimation>
            {/* Video section */}
            <SectionThree text={text.home[2]} />
          </SectionAnimation>
          <SectionAnimation>
            {/* About problem Section, red section */}
            <SectionFour text={text.home[3]} />
          </SectionAnimation>
          {/* <SectionAnimation>
            Squares section, red section
            <SectionFive text={text.home[4]} />
          </SectionAnimation> */}
          <SectionAnimation>
            {/* Big Image with fade section */}
            <SectionSix text={text.home[5]} />
          </SectionAnimation>
          <div className='relative w-full'>
            <SectionAnimation>
              {/* About solution section, cards, green section */}
              <SectionSeven text={text.home[6]} />
            </SectionAnimation>
            <SectionAnimation>
              {/* Squares section, green section */}
              <SectionEight text={text.home[7]} />
            </SectionAnimation>
            <div className='w-full flex'>
              <StarsBackground id='stars1' />
            </div>
          </div>
          <SectionAnimation>
            {/* Big radar section */}
            <SectionNine text={text.home[8]} />
          </SectionAnimation>
          <SectionAnimation>
            {/* About friends Section, green section */}
            <SectionTen text={text.home[9]} />
          </SectionAnimation>
          <SectionAnimation>
            {/* grid and carrousel section, images section */}
            <SectionEleven text={text.home[10]} />
          </SectionAnimation>
          <SectionAnimation>
            {/* About Tangle goal section, blue section */}
            <SectionTwelve text={text.home[11]} />
          </SectionAnimation>
          <SectionAnimation>
            {/* About merchants section, blue section */}
            <SectionThirteen text={text.home[12]} />
          </SectionAnimation>
          <SectionAnimation>
            {/* Accordion section, images section */}
            <SectionFourteen text={text.home[13]} />
          </SectionAnimation>
          <div className='relative w-full'>
            <SectionAnimation>
              {/* Email section, images section */}
              <SectionFifteen text={text.home[14]} />
              {/* <Footer /> */}
            </SectionAnimation>
            <div className='w-full flex'>
              <StarsBackground id='stars2' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
