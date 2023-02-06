import React, { useState } from 'react'
import CarrouselText from '../ui/carrousel/CarrouselText'
import dataImages from '../../data/images.json'

export default function SectionFourteen ({ text }) {
  const [word, setWord] = useState(text.gallery[2])

  return (
    <>
      <div className='w-full h-screen hidden md:hidden lg:flex'>
        <div
          className='w-[20%] hover:w-[25%] h-full flex justify-center bg-no-repeat bg-center bg-cover bg-activity-1'
          style={{
            transitionDuration: '300ms',
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={() => setWord(text.gallery[0])}
        />
        <div
          className='w-[20%] hover:w-[25%] h-full flex justify-center bg-no-repeat bg-center bg-cover bg-activity-2'
          style={{
            transitionDuration: '300ms',
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={() => setWord(text.gallery[1])}
        />
        <div
          className='w-[20%] hover:w-[25%] h-full flex justify-center bg-no-repeat bg-center bg-cover bg-activity-3'
          style={{
            transitionDuration: '300ms',
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={() => setWord(text.gallery[2])}
        >
          <p className='self-center text-4xl font-normal'>{word}</p>
        </div>
        <div
          className='w-[20%] hover:w-[25%] h-full flex justify-center bg-no-repeat bg-center bg-cover bg-activity-4'
          style={{
            transitionDuration: '300ms',
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={() => setWord(text.gallery[3])}
        />
        <div
          className='w-[20%] hover:w-[25%] h-full flex justify-center bg-no-repeat bg-center bg-cover bg-activity-5'
          style={{
            transitionDuration: '300ms',
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={() => setWord(text.gallery[4])}
        />
      </div>
      <CarrouselText bullets className='lg:hidden xl:hidden ' immagesArray={dataImages.activities} text={text.gallery} />
    </>
  )
}
