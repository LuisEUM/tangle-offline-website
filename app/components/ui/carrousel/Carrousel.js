'use client'
import { useState } from 'react'
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

export default function Carrousel ({ numbers, bullets, arrows, className, immagesArray }) {
  const [page, setPage] = useState(initialIndex)
  const images = immagesArray
  const paginationBullets = bullets || false
  const paginationNumbers = numbers || false
  const paginationArrows = arrows || false

  const handleClickAfter = () => {
    if (page >= images.length - 1) {
      setPage(initialIndex)
    } else {
      setPage((prevCount) => prevCount + 1)
    }
  }

  const handleClickBefore = () => {
    if (page <= 0) {
      setPage(images.length - 1)
    } else {
      setPage((prevCount) => prevCount - 1)
    }
  }

  return (
    <div className={`${className}`}>
      <div className='overflow-hidden rounded-3xl shadow relative flex w-full min-h-[300px] justify-center items-center'>
        <AnimatePresence initial={false} custom={page}>
          {images.map((image, index) => {
            const isCurrent = index === page
            const direction = index - page
            return (
              <motion.img
                className='absolute h-full w-full object-cover'
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
            <div className='justify-center items-center select-none cursor-pointer flex font-bold z-50 w-10 h-10 text-lg rounded-full  absolute right-3 top-1/2 ' onClick={handleClickAfter}>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-full m-3' viewBox='0 0 6.52 11.15'>
                <path d='m.43.43l5.43,4.69c.3.26.3.72,0,.98L.43,10.71' stroke='#01ADE4' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.86px' fill='none' />
              </svg>
            </div>
            <div className='justify-center items-center select-none cursor-pointer flex font-bold z-50 w-10 h-10 text-lg rounded-full  absolute left-3 top-1/2 -scale-100' onClick={handleClickBefore}>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-full m-3' viewBox='0 0 6.52 11.15'>
                <path d='m.43.43l5.43,4.69c.3.26.3.72,0,.98L.43,10.71' stroke='#01ADE4' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.86px' fill='none' />
              </svg>
            </div>
          </>
        )}
      </div>

      {paginationBullets && (
        <>
          <div className='flex content-center justify-center w-full my-2'>
            {images.map((image, index) => {
              const isCurrent = index === page
              return (
                <div
                  className={`bullet w-2 h-2 rounded-full bg-tangle-oxford-blue mx-2 my-0 cursor-pointer ${isCurrent ? 'bg-tangle-cyan-process' : ''}`}
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
          <div className='flex content-center justify-center w-full'>
            <div className='mr-2'>{page + 1}</div>
            <div className=''>/ </div>
            <div className='ml-2'>{images.length}</div>
          </div>
        </>
      )}

    </div>
  )
}

Carrousel.propTypes = {
  heigth: PropTypes.string
}

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { wrap } from 'popmotion'
// import './GalleryRestaurant.css'
// import dataImages from '../../../data/images.json'

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }
//   },
//   center: {
//     zindex: 1,
//     x: 0,
//     opacity: 1
//   },
//   exit: (direction) => {
//     return {
//       zindex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     }
//   }
// }

// /**
//  * Experimenting with distilling swipe offset and velocity into a single variable, so the
//  * less distance a user has swiped, the more velocity they need to register as a swipe.
//  * Should accomodate longer swipes and short flicks without having binary checks on
//  * just distance thresholds and velocity > 0.
//  */
// const swipeConfidenceThreshold = 10000
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity
// }

// function GalleryRestaurant ({ name }) {
//   const [[page, direction], setPage] = useState([0, 0])
//   const [images, setImages] = useState([])

//   useEffect(() => {
//     if (name === 'collage') {
//       return setImages(dataImages.carrousel)
//     }
//   }, [name, setImages])

//   // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
//   // then wrap that within 0-2 to find our image ID in the array below. By passing an
//   // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
//   // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
//   const imageIndex = wrap(0, images.length, page)

//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection])
//   }

//   return (
//     <div className='gallery-container overflow-hidden rounded-4 shadow'>
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           className='galleryImg'
//           key={page}
//           src={images[imageIndex]}
//           custom={direction}
//           variants={variants}
//           initial='enter'
//           animate='center'
//           exit='exit'
//           transition={{
//             x: { type: 'spring', stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 }
//           }}
//           drag='x'
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x)

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1)
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1)
//             }
//           }}
//         />
//       </AnimatePresence>
//       <div className='next' onClick={() => paginate(1)}>
//         <i className='fa fa-angle-right fa-fw' aria-hidden='true' />
//       </div>
//       <div className='prev' onClick={() => paginate(-1)}>
//         <i className='fa fa-angle-right fa-fw' aria-hidden='true' />
//       </div>
//     </div>
//   )
// }

// export default GalleryRestaurant
