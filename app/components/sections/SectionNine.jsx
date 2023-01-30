'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import dataImages from '../../data/images.json'

export default function SectionNine ({ text }) {
  const [images, setImages] = useState(dataImages.waves)
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [showCard, setShowCard] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    setImages(images.map((image) => {
      return {
        image,
        x: Math.floor(Math.random() * dimensions.width) / 2,
        y: Math.floor(Math.random() * dimensions.height) / 2
      }
    }))

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const centerImage = images[0]

  return (
    <div className=' h-[682px] md:[416px] lg:h-[600px] px-2 md:px-14 lg:px-32 w-full flex flex-col align-middle justify-center content-center '>
      <div ref={containerRef} className='h-full bg-tangle-rich-black-FOGBRA-29 relative overflow-hidden bg-no-repeat bg-center bg-cover bg-img-map'>
        <div className='h-full w-full flex justify-center content-center items-center absolute top-0 left-0'>
          <motion.svg
            width='137'
            height='137'
            viewBox='0 0 137 137'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ scale: 0.1, rotate: '0deg', transition: { duration: 5 }, opacity: 1 }}
            animate={{ scale: [0.1, 1, 4], rotate: '360deg', transition: { duration: 7.5, repeat: Infinity, repeatDelay: 0.5 }, opacity: [1, 1, 1, 0.5, 0] }}
          >
            <path d='M135 68.5C135 59.7671 133.28 51.1197 129.938 43.0516C126.596 34.9834 121.698 27.6525 115.523 21.4774C109.348 15.3023 102.017 10.404 93.9485 7.06201C85.8803 3.72008 77.2329 2 68.5 2C59.7671 2 51.1197 3.72007 43.0516 7.06201C34.9834 10.4039 27.6525 15.3023 21.4774 21.4774C15.3023 27.6525 10.404 34.9834 7.06201 43.0515C3.72007 51.1197 2 59.7671 2 68.5C2 77.2329 3.72007 85.8803 7.06201 93.9484C10.4039 102.017 15.3023 109.348 21.4774 115.523C27.6525 121.698 34.9834 126.596 43.0515 129.938C51.1197 133.28 59.7671 135 68.5 135C77.2329 135 85.8803 133.28 93.9484 129.938C102.017 126.596 109.348 121.698 115.523 115.523C121.698 109.348 126.596 102.017 129.938 93.9484C133.28 85.8803 135 77.2329 135 68.5L135 68.5Z' stroke='url(#paint0_angular_1439_9085)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='1 15' />
            <defs>
              <radialGradient id='paint0_angular_1439_9085' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(38.5697 48.6514) rotate(36.001) scale(106.476)'>
                <stop offset='4.7067e-07' stop-color='#5C7DD6' />
                <stop offset='0.474664' stop-color='#BB62D1' stop-opacity='0.05' />
                <stop offset='1' stop-color='#D957AC' stop-opacity='0.55' />
              </radialGradient>
            </defs>
          </motion.svg>
        </div>
        <div className='h-full w-full flex justify-center content-center items-center absolute top-0 left-0'>
          <motion.svg
            width='248'
            height='248'
            viewBox='0 0 248 248'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ scale: 0.1, rotate: '0deg', transition: { duration: 5 }, opacity: 1 }}
            animate={{ scale: [0.1, 1, 4], rotate: '360deg', transition: { duration: 7.5, repeat: Infinity, repeatDelay: 0.5 }, opacity: [1, 1, 1, 0.5, 0] }}
          >
            <path d='M2 124C1.99999 140.021 5.15561 155.886 11.2867 170.687C17.4178 185.489 26.4042 198.938 37.7329 210.267C49.0617 221.596 62.5109 230.582 77.3126 236.713C92.1143 242.844 107.979 246 124 246C140.021 246 155.886 242.844 170.687 236.713C185.489 230.582 198.938 221.596 210.267 210.267C221.596 198.938 230.582 185.489 236.713 170.687C242.844 155.886 246 140.021 246 124C246 107.979 242.844 92.1144 236.713 77.3126C230.582 62.5109 221.596 49.0617 210.267 37.733C198.938 26.4042 185.489 17.4178 170.687 11.2867C155.886 5.15563 140.021 2.00001 124 2C107.979 2 92.1144 5.15562 77.3126 11.2867C62.5109 17.4178 49.0617 26.4042 37.733 37.733C26.4042 49.0617 17.4178 62.5109 11.2867 77.3126C5.15562 92.1143 2 107.979 2 124L2 124Z' stroke='url(#paint0_angular_1439_9086)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='1 15' />
            <defs>
              <radialGradient id='paint0_angular_1439_9086' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(179.291 160.667) rotate(-143.999) scale(196.695 196.695)'>
                <stop offset='4.7067e-07' stop-color='#5C7DD6' />
                <stop offset='0.474664' stop-color='#BB62D1' stop-opacity='0.05' />
                <stop offset='1' stop-color='#D957AC' stop-opacity='0.55' />
              </radialGradient>
            </defs>
          </motion.svg>
        </div>
        <div className='h-full w-full flex justify-center content-center items-center absolute top-0 left-0'>
          <motion.svg
            width='368'
            height='367'
            viewBox='0 0 368 367'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ scale: 0.1, rotate: '0deg', transition: { duration: 5 }, opacity: 1 }}
            animate={{ scale: [0.1, 1, 4], rotate: '360deg', transition: { duration: 7.5, repeat: Infinity, repeatDelay: 0.5 }, opacity: [1, 1, 1, 0.5, 0] }}
          >
            <path d='M366 183.5C366 159.665 361.292 136.063 352.146 114.042C342.999 92.0213 329.593 72.0129 312.692 55.1592C295.792 38.3055 275.729 24.9365 253.648 15.8155C231.566 6.69449 207.9 2 184 2C160.1 2 136.434 6.69448 114.353 15.8155C92.2715 24.9365 72.2079 38.3054 55.3076 55.1591C38.4072 72.0128 25.0009 92.0212 15.8543 114.042C6.70772 136.063 2 159.665 2 183.5C2 207.335 6.70772 230.937 15.8543 252.958C25.0009 274.979 38.4071 294.987 55.3075 311.841C72.2079 328.695 92.2715 342.063 114.353 351.185C136.434 360.306 160.1 365 184 365C207.9 365 231.566 360.306 253.647 351.185C275.729 342.064 295.792 328.695 312.692 311.841C329.593 294.987 342.999 274.979 352.146 252.958C361.292 230.937 366 207.335 366 183.5L366 183.5Z' stroke='url(#paint0_angular_1439_9087)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='1 15' />
            <defs>
              <radialGradient id='paint0_angular_1439_9087' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(101.292 128.803) rotate(35.9256) scale(293.95 293.697)'>
                <stop offset='4.7067e-07' stop-color='#5C7DD6' />
                <stop offset='0.474664' stop-color='#BB62D1' stop-opacity='0.05' />
                <stop offset='1' stop-color='#D957AC' stop-opacity='0.55' />
              </radialGradient>
            </defs>
          </motion.svg>
        </div>
        <div className='h-full w-full flex justify-center content-center items-center absolute top-0 left-0'>
          <motion.svg
            width='500'
            height='500'
            viewBox='0 0 500 500'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ scale: 0.1, rotate: '0deg', transition: { duration: 5 }, opacity: 1 }}
            animate={{ scale: [0.1, 1, 4], rotate: '360deg', transition: { duration: 7.5, repeat: Infinity, repeatDelay: 0.5 }, opacity: [1, 1, 1, 0.5, 0] }}
          >
            <path d='M250 2C217.432 2 185.183 8.4147 155.095 20.8779C125.006 33.341 97.6665 51.6086 74.6376 74.6375C51.6086 97.6664 33.3411 125.006 20.8779 155.094C8.41472 185.183 2.00001 217.432 2 250C2 282.568 8.4147 314.817 20.8779 344.905C33.341 374.994 51.6086 402.334 74.6375 425.362C97.6664 448.391 125.006 466.659 155.094 479.122C185.183 491.585 217.432 498 250 498C282.568 498 314.817 491.585 344.905 479.122C374.994 466.659 402.334 448.391 425.362 425.362C448.391 402.334 466.659 374.994 479.122 344.906C491.585 314.817 498 282.568 498 250C498 217.432 491.585 185.183 479.122 155.095C466.659 125.006 448.391 97.6665 425.362 74.6375C402.334 51.6086 374.994 33.341 344.905 20.8779C314.817 8.41471 282.568 2 250 2L250 2Z' stroke='url(#paint0_angular_1439_9088)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='1 15' />
            <defs>
              <radialGradient id='paint0_angular_1439_9088' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(175.151 362.867) rotate(-53.999) scale(401.519)'>
                <stop offset='4.7067e-07' stop-color='#5C7DD6' />
                <stop offset='0.474664' stop-color='#BB62D1' stop-opacity='0.05' />
                <stop offset='1' stop-color='#D957AC' stop-opacity='0.55' />
              </radialGradient>
            </defs>
          </motion.svg>

        </div>

        <FaceImage
          src={centerImage.image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[1].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={550}
          moveY={-500}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[2].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={150}
          moveY={-50}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[3].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={-150}
          moveY={150}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[4].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={350}
          moveY={200}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[5].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={-700}
          moveY={-300}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[6].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={-550}
          moveY={150}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[7].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={-600}
          moveY={300}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[8].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={350}
          moveY={-350}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[9].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={-50}
          moveY={-450}
          setShowCard={setShowCard}
          showCard={showCard}
        />
        <FaceImage
          src={images[10].image}
          boxWidth={dimensions.width}
          boxHeigth={dimensions.height}
          moveX={50}
          moveY={450}
          setShowCard={setShowCard}
          showCard={showCard}
        />
      </div>
      <div className='w-full relative'>
        {showCard && (
          <div
            className='shadow-lg h-[258px] w-[315px] absolute -top-32 right-[7%] z-50 bg-no-repeat bg-center bg-cover bg-activity-basket'
          />
        )}
      </div>
    </div>
  )
}

function FaceImage ({ src, boxWidth, boxHeigth, moveX, moveY, setShowCard, showCard }) {
  moveX = moveX || 0
  moveY = moveY || 0
  return (
    <motion.img
      src={src}
      alt='imagen alternativa'
      onClick={() => setShowCard(!showCard)}
      width={50}
      height={50}
      whileHover={{ scale: 1.5, transition: { duration: 0.5 } }}
      whileTap={{ scale: 1.25, transition: { duration: 0.1 } }}
      className='cursor-pointer'
      style={{
        position: 'absolute',
        left: `${(boxWidth - 50 + moveX) / 2}px`,
        top: `${(boxHeigth - 50 + moveY) / 2}px`
      }}
    />
  )
}
