'use client'
import { Ellipse } from '../ui/svg/elipse'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import LettersAnimation from '../ui/animation/lettersAnimation'
import ComplexCards from '../cards/ComplexCards'
import { useEffect, useState } from 'react'
import Carrousel from '../ui/carrousel/Carrousel'
import dataImages from '../../data/images.json'

export default function SectionSeven ({ text }) {
  const [desktop, setDesktop] = useState(false)
  const [tablet, setTablet] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [matches, setMatches] = useState(800)

  useEffect(() => {
    const mediaQuery1024 = window.matchMedia('(min-width: 1024px)')
    const mediaQuery768 = window.matchMedia('(min-width: 768px)')
    const mediaQuerySmall = window.matchMedia('(min-width: 0px) and (max-width: 767px)')

    const handleMediaQueryChange1024 = (event) => {
      setDesktop(event.matches)
      setTablet(false)
      setMobile(false)
    }

    const handleMediaQueryChange768 = (event) => {
      setDesktop(false)
      setTablet(event.matches)
      setMobile(false)
    }

    const handleMediaQuerySmallChange = (event) => {
      setDesktop(false)
      setTablet(false)
      setMobile(event.matches)
    }

    mediaQuery1024.addEventListener('change', handleMediaQueryChange1024)
    mediaQuery768.addEventListener('change', handleMediaQueryChange768)
    mediaQuerySmall.addEventListener('change', handleMediaQuerySmallChange)

    if (mobile) setMatches(500)
    if (tablet) setMatches(1100)
    if (desktop) setMatches(800)

    return () => {
      mediaQuery1024.removeEventListener('change', handleMediaQueryChange1024)
      mediaQuery768.removeEventListener('change', handleMediaQueryChange768)
      mediaQuerySmall.removeEventListener('change', handleMediaQuerySmallChange)
    }
  }, [desktop, mobile, tablet])

  return (
    <>
      <div className='px-2 md:px-14 lg:px-32 w-full'>
        <div className='w-fit flex justify-end content-end  align-middle relative h-[400px] md:h-[1100px] lg:h-[800px]'>
          <div className='absolute top-0 left-0 w-[62%] hidden lg:grid'>
            <div className='grid grid-cols-1 gap-3 grid-flow-row-dense box-border w-full max-w-full absolute top-0 lg:-mx-32 h-[400px] md:h-[1100px] lg:h-[800px] overflow-hidden'>
              <ComplexCards desktop />
            </div>
          </div>
          <div className='flex justify-center content-center  align-middle gap-0 md:gap-4 lg:gap-6 lg:max-w-[68%] z-30'>
            <div className='flex flex-col py-5 bg-red- z-30 mt-10 align-middle content-top justify-top'>
              <div className='max-w-full pt-2'>
                <WordsAnimation key={text.subHeader} className='text-base sm:text-lg md:text-xl lg:text-2xl font-main_bold text-end' text={text.subHeader} tag='h4' />
              </div>
              <div className='max-w-full self-end py-2'>
                <LettersAnimation key={text.header} className='text-3xl md:text-6xl lg:text-6xl font-main_black text-end ' text={text.header} tag='h3' />
              </div>
              <div className='max-w-full pl-10 bg-yellow- self-end'>
                <WordsAnimation key={text.description} className='text-base sm:text-lg md:text-xl lg:text-2xl font-main_light text-end' text={text.description} tag='p' />
              </div>
              <div className='grid lg:hidden grid-cols-1 gap-3 grid-flow-row-dense box-border md:-mx-14 h-[700px] overflow-hidden'>
                <ComplexCards tablet className='hidden md:grid lg:hidden' />
              </div>
            </div>
            <div className='flex h-[63px] mr-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full px-5 py-10 mt-10' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
              <Ellipse icon='happy' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46, 0.4)' />
            </div>
          </div>
          <div className='absolute -z-30 right-5 top-0 overflow-hidden max-h-full'>
            <VerticalLine color='rgb(1, 209, 46)' width={42} heigth={matches} />
          </div>
        </div>
      </div>
      <div className='h-[815px] px-2 w-full md:hidden flex flex-col items-start align-super justify-start content-start relative'>
        <Carrousel bullets className='md:hidden -mb-6 w-full' immagesArray={dataImages.cards} longCard />
        <div className='absolute -z-30 right-7 top-0 overflow-hidden max-h-full'>
          <VerticalLine color='rgb(1, 209, 46)' width={42} heigth={815} />
        </div>
      </div>
    </>
  )
}
