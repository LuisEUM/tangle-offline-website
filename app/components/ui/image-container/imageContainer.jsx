import { useInView, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import imageData from '../../../data/images.json'
import SectionAnimation from '../animation/sectionsAnimation'

export default function ImageContainer () {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <div className='relative h-[619px] md:h-[774px] bg-cover bg-right' style={{ backgroundImage: `url(${imageData.parallax[0]})` }}>
      <SectionAnimation repeat>
        <motion.div
          className='w-full h-full'
          ref={ref}
          variants={variant}
          initial='hidden'
          animate={isInView && 'visible'}
          transition={{ duration: 3 }}
          exit='hidden'
        >
          <Image
            className='absolute inset-0 h-[619px] md:h-full w-full object-cover object-right'
            src={imageData.parallax[1]}
            alt='Overlay Image'
            width={1437}
            height={774}
          />
        </motion.div>
      </SectionAnimation>
    </div>
  )
};
