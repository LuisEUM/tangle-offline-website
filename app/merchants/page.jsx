'use client'
// import { usePathname, useRouter } from 'next/navigation'
// import { useContext, useEffect } from 'react'
// import { TaskContext } from '../context/languageContext'

export default function Merchants () {
  // const { textData } = useContext(TaskContext)
  // const pathname = usePathname()
  // const router = useRouter()

  // useEffect(() => {
  //   const finalText = getText(pathname, textData)
  //   console.log(finalText)
  // }, [])

  return (
    <>
      <div>Become memchart</div>
      {/* <div>{pathname}</div> */}

      {/* <button type='button' onClick={() => router.push('/dashboard')}>
        Dashboard
      </button> */}
    </>
  )
}

// function getText (pathname, textData) {
//   switch (pathname) {
//     case '/en':
//       return textData.home.en
//     case '/es':
//       return textData.home.es
//     case '/nl':
//       return textData.home.nl
//     default:
//       return textData.home.en
//   }
// }
