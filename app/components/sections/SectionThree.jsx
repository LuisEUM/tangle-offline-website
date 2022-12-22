'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import './particles.css'
import ParticlesBackground from '../particles/particlesBackground'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import { useEffect, useState } from 'react'
import VideoPlayer from '../video-player/VideoPlayer'

export default function SectionThree () {
  const wordArray = ['Clubbling', 'Bowling', 'Cafe', 'Restaurant', 'Boat', 'Tour']
  const [first, setfirst] = useState(wordArray[0])

  useEffect(() => {
    let count = 0
    setInterval(() => {
      if (wordArray.length <= count) {
        count = 0
      }

      setfirst(wordArray[count])
      count++
      console.log(first, wordArray.length, count)
    }, 3000)

    // return clearInterval(wordCounter)
  }, [])

  return (
    <>
      <div className='relative  w-screen '>
        <VideoPlayer />

        <div className='px-24 w-screen md:bg-right bg-center bg-cover'>
          <motion.div className='flex gap-12'>
            <div>

              <div className='max-w-[42px] h-[150px]'>
                <VerticalLine />
              </div>
              <div className='my-5'>
                <Ellipse icon='heart' className='bg-blue-800 h-16 p-12 my-5 max-w-[42px]' />
              </div>
              <div className='max-w-[42px] h-[150px]'>
                <VerticalLine />
              </div>
              <div className='max-w-[42px] h-[150px]'>
                <VerticalLine />
              </div>
            </div>

            <div className=' mt-5 flex flex-col align-middle content-center justify-center h-80  w-1/2'>
              <motion.div className='max-w-full'>
                <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-title' text='Problem' tag='h4' />
              </motion.div>
              <motion.div className='max-w-full'>
                <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-body' text='Find people to hang out with, have social interactions, think creatively, and build strong communication skills. Do all of this, and more, on Tangle, by joining events and taking part in activities happening all around your city.' tag='p' />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <ParticlesBackground />
      </div>

    </>
  )
}
