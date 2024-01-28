import { Link } from "react-router-dom";
import {  Label, TextInput , } from 'flowbite-react'

export default function SingUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* Adding first div for left side */}
        <div className="">
        <Link to='/' className=' py-4 font-semibold flex items-center gap-1 dark:text-white text-5xl'>
            <span className='font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            <p>Learning</p>
        </Link>
          <div className="text-sm text-dark-900 font-normal">
          <p>It is important to automate, collect, manage, calculate, and</p>
          <p>analyze the processing of data and information accurately.</p>
          </div>
        </div>

        {/* Adding second div  right side */}
        <div className="">
             <form>
              
              <div className="">
                <Label value="Set your username"/>
                <TextInput className=' ' type='text' placeholder='Username'  id="username"/>
              </div>

              <div className="">
                <Label value="Set your email"/>
                <TextInput className=' ' type='email' placeholder='Username'  id="email"/>
              </div>

              <div className="">
                <Label value="Set your password"/>
                <TextInput className=' ' type='password' placeholder='Username'  id="password"/>
              </div>

             </form>
        </div>
      </div>
    </div>
  )
}
