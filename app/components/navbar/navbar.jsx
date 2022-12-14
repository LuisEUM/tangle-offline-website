import Link from 'next/link'

export default function navbar () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/merchants' className='text-red-900'>Merchants</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
