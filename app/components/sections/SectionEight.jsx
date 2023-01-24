'use client'

import HorizonatalLine from '../ui/progress/horizonatalLine'
import CurveLine from '../ui/progress/curveLine'
import VerticalLine from '../ui/progress/verticalLine'
import { Icon } from '../ui/svg/Icon'

export default function SectionEight ({ text }) {
  return (
    <div className='grid grid-cols-1 relative max-w-full'>
      <div className='flex w-full flex-col  max-w-full'>
        <div className='flex px-5 max-w-full relative mx-2 md:mx-14 lg:mx-32 '>
          <div className='ml-48 md:ml-0 lg:ml-0  '>
            <div className='-scale-x-100'>
              <CurveLine color='rgb(1, 209, 46)' heigth={42} width={42} />
            </div>
            <div className='md:max-h-60  overflow-hidden'>
              <VerticalLine color='rgb(1, 209, 46)' heigth={625} width={42} />
            </div>
          </div>
          <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden'>
            <HorizonatalLine color='rgb(1, 209, 46)' heigth={42} width={3000} />
          </div>
          <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden -rotate-180 '>
            <HorizonatalLine color='rgb(1, 209, 46)' heigth={42} width={3000} />
          </div>
          <div className=' h-[42px] -rotate-180 -scale-x-100'>
            <CurveLine color='rgb(1, 209, 46)' heigth={42} width={42} />
          </div>
        </div>
        <div className='flex flex-col w-full  items-center align-middle absolute top-0 -mt-28 px-5'>
          <div className='grid grid-cols-1 h-48 md:grid-cols-3 gap-y-5 gap-x-4 lg:gap-6 max-w-4xl'>
            <div className='gird grid-cols-1  shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <div className=' flex h-[63px] m-auto rounded-full '>
                  <Icon icon='sun' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46)' />
                </div>
                <h3 className='text-center font-bold text-white text-xl lg:text-2xl mb-3'>{text.headerCardOne}</h3>
              </div>
            </div>
            <div className='gird grid-cols-1 shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <div className=' flex h-[63px] m-auto rounded-full '>
                  <Icon icon='search' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46)' />
                </div>
                <h3 className='text-center font-bold text-white text-xl lg:text-2xl mb-3'>{text.headerCardTwo}</h3>
              </div>
            </div>
            <div className='gird grid-cols-1  shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5'>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <div className=' flex h-[63px] m-auto rounded-full '>
                  <Icon icon='map' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46)' />
                </div>
                <h3 className='text-center font-bold text-white text-xl lg:text-2xl mb-3'>{text.headerCardThree} </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
