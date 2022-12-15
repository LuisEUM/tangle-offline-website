'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import './particles.css'
import ParticlesBackground from '../particles/particlesBackground'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import { useEffect, useState } from 'react'

export default function SectionTwo () {
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
        <div className='px-24 pb-24 w-screen md:bg-right bg-center bg-cover'>
          <motion.div className='flex gap-12'>
            <div>
              <div className='my-5'>
                <Ellipse icon='heart' className='bg-blue-800 h-16 p-12 my-5 max-w-[42px]' />
              </div>
              <div className='max-w-[42px] h-[150px]'>
                <VerticalLine />
              </div>
            </div>

            <div className='w-1/2 mt-5 flex flex-col align-middle content-center justify-center'>
              <motion.div>
                <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-title' text='Tangle Offline is changing how people interact' tag='h4' />
              </motion.div>
              <motion.div>
                <h3 className='mt-2 text-6xl font-bold'>We bring <span className='text-tangle-cyan-process'>thousands</span> of people out to <em>{first}</em></h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <ParticlesBackground />
      </div>

    </>
  )
}
