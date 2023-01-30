'use client'
import { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SubMenu from '../sub-menu/SubMenu.jsx'
import CountrySelector from '../../forms/CountrySelector.jsx'
import { LanguageContext } from '../../../context/languageContext.js'

const MainMenu = ({ isOpen }) => {
  const [isOpenGeneral, setIsOpenGeneral] = useState(false)
  const { text } = useContext(LanguageContext)

  const itemVariants = {
    open: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 1
      }
    }),
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 1,
        staggerDirection: -1
      }
    }
  }

  return (
    <motion.ul
      variants={itemVariants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      exit='closed'
      className='flex-row group-first:border-b-2 content-center justify-center top-[75px] right-0 px-14 fixed w-full'
    >
      <AnimatePresence>
        {isOpen &&
          <>
            {!isOpenGeneral &&
              <>
                <motion.a
                  variants={itemVariants}
                  initial='closed'
                  animate={isOpen ? 'open' : 'closed'}
                  exit='closed'
                  href={text.menu[0].home_pathname}
                  className='block text-center text-tangle-rich-black-FOGBRA-29 font-bold hover:text-tangle-green-blue-crayola'
                >
                  <div className='flex justify-between align-middle items-center'>
                    <p>{text.menu[0].home}</p>
                    <svg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path className='hover:stroke-tangle-green-blue-crayola' d='M1 13.5L7 7.5L1 1.5' stroke='#0D111B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                    </svg>
                  </div>
                </motion.a>

                <motion.a
                  variants={itemVariants}
                  initial='closed'
                  animate={isOpen ? 'open' : 'closed'}
                  exit='closed'
                  href={text.menu[0].merchant_pathname}
                  className='block mt-5 text-center text-tangle-rich-black-FOGBRA-29 font-bold hover:text-tangle-green-blue-crayola'
                >
                  <div className='flex justify-between align-middle items-center'>
                    <p>{text.menu[0].merchant}</p>
                    <svg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path className='hover:stroke-tangle-green-blue-crayola' d='M1 13.5L7 7.5L1 1.5' stroke='#0D111B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                    </svg>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${isOpen ? 'fixed' : 'hidden'} left-0 bottom-0 w-full px-14 transition-all`}
                  transition={{ duration: 0.1, delay: 1 }}
                >
                  <p className='text-teal-800 invite-place-two font-semibold text-sm'>{text.home[14].description}</p>
                  <CountrySelector className='w-full' text={text.home[14]} navbar />
                </motion.div>
              </>}

            <motion.div
              variants={itemVariants}
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              exit='closed'
              className='hover:text-tangle-green-blue-crayola cursor-pointer'
            >
              <SubMenu
                itemVariants={itemVariants}
                isOpen={isOpen}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
                subIsOpen={isOpenGeneral}
                setIsOpenList={setIsOpenGeneral}
                name={text.menu[0].languages}
                categories={text.menu[0].languages_options}
                className='mt-5 text-tangle-rich-black-FOGBRA-29  hover:stroke-tangle-green-blue-crayola'
              />
            </motion.div>
          </>}
      </AnimatePresence>
    </motion.ul>
  )
}

export default MainMenu
