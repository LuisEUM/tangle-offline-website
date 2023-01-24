'use client'
import React, { useEffect, useRef } from 'react'
import dataImages from '../../data/images.json'

export default function Waves () {
  const ref = useRef()

  const importedImages = dataImages.waves

  useEffect(() => {
    const images = [].slice.call(
      document.getElementsByClassName('animated-path')
    )
    let i = 0
    for (const image of images) {
      image.counter = 0 + i
      i += 0.125
      if (images.indexOf(image) === images.length / 2) {
        i = 0
      }
    }

    function moveStar () {
      for (const image of images) {
        if (parseInt(image.counter, 10) === 1) {
          image.counter = 0
        }
        image.counter += 0.001
        const straightLength = ref.current.getTotalLength()
        image.setAttribute(
          'transform',
          'translate(' +
            (ref.current.getPointAtLength(image.counter * straightLength).x -
              15) +
            ',' +
            (ref.current.getPointAtLength(image.counter * straightLength).y -
              9) +
            '), scale(0.5)'
        )

        if (window.innerWidth >= 768) {
          image.setAttribute(
            'transform',
            'translate(' +
              (ref.current.getPointAtLength(image.counter * straightLength).x -
                15) +
              ',' +
              (ref.current.getPointAtLength(image.counter * straightLength).y -
                9) +
              '), scale(0.5)'
          )
        } else {
          image.setAttribute(
            'transform',
            'translate(' +
              (ref.current.getPointAtLength(image.counter * straightLength).x -
                15) +
              ',' +
              (ref.current.getPointAtLength(image.counter * straightLength).y -
                18) +
              '), scale(1)'
          )
        }
      }
      requestAnimationFrame(moveStar)
    }
    requestAnimationFrame(moveStar)
  }, [])

  return (
    <div id='path' className='h-0 w-full absolute left-0 bottom-24 pb-[13%]'>
      <div className='h-0 w-full p-0'>
        <svg
          viewBox='-200 -25 430 500'
          preserveAspectRatio='xMidYMin slice'
          x='0'
          y='15'
          className='absolute h-full w-full left-0 top-0'
        >
          <path
            ref={ref}
            fill='none'
            d='M -360 0 L -241 0 C -37 -32 32 32 245 -1 L 386 0'
            width='100%'
            stroke='#0089cf'
            strokeWidth='0.03rem'
          />
          {importedImages.map((e, i) => {
            return <image key={i} className='animated-path w-10 h-10' href={e} />
          })}
        </svg>
      </div>
    </div>
  )
}
