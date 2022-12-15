import SectionOne from './components/sections/sectionOne'
import SectionTwo from './components/sections/SectionTwo.jsx'

export default function Homepage () {
  return (
    <>
      <div className='container w-screen max-w-full'>
        <SectionOne />
        <SectionTwo />
      </div>
    </>
  )
}
