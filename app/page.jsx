'use client'
import SectionFour from './components/sections/SectionFour'
import SectionOne from './components/sections/sectionOne'
import SectionThree from './components/sections/SectionThree'
import SectionAnimation from './components/ui/animation/sectionsAnimation'
import SectionFive from './components/sections/SectionFive'
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
import NavBar from './components/navbar/NavBar'
import { useContext } from 'react'
import { LanguageContext } from './context/languageContext'
import SectionFourteen from './components/sections/SectionFourteen'

export default function Homepage () {
  const { text } = useContext(LanguageContext)
  return (
    <>
      <div className='max-w-full'>
        <div className='grid grid-cols-1'>
          <div className='bg-red-700 z-50'>
            <NavBar text={text} />
          </div>
          <SectionAnimation>
            <SectionOne text={[text.home[0], text.home[1]]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionThree text={text.home[2]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionFour text={text.home[3]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionFive text={text.home[4]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionSix text={text.home[5]} />
          </SectionAnimation>
          <div className='relative w-full'>
            <SectionAnimation>
              <SectionSeven text={text.home[6]} />
            </SectionAnimation>
            <SectionAnimation>
              <SectionEight text={text.home[7]} />
            </SectionAnimation>
            <div className='w-full flex'>
              <StarsBackground id='stars1' />
            </div>
          </div>
          <SectionAnimation>
            <SectionNine text={text.home[8]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionTen text={text.home[9]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionEleven text={text.home[10]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionTwelve text={text.home[11]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionThirteen text={text.home[12]} />
          </SectionAnimation>
          <SectionAnimation>
            <SectionFourteen text={text.home[13]} />
          </SectionAnimation>
          <div className='relative w-full'>
            <SectionAnimation>
              <SectionFifteen text={text.home[14]} />
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

