import { Link } from "react-router-dom";
import {  Button, Label, TextInput , } from 'flowbite-react'
import { useState } from "react";

export default function SingUp() {
  const [formData, setFormData] = useState({})
  const handlerSingupChanges = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 justify-center gap-20 items-center  max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* Adding first div for left side */}
        <div className="">
        <Link to='/' className=' py-4 font-semibold flex items-center gap-1 dark:text-white text-5xl'>
            <span className='font-normal px-2 py-1 rounded-xl bg-gradient-to-r font-bold from-indigo-500 via-purple-100 to-pink-100'>Blog&apos;s</span>
            <p>Learning</p>
        </Link>
          <div className="text-sm text-dark-900 font-normal">
          <p>It is important to automate, collect , manage...</p>
          <p>analyze the processing of data  and information accurately.</p>
          </div>
        </div>

        {/* Adding second div  right side */}
        <div className="">
             <form className="flex flex-col gap-3">
              
              <div className="">
                <Label value="Set your username"/>
                <TextInput className='w-96' type='text' placeholder='Username'  id="username"  onChange={handlerSingupChanges}/>
              </div>

              <div className="">
                <Label value="Set your email"/>
                <TextInput className=' ' type='email' placeholder='Username'  id="email" onChange={handlerSingupChanges}/>
              </div>

              <div className="">
                <Label value="Set your password"/>
                <TextInput className=' ' type='password' placeholder='Username'  id="password" onChange={handlerSingupChanges}/>
              </div>
              <Button className='w-1/2 h-10 hidden sm:inline'  type="submit" variant='primary' color='gray' size='sm' outline pill rounded>Sing Up</Button>
             </form>
             <div>
                <p className="text-xs my-3 font-medium">Already have an account? <Link to='/sign-in' className="text-blue-5 00">Sign In</Link></p>
             </div>
        </div>
      </div>
    </div>
  )
}
