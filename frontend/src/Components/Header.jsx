import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { Link , useLocation } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { FaMoon , FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import {changeTheme} from '../redux/theme/themeSlice.js'
import { signOutUserStart,
    signOutUserSuccess,
    signOutUserFailure,
  } from '../redux/user/userSlice.js';

export default function Header() {
  const dispatch = useDispatch()
  const path = useLocation().pathname;
  const currentUser = useSelector((state) => state.user?.user?.currentUser);
  const {theme} = useSelector((state) => state.theme || state.user.theme);  

  // New code is added now... of singout the user account
  const handlerPostUserLogout = async () =>{
    try {
      dispatch(signOutUserStart());
      const res = await fetch(`http://localhost:2000/api/user/signout`, {
        method: 'POST',
      })
      const data = await res.json();
      console.log(data);
      if(data.error){
        dispatch(signOutUserFailure(data.error));
      }
      else{
        dispatch(signOutUserSuccess());
      }
    } catch (error) {
      console.log(error);
      dispatch(signOutUserFailure(error.message));
    }
  }


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
           <Button className='w-12 h-10 hidden sm:inline'  onClick={() => dispatch(changeTheme())} variant='primary' color='gray' size='sm' outline pill rounded>
                {theme === 'light' ? <FaSun /> : <FaMoon />}    
           </Button>
           {
                currentUser ? (
                 <Dropdown className='' arrowIcon={false} inline label={
                  <Avatar className='w-10 h-10' img={currentUser?.user?.profilePhoto} />
                 }>
                    <Dropdown.Header>
                    <p className='text-sm'>Hello, {currentUser?.user?.username}</p>
                    <p className='truncate'>{currentUser?.user?.email}</p>
                    </Dropdown.Header>

                      <Dropdown.Item>
                          <Link to='/dashboard?tab=profile'>Dashboard</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                          <Link to='/projects'>Projects</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                          <Link to='/profile'>Profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handlerPostUserLogout}>
                          <Link to='/singout'>Sing Out</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                          <Link to='/about'>About</Link>
                      </Dropdown.Item> 
                      
                 </Dropdown>
                ) : (
                  <Link to='/sign-in'>
                      <Button variant='primary' color='gray' size='sm' outline pill rounded>Sing In</Button>
                  </Link>
                )
           }
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
 