import Head from './head'
import '../styles/globals.css'
import { LanguageProvider } from './context/languageContext'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

export default function RootLayout ({ children }) {
  return (
    <html>
      <Head />
      <body className='bg-tangle-rich-black-FOGBRA-29 text-white font-body grid grid-cols-1 '>
        <LanguageProvider>
          <section className='max-w-full z-50'>
            <NavBar />
          </section>
          {children}
          <section className='max-w-full'>
            <Footer />
          </section>
        </LanguageProvider>
      </body>
    </html>
  )
}
