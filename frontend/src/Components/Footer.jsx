import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function FooterCom() {
  return (
    <div>
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                     <div className=''>
                     <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center gap-1 dark:text-white'>
                           <span className='text-xl font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
                        <p>Learning</p>
                    </Link>
                     </div>
                     <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6'>
                       <div className=''>
                       <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                             <Footer.Link>200 React Projects</Footer.Link>
                        </Footer.LinkGroup>

                        <Footer.LinkGroup col>
                             <Footer.Link>React Developer</Footer.Link>
                        </Footer.LinkGroup>
                       </div>

                       <div className=''>
                       <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                             <Footer.Link>200 React Projects</Footer.Link>
                        </Footer.LinkGroup>

                        <Footer.LinkGroup col>
                             <Footer.Link>React Developer</Footer.Link>
                        </Footer.LinkGroup>
                       </div>

                       <div className=''>
                       <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                             <Footer.Link>200 React Projects</Footer.Link>
                        </Footer.LinkGroup>

                        <Footer.LinkGroup col>
                             <Footer.Link>React Developer</Footer.Link>
                        </Footer.LinkGroup>
                       </div>

                       <div className=''>
                       <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                             <Footer.Link>200 React Projects</Footer.Link>
                        </Footer.LinkGroup>

                        <Footer.LinkGroup col>
                             <Footer.Link>React Developer</Footer.Link>
                        </Footer.LinkGroup>
                       </div>
                     </div>
                </div>
                <Footer.Divider />
                <Footer.Copyright href='#'  by='Tchasinga balolebwami blog&apos;'  year={new Date().getFullYear()}/>
            </div>
        </Footer>
    </div>
  )
}