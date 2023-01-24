'use client'
import { useCallback, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactFlagsSelect from 'react-flags-select'
import './SectionFifteen.css'
import Waves from '../waves/Waves'

export default function SectionFifteen () {
  const { control } = useForm()
  const [emailForm, setEmailForm] = useState(false)
  const [formSubmit, setFormSubmit] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [country, setCountry] = useState('')
  const [cityName, setCityName] = useState('Amsterdam')

  const city = ['Amsterdam', 'Berlin', 'Barcelona', 'New York']

  /* Shuffle city names */
  const shuffleCityNames = useCallback(() => {
    const index = Math.floor(Math.random() * city.length)
    setCityName(city[index])
  }, [])

  useEffect(() => {
    const changeInterval = setInterval(shuffleCityNames, 5000)
    return () => clearInterval(changeInterval)
  }, [shuffleCityNames])

  /* submit form */
  const handleEmailInput = (e) => {
    setFormSubmit(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    /* send form data to which service? */
  }

  /* button submitted */
  const submittedForm = () => {
    setSubmitted(!submitted)
    setTimeout(() => {
      setSubmitted(!submitted)
    }, 500)
  }

  return (
    <div className='px-2 md:px-14 lg:px-32 w-full relative'>
      <div className=' flex flex-col align-middle content-center justify-center pb-64 pt-24 md:pb-72 md:pt-32 lg:pb-80 lg:pt-36'>
        <p className='header-invite  text-black  text-5xl md:text-7xl lg:text-8xl text-center font-bold  '>
          Do you live in <br /> <span className='invite-place text-6xl md:text-8xl lg:text-9xl font-bold '>{cityName}</span> <span className='text-6xl md:text-8xl lg:text-9xl'>?</span>
        </p>
        <p className='invite-text text-lg md:text-2xl mt-12 mb-6 text-center font-semibold'>We will invite you to our next exclusive event</p>

        <div className='flex justify-center rounded-lg  w-full  md:w-3/5 lg:w-2/5 self-center'>
          <Controller
            name='country'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <ReactFlagsSelect
                className='bg-white h-11 text-black rounded-lg border border-solid border-zinc-400'
                selected={country}
                onClick={() => setEmailForm(!emailForm)}
                searchable
                onSelect={(code, emailForm) => {
                  onChange((emailForm) => {
                    setEmailForm(!emailForm)
                  })
                  setCountry(code)
                }}
                value={value}
              />
            )}
          />
        </div>
        {emailForm && (
          <form onSubmit={handleSubmit} className='mt-12 flex align-middle content-center justify-center '>
            <input
              className={`flex flex-row items-center gap-2 rounded-l-3xl py-3 px-32  ${submitted ? 'email-input-after hidden' : 'email-input font-bold text-xl text-gray-700 border-none gap-2 '}`}
              placeholder='Your email'
              type='email'
              id='email'
              name='email'
              onChange={handleEmailInput}
            />

            <button
              className={`flex row items-center justify-center border-none font-bold py-3 px-36 bg-tangle-green-blue-crayola  hover:text-white hover:bg-tangle-cyan-process cursor-pointer ${submitted ? 'btn-submitted self-center rounded-full' : 'btn text-xl text-white flex rounded-r-3xl'}`}
              type='submit'
              onClick={submittedForm}
            >
              {submitted ? '✓ Submited' : 'Submit!'}
            </button>
          </form>
        )}
        <Waves />
        {/* <Footer /> */}
      </div>
    </div>
  )
}
