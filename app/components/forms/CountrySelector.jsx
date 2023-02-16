'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactFlagsSelect from 'react-flags-select'

export default function CountrySelector ({ className, text, navbar }) {
  const [emailForm, setEmailForm] = useState(false)
  const [formSubmit, setFormSubmit] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [stepOne, setStepOne] = useState(false)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)

  const { control } = useForm()
  const [country, setCountry] = useState('')

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

  const handleSteps = () => {
    if (!stepThree && stepTwo && stepOne) setStepThree(true)
    if (!stepTwo && stepOne) setStepTwo(true)
    if (!stepOne) setStepOne(true)
  }

  return (
    <>
      <div className={`flex justify-center rounded-lg  ${className || 'w-3/4 md:w-3/5 lg:w-2/5'} self-center`}>
        <Controller
          name='country'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ReactFlagsSelect
              className={`bg-white h-11 text-black rounded-lg border border-solid border-zinc-400 my-2 ${navbar && 'mobile-navbar'}`}
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
      {emailForm && !navbar && (
        <form onSubmit={handleSubmit} className='mt-12 flex align-middle self-center content-center justify-center lg:w-7/12 '>
          <input
            className={`flex w-3/5 lg:w-4/5 flex-row items-center gap-2 rounded-l-3xl py-3 px-3 lg:px-32  ${submitted ? 'email-input-after hidden' : 'email-input font-bold text-xl text-gray-700 border-none gap-2 '}`}
            placeholder={text.placeholder}
            type='email'
            id='email'
            name='email'
            onChange={handleEmailInput}
          />

          <button
            className={`flex w-2/5 lg:w-1/5 row items-center justify-center border-none font-bold py-3 px-3 lg:px-36 bg-tangle-green-blue-crayola  hover:text-white hover:bg-tangle-cyan-process cursor-pointer ${submitted ? 'btn-submitted self-center rounded-full' : 'btn text-xl text-white flex rounded-r-3xl'}`}
            type='submit'
            onClick={submittedForm}
          >
            {submitted ? `✓ ${text.submited}` : text.button}
          </button>
        </form>
      )}

      {emailForm && stepOne && (
        <form onSubmit={handleSubmit} className='flex align-middle self-center content-center justify-center lg:w-7/12 '>
          <input
            className={`my-4 flex w-full rounded-lg border border-solid border-zinc-400  flex-row items-center  py-3 px-3  ${submitted ? 'email-input-after hidden' : 'email-input text-xl text-gray-700'}`}
            placeholder={text.placeholder}
            type='email'
            id='email'
            name='email'
            onChange={handleEmailInput}
          />

        </form>
      )}


      {navbar &&
        <button
          className={`mt-2 mb-8 disabled:bg-slate-400 rounded-full flex w-full row items-center justify-center border-none font-bold py-3 px-3 lg:px-36 bg-tangle-green-blue-crayola  hover:text-white hover:bg-tangle-cyan-process cursor-pointer ${submitted ? 'btn-submitted self-center' : 'btn text-xl text-white flex'}`}
          type='submit'
          disabled={!emailForm}
          onClick={handleSteps}
        >
          {getText(stepOne, stepTwo, text)}
        </button>}
    </>
  )
}

function getText (stepOne, stepTwo, text) {
  if (!stepOne) {
    return 'Next'
  }
  if (!stepTwo && stepOne) {
    return text.button
  }
  if (stepTwo && stepOne) {
    return text.submited
  }
}
