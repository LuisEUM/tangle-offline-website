'use client'
import { useContext, useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
// import Lottie from 'react-lottie'
// import TickAnimation from '../resources/lotties/tickAnimation.json'
import { LanguageContext } from '../context/languageContext'
import { motion } from 'framer-motion'
import LettersAnimation from '../components/ui/animation/lettersAnimation'
import WordsAnimation from '../components/ui/animation/wordsAnimation'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'

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
  }, [formDone])

  return (
    <div className='max-w-full'>
      <div className='grid grid-cols-1 mb-8'>
        <div className='z-50'>
          <NavBar />
        </div>
        <motion.div className='max-w-full py-6 align-middle justify-center content-center mt-20'>
          <LettersAnimation className='text-3xl md:text-4xl lg:text-5xl font-bold text-center' text={`${content.merchant[0].header[0].text}`} tag='h1' />
        </motion.div>
        <div className='px-2 md:px-14 lg:px-32 w-full flex flex-col align-top justify-center content-center max-w-6xl m-auto'>
          <div className='h-full grid grid-cols-1 gap-y-12 gap-x-12 lg:grid-cols-2  align-center justify-center content-center bg-tangle-oxford-blue p-8 md:p-10 rounded-2xl'>
            <div className='w-full '>
              <div className='mx-auto rounded-2xl  h-[165px] md:h-[325px] lg:h-[350px] w-full bg-no-repeat bg-top lg:bg-center bg-cover bg-img-merchant' />
              <p className='text-center mt-4'>{content.merchant[0].description}</p>
            </div>
            <div className='p-4 bg-white rounded-2xl'>
              <motion.div className='max-w-full mb-4 '>
                <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-body text-tangle-rich-black-FOGBRA-29' text={content.merchant[0].form.header} tag='p' />
              </motion.div>
              <form ref={form} onSubmit={(e) => handleSubmit(onSubmit(e))} className='grid grid-cols-1 gap-y-3 '>
                <div className=''>
                  <input
                    type='text'
                    placeholder={content.merchant[0].form.body[0].text}
                    value={formData.storeName}
                    onChange={(e) => updateFormData(e, 'storeName')}
                    className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                    required
                  />
                </div>
                <div className=''>
                  <input
                    type='text'
                    placeholder={content.merchant[0].form.body[1].text}
                    value={formData.storeAddress}
                    onChange={(e) => updateFormData(e, 'storeAddress')}
                    className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                    required
                  />
                </div>
                <div className=''>
                  <input
                    type='text'
                    placeholder={content.merchant[0].form.body[2].text}
                    value={formData.businessType}
                    onChange={(e) => updateFormData(e, 'businessType')}
                    className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                    required
                  />
                </div>
                <div className=''>
                  <input
                    type='url'
                    placeholder={content.merchant[0].form.body[3].text}
                    value={formData.websiteLink}
                    onChange={(e) => updateFormData(e, 'websiteLink')}
                    className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                    required
                  />
                </div>
                <div className='grid grid-cols-2 gap-x-4 gap-y-3 mt-2'>
                  <div className=''>
                    <input
                      type='text'
                      placeholder={content.merchant[0].form.body[5].text}
                      value={formData.name}
                      onChange={(e) => updateFormData(e, 'name')}
                      className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                      required
                    />
                  </div>
                  <div className=''>
                    <input
                      type='text'
                      placeholder={content.merchant[0].form.body[6].text}
                      value={formData.lastName}
                      onChange={(e) => updateFormData(e, 'lastName')}
                      className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                      required
                    />
                  </div>
                </div>
                <div className=''>
                  <input
                    type='email'
                    placeholder={content.merchant[0].form.body[7].text}
                    value={formData.emailAddress}
                    onChange={(e) => updateFormData(e, 'emailAddress')}
                    className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                    required
                  />
                </div>
                <div className=''>
                  <input
                    type='tel'
                    placeholder={content.merchant[0].form.body[8].text}
                    value={formData.phoneNumber}
                    onChange={(e) => updateFormData(e, 'phoneNumber')}
                    className='form-input w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                    required
                  />
                </div>
                <div className=''>
                  <textarea
                    rows={3}
                    placeholder={content.merchant[0].form.body[9].text}
                    value={formData.feedback}
                    onChange={(e) => updateFormData(e, 'feedback')}
                    className='form-control w-full rounded-lg bg-gray-200 text-black border-none h-45 placeholder:text-slate-600 px-3 py-1'
                  />
                </div>
                {!formDone ? (
                  <motion.button className='bg-[#0086D3] rounded-lg w-full py-1'>
                  {content.merchant[0].form.body[10].text}
                </motion.button>)
                  : ('')}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Merchant
