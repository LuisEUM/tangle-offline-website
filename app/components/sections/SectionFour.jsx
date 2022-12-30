'use client'

import HorizonatalLineBottom from '../ui/progress/horizonatalLineBottom'
import TinyCurveBottomLeft from '../ui/progress/tinyCurveLineBottomLeft'
import TinyCurveBottomRigth from '../ui/progress/tinyCurveLineBottomRigth'
import VerticalLine from '../ui/progress/verticalLine'

export default function SectionFour () {
  return (
    <div className='grid grid-cols-1 relative max-w-full'>
      <div className='flex w-full flex-col  max-w-full'>
        <div className='flex pl-5 max-w-full relative mx-2 md:mx-14 lg:mx-32'>
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
        <div className='flex flex-col w-full  items-center align-middle absolute top-0 -mt-28'>
          <div className='grid grid-cols-1 h-48 md:grid-cols-3 gap-y-5 gap-x-4 lg:gap-6 max-w-4xl'>
            <div className='gird grid-cols-1  shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <h3 className='text-center font-bold text-[#D90026] text-4xl lg:text-5xl mb-3'>160 times</h3>
                <p className='text-center'>a day an average person picks up a mobile phone</p>
              </div>
            </div>
            <div className='gird grid-cols-1 shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <h3 className='text-center font-bold text-[#D90026] text-4xl lg:text-5xl mb-3'>2.5 hours</h3>
                <p className='text-center'>spent on social media, 80% of people consider a waste of time </p>
              </div>
            </div>
            <div className='gird grid-cols-1  shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <h3 className='text-center font-bold text-[#D90026] text-4xl lg:text-5xl mb-3'>62 Days</h3>
                <p className='text-center'>a year wasted on social media and online entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
