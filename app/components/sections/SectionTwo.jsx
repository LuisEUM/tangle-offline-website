'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import ParticlesBackground from '../particles/particlesBackground'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

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
    <div>
      <div className='relative  '>
        <div className='px-2 md:px-14 lg:px-32 w-full'>
          <motion.div className='  '>
            <div>
              <div className='flex gap-12'>
                <div className='bg- flex justify-center content-center  align-middle relative h-[450px]'>
                  <div className='bg- flex justify-center content-center  align-middle gap-6'>
                    <div className=' flex h-[63px] ml-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start mt-10' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
                      <Ellipse icon='heart' className='h-16 p-12 my-5 max-w-[30px] ' />
                    </div>
                    <div className='bg-red- py-5'>
                      <div className=' mt-5 flex flex-col align-middle justify-start'>
                        <motion.div className='pr-5'>
                          <WordsAnimation className='text-lg md:text-2xl lg:text-3xl font-title ' text='Tangle Offline is changing how people interact' tag='h4' />
                        </motion.div>
                        <motion.div>
                          <h3 className='mt-2 mr-2 text-3xl md:text-6xl lg:text-6xl font-bold '>We bring <span className='text-tangle-cyan-process'>thousands</span>  <br /> of people out to <em>{first}</em></h3>
                          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 max-h-[64px] mt-11'>
                            <div className='self-center'>
                              <Image src='/logos/merchantLogo4.png' alt='Logo The Amsterdam Dungeon' width={181} height={38} className='max-w-full max-h-full m-auto' />
                            </div>
                            <div className='self-center'>
                              <Image src='/logos/merchantLogo1.png' alt='Logo Merlin' width={57} height={45} className='max-w-full max-h-full m-auto' />
                            </div>
                            <div className='self-center'>
                              <Image src='/logos/merchantLogo2.png' alt='Logo Madame Tussauds' width={175} height={32} className='max-w-full max-h-full m-auto' />
                            </div>
                            <div className='self-center'>
                              <Image src='/logos/merchantLogo3.png' alt='Logo Paradiso' width={97} height={19} className='max-w-full max-h-full m-auto' />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-yellow- flex absolute -z-30 left-5 top-0'>
                    <VerticalLine width={42} heigth={450} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <ParticlesBackground />
      </div>
    </div>
  )
}
