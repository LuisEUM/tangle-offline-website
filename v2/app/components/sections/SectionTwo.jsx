'use client'
import { Ellipse } from '../ui/svg/elipse'
import { AnimatePresence, motion } from 'framer-motion'
import ParticlesBackground from '../particles/particlesBackground'
import VerticalLine from '../ui/progress/verticalLine'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import LettersAnimation from '../ui/animation/lettersAnimation'

export default function SectionTwo ({ text }) {
  const [index, setIndex] = useState(0)
  const currentWord = text.activities[index]

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((i) => (i + 1) % text.activities.length)
    }, 4000)

    return () => {
      clearInterval(i)
    }
  }, [text.activities.length])

  const variants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    exit: {
      position: 'absolute',
      opacity: 0,
      scale: 0
    }
  }

  return (
    <>
      <div className='relative gap z-30 -mt-20'>
        <div className='px-2 md:px-14 lg:px-32 w-full max-w-full overflow-hidden flex gap-12'>
          <div className='flex justify-center content-center align-middle relative h-[450px]'>
            <div className='flex justify-center content-center align-middle gap-0 md:gap-4 lg:gap-6'>
              <div className=' flex h-[63px] ml-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start mt-4' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
                <Ellipse icon='heart' className='h-16 p-12 my-5 max-w-[30px]' color='rgba(0, 173, 228, 0.8)' />
              </div>
              <div className=' mt-5 flex flex-col align-middle justify-start py-5'>
                <div className='pr-5'>
                  <h4 className='text-lg md:text-2xl lg:text-3xl font-title'>
                    {text.subHeader}
                  </h4>
                </div>
                <div className='flex flex-col'>
                  <div className='-mr-8 '>
                    <LettersAnimation key={text.header} className='mt-2 mr-2 text-3xl md:text-6xl lg:text-6xl font-bold max-w-full' text={`${text.header}`} tag='h3'>
                      <br className=' md:hidden' />
                      <motion.span
                        variants={variants}
                        initial='initial'
                        animate='enter'
                        exit='exit'
                        transition={{
                          duration: 3,
                          type: 'spring',
                          stiffness: 300,
                          damping: 24,
                          delay: 4
                        }}
                        className='text-center inline-block relative self-baseline'
                      >
                        <AnimatePresence>
                          <motion.em
                            className='inline-block relative w-[max-content] self-baseline mt-2 mr-2 text-3xl md:text-6xl lg:text-6xl font-bold '
                            variants={variants}
                            initial='initial'
                            animate='enter'
                            exit='exit'
                            key={currentWord}
                            transition={{
                              duration: 3,
                              type: 'spring',
                              stiffness: 300,
                              damping: 24
                            }}
                          >
                            {currentWord || text.activities[0]}
                          </motion.em>
                        </AnimatePresence>
                      </motion.span>
                    </LettersAnimation>
                  </div>
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 max-h-[64px] mt-11'>
                    <Image src='/logos/merchantLogo4.png' alt='Logo The Amsterdam Dungeon' width={181} height={38} className='max-w-full max-h-full m-auto self-center' />
                    <Image src='/logos/merchantLogo1.png' alt='Logo Merlin' width={57} height={45} className='max-w-full max-h-full m-auto self-center' />
                    <Image src='/logos/merchantLogo2.png' alt='Logo Madame Tussauds' width={175} height={32} className='max-w-full max-h-full m-auto self-center' />
                    <Image src='/logos/merchantLogo3.png' alt='Logo Paradiso' width={97} height={19} className='max-w-full max-h-full m-auto self-center' />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex absolute -z-30 left-5 top-0'>
              <VerticalLine width={42} heigth={450} color='rgba(0,173,228,0.8)' />
            </div>
          </div>
        </div>
        <ParticlesBackground id='particles' />
      </div>
    </>
  )
}
