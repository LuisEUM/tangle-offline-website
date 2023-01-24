import React from 'react'

export default function SectionSix ({ text }) {
  return (
    <div className='h-screen w-full flex flex-col align-middle justify-center content-center'>
      <div className='h-full flex flex-col align-middle justify-center content-center bg-black'>
        <p className='bg-black text-center'>{text.tv}</p>
      </div>
    </div>
  )
}
