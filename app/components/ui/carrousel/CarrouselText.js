'use client'
import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      zindex: 0
    }
  },
  center: {
    zindex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zindex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const initialIndex = 0

export default function CarrouselText ({ numbers, bullets, arrows, className, immagesArray, text }) {
  const [page, setPage] = useState(initialIndex)
  const images = immagesArray
  const paginationBullets = bullets || false
  const paginationNumbers = numbers || false
  const paginationArrows = arrows || false

  const handleClickAfter = useCallback(() => {
    if (page >= images.length - 1) {
      setPage(initialIndex)
    } else {
      setPage((prevCount) => prevCount + 1)
    }
  }, [images.length, page])

  const handleClickBefore = () => {
    if (page <= 0) {
      setPage(images.length - 1)
    } else {
      setPage((prevCount) => prevCount - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleClickAfter()
    }, 3000)
    return () => clearInterval(interval)
  }, [handleClickAfter, page])

  return (
    <div className={`${className}`}>
      <div className='overflow-hidden shadow relative flex w-full min-h-[589px] md:min-h-[934px] justify-center items-center'>
        <AnimatePresence initial={false} custom={page}>
          <p className='z-40 text-base'>{text[page]}</p>
          {images.map((image, index) => {
            const isCurrent = index === page
            const direction = index - page
            return (
              <motion.img
                className='absolute h-full w-full object-cover z-30'
                key={index}
                src={image}
                custom={direction}
                variants={variants}
                initial={!isCurrent ? 'enter' : 'center'}
                animate={isCurrent ? 'center' : 'exit'}
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x > 50) {
                    handleClickBefore()
                  } else if (offset.x < -50) {
                    handleClickAfter()
                  }
                }}
              />
            )
          })}
        </AnimatePresence>
        {paginationArrows && (
          <>
            <div className=' justify-center items-center select-none cursor-pointer flex font-bold z-40 w-10 h-10 text-lg rounded-full  absolute right-3 top-1/2 ' onClick={handleClickAfter}>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-full m-3' viewBox='0 0 6.52 11.15'>
                <path d='m.43.43l5.43,4.69c.3.26.3.72,0,.98L.43,10.71' stroke='#01ADE4' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.86px' fill='none' />
              </svg>
            </div>
            <div className='justify-center items-center select-none cursor-pointer flex font-bold z-40 w-10 h-10 text-lg rounded-full  absolute left-3 top-1/2 -scale-100' onClick={handleClickBefore}>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-full m-3' viewBox='0 0 6.52 11.15'>
                <path d='m.43.43l5.43,4.69c.3.26.3.72,0,.98L.43,10.71' stroke='#01ADE4' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.86px' fill='none' />
              </svg>
            </div>
          </>
        )}
      </div>

      {paginationBullets && (
        <>
          <div className='flex content-center justify-center w-full -mt-6 z-40'>
            {images.map((image, index) => {
              const isCurrent = index === page
              return (
                <div
                  className={`z-50 bullet w-2 h-2 rounded-full bg-slate-400 mx-2 my-0 cursor-pointer ${isCurrent ? 'bg-slate-200' : ''}`}
                  onClick={() => setPage(index)}
                  key={index}
                />
              )
            })}
          </div>
        </>
      )}

      {paginationNumbers && (
        <>
          <div className='flex content-center justify-center w-full z-40'>
            <div className='mr-2 z-50'>{page + 1}</div>
            <div className='z-50'>/ </div>
            <div className='ml-2 z-50'>{images.length}</div>
          </div>
        </>
      )}

    </div>
  )
}

CarrouselText.propTypes = {
  heigth: PropTypes.string
}
