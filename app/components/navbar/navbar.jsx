'use client'
import { useRef, React, useState, useEffect } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useDimensions } from './hook/use-dimensions.jsx'
import { ToggleMenu } from './toggle-menu/ToggleMenu'
import MainMenu from './main-menu/MainMenu'
import SelectList from '../ui/select-list/SelectList.js'

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

export default function NavBar ({ text }) {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <div className='top-0 z-50 w-full '>
      <div
        style={{
          transitionDuration: '600ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        className={`flex h-20 absolute justify-between md:fixed top-0 w-full ${scrolled ? 'bg-opacity-50 bg-tangle-oxford-blue' : ''}`}
      >
        <div className=' ml-8 col-span-2 flex justify-center items-center'>
          <a href='/' className='w-full self-center'>
            <img src='/logos/TangleLogoNewWhite.png' alt='Tangle Logo' width='150px' height='auto' />
          </a>
        </div>
        <div className='hidden md:flex'>
          <div className='  flex justify-center px-4'>
            <motion.button className='bg-[#0086D3] rounded-full py-3 px-5 h-12 self-center'>
              {text.button}
            </motion.button>
          </div>
          <div className='flex justify-center pr-8 pl-4'>
            <SelectList />
          </div>
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
          className='absolute md:hidden top-0 right-0 bottom-0 w-full'
        >
          <AnimatePresence>
            {isOpen &&
              <>
                <motion.div
                  className={`fixed h-screen top-0 right-0 bottom-0 max-w-full ${isOpen ? 'bg-white w-screen' : 'bg-white'} `}
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

          <ToggleMenu isOpen={isOpen} toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  )
}
