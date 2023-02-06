import { Ellipse } from '../ui/svg/elipse'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'

export default function SectionFour ({ text }) {
  return (
    <div className='px-2 md:px-14 lg:px-32 w-full'>
      <div className='flex justify-center content-center  align-middle relative h-[450px]'>
        <div className='flex justify-center content-center  align-middle gap-0 md:gap-4 lg:gap-6'>
          <div className=' flex h-[63px] ml-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start mt-10' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
            <Ellipse icon='sad' className='h-16 p-12 my-5 max-w-[30px] ' color='rgba(255,0,0,0.4)' />
          </div>
          <div className='flex flex-col mt-10 align-middle content-top justify-top pr-10 py-5'>
            <div className='max-w-full pt-2'>
              <WordsAnimation key={text.header} className='text-base sm:text-lg md:text-xl lg:text-2xl font-title' text={text.header} tag='h4' />
            </div>
            <div className='max-w-full md:w-full lg:w-4/5 pr-2 pt-2'>
              <WordsAnimation key={text.description} className='text-base sm:text-lg md:text-xl lg:text-2xl font-body ' text={text.description} tag='p' />
            </div>
          </div>
        </div>
        <div className='flex absolute -z-30 left-5 top-0'>
          <VerticalLine color='red' width={42} heigth={450} />
        </div>
      </div>
    </div>
  )
}
