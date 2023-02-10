'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import LettersAnimation from '../ui/animation/lettersAnimation'

export default function SectionTen ({ text }) {
  return (
    <div className='px-2 md:px-14 lg:px-32 w-full'>
      <motion.div className='  '>
        <div>
          <div className='flex gap-12'>
            <div className='bg-red- flex justify-center content-center  align-middle relative h-[600px]'>
              <div className='bg-fuchsia- flex justify-center content-center  align-middle gap-0 md:gap-4 lg:gap-6'>
                <div className='bg-green- py-5 flex flex-col mt-10 align-bottom content-bottom mb-12 self-end relative'>
                  <div className='flex align-bottom content-bottom self-end gap-0 md:gap-4 lg:gap-6'>
                    <div className='flex h-[63px] ml-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start -mt-4' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
                      <Ellipse icon='share' className='h-16 p-12 my-5 max-w-[30px] ' color='rgba(1, 209, 46, 0.4)' />
                    </div>
                    <div className='flex flex-col align-bottom content-bottom self-end'>
                      <div className='max-w-full pt-2 ml-'>
                        <WordsAnimation key={text.subHeader} className='text-base sm:text-lg md:text-xl lg:text-2xl font-title' text={text.subHeader} tag='h4' />
                      </div>
                      <div className='max-w-full py-2'>
                        <LettersAnimation key={text.header} className='text-3xl md:text-6xl lg:text-6xl font-bold' text={text.header} tag='h3' />
                      </div>
                      <div className='max-w-full md:w-full lg:w-4/5 pr-2 pt-2'>
                        <WordsAnimation key={text.description} className='text-base sm:text-lg md:text-xl lg:text-2xl font-body ' text={text.description} tag='p' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-yellow- flex absolute -z-30 left-5 top-0'>
                <VerticalLine color='rgb(1, 209, 46)' width={42} heigth={600} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
