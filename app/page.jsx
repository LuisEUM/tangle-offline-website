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
import { TaskProvider } from './context/languageContext'
import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Homepage () {
  // const { textData } = useContext(TaskContext)
  // const pathname = usePathname()
  // const [text, setText] = useState(null)

  // useEffect(() => {
  //   const finalText = getText(pathname, textData)
  //   console.log(textData)

  //   setText(finalText)
  // }, [])

  // if (text === null) {
  //   return (<p>loading...</p>)
  // }

  // console.log(text)

  return (
    <TaskProvider>
      <div className='max-w-full'>
        <div className='grid grid-cols-1'>
          <div className='bg-red-700 z-50'>
            <NavBar />
          </div>
          <SectionAnimation>
            <SectionOne />
          </SectionAnimation>
          <SectionAnimation>
            <SectionThree />
          </SectionAnimation>
          <SectionAnimation>
            <SectionFour />
          </SectionAnimation>
          <SectionAnimation>
            <SectionFive />
          </SectionAnimation>
          <SectionAnimation>
            <SectionSix />
          </SectionAnimation>
          <div className='relative w-full'>
            <SectionAnimation>
              <SectionSeven />
            </SectionAnimation>
            <SectionAnimation>
              <SectionEight />
            </SectionAnimation>
            <div className='w-full flex'>
              <StarsBackground id='stars1' />
            </div>
          </div>
          <SectionAnimation>
            <SectionNine />
          </SectionAnimation>
          <SectionAnimation>
            <SectionTen />
          </SectionAnimation>
          <SectionAnimation>
            <SectionEleven />
          </SectionAnimation>
          <SectionAnimation>
            <SectionTwelve />
          </SectionAnimation>
          <SectionAnimation>
            <SectionThirteen />
          </SectionAnimation>
          <div className='relative w-full'>
            <SectionAnimation>
              <SectionFifteen />
            </SectionAnimation>
            <div className='w-full flex'>
              <StarsBackground id='stars2' />
            </div>
          </div>
        </div>
      </div>
    </TaskProvider>
  )
}

function getText (pathname, textData) {
  switch (pathname) {
    case '/en':
      return textData?.home.en
    case '/es':
      return textData?.home.es
    case '/nl':
      return textData?.home.nl
    default:
      return textData?.home.en
  }
}
