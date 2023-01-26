import { useContext } from 'react'
import { LanguageContext } from '../../context/languageContext'

export default function Footer () {
  const { text } = useContext(LanguageContext)

  return (
    <footer className='flex flex-col text-sm md:text-base content-around align-middle text-center pb-16 max-w-full justify-around'>
      <div>
        <p>
          {text.footer[0].webside} | {text.footer[0].rights} | &nbsp;
          <a href={text.footer[0].policy_pathname}>
            {text.footer[0].policy} | &nbsp;
          </a>
          <a href={`mailto:${text.footer[0].email}`}>
            {text.footer[0].email}
          </a>
        </p>
      </div>
    </footer>
  )
}
