import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link , useLocation } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center gap-1 dark:text-white'>
            <span className='text-xl font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            <p>Learning</p>
        </Link>
        <form>
            <TextInput className='w-96 hidden lg:inline' type='text' rightIcon={FiSearch}  placeholder='Search....' />
        </form>
        <Button className='lg:hidden' variant='primary' color='gray' size='sm' pill rounded><FiSearch/></Button>
        <div className='flex items-center gap-2 md:order-2'>
           <Button className='w-12 h-10 hidden sm:inline'  variant='primary' color='gray' size='sm' pill rounded><FaMoon /></Button>
           <Link to='/sign-in'>
            <Button className='  sm:inli' variant='primary' color='gray'  rounded>Sign In</Button>
           </Link>
           <Navbar.Toggle className='sm:hidden' />
          </div>
           <Navbar.Collapse>
               <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>Home</Link>
              </Navbar.Link>

              <Navbar.Link active={path === "/dashboard"} as={'div'}>
              <Link to='/dashboard'>Dashboard</Link>
              </Navbar.Link>

              <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>About</Link>
              </Navbar.Link>

              <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>Projects</Link>
              </Navbar.Link>
             
           </Navbar.Collapse>
    </Navbar>
  )
}
 