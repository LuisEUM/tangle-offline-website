import React from 'react'

export default function SectionNine ({ text }) {
  return (
    <div className='h-screen px-2 md:px-14 lg:px-32 w-full flex flex-col align-middle justify-center content-center'>
      <div className='h-full flex flex-col align-middle justify-center content-center bg-black'>
        <p className='bg-black text-center'>{text.map}</p>
      </div>
    </div>
  )
}
