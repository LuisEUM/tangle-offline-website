import { Ellipse } from '../ui/svg/elipse'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'

import { useContext, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export default function SectionFour({ text }) {

  const { handleSubmit } = useForm()
  const [formData, setFormData] = useState({
    email_id: ''
  })
  const onSubmit = (event) => {
    // alert();
    sendEmail(event)
  }
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
    // setFormDone(true)
    console.log(formData)
    if (formData.email_id) {
      axios.post(
        'https://api.sendinblue.com/v3/contacts',
        { listIds: [2], email: formData.email_id },
        { headers: { 'api-key': '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', 'Content-Type': 'application/json' } }
      ).then((response) => {
        console.log('response', response.data)
        toast(text.email_subscribe);
      })
        .catch((error) => {
          console.log('error', error.response)
        })
      // console.log(response.data)
      // if (response.data.id) {
      //   toast(text.email_subscribe);
      // } else {

      // }
    }
    // if (formData.email_id) {
    //   emailjs
    //     .send(
    //       'service_g8pfoei',
    //       'template_9qrqkza',
    //       formData,
    //       'howejlV7p3kue6F_D'
    //     )
    //     .then(
    //       (result) => {
    //         toast(text.email_subscribe);
    //         console.log(result.text)
    //       },
    //       (error) => {
    //         console.log(error.text)
    //       }
    //     )
    // }
    setFormData({
      email_id: ''
    })
  }

  return (
    <div className='px-2 md:px-14 lg:px-32 w-full'>
      <div className='flex flex-col justify-center content-center  align-middle relative h-[500px]'>
        <section className='ml-16 md:ml-20  lg:ml-24'>
          <div className='max-w-full pt-2 mt-10'>
            <WordsAnimation key={text.header} className='text-base sm:text-lg md:text-xl lg:text-2xl font-main_bold' text={text.newsletterHeader} tag='h4' />
          </div>
          <form className='flex align-middle self-center content-center justify-center lg:w-1/2 mt-5' onSubmit={(e) => handleSubmit(onSubmit(e))}>
            <input
              className=' flex w-full rounded-full border border-solid border-zinc-400  rounded-r-none flex-row items-center  py-3 px-6  email-input text-xl text-gray-700'
              placeholder='Email Address'
              type='email'
              value={formData.emailAddress}
              onChange={(e) => updateFormData(e, 'email_id')}
              id='email'
              name='email'
            />

            <button
              className='rounded-full flex row items-center justify-center border-none font-bold py-3 px-8  md:px-20 rounded-l-none bg-tangle-green-blue-crayola hover:bg-tangle-cyan-process cursor-pointer btn text-xl text-white'
              type='submit'
            >
              {text.button || 'Send'}
            </button>
            <ToastContainer />
          </form>
        </section>
        <div className='flex justify-center content-center  align-middle gap-0 md:gap-4 lg:gap-6'>
          <div className=' flex h-[63px] ml-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start mt-10' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
            <Ellipse icon='sad' className='h-16 p-12 my-5 max-w-[30px] ' color='rgba(0,173,228,0.8)' />
          </div>
          <div className='flex flex-col mt-10 align-middle content-top justify-top pr-10 py-5'>
            <div className='max-w-full pt-2'>
              <WordsAnimation key={text.header} className='text-base sm:text-lg md:text-xl lg:text-2xl font-main_bold' text={text.header} tag='h4' />
            </div>
            <div className='max-w-full md:w-full lg:w-4/5 pr-2 pt-2'>
              <WordsAnimation key={text.description} className='text-base sm:text-lg md:text-xl lg:text-2xl font-main_light ' text={text.description} tag='p' />
            </div>
          </div>
        </div>
        <div className='flex absolute -z-30 left-5 top-0'>
          <VerticalLine color='rgba(0,173,228,0.8)' width={42} heigth={500} />
        </div>
      </div>
    </div>
  )
}
