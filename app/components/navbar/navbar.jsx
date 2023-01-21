'use client'
import { useRef, React } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useDimensions } from './hook/use-dimensions.jsx'
import { ToggleMenu } from './toggle-menu/ToggleMenu'
import MainMenu from './main-menu/MainMenu'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: 'inset(0 0 0 0%)',
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 1,
      duration: 5
    }
  }),
  closed: {
    clipPath: 'inset(0 0 0 100%)',
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 1,
      duration: 5
    }
  }
}

export default function NavBar () {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className='top-0 z-50 w-full '>
      <div className='fixed top-0 w-full bg-black bg-opacity-50'>
        <a href='/'>
          <div className='w-40 ml-8 mt-4 mb-4'>
            <img src='/logos/TangleLogoNewWhite.png' alt='' className='w-full' />
          </div>
        </a>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
          className='top-0 right-0 bottom-0 w-full'
        >
          <AnimatePresence>
            {isOpen &&
              <>
                <motion.div
                  className={`fixed top-0 right-0 bottom-0 max-w-full ${isOpen ? 'bg-white w-screen' : 'bg-white'} `}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  variants={sidebar}
                />
                <MainMenu
                  isOpen={isOpen}
                />
              </>}
          </AnimatePresence>
          <ToggleMenu toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  )
}
