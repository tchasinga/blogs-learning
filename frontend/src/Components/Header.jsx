import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className=''>
            <span className='text-2xl font-bold'>Blog&apos;s</span>
            Learnign
        </Link>
    </Navbar>
  )
}
