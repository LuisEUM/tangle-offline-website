'use client'

import HorizonatalLineBottom from '../ui/progress/horizonatalLineBottom'
import TinyCurveBottomLeft from '../ui/progress/tinyCurveLineBottomLeft'
import TinyCurveBottomRigth from '../ui/progress/tinyCurveLineBottomRigth'
import VerticalLine from '../ui/progress/verticalLine'

export default function SectionFour () {
  return (
    <div className='flex  max-w-full flex-col px-2 md:px-14 lg:px-32 relative'>
      <div className='flex pl-5 max-w-full  relative'>
        <div className=''>
          <TinyCurveBottomLeft color='red' heigth={42} width={42} />
        </div>
        <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden'>
          <HorizonatalLineBottom heigth={42} width={3000} color='red' />
        </div>
        <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden -rotate-180'>
          <HorizonatalLineBottom heigth={42} width={3000} color='red' />
        </div>
        <div className='mr-5 '>
          <TinyCurveBottomRigth color='red' heigth={42} width={42} />
          <VerticalLine color='red' heigth={150} width={42} />
        </div>
      </div>
      {/* <div className='flex flex-col w-full max-w-full items-center absolute top-0 -m-14'>
        <div className='grid sm:grid-cols-1 md:grid-cols-3  lg:gap-6 max-w-4xl'>
          <div className='shadow min-h-[84px] bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
            <h3 className='text-center font-bold text-[#D90026] sm:text-lg md:text-2xl lg:text-3xl mb-3'>160 times</h3>
            <p className='text-center'>a day an average person picks up a mobile phone</p>
          </div>
          <div className='shadow min-h-[84px] bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
            <h3 className='text-center font-bold text-[#D90026] sm:text-lg md:text-2xl lg:text-3xl mb-3'>2.5 hours</h3>
            <p className='text-center'>spent on social media, 80% of people consider a waste of time </p>
          </div>
          <div className='shadow min-h-[84px] bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
            <h3 className='text-center font-bold text-[#D90026] sm:text-lg md:text-2xl lg:text-3xl mb-3'>62 Days</h3>
            <p className='text-center'>a year wasted on social media and online entertainment</p>
          </div>
        </div>
      </div> */}
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
