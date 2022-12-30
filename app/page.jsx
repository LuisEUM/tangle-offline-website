'use client'
import SectionFour from './components/sections/SectionFour'
import SectionOne from './components/sections/sectionOne'
import SectionThree from './components/sections/SectionThree'

export default function Homepage () {
  return (
    <div className='max-w-full'>
      <div className='grid grid-cols-1'>
        <div className='bg-red-700'>
          AQUI VA EL NAVEGADOR
        </div>
        <SectionOne />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  )
}
