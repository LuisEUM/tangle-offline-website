'use client'
import { useRef, React, useState, useEffect, useContext } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useDimensions } from './hook/use-dimensions.jsx'
import { ToggleMenu } from './toggle-menu/ToggleMenu'
import MainMenu from './main-menu/MainMenu'
import SelectList from '../ui/select-list/SelectList.js'
import { LanguageContext } from '../../context/languageContext.jsx'
import CountrySelector from '../forms/CountrySelector.jsx'
import Link from 'next/link.js'
import imageData from '../../data/images.json'

const sidebar = {
  open: {
    clipPath: 'inset(0 0 0 0%)',
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 1,
      duration: 5,
      when: 'beforeChildren'
    }
  },
  closed: {
    clipPath: 'inset(0 0 0 100%)',
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 1,
      duration: 5,
      when: 'afterChildren'
    }
  }
}

export default function NavBar() {
  const { text } = useContext(LanguageContext)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    handleResize();
  }, []);
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

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
    <div className='top-0 z-50 w-full opacity-100'>
      <div
        style={{
          transitionDuration: '600ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        className={`flex h-20 absolute ${isMobile ? 'justify-start' : 'justify-between'}  md:fixed top-0 w-full ${scrolled ? 'bg-opacity-50 bg-tangle-oxford-blue' : ''}`}
      >
        <div className=' ml-8 col-span-2 flex justify-center items-center'>
          <Link href='/' className='w-full self-center flex items-center'>
            <motion.img layoutId='navbarLogo' src={imageData.logos[0]} alt='Tangle Logo' width='50px' height='50px' className='max-h-[50px] max-w-full ' />
            <p className='font-main_regular  text-3xl hidden md:flex'>Tangle</p>
          </Link>

        </div>
        <div className={`flex justify-center px-4 ${isMobile ? '' : 'hidden'}`}>
          <Link href={text.home[12].button_url} className='self-center'>
            <motion.button className='bg-[#0086D3] rounded-full py-3 px-5 h-12 self-center' >
              {text.home[12].button}
            </motion.button>
          </Link>
        </div>

        <div className='hidden md:flex'>
          <div className='flex justify-center px-4'>
            <Link href={text.home[12].button_url} className='self-center'>
              <motion.button className='bg-[#0086D3] rounded-full py-3 px-5 h-12 self-center'>
                {text.home[12].button}
              </motion.button>
            </Link>
          </div>
          <div className='flex justify-center pr-8 pl-4 hidden md:flex'>
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
                  className={`fixed h-screen top-0 right-0 bottom-0 max-w-full overflow-hidden ${isOpen ? 'bg-white w-screen' : 'bg-white'} `}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  variants={sidebar}
                  layout
                  layoutId='sidebar'
                >
                  <MainMenu isOpen={isOpen} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${isOpen ? 'fixed' : 'hidden'} left-0 bottom-0 w-full px-14 transition-all`}
                    transition={{ duration: 0.1, delay: 1 }}
                  >
                    <p className='invite-place-two font-semibold text-sm'>{text.home[14].description}</p>
                    <CountrySelector className='w-full' text={text.home[14]} navbar />
                  </motion.div>
                </motion.div>
              </>}
          </AnimatePresence>

          <ToggleMenu isOpen={isOpen} toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  )
}
