'use client'
import { useCallback, useEffect, useState } from 'react'
import './SectionFifteen.css'
import Waves from '../waves/Waves'
import CountrySelector from '../forms/CountrySelector'

export default function SectionFifteen ({ text }) {
  const [cityName, setCityName] = useState('Amsterdam')

  /* Shuffle city names */
  const shuffleCityNames = useCallback(() => {
    const index = Math.floor(Math.random() * text.cities.length)
    setCityName(text.cities[index])
  }, [])

  useEffect(() => {
    const changeInterval = setInterval(shuffleCityNames, 5000)
    return () => clearInterval(changeInterval)
  }, [shuffleCityNames])

  return (
    <div className='px-2 md:px-14 lg:px-32 w-full relative'>
      <div className=' flex flex-col align-middle content-center justify-center pb-64 pt-24 md:pb-72 md:pt-32 lg:pb-80 lg:pt-36'>
        <p className='header-invite  text-black  text-5xl md:text-7xl lg:text-8xl text-center font-bold  '>
          {text.header} <br /> <span className='invite-place text-6xl md:text-8xl lg:text-9xl font-bold '>{cityName}</span> <span className='text-6xl md:text-8xl lg:text-9xl'>?</span>
        </p>
        <p className='invite-text text-lg md:text-2xl mt-12 mb-6 text-center font-semibold'>{text.description}</p>
        <CountrySelector text={text} />
        <Waves />
      </div>
    </div>
  )
}
