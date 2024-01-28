import { Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center gap-1 dark:text-white'>
            <span className='text-xl font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            <p>Learning</p>
        </Link>
        <form>
            <TextInput className='w-96' type='text' rightIcon={FiSearch}  placeholder='Search' />
        </form>
    </Navbar>
  )
}
