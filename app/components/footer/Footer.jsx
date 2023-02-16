'use client'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../../context/languageContext'

export default function Footer () {
  const { text } = useContext(LanguageContext)

  return (
    <footer className='flex flex-col text-sm md:text-base content-around align-middle text-center pb-16 max-w-full justify-around'>
      <div>
        <p>
          {text.footer[0].webside} | {text.footer[0].rights} | &nbsp;
          <Link href={text.footer[0].policy_pathname}>
            {text.footer[0].policy} | &nbsp;
          </Link>
          <Link href={`mailto:${text.footer[0].email}`}>
            {text.footer[0].email}
          </Link>
        </p>
      </div>
    </footer>
  )
}
