'use client'
import { useEffect, useState } from 'react'
import VideoPlayer from '../video-player/VideoPlayer'
import SectionAnimation from '../ui/animation/sectionsAnimation'

export default function SectionThree () {
  const wordArray = ['Clubbling', 'Bowling', 'Cafe', 'Restaurant', 'Boat', 'Tour']
  const [first, setfirst] = useState(wordArray[0])

  useEffect(() => {
    let count = 0
    setInterval(() => {
      if (wordArray.length <= count) {
        count = 0
      }

      setfirst(wordArray[count])
      count++
      console.log(first, wordArray.length, count)
    }, 3000)

    // return clearInterval(wordCounter)
  }, [])

  return (
    <>
      <div className='relative  '>
        <SectionAnimation>
          <VideoPlayer />
        </SectionAnimation>
      </div>
    </>
  )
}
