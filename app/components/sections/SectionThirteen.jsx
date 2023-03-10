import LettersAnimation from '../ui/animation/lettersAnimation'
import VerticalLine from '../ui/progress/verticalLine'
import dataImages from '../../data/images.json'
import Image from 'next/image'
import Link from 'next/link'

export default function SectionThirteen ({ text }) {
  return (
    <>
      <div className=' px-2 md:px-14 lg:px-32 w-full flex flex-col align-middle justify-center content-center '>
        <div className='h-full items-center flex flex-col lg:flex-row gap-y-12 align-middle justify-center content-center bg-tangle-oxford-blue p-8 md:p-10 lg:p-16 rounded-2xl'>
          <div className='lg:pr-16 lg:w-1/2 order-2 lg:order-1'>
            <div className='max-w-full mb-4 lg:mb-10'>
              <LettersAnimation key={text.header} className='text-3xl md:text-4xl lg:text-5xl font-main_black text-[#00ADE4]' text={text.header} tag='h3' />
            </div>
            <div className='max-w-full mb-7 md:mb-8  lg:mb-20'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-main_light'>{text.description}</p>
            </div>
            <Link href={text.button_url} className='self-center'>
              <button className='bg-[#0086D3] rounded-full w-full py-3 font-main_bold'>
                {text.button}
              </button>
            </Link>
          </div>
          <div className='lg:pl-16 h-[165px] md:h-[372px] lg:h-[400px] w-full lg:w-1/2 order-1 lg:order-2'>
            <Image src={dataImages.merchants[0]} width={400} height={400} alt='Merchants' className='mx-auto rounded-2xl h-[165px] md:h-[372px] lg:h-[400px] w-full object-cover object-top lg:object-center ' />
          </div>
        </div>
      </div>
      <div className='flex px-5 max-w-full relative mx-2 md:mx-14 lg:mx-32'>
        <div className='max-h-28 md:max-h-52 overflow-hidden'>
          <VerticalLine heigth={625} width={42} color='rgba(0,173,228,0.8)' />
        </div>
      </div>
    </>
  )
}
