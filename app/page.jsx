'use client'
import SectionOne from './components/sections/sectionOne'
import SectionThree from './components/sections/SectionThree'

export default function Homepage () {
  return (
    <>
      <div className='container w-screen max-w-full'>
        <SectionOne />
        <SectionThree />
      </div>
    </>
  )
}
