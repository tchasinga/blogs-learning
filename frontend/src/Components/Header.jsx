import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='text-xl font-normal px-2 py-1 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            Learning
        </Link>
    </Navbar>
  )
}
