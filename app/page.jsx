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

export default function Homepage () {
  return (
    <div className='max-w-full'>
      <div className='grid grid-cols-1'>
        <div className='bg-red-700'>
          AQUI VA EL NAVEGADOR
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
            <StarsBackground />
          </div>
        </div>

      </div>
    </div>
  )
}
