import Navbar from './components/navbar/navbar.jsx'
import Head from './head'

import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <Head />
      <body className='bg-tangle-rich-black-FOGBRA-29 text-white font-body container'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
