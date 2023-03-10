'use client'
import { useContext, useEffect, useRef, useState } from 'react'
// import { Button, Col, Form, Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
// import Lottie from 'react-lottie'
// import TickAnimation from '../resources/lotties/tickAnimation.json'
import { LanguageContext } from '../context/languageContext'
import { motion } from 'framer-motion'
import LettersAnimation from '../components/ui/animation/lettersAnimation'
import Image from 'next/image'
import dataImages from '../data/images.json'

const Merchant = () => {
  const { text } = useContext(LanguageContext)

  const [formDone, setFormDone] = useState(false)
  const form = useRef()
  const [formData, setFormData] = useState({
    storeName: '',
    storeAddress: '',
    businessType: '',
    websiteLink: '',
    name: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    feedback: ''
  })
  const { handleSubmit } = useForm()

  const onSubmit = (event) => {
    sendEmail(event)
  }

  const content = text
  const player = useRef()

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  // const defaultOptions = {
  //   loop: false,
  //   autoplay: false,
  //   animationData: TickAnimation
  // }

  const updateFormData = (event, property) => {
    const target = event.target
    event.preventDefault()

    setFormData((prevState) => ({
      ...prevState,
      [property]: target.value
    }))
  }

  const sendEmail = (event) => {
    event.preventDefault()
    setFormDone(true)
    console.log(formData)

    emailjs
      .send(
        'service_g8pfoei',
        'template_9qrqkza',
        formData,
        'howejlV7p3kue6F_D'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    setFormData({
      storeName: '',
      storeAddress: '',
      businessType: '',
      websiteLink: '',
      name: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      feedback: ''
    })
  }

  useEffect(() => {
    if (player.current) {
      player.current.play()
    }
  }, [text, formDone])

  return (
    <div className='max-w-full grid grid-cols-1 mb-8'>
      <div className='max-w-full py-6 align-middle justify-center content-center mt-20 min-h-fit' />
      <div className='px-2 w-full flex flex-col align-top justify-center content-center max-w-6xl m-auto'>
        <div className='h-full items-center flex flex-col lg:flex-row gap-y-12 gap-x-12 lg:grid-cols-2  align-center justify-center content-center rounded-2xl'>
          <div className='flex flex-col w-full lg:w-1/2 '>
            <Image src={dataImages.merchants[0]} width={350} height={350} alt='Merchants' className='mx-auto rounded-2xl h-[165px] md:h-[325px] lg:h-[539px] w-full object-cover object-top lg:object-center ' />
          </div>
          <div className='p-4  rounded-2xl w-full lg:w-1/2'>
            <div className='max-w-full mb-4 '>
              <LettersAnimation key={content.merchant[0].header[0].text} className='text-3xl md:text-4xl lg:text-5xl font-bold text-left text-tangle-cyan-process' text={`${content.merchant[0].header[0].text}`} tag='h1' />
              <p className='text-justify mt-4'>{content.merchant[0].description}</p>
            </div>
            <form ref={form} onSubmit={(e) => handleSubmit(onSubmit(e))} className='grid grid-cols-1 gap-y-3 '>
              <div className=''>
                <input
                  type='text'
                  placeholder={content.merchant[0].form.body[0].text}
                  value={formData.name}
                  onChange={(e) => updateFormData(e, 'name')}
                  className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                  required
                />
              </div>
              <div className=''>
                <input
                  type='email'
                  placeholder={content.merchant[0].form.body[1].text}
                  value={formData.emailAddress}
                  onChange={(e) => updateFormData(e, 'emailAddress')}
                  className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                  required
                />
              </div>
              <div className=''>
                <input
                  type='tel'
                  placeholder={content.merchant[0].form.body[2].text}
                  value={formData.phoneNumber}
                  onChange={(e) => updateFormData(e, 'phoneNumber')}
                  className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                //required
                />
              </div>
              <div className=''>
                <textarea
                  rows={3}
                  placeholder={content.merchant[0].form.body[3].text}
                  value={formData.feedback}
                  onChange={(e) => updateFormData(e, 'feedback')}
                  className='form-control w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                />
              </div>
              {!formDone
                ? (
                  <motion.button className='bg-[#0086D3] rounded-full py-3 px-5 h-12'>
                    {/* <motion.button className='bg-tangle-cyan-process rounded-lg w-full py-1'> */}
                    {content.merchant[0].form.body[4].text}
                  </motion.button>)
                : ('')}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Merchant
