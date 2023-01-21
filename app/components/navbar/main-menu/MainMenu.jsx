'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SubMenu from '../sub-menu/SubMenu.jsx'
import languagesOptionsData from '../../../data/menu.languages.json'

const MainMenu = ({ isOpen }) => {
  const [isOpenGeneral, setIsOpenGeneral] = useState(false)
  const languagesOptions = languagesOptionsData

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
      className='flex-row group-first:border-b-2 content-center justify-center top-[100px] right-0 p-7 fixed w-80 m-a '
    >
      <AnimatePresence>
        {isOpen &&
          <>
            <motion.a
              variants={itemVariants}
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              exit='closed'
              href='/'
              className='block text-center text-tangle-rich-black-FOGBRA-29 font-bold hover:text-black'
            >
              Home
            </motion.a>

            <motion.a
              variants={itemVariants}
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              exit='closed'
              href='/merchants'
              className='block mt-5 text-center text-tangle-rich-black-FOGBRA-29 font-bold hover:text-black '
            >
              Become a Merchant
            </motion.a>

            {/* <div>
              {locales.map((l, i) => {
                return (
                  <span key={i} className={l === locale ? 'text-red-500' : ''}>
                    <Link href={asPath} locale={l}>
                      {l}
                    </Link>
                  </span>
                )
              })}
            </div> */}

            <motion.div
              variants={itemVariants}
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              exit='closed'
            >
              <SubMenu
                itemVariants={itemVariants}
                isOpen={isOpen}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
                subIsOpen={isOpenGeneral}
                setIsOpenList={setIsOpenGeneral}
                name='Languages'
                categories={languagesOptions}
                className='mt-5 text-tangle-rich-black-FOGBRA-29'
              />
            </motion.div>
          </>}
      </AnimatePresence>
    </motion.ul>
  )
}

export default MainMenu
